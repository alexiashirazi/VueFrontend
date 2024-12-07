<template>
    <div class="leaderboard-container">
      <h1>Leaderboard</h1>
      <div class="card">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Nickname</th>
              <th>Score</th>
              <th>Today's Task Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.userId" :class="{ 'current-user': user.isCurrentUser }">
              <td>{{ user.rank }}</td>
              <td>{{ user.nickname }}</td>
              <td>{{ user.score }}</td>
              <td>
                <span :class="getStatusClass(user.status)">{{ getStatusLabel(user.status) }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  
  // Reactive state to store leaderboard data
  const users = ref([]);
  
  // Generate leaderboard and fetch updated data
  async function syncLeaderboard() {
    try {
      // Call the backend to generate and save the leaderboard
      const response = await axios.post("http://localhost:8080/api/leaderboard");
      // Update the users array with the new leaderboard data
      users.value = response.data.map((user, index) => ({
        rank: index + 1, // Add rank based on order
        userId: user.userId,
        nickname: user.nickname,
        score: user.score,
        status: user.status,
        isCurrentUser: user.isCurrentUser,
      }));
    } catch (error) {
      console.error("Failed to sync leaderboard:", error);
    }
  }
  
  // Automatically sync leaderboard when the component is mounted
  onMounted(() => {
    syncLeaderboard();
  });
  
  // Helper functions to map status values to labels and styles
  function getStatusLabel(status) {
    switch (status) {
      case 1:
        return "Pending";
      case 2:
        return "Validating";
      case 3:
        return "Completed";
      default:
        return "Unknown";
    }
  }
  
  function getStatusClass(status) {
    switch (status) {
      case 1:
        return "status-pending";
      case 2:
        return "status-validating";
      case 3:
        return "status-completed";
      default:
        return "status-unknown";
    }
  }
  </script>
  
  <style scoped>
  /* Leaderboard Container */
  .leaderboard-container {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background: linear-gradient(90deg, #ff5e99, #ffde59); /* Gradient background */
    border-radius: 12px;
    text-align: center;
    color: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  /* Table Styling */
  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 12px;
    overflow: hidden;
  }
  
  thead {
    background: #ff5e99;
    color: white;
  }
  
  th, td {
    padding: 15px;
    text-align: center;
    font-size: 14px;
  }
  
  tbody tr:nth-child(even) {
    background: #f9f9f9;
  }
  
  tbody tr:nth-child(odd) {
    background: #fff;
  }
  
  tbody tr:hover {
    background: #ffe6c1;
  }
  
  .current-user {
    font-weight: bold;
    color: #ff5e99;
  }
  
  /* Status Labels */
  .status-pending {
    color: #ff9900; /* Orange */
    font-weight: bold;
  }
  
  .status-validating {
    color: #007bff; /* Blue */
    font-weight: bold;
  }
  
  .status-completed {
    color: #28a745; /* Green */
    font-weight: bold;
  }
  
  .status-unknown {
    color: #dc3545; /* Red */
    font-weight: bold;
  }
  </style>
