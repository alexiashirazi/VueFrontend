<template>
  <div class="make-group-section">
    <h1 class="section-title">Create a New Group</h1>
    <form @submit.prevent="handleSave">
      <!-- Group Name Field -->
      <div class="form-group">
        <label for="groupName">Group Name</label>
        <input
            type="text"
            id="groupName"
            v-model="groupName"
            placeholder="Enter group name"
            required
        />
      </div>

      <!-- Add Friends Option -->
      <div class="form-group">
        <label for="friends">Add Friends</label>
        <select id="friends" v-model="selectedFriend" @change="addFriend">
          <option disabled value="">Select a friend</option>
          <option v-for="friend in friends" :key="friend.id" :value="friend.name">
            {{ friend.name }}
          </option>
        </select>
      </div>

      <!-- Display Added Friends -->
      <div class="added-friends">
        <h3>Friends Added:</h3>
        <ul>
          <li v-for="friend in addedFriends" :key="friend">
            {{ friend }}
            <button type="button" class="remove-friend-button" @click="removeFriend(friend)">
              ✕
            </button>
          </li>
        </ul>
      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <button type="button" class="cancel-button" @click="cancel">Cancel</button>
        <button type="submit" class="save-button">Save</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useGroupStore } from "@/store/groups";

const groupName = ref("");
const selectedFriend = ref("");
const addedFriends = ref([]);
const router = useRouter();
const groupStore = useGroupStore();

// Mock friends list
const friends = ref([
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
  { id: 4, name: "Bob Brown" },
]);

// Add a friend to the list
function addFriend() {
  if (selectedFriend.value && !addedFriends.value.includes(selectedFriend.value)) {
    addedFriends.value.push(selectedFriend.value);
  }
  selectedFriend.value = ""; // Reset the dropdown
}

// Remove a friend from the list
function removeFriend(friend) {
  addedFriends.value = addedFriends.value.filter((f) => f !== friend);
}

// Handle Save
function handleSave() {
  const newGroup = {
    id: Date.now(), // Simulate a unique ID
    name: groupName.value,
    members: addedFriends.value,
  };

  // Add the group to the global store
  groupStore.addGroup(newGroup);

  // Navigate back to My Groups
  router.push("/mygroups");
}

// Cancel button action
function cancel() {
  router.push("/mygroups");
}
</script>


<style>
/* General Section Styling */
.make-group-section {
  background: linear-gradient(135deg, #afe2ab, #538838, rgba(0, 255, 175, 0.2), rgba(0, 255, 175, 0.1));
  background-size: 200% 200%;
  animation: gradientAnimation 5s ease infinite;
  padding: 60px 20px;
  text-align: center;
  font-family: "Arial", sans-serif;
  color: black;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.section-title {
font-size: 2.5rem;
font-weight: bold;
margin-bottom: 20px;
color: black; /* Updated to black */
}

/* Form Group */
.form-group {
margin: 20px auto;
text-align: left;
max-width: 400px;
}

label {
font-size: 1rem;
font-weight: bold;
color: black; /* Updated to black */
display: block;
margin-bottom: 10px;
}

input,
select {
width: 100%;
padding: 10px;
font-size: 1rem;
border: none;
border-radius: 6px;
outline: none;
background: white;
color: #538838; /* Dark green text for inputs */
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
transition: transform 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
select:focus {
transform: translateY(-2px);
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* Added Friends List */
.added-friends {
margin: 20px auto;
max-width: 400px;
text-align: left;
}

.added-friends h3 {
font-size: 1.2rem;
font-weight: bold;
color: black; /* Updated to black */
margin-bottom: 10px;
}

.added-friends ul {
list-style: none;
padding: 0;
}

.added-friends li {
display: flex;
justify-content: space-between;
align-items: center;
background: rgba(0, 255, 175, 0.1); /* Light green background for list items */
color: black; /* Updated to black */
margin-bottom: 10px;
padding: 10px;
border-radius: 6px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.remove-friend-button {
background: #538838; /* Dark green for the button */
color: white;
border: none;
border-radius: 50%;
width: 25px;
height: 25px;
cursor: pointer;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.remove-friend-button:hover {
transform: translateY(-2px);
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* Action Buttons */
.action-buttons {
display: flex;
justify-content: center;
gap: 20px;
margin-top: 30px;
}

.cancel-button,
.save-button {
padding: 10px 20px;
font-size: 1rem;
font-weight: bold;
border: none;
border-radius: 6px;
cursor: pointer;
transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cancel-button {
background: white;
color: #538838; /* Dark green text for cancel button */
border: 2px solid #538838; /* Dark green border */
}

.cancel-button:hover {
transform: translateY(-2px);
background: #538838; /* Dark green background on hover */
color: white;
}

.save-button {
background: #538838; /* Dark green background for save button */
color: white;
}

.save-button:hover {
transform: translateY(-2px);
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
</style>