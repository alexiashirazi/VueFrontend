<template>
  <div class="prizes-section">
    <h1 class="section-title">My Prizes</h1>
    <p class="user-score">Your Score: {{ score }}</p>

    <!-- Prizes Container -->
    <div class="prizes-container">
      <div
          class="prize-card"
          v-for="prize in prizes"
          :key="prize.id"
          :class="{ unlocked: score >= prize.threshold }"
      >
        <div class="card-inner" @click="flipCard(prize)" :class="{ flipped: isFlipped(prize) }">
          <!-- Card Front -->
          <div class="card-front">
            <p class="threshold-text">Unlock at {{ prize.threshold }} points</p>
          </div>

          <!-- Card Back -->
          <div class="card-back" v-if="score >= prize.threshold">
            <img :src="prize.image" :alt="prize.name" class="prize-image" />
            <p class="prize-name">{{ prize.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Hardcoded score and prizes
const score = ref(250); // User's current score
const prizes = ref([
  { id: 1, name: "Prize 1", threshold: 100, image: "https://via.placeholder.com/150/FF5E99" },
  { id: 2, name: "Prize 2", threshold: 200, image: "https://via.placeholder.com/150/FFDE59" },
  { id: 3, name: "Prize 3", threshold: 300, image: "https://via.placeholder.com/150/FF5E99" },
  { id: 4, name: "Prize 4", threshold: 400, image: "https://via.placeholder.com/150/FFDE59" },
]);

const flippedCards = ref([]); // Track which cards are flipped

// Check if a card is flipped
function isFlipped(prize) {
  return flippedCards.value.includes(prize.id);
}

// Flip a card if the prize is unlocked
function flipCard(prize) {
  if (score.value >= prize.threshold && !isFlipped(prize)) {
    flippedCards.value.push(prize.id); // Add prize ID to flipped cards
  }
}
</script>

<style>
.prizes-section {
  padding: 40px 20px;
  text-align: center;
  background: linear-gradient(90deg, #afe2ab, rgba(0, 255, 175, 0.2));
  font-family: "Arial", sans-serif;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #538838; /* Dark green for the title */
  margin-bottom: 20px;
}

.user-score {
  font-size: 1.5rem;
  font-weight: bold;
  color: #538838; /* Dark green for score */
  margin-bottom: 30px;
}

/* Prizes Container */
.prizes-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

/* Prize Card */
.prize-card {
  width: 200px;
  height: 300px;
  perspective: 1000px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.prize-card:hover {
  transform: scale(1.05);
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.card-front {
  background: rgba(0, 255, 175, 0.1); /* Light green background for locked state */
  color: #538838; /* Dark green text */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-back {
  background: #afe2ab; /* Light green background for unlocked state */
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.card-back .prize-image {
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Add subtle shadow for better visual */
}

.card-back .prize-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #538838; /* Dark green for prize name */
}

.threshold-text {
  font-size: 1rem;
  font-weight: bold;
  color: #538838; /* Dark green for threshold text */
  text-align: center;
}

.prize-card.unlocked .card-front {
  background: rgba(0, 255, 175, 0.2); /* Slightly brighter green for unlocked state */
  color: #538838; /* Dark green text */
}

</style>