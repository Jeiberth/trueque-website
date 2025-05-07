<template>
  <div class="how-it-works-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title animate-fade-in-down">
          {{ $t('howItWorksPage.title') }}
        </h1>
        <div class="swipe-animation-container">
          <div class="swipe-card" v-for="(card, index) in 3" :key="index" 
               :style="`--i: ${index}`">
            <div class="like-overlay">👍</div>
            <div class="dislike-overlay">👎</div>
          </div>
        </div>
      </div>
      <div class="hero-wave"></div>
    </section>

    <!-- Features -->
    <section class="features-section">
      <!-- Matching System -->
      <div class="feature-card animate-on-scroll" 
           v-for="(feature, index) in features" :key="feature.titleKey"
           :class="`feature-${index % 2}`">
        <div class="feature-visual">
          <div class="floating-emoji">🔄</div>
          <div class="pulse-dots">
            <div v-for="dot in 3" :key="dot" class="dot"></div>
          </div>
        </div>
        <div class="feature-content">
          <h2 class="gradient-text">{{ $t(feature.titleKey) }}</h2>
          <p class="feature-description">{{ $t(feature.descriptionKey) }}</p>
          <ul class="feature-list">
            <li v-for="(item, itemIndex) in $t(feature.listKey)" 
                :key="itemIndex" class="animate-on-scroll"
                :style="`animation-delay: ${itemIndex * 0.1}s`">
              <span class="emoji-bullet">{{ feature.emoji }}</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Chat Animation -->
      <div class="chat-animation animate-on-scroll">
        <div class="chat-bubble left" v-for="(msg, index) in $t('howItWorksPage.chatMessages')" 
             :key="index" :style="`--delay: ${index * 0.3}s`">
          {{ msg }}
        </div>
      </div>
    </section>

    <!-- Upload Section -->
    <section class="upload-section animate-on-scroll">
      <div class="upload-zone" @dragover.prevent @drop.prevent="handleDrop">
        <div class="upload-icon">📤</div>
        <p>{{ $t('howItWorksPage.uploadText') }}</p>
        <div class="upload-preview" v-if="uploadedItem">
          {{ uploadedItem }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const uploadedItem = ref(null)
const features = [
  {
    titleKey: 'howItWorksPage.matchingTitle',
    descriptionKey: 'howItWorksPage.matchingText',
    listKey: 'howItWorksPage.matchingFeatures',
    emoji: '💞'
  },
  {
    titleKey: 'howItWorksPage.negotiationTitle',
    descriptionKey: 'howItWorksPage.negotiationText',
    listKey: 'howItWorksPage.negotiationFeatures',
    emoji: '🤝'
  },
  {
    titleKey: 'howItWorksPage.managementTitle',
    descriptionKey: 'howItWorksPage.managementText',
    listKey: 'howItWorksPage.managementFeatures',
    emoji: '📦'
  }
]

const handleDrop = (e) => {
  const item = e.dataTransfer?.files[0]?.name || '📷 item.jpg'
  uploadedItem.value = item
  setTimeout(() => {
    uploadedItem.value = null
  }, 2000)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.how-it-works-page {
  font-family: var(--primary-font);
  color: var(--text-dark);
}

/* Hero Section */
.hero-section {
  background: var(--gradient-primary);
  min-height: 80vh;
  position: relative;
  overflow: hidden;
}

.hero-content {
  padding: 4rem 1rem;
  text-align: center;
}

.hero-title {
  font-size: 4rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  text-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.swipe-animation-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
  perspective: 1000px;
}

.swipe-card {
  width: 300px;
  height: 400px;
  background: rgba(255,255,255,0.1);
  border-radius: var(--border-radius);
  transform: rotate(calc(var(--i) * 5deg));
  animation: swipe 8s infinite linear;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

@keyframes swipe {
  0%, 100% { transform: rotate(calc(var(--i) * 5deg)) translateY(0); }
  50% { transform: rotate(calc(var(--i) * 5deg)) translateY(-20px); }
}

.like-overlay, .dislike-overlay {
  position: absolute;
  font-size: 4rem;
  opacity: 0;
  transition: all 0.3s ease;
}

.swipe-card:hover .like-overlay {
  opacity: 1;
  transform: translate(50%, -50%);
}

.swipe-card:hover .dislike-overlay {
  opacity: 1;
  transform: translate(-50%, -50%);
}

/* Features Section */
.feature-card {
  background: white;
  border-radius: var(--border-radius);
  margin: 4rem auto;
  padding: 2rem;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease;
}

.feature-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.feature-visual {
  position: relative;
  min-height: 400px;
}

.floating-emoji {
  font-size: 8rem;
  position: absolute;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

.pulse-dots {
  position: absolute;
  inset: 0;
}

.dot {
  width: 20px;
  height: 20px;
  background: var(--accent-color);
  position: absolute;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}

/* Chat Animation */
.chat-animation {
  max-width: 800px;
  margin: 4rem auto;
  min-height: 300px;
}

.chat-bubble {
  background: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  margin: 1rem;
  opacity: 0;
  transform: translateX(-100%);
  animation: chatSlide 0.8s forwards;
  animation-delay: var(--delay);
}

@keyframes chatSlide {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Upload Section */
.upload-zone {
  border: 4px dashed var(--accent-color-light);
  border-radius: var(--border-radius);
  padding: 4rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.upload-zone:hover {
  background: rgba(121, 250, 181, 0.1);
  transform: scale(1.02);
}

.upload-icon {
  font-size: 4rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .feature-card {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .swipe-card {
    width: 200px;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .swipe-animation-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>