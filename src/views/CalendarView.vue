<template>
    <div class="calendar-container">
      <h2 class="calendar-title">Monthly Habit Tracker</h2>
      <h3 class="month">
        December
      </h3>
      <div class="calendar-grid">
        <!-- Header pentru zilele săptămânii -->
        <div v-for="(day, index) in daysOfWeek" :key="index" class="day-header">
          {{ day }}
        </div>
  
        <!-- Zilele lunii -->
        <div
          v-for="(date, index) in calendarDays"
          :key="index"
          class="day-cell"
          :class="date.status"
        >
          <span v-if="date.date" class="date-number">{{ date.date }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Zilele săptămânii
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  // Generarea lunii cu statusuri hardcoded
  const calendarDays = [
    // Zile goale înaintea lunii curente
    { date: null, status: "empty" },
    { date: null, status: "empty" },
    { date: null, status: "empty" },
    { date: null, status: "empty" },
    { date: null, status: "empty" },
    { date: null, status: "empty" },
  
    // Zilele lunii curente
   // Zilele lunii curente

  { date: 1, status: "done" },       // Verde
  { date: 2, status: "done" },       // Verde
  { date: 3, status: "done" },       // Verde
  { date: 4, status: "invalid" },    // Roșu
  { date: 5, status: "invalid" },    // Roșu
  { date: 6, status: "done" },       // Verde
  { date: 7, status: "done" },       // Verde
  { date: 8, status: "done" },       // Verde
  { date: 9, status: "not-entered" },    // Roșu
  { date: 10, status: "not-entered" },      // Verde
  { date: 11, status: "not-entered" },   // Roșu
  { date: 12, status: "not-entered" },   // Roșu
  { date: 13, status: "not-entered" },      // Verde
  { date: 14, status: "not-entered" },      // Verde
  { date: 15, status: "not-entered" },      // Verde
  { date: 16, status: "not-entered" },   // Roșu
  { date: 17, status: "not-entered" },   // Roșu
  { date: 18, status: "not-entered" },      // Verde
  { date: 19, status: "not-entered" },      // Verde
  { date: 20, status: "not-entered" },      // Verde
  { date: 21, status: "not-entered" },   // Roșu
  { date: 22, status: "not-entered" },      // Verde
  { date: 23, status: "not-entered" },      // Verde
  { date: 24, status: "not-entered" },      // Verde
  { date: 25, status: "not-entered" },   // Roșu
  { date: 26, status: "not-entered" },      // Verde
  { date: 27, status: "not-entered" },      // Verde
  { date: 28, status: "not-entered" },      // Verde
  { date: 29, status: "not-entered" },   // Roșu
  { date: 30, status: "not-entered" },      // Verde
  { date: 31, status: "not-entered" },   // Roșu,
  
    // Zile goale după luna curentă
    { date: null, status: "empty" },
  ];
  </script>
  
  <style scoped>
  /* Container pentru calendar */
  .calendar-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  /* Titlul calendarului */
  .calendar-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .month{
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  /* Grilă pentru zilele săptămânii și zilele lunii */
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
  }
  
  /* Header pentru zilele săptămânii */
  .day-header {
    font-weight: bold;
    text-transform: uppercase;
    color: #333;
  }
  
  /* Celulele calendarului */
  .day-cell {
    position: relative;
    width: 100%;
    padding-top: 100%; /* Pentru a face celulele pătrate */
    background-color: #f0f0f0;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .day-cell.empty {
    background-color: transparent;
  }
  
  .date-number {
    position: absolute;
    top: 5%;
    left: 5%;
    font-size: 0.9rem;
    font-weight: bold;
    color: #333;
  }
  
  /* Colorează celulele bazate pe progres */
  .day-cell.done {
    background-color: rgb(103, 168, 122);
    color: white;
  }
  
  .day-cell.in-progress {
    background-color: yellow;
    color: black;
  }
  
  .day-cell.not-entered {
    background-color: grey;
    color: white;
  }
  
  .day-cell.invalid {
    background-color: rgb(205, 120, 120);
    color: white;
  }
  </style>
  