<template>
    <div class="quiz-container">
      <h1>Quiz Interactiv</h1>
      <form @submit.prevent="submitQuiz">
        <div v-for="(question, index) in questions" :key="index" class="question">
          <p class="question-title">{{ question.text }}</p>
          <div class="options">
            <label
              v-for="option in question.options"
              :key="option.value"
              class="option"
            >
              <input
                type="radio"
                :name="'question-' + index"
                :value="option.value"
                v-model="answers[index]"
              />
              <span>{{ option.text }}</span>
            </label>
          </div>
        </div>
        <button type="submit" class="submit-btn">Trimite Răspunsurile</button>
      </form>
      <div v-if="showResults" class="results">
        <h2>Rezultatele Tale</h2>
        <p>Răspunsurile tale au fost salvate! Mulțumim pentru participare.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import axios from "axios"; // Importă Axios
  
  const questions = ref([
    {
      text: "Cum îți începi dimineața de obicei?",
      options: [
        { text: "Cu o ceașcă mare de cafea și ceva dulce.", value: 1 },
        { text: "Cu o alergare sau o scurtă sesiune de exerciții fizice.", value: 2 },
        { text: "Cu un pahar mare de apă și planificarea zilei.", value: 3 },
      ],
    },
    {
      text: "Ce faci de obicei în pauzele de la lucru?",
      options: [
        { text: "Mănânc ceva rapid, de obicei un snack nesănătos.", value: 1 },
        { text: "Fac o plimbare scurtă sau întindere.", value: 2 },
        { text: "Îmi verific telefonul sau stau pe rețele sociale.", value: 3 },
      ],
    },
    {
      text: "Ce activitate te atrage cel mai mult pentru relaxare?",
      options: [
        { text: "Să citesc sau să mă uit la un film.", value: 1 },
        { text: "Să încerc o activitate fizică nouă, cum ar fi înotul sau yoga.", value: 2 },
        { text: "Să petrec timp în natură sau să beau o băutură sănătoasă.", value: 3 },
      ],
    },
    {
      text: "Cum îți gestionezi stresul de obicei?",
      options: [
        { text: "Îmi aprind o țigară sau mănânc ceva care mă face să mă simt bine temporar.", value: 1 },
        { text: "Mă duc la sală sau fac mișcare intensă.", value: 2 },
        { text: "Încerc tehnici de mindfulness, cum ar fi respirația controlată.", value: 3 },
      ],
    },
    {
      text: "Ce ți-ar plăcea să adaugi în rutina ta zilnică?",
      options: [
        { text: "Să reduc obiceiurile nesănătoase, cum ar fi fumatul sau gustările frecvente.", value: 1 },
        { text: "Să fac mai mult sport și să am o viață activă.", value: 2 },
        { text: "Să fiu mai hidratat și să am un stil de viață echilibrat.", value: 3 },
      ],
    },
  ]);
  
  const answers = ref(Array(questions.value.length).fill(null));
  const showResults = ref(false);
  
  async function submitQuiz() {
    if (answers.value.includes(null)) {
      alert("Te rugăm să răspunzi la toate întrebările.");
      return;
    }
  
    // Creăm lista de răspunsuri
    const numericAnswers = answers.value;
  
    try {
      // Trimite răspunsurile la backend
      const response = await axios.post("http://localhost:8080/quiz", {
        answers: numericAnswers,
      });
  
      console.log("Răspuns trimis:", response.data);
      showResults.value = true;
    } catch (error) {
      console.error("Eroare la trimiterea răspunsurilor:", error);
    }
  }
  </script>
  
  <style scoped>
  /* Stiluri existente */
  .quiz-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 12px;
    background-color: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    color: #333;
  }
  
  h1 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .question {
    margin-bottom: 20px;
  }
  
  .question-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .options {
    display: flex;
    flex-direction: column;
  }
  
  .option {
    margin-bottom: 10px;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  input[type="radio"] {
    transform: scale(1.2);
    cursor: pointer;
  }
  
  .submit-btn {
    display: block;
    margin: 20px auto;
    padding: 12px 20px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
  
  .submit-btn:active {
    background-color: #003f7f;
    transform: translateY(0);
  }
  
  .results {
    text-align: center;
    margin-top: 30px;
  }
  
  .results h2 {
    font-size: 24px;
    color: #28a745;
  }
  
  .results p {
    font-size: 16px;
    color: #666;
  }
  </style>
  