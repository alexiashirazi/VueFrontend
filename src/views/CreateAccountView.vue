<template>
    <div class="register-container">
      <h1>Create Account</h1>
      <form @submit.prevent="handleRegister">
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
          <label for="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            v-model="firstName"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            v-model="lastName"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
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
        <button type="submit">Register</button>
      </form>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"; // Importă useRouter
import axios from "axios";

const nickname = ref("");
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const successMessage = ref("");
const errorMessage = ref("");

// Inițializează router-ul
const router = useRouter();

async function handleRegister() {
  try {
    const response = await axios.post("http://localhost:8080/api/users/register", {
      nickname: nickname.value,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    });

    if (response.data) {
      successMessage.value = "Account created successfully!";
      errorMessage.value = "";
      clearForm();
      // Navighează la pagina Quiz
      router.push("/quiz");
    } else {
      errorMessage.value = "Registration failed. Nickname might be taken.";
      successMessage.value = "";
    }
  } catch (error) {
    errorMessage.value = "An error occurred. Please try again later.";
    successMessage.value = "";
    console.error("Error:", error);
  }
}

  
  function clearForm() {
    nickname.value = "";
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
  }
  </script>
  
  <style scoped>
  /* Stiluri pentru container */
  body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5; /* Adaugă o culoare de fundal subtilă */
}

.register-container {
  max-width: 400px;
  width: 100%;
  margin: 0; /* Elimină margin pentru a folosi centrare completă */
  padding: 30px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Arial', sans-serif;
}
  
  /* Titlu */
  h1 {
    margin-bottom: 20px;
    font-size: 28px;
    color: #333;
    font-weight: 600;
  }
  
  /* Grupuri de form */
  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  /* Etichete */
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
    font-size: 14px;
  }
  
  /* Câmpuri de intrare */
  input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
    transition: border-color 0.3s, box-shadow 0.3s;
    background-color: #fff;
    outline: none;
  }
  
  input:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  
  input:hover {
    border-color: #555;
  }
  
  /* Buton */
  button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
  
  button:active {
    background-color: #003f7f;
    transform: translateY(0);
  }
  
  /* Mesaje de succes și eroare */
  .success-message,
  .error-message {
    margin-top: 20px;
    font-size: 14px;
    font-weight: bold;
  }
  
  .success-message {
    color: #28a745;
  }
  
  .error-message {
    color: #dc3545;
  }
  
  /* Efecte media queries pentru mobile */
  @media (max-width: 480px) {
    .register-container {
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    h1 {
      font-size: 24px;
    }
  
    input {
      font-size: 14px;
      padding: 10px;
    }
  
    button {
      padding: 10px;
      font-size: 14px;
    }
  }
  </style>
  