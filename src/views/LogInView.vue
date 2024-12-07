<template>
    <div class="login-container">
      <h1>Log In</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="nickname">Nickname</label>
          <input
            type="text"
            id="nickname"
            v-model="nickname"
            placeholder="Enter your nickname"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  
      <!-- Link către pagina de înregistrare -->
      <div class="create-account">
        <p>Don't have an account?</p>
        <RouterLink to="/createAccount">Create Account</RouterLink>
      </div>
      
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import axios from "axios";
  
  const nickname = ref("");
  const password = ref("");
  const errorMessage = ref("");
  const router = useRouter();
  
  async function handleLogin() {
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", {
        nickname: nickname.value,
        password: password.value,
      });
  
      if (response.data===true) {
        console.log(response.data)
        console.log("Login successful");

        // Navighează la pagina de Home
        router.push("/");
      } else {
        // Afișează un mesaj de eroare
        errorMessage.value = "Invalid nickname or password.";
      }
    } catch (error) {
      // Gestionează erorile
      errorMessage.value = "An error occurred. Please try again later.";
      console.error("Error:", error);

    }
  }
  </script>
  
  <style scoped>
  /* Stiluri pentru formularul de logare */
  .login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 20px;
    font-size: 24px;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .create-account {
    margin-top: 20px;
  }
  
  .create-account p {
    margin: 0;
    font-size: 14px;
  }
  
  .create-account a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }
  
  .create-account a:hover {
    text-decoration: underline;
  }
  </style>
  