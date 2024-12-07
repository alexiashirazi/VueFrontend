<script setup>
const plans = [
  {
    title: 'Monthly Flow',
    subtitle: 'Flexible & unlimited access to design services with a hyperfast turnaround time.',
    price: '£5,000/m',
    buttonText: 'Get Started',
    highlight: true, // To show "MOST POPULAR" badge
  },
  {
    title: 'Quarterly Stream',
    subtitle: 'Save £500 per month. Billed quarterly.',
    price: '£4,500/m',
    buttonText: 'Get Started',
  },
  {
    title: 'Pro-flow',
    subtitle: 'Double design requests with a hyperfast turnaround time.',
    price: '£8,000/m',
    buttonText: 'Get Started',
    highlight: '2x the requests', // Custom badge text
  },
  {
    title: 'Talk it through',
    subtitle: 'Need to talk through Hyperflow in detail? Schedule a call with us today.',
    buttonText: 'Book a Call',
  },
  {
    title: 'Roast your site',
    subtitle: 'Need some quick wins for improving your landing page, app, or website?',
    buttonText: 'Roast us',
  },
  {
    title: 'Refer a client',
    subtitle: 'Earn 5% monthly recurring commission for each referral.',
    buttonText: 'Join now',
  },
]
</script>

<template>
  <section class="blog-section">
    <h2 class="section-heading">Our Fluid Plans</h2>
    <div class="plans-grid">
      <div
        v-for="(plan, index) in plans"
        :key="index"
        class="plan-card"
        :class="{ highlight: plan.highlight }"
      >
        <!-- Highlight Badge -->
        <div v-if="plan.highlight" class="badge">
          {{ plan.highlight === true ? 'MOST POPULAR' : plan.highlight }}
        </div>

        <!-- Title -->
        <h3 class="plan-title">{{ plan.title }}</h3>

        <!-- Subtitle -->
        <p class="plan-subtitle">{{ plan.subtitle }}</p>

        <!-- Price -->
        <p v-if="plan.price" class="plan-price">{{ plan.price }}</p>

        <!-- Button -->
        <a href="#" class="plan-button">{{ plan.buttonText }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Blog Section */
.blog-section {
  padding: 4rem 2rem;
  background-color: #0d0c12;
  color: white;
  text-align: center;
}

.section-heading {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ffffff;
}

/* Plans Grid */
.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

/* Plan Card */
.plan-card {
  position: relative;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  padding: 2rem;
  border-radius: 12px;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
}

.plan-card.highlight {
  border: 2px solid #00ffaf;
  background: linear-gradient(145deg, rgba(0, 255, 175, 0.1), rgba(0, 255, 175, 0));
}

/* Hover Effect */
.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}

/* Badge */
.badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #00ffaf;
  color: #000;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

/* Plan Title */
.plan-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
}

/* Plan Subtitle */
.plan-subtitle {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: #ccc;
}

/* Plan Price */
.plan-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

/* Plan Button */
.plan-button {
  display: inline-block;
  text-align: center;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #000;
  background-color: #00ffaf;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.plan-button:hover {
  background-color: #00d68f;
 
}
</style>
