<template>
    <div class="about-trueque-page-container">
      <div class="about-trueque-page">
        <header class="at-hero-section">
          <div class="at-hero-bg-shapes">
            <div class="at-shape at-shape1"></div>
            <div class="at-shape at-shape2"></div>
            <div class="at-shape at-shape3"></div>
            <div class="at-shape at-shape4"></div>
          </div>
          <div class="container">
            <h1 class="at-main-title animate-pop-in">{{ $t('Trueque') }}</h1>
            <p class="at-subtitle animate-fade-in-up animation-delay-200">{{ $t('Trade what you have, find what you need, connect with your community.') }}</p>

            <div class="at-founder-card animate-fade-in-up animation-delay-400">
              <div class="at-founder-avatar">
                <img src="../assets/jeiberth.jpg" alt="Jeiberth Malagon" class="at-avatar-img">
                <div class="at-avatar-badge">👋</div>
              </div>
              <div class="at-founder-quote">
                <p>{{ $t('"Technology should serve people and bring communities together, not divide them."') }}</p>
                <div class="at-founder-name">— Jeiberth Malagon, {{ $t('Founder') }}</div>
              </div>
            </div>
          </div>
        </header>

        <section class="at-section at-why-section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 animate-on-scroll fade-in-left">
                <h2 class="at-section-title">{{ $t('Why Trueque Exists') }}</h2>
                <p class="at-section-text">{{ $t('We often throw away things we no longer use—or hide our talents in jobs that don\'t value them. I believe:') }}</p>

                <div class="at-beliefs-container">
                  <div class="at-belief-card" v-for="(belief, index) in beliefs" :key="index" :style="`--delay: ${index * 0.2}s`">
                    <div class="at-belief-icon">{{ belief.icon }}</div>
                    <div class="at-belief-text">{{ $t(belief.text) }}</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 animate-on-scroll fade-in-right">
                <div class="at-value-flow-animation">
                  <div class="at-value-item at-value1">{{ $t('📚 Books') }}</div>
                  <div class="at-value-item at-value2">{{ $t('🎨 Art') }}</div>
                  <div class="at-value-item at-value3">{{ $t('🔧 Skills') }}</div>
                  <div class="at-value-item at-value4">{{ $t('👕 Clothes') }}</div>
                  <div class="at-value-arrows">➡️ 🔄 ⬅️</div>
                  <div class="at-value-quote">{{ $t('"Value should flow—not sit still"') }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="at-section at-features-section">
          <div class="container">
            <h2 class="at-section-title text-center animate-on-scroll pop-in">{{ $t('What You Can Do With Trueque') }}</h2>
            <p class="at-section-subtitle text-center animate-on-scroll fade-in-up animation-delay-200">{{ $t('Forget the store. Skip the expensive company.') }} <strong>{{ $t('Trueque') }}</strong> {{ $t('is here to help you:') }}</p>

            <div class="at-features-grid">
              <div class="at-feature-card animate-on-scroll fade-in-up" v-for="(feature, index) in features" :key="index" :style="`--delay: ${index * 0.1}s`">
                <div class="at-feature-icon">{{ feature.icon }}</div>
                <h3 class="at-feature-title">{{ $t(feature.title) }}</h3>
                <p class="at-feature-desc">{{ $t(feature.desc) }}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="at-section at-mission-section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 order-lg-2 animate-on-scroll fade-in-right">
                <div class="at-world-map-animation">
                  <div class="at-world-map">
                    <div class="at-location at-location1" style="top: 20%; left: 25%;">🌎</div>
                    <div class="at-location at-location2" style="top: 40%; left: 50%;">🌍</div>
                    <div class="at-location at-location3" style="top: 60%; left: 75%;">🌏</div>
                    <div class="at-location at-location4" style="top: 30%; left: 80%;">🌎</div>
                    <div class="at-location at-location5" style="top: 70%; left: 30%;">🌍</div>
                  </div>
                  <div class="at-mission-stats">
                    <div class="at-stat-item">
                      <div class="at-stat-number" id="at-trades-count">2653 </div>
                      <div class="at-stat-label">{{ $t('Trades Made') }}</div>
                    </div>
                    <div class="at-stat-item">
                      <div class="at-stat-number" id="at-users-count">750</div>
                      <div class="at-stat-label">{{ $t('Community Members') }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 order-lg-1 animate-on-scroll fade-in-left">
                <h2 class="at-section-title">{{ $t('Our Mission') }}</h2>
                <p class="at-section-text">{{ $t('In many places around the world, people may lack money—but not generosity, ideas, or heart.') }}</p>

                <div class="at-vision-list">
                  <div class="at-vision-item" v-for="(vision, index) in visions" :key="index">
                    <div class="at-vision-bullet">{{ index + 1 }}</div>
                    <div class="at-vision-text">{{ $t(vision) }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="at-section at-built-section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 animate-on-scroll fade-in-left">
                <div class="at-dev-process">
                  <div class="at-dev-stage at-stage1">{{ $t('💡 Idea') }}</div>
                  <div class="at-dev-stage at-stage2">{{ $t('✏️ Design') }}</div>
                  <div class="at-dev-stage at-stage3">{{ $t('💻 Code') }}</div>
                  <div class="at-dev-stage at-stage4">{{ $t('🚀 Launch') }}</div>
                  <div class="at-dev-stage at-stage5">{{ $t('❤️ Community') }}</div>
                </div>
              </div>
              <div class="col-lg-6 animate-on-scroll fade-in-right">
                <h2 class="at-section-title">{{ $t('Built by One, Made for Many') }}</h2>
                <p class="at-section-text">{{ $t('I planned, designed, and built Trueque on my own. It hasn\'t been easy—but what keeps me going is the vision of a world where people trade, trust, and grow together.') }}</p>
                <p class="at-section-text">{{ $t('I picture streets, towns, and cities where Trueque helps people reconnect—not just with stuff, but with each other.') }}</p>

                <div class="at-community-illustration">
                  <div class="at-community-person at-person1">👩‍🎨</div>
                  <div class="at-community-person at-person2">👨‍🍳</div>
                  <div class="at-community-person at-person3">👩‍🔧</div>
                  <div class="at-community-person at-person4">👨‍🌾</div>
                  <div class="at-community-heart">💖</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="at-cta-section">
          <div class="container text-center">
            <h2 class="at-cta-title animate-on-scroll pop-in">{{ $t('Let\'s Build the Future Together') }}</h2>
            <p class="at-cta-text animate-on-scroll fade-in-up animation-delay-200">{{ $t('If you\'re already using Trueque—') }} <strong>{{ $t('thank you') }}</strong>. {{ $t('Your feedback means the world to me.') }}</p>
            <p class="at-cta-text animate-on-scroll fade-in-up animation-delay-400">{{ $t('Because this isn\'t just an app—it\'s a movement.') }}</p>

            <div class="at-feedback-form animate-on-scroll fade-in-up animation-delay-600">
              <div class="at-form-field">
                <textarea :placeholder="$t('Your thoughts, ideas, feedback...')"></textarea>
                <button class="at-send-btn">{{ $t('Send') }} 💌</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const beliefs = ref([
    { icon: '🔄', text: 'Our objects, even unused ones, still have value.' },
    { icon: '🛠️', text: 'Our skills should help more than just our employers.' },
    { icon: '👥', text: 'Our communities thrive when we support each other, not compete.' }
  ]);

  const features = ref([
    { icon: '🔄', title: 'Trade Items', desc: 'Exchange goods you no longer need for things you want' },
    { icon: '🛠️', title: 'Offer Skills', desc: 'Share your talents to help others in your community' },
    { icon: '🔍', title: 'Find Locally', desc: 'Discover goods and services near you' },
    { icon: '♻️', title: 'Reduce Waste', desc: 'Give items a second life instead of throwing them away' },
    { icon: '💰', title: 'Save Money', desc: 'Get what you need without spending cash' },
    { icon: '👋', title: 'Connect', desc: 'Meet like-minded people in your area' }
  ]);

  const visions = ref([
    'Someone can start a business without capital',
    'A family can trade a meal for help with repairs',
    'A collector finds a missing piece in someone else\'s garage',
    'No one is excluded because of money',
    'Human connection is worth more than price tags'
  ]);

  // Animation on scroll setup
  const setupIntersectionObserver = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observers = [];

    animatedElements.forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');

            // Animate counting numbers
            if (entry.target.id === 'at-trades-count' || entry.target.id === 'at-users-count') {
              const target = entry.target;
              const finalNumber = target.id === 'at-trades-count' ? 1243 : 892;
              const duration = 2000;
              const startTime = performance.now();

              const animateCount = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const currentNumber = Math.floor(progress * finalNumber);

                target.textContent = currentNumber.toLocaleString();

                if (progress < 1) {
                  requestAnimationFrame(animateCount);
                } else {
                  target.textContent = finalNumber.toLocaleString();
                }
              };

              requestAnimationFrame(animateCount);
            }
          }
        });
      }, { threshold: 0.1 });

      observer.observe(el);
      observers.push(observer);
    });

    return observers;
  };

  onMounted(() => {
    const observers = setupIntersectionObserver();

    // Cleanup on unmount
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  });
  </script>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');


  .about-trueque-page-container {
    font-family: 'Poppins', sans-serif;
    color: var(--text-dark);
    line-height: 1.6;
  }

  .about-trueque-page {
    overflow-x: hidden;
  }

  /* Hero Section */
  .at-hero-section {
    padding: 5rem 0 3rem;
    /* background: linear-gradient(135deg, var(--primary-start), var(--accent-color)); */
    background: linear-gradient(135deg, var(--primary-start) 0%, var(--text-dark) 100%);

    color: var(--text-light);
    position: relative;
    overflow: hidden;
    text-align: center;
  }

  .at-hero-bg-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .at-shape {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.1);
    animation: at-float 20s infinite ease-in-out alternate;
  }

  .at-shape1 {
    width: 150px;
    height: 150px;
    top: 10%;
    left: 5%;
    animation-duration: 25s;
  }

  .at-shape2 {
    width: 250px;
    height: 250px;
    bottom: 5%;
    right: 10%;
    animation-duration: 30s;
    background-color: rgba(46, 204, 113, 0.1);
  }

  .at-shape3 {
    width: 100px;
    height: 100px;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    animation-duration: 20s;
  }

  .at-shape4 {
    width: 180px;
    height: 180px;
    bottom: 20%;
    left: 20%;
    animation-duration: 22s;
    background-color: rgba(74, 111, 165, 0.15);
  }

  @keyframes at-float {
    0% { transform: translateY(0) rotate(0deg) scale(1); }
    100% { transform: translateY(-30px) rotate(5deg) scale(1.05); }
  }

  .at-main-title {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .at-subtitle {
    font-size: 1.5rem;
    max-width: 700px;
    margin: 0 auto 2rem;
    opacity: 0.9;
    position: relative;
    z-index: 1;
    font-weight: 300;
  }

  .at-founder-card {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: 2rem auto 0;
    border: 1px solid rgba(255,255,255,0.2);
    position: relative;
    z-index: 1;
  }

  .at-founder-avatar {
    position: relative;
    margin-right: 1.5rem;
  }

  .at-avatar-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid white;
  }

  .at-avatar-badge {
    position: absolute;
    bottom: -5px;
    right: -5px;
    background: var(--accent-color);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border: 2px solid white;
    animation: at-wave 2s infinite;
  }

  .at-founder-quote {
    text-align: left;
    flex: 1;
  }

  .at-founder-quote p {
    font-style: italic;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  .at-founder-name {
    font-weight: 600;
    font-size: 0.9rem;
  }

  @keyframes at-wave {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(10deg); }
    50% { transform: rotate(-10deg); }
    75% { transform: rotate(5deg); }
  }

  /* Section Styles */
  .at-section {
    padding: 5rem 0;
    position: relative;
  }

  .at-why-section {
    background-color: white;
  }

  .at-features-section {
    background-color: var(--bg-light);
  }

  .at-mission-section {
    background-color: white;
  }

  .at-built-section {
    background-color: var(--bg-light);
  }

  .at-section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--text-dark);
    position: relative;
  }

  .at-section-title:after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--accent-color);
    margin-top: 0.8rem;
    border-radius: 2px;
  }

  .at-section-subtitle {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 3rem;
    color: #555;
  }

  .at-section-text {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: #555;
  }

  /* Beliefs Section */
  .at-beliefs-container {
    margin-top: 2rem;
  }

  .at-belief-card {
    background: white;
    border-radius: var(--border-radius);
    padding: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    box-shadow: var(--at-box-shadow);
    transform: translateX(-20px);
    opacity: 0;
    animation: at-slide-in 0.5s forwards;
    animation-delay: var(--delay);
    border-left: 4px solid var(--accent-color);
  }

  .at-belief-icon {
    font-size: 1.8rem;
    margin-right: 1.5rem;
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    background: rgba(255,126,95,0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .at-belief-text {
    font-size: 1.05rem;
    font-weight: 500;
  }

  @keyframes at-slide-in {
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* Value Flow Animation */
  .at-value-flow-animation {
    background: white;
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--at-box-shadow);
    height: 400px;
    position: relative;
    overflow: hidden;
  }

  .at-value-item {
    position: absolute;
    background: white;
    border-radius: 8px;
    padding: 0.8rem 1.2rem;
    font-size: 1.1rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    animation: at-float-item 15s infinite ease-in-out;
    z-index: 1;
  }

  .at-value1 {
    top: 20%;
    left: 10%;
    background: #ffe0b2;
    animation-delay: 0s;
  }

  .at-value2 {
    top: 40%;
    left: 70%;
    background: #c8e6c9;
    animation-delay: 2s;
  }

  .at-value3 {
    top: 70%;
    left: 20%;
    background: #bbdefb;
    animation-delay: 4s;
  }

  .at-value4 {
    top: 30%;
    left: 50%;
    background: #e1bee7;
    animation-delay: 6s;
  }

  .at-value-arrows {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    opacity: 0.7;
    animation: at-pulse 3s infinite;
  }

  .at-value-quote {
    position: absolute;
    bottom: 2rem;
    left: 0;
    width: 100%;
    text-align: center;
    font-style: italic;
    font-weight: 500;
    color: var(--text-dark);
  }

  @keyframes at-float-item {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-20px) rotate(5deg); }
    50% { transform: translateY(10px) rotate(-5deg); }
    75% { transform: translateY(-10px) rotate(3deg); }
  }

  @keyframes at-pulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
  }

  /* Features Grid */
  .at-features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .at-feature-card {
    background: white;
    border-radius: var(--border-radius);
    padding: 2rem;
    text-align: center;
    box-shadow: var(--at-box-shadow);
    transition: var(--at-transition);
    transform: translateY(30px);
    opacity: 0;
    animation: at-fade-up 0.5s forwards;
    animation-delay: var(--delay);
  }

  .at-feature-card:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 12px 25px rgba(0,0,0,0.15);
  }

  .at-feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .at-feature-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-dark);
  }

  .at-feature-desc {
    font-size: 1rem;
    color: #666;
  }

  @keyframes at-fade-up {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Mission Section */
  .at-world-map-animation {
    position: relative;
    height: 500px;
    background: #e3f2fd;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--at-box-shadow);
  }

  .at-world-map {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" fill="%234a6fa5" opacity="0.1"><path d="M400,200a100,100 0 1,0 200,0a100,100 0 1,0 -200,0"/><path d="M200,150a50,50 0 1,0 100,0a50,50 0 1,0 -100,0"/><path d="M600,250a70,70 0 1,0 140,0a70,70 0 1,0 -140,0"/></svg>');
    background-size: cover;
  }

  .at-location {
    position: absolute;
    font-size: 1.8rem;
    animation: at-bounce 2s infinite ease-in-out;
  }

  .at-location1 { animation-delay: 0s; }
  .at-location2 { animation-delay: 0.5s; }
  .at-location3 { animation-delay: 1s; }
  .at-location4 { animation-delay: 1.5s; }
  .at-location5 { animation-delay: 2s; }

  .at-mission-stats {
    position: absolute;
    bottom: 2rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 3rem;
  }

  .at-stat-item {
    background: white;
    padding: 1.5rem;
    border-radius: var(--border-radius);
    text-align: center;
    min-width: 150px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  .at-stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent-color-darker);
    margin-bottom: 0.5rem;
  }

  .at-stat-label {
    font-size: 0.9rem;
    color: #666;
  }

  @keyframes at-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  /* Vision List */
  .at-vision-list {
    margin-top: 2rem;
  }

  .at-vision-item {
    display: flex;
    margin-bottom: 1.5rem;
    align-items: flex-start;
  }

  .at-vision-bullet {
    background: var(--accent-color);
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  .at-vision-text {
    font-size: 1.05rem;
    padding-top: 3px;
  }

  /* Built By One Section */
  .at-dev-process {
    background: white;
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--at-box-shadow);
    position: relative;
    height: 400px;
  }

  .at-dev-stage {
    position: absolute;
    background: white;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    font-weight: 500;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    animation: at-dev-flow 15s infinite ease-in-out;
    border-left: 4px solid var(--accent-color);
  }

  .at-stage1 {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  .at-stage2 {
    top: 30%;
    left: 30%;
    animation-delay: 1s;
  }

  .at-stage3 {
    top: 50%;
    left: 50%;
    animation-delay: 2s;
  }

  .at-stage4 {
    top: 70%;
    left: 70%;
    animation-delay: 3s;
  }

  .at-stage5 {
    top: 30%;
    left: 70%;
    animation-delay: 4s;
  }

  .at-community-illustration {
    position: relative;
    height: 200px;
    margin-top: 2rem;
  }

  .at-community-person {
    position: absolute;
    font-size: 2rem;
    animation: at-community-float 8s infinite ease-in-out;
  }

  .at-person1 {
    top: 0;
    left: 10%;
    animation-delay: 0s;
  }

  .at-person2 {
    top: 30%;
    left: 30%;
    animation-delay: 1s;
  }

  .at-person3 {
    top: 10%;
    left: 60%;
    animation-delay: 2s;
  }

  .at-person4 {
    top: 40%;
    left: 80%;
    animation-delay: 3s;
  }

  .at-community-heart {
    position: absolute;
    font-size: 3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: at-heartbeat 2s infinite;
    color: var(--accent-color);
  }

  @keyframes at-dev-flow {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    20% { transform: translateY(-20px) rotate(5deg); }
    40% { transform: translateY(10px) rotate(-5deg); }
    60% { transform: translateY(-10px) rotate(3deg); }
    80% { transform: translateY(5px) rotate(-2deg); }
  }

  @keyframes at-community-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @keyframes at-heartbeat {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.2); }
  }

  /* CTA Section */
  .at-cta-section {
    padding: 5rem 0;
    background: linear-gradient(135deg, var(--text-dark), var(--primary-start));
    color: var(--text-light);
    text-align: center;
  }

  .at-cta-title {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .at-cta-text {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 1.5rem;
    opacity: 0.9;
  }

  .at-feedback-form {
    max-width: 600px;
    margin: 2rem auto 0;
  }

  .at-form-field {
    position: relative;
  }

  .at-form-field textarea {
    width: 100%;
    padding: 1.5rem;
    border-radius: var(--border-radius);
    border: none;
    background: rgba(255,255,255,0.9);
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    min-height: 120px;
    resize: vertical;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: var(--at-transition);
  }

  .at-form-field textarea:focus {
    outline: none;
    background: white;
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }

  .at-send-btn {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background: var(--accent-color);
    color: white;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--at-transition);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .at-send-btn:hover {
    background: var(--accent-color-darker);
    transform: translateY(-2px);
  }

  /* Animation Utilities */
  .animate-pop-in {
    animation: at-pop-in 0.7s ease-out forwards;
    opacity: 0;
    transform: scale(0.8);
  }

  .animate-fade-in-up {
    animation: at-fade-in-up 0.7s ease-out forwards;
    opacity: 0;
    transform: translateY(30px);
  }

  .animate-fade-in-left {
    animation: at-fade-in-left 0.7s ease-out forwards;
    opacity: 0;
    transform: translateX(-30px);
  }

  .animate-fade-in-right {
    animation: at-fade-in-right 0.7s ease-out forwards;
    opacity: 0;
    transform: translateX(30px);
  }

  .animation-delay-200 { animation-delay: 0.2s !important; }
  .animation-delay-400 { animation-delay: 0.4s !important; }
  .animation-delay-600 { animation-delay: 0.6s !important; }

  .animate-on-scroll.is-visible,
  .animate-pop-in.is-visible,
  .animate-fade-in-up.is-visible,
  .animate-fade-in-left.is-visible,
  .animate-fade-in-right.is-visible {
    opacity: 1;
    transform: scale(1) translateY(0) translateX(0);
  }

  @keyframes at-pop-in {
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes at-fade-in-up {
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes at-fade-in-left {
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes at-fade-in-right {
    to { opacity: 1; transform: translateX(0); }
  }

  /* Responsive */
  @media (max-width: 991px) {
    .at-section-title { font-size: 2rem; }
    .at-main-title { font-size: 3rem; }
    .at-subtitle { font-size: 1.2rem; }
    .at-founder-card { flex-direction: column; text-align: center; }
    .at-founder-avatar { margin-right: 0; margin-bottom: 1rem; }
    .at-features-grid { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
  }

  @media (max-width: 767px) {
    .at-main-title { font-size: 2.5rem; }
    .at-subtitle { font-size: 1.1rem; }
    .at-section { padding: 3rem 0; }
    .at-section-title { font-size: 1.8rem; }
    .at-cta-title { font-size: 2.2rem; }
    .at-cta-text { font-size: 1rem; }
    .at-value-flow-animation, .at-dev-process { height: 300px; }
    .at-world-map-animation { height: 400px; }
    .at-mission-stats { gap: 1.5rem; }
    .at-stat-item { padding: 1rem; min-width: 120px; }
    .at-stat-number { font-size: 2rem; }
  }
  </style>
