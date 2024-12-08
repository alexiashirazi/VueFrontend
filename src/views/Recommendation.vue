<template>
    <section class="recommendation-container">
      <h1>Recomandările Tale</h1>
      <p>Pe baza răspunsurilor tale la quiz, iată trei obiceiuri care te-ar putea ajuta:</p>
      <div class="habits-list">
        <div v-for="(habit, index) in habits" :key="index" class="habit-card">
          <h2>{{ habit.title }}</h2>
          <p>{{ habit.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  
  const habits = ref([]); // Holds the recommendations
  
  // Fetch habits from the backend
  async function fetchHabits() {
    try {
      // Example of data sent to the backend
      const requestData = {
        userId: "12345", // Replace with actual user ID or context if needed
        quizResults: ["a", "b", "c"], // Replace with actual quiz results
      };
  
      // Make a POST request to get recommendations
      const response = await axios.post("http://localhost:8080/quiz/ai", requestData);
  
      // Set habits with the response data
      habits.value = response.data; // Expecting an array of objects: { title, description }
    } catch (error) {
      console.error("Eroare la preluarea recomandărilor:", error);
    }
  }
  
  // Fetch habits on component mount
  onMounted(() => {
    fetchHabits();
  });
  </script>
  
  <style scoped>
  .recommendation-container {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    font-family: "Arial", sans-serif;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    animation: fadeInSection 1.5s ease-in-out;
  }
  
  @keyframes fadeInSection {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  h1 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #094e21;
  }
  
  .habits-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }
  
  .habit-card {
    background: linear-gradient(145deg, rgba(175, 226, 171, 0.2), rgba(83, 136, 56, 0.2));
    border-radius: 12px;
    padding: 20px;
    text-align: left;
    color: #333;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .habit-card h2 {
    font-size: 20px;
    color: #094e21;
    margin-bottom: 10px;
  }
  
  .habit-card p {
    font-size: 16px;
    color: #555;
  }
  </style>
  