<template>
    <div class="calendar-container">
      <h2 class="calendar-title">Monthly Habit Tracker</h2>
      <div class="month-navigation">
        <button class="nav-button" @click="prevMonth">❮</button>
        <h3 class="month">{{ currentMonthName }} {{ currentYear }}</h3>
        <button class="nav-button" @click="nextMonth">❯</button>
      </div>
      <div class="calendar-grid">
        <!-- Header pentru zilele săptămânii -->
        <div v-for="(day, index) in daysOfWeek" :key="index" class="day-header">
          {{ day }}
        </div>
  
        <!-- Zilele lunii -->
        <div
          v-for="(day, index) in calendarDays"
          :key="index"
          class="day-cell"
          :class="day.status"
          @mouseover="hoverDate = index"
          @mouseleave="hoverDate = null"
        >
          <span v-if="day.date" class="date-number">{{ day.date }}</span>
          <!-- Butoane ascunse -->
          <div v-if="hoverDate === index && day.date" class="buttons">
            <button @click="markAsInProgress(index)">⏳</button>
            <button @click="markAsDone(index)">✔️</button>
            <button @click="markAsInvalid(index)">❌</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  import dayjs from "dayjs";
  import axios from "axios";
  
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hoverDate = ref(null);
  
  const currentYear = ref(dayjs().year());
  const currentMonth = ref(dayjs().month()); // Zero-based (0 = January, 11 = December)
  
  const currentMonthName = computed(() =>
    dayjs().month(currentMonth.value).format("MMMM")
  );
  
  // Generăm zilele calendarului
  const calendarDays = computed(() => {
    const daysInMonth = dayjs()
      .year(currentYear.value)
      .month(currentMonth.value)
      .daysInMonth();
    const firstDayOfMonth = dayjs()
      .year(currentYear.value)
      .month(currentMonth.value)
      .date(1)
      .day();
  
    const emptyDays = (firstDayOfMonth + 6) % 7; // Ajustare pentru luni
    const days = Array(emptyDays)
      .fill({ date: null, status: "empty" })
      .concat(
        Array.from({ length: daysInMonth }, (_, index) => ({
          date: index + 1,
          status: "not-entered",
        }))
      );
    return days;
  });
  
  // Funcții pentru schimbarea statusului
  async function markAsInProgress(index) {
    if (calendarDays.value[index]?.date) {
      calendarDays.value[index].status = "in-progress";
      await syncWithBackend();
    }
  }
  
  async function markAsDone(index) {
    if (calendarDays.value[index]?.date) {
      calendarDays.value[index].status = "done";
      await syncWithBackend();
    }
  }
  
  async function markAsInvalid(index) {
    if (calendarDays.value[index]?.date) {
      calendarDays.value[index].status = "invalid";
      await syncWithBackend();
    }
  }
  
  // Sincronizare cu backend
  async function syncWithBackend() {
    const stateVector = calendarDays.value.map((day) => {
      if (day.status === "done") return 2;
      if (day.status === "in-progress") return 1;
      if (day.status === "invalid") return 0;
      return -1; // Zile goale
    });
  
    try {
      await axios.post("/api/leaderboard/sync", {
        year: currentYear.value,
        month: currentMonth.value + 1, // Backend-ul așteaptă 1-based (1 = January)
        stateVector,
      });
    } catch (error) {
      console.error("Sync failed:", error);
    }
  }
  
  function prevMonth() {
    if (currentMonth.value === 0) {
      currentMonth.value = 11;
      currentYear.value -= 1;
    } else {
      currentMonth.value -= 1;
    }
    syncWithBackend();
  }
  
  function nextMonth() {
    if (currentMonth.value === 11) {
      currentMonth.value = 0;
      currentYear.value += 1;
    } else {
      currentMonth.value += 1;
    }
    syncWithBackend();
  }
  </script>
  
  
  <style scoped>
  /* (Stilurile rămân aceleași ca mai sus) */
  .calendar-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .calendar-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .month-navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .month {
    font-size: 1.5rem;
    margin: 0;
  }
  
  .nav-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
    transition: color 0.3s;
  }
  
  .nav-button:hover {
    color: #007bff;
  }
  
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
  }
  
  .day-header {
    font-weight: bold;
    text-transform: uppercase;
    color: #333;
  }
  
  .day-cell {
    position: relative;
    width: 100%;
    padding-top: 100%;
    background-color: #f0f0f0;
    border-radius: 8px;
    overflow: hidden;
    transition: background-color 0.3s;
  }
  
  .day-cell:hover {
    background-color: #e0e0e0;
  }
  
  .date-number {
    position: absolute;
    top: 5%;
    left: 5%;
    font-size: 0.9rem;
    font-weight: bold;
    color: #333;
  }
  
  .buttons {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
  }
  
  .buttons button {
    padding: 4px 8px;
    font-size: 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    background-color: #007bff;
    transition: background-color 0.3s;
  }
  
  .buttons button:hover {
    background-color: #0056b3;
  }
  
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
  