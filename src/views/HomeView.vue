<template>
  <div class="trueque-homepage-container">


    <div class="trueque-homepage" @mousemove="handleMouseMove">
      <section id="hero" class="hero-section container-fluid text-center">
        <div class="hero-interactive-bg">
          <div class="interactive-shape shape1" :style="shapeStyle1"></div>
          <div class="interactive-shape shape2" :style="shapeStyle2"></div>
          <div class="interactive-shape shape3" :style="shapeStyle3"></div>
          <div class="swapping-animation">
            <div class="swapping-item item-a">🎁</div>
            <div class="swapping-item item-b">🔧</div>
          </div>
        </div>
        <div class="hero-content">
          <h1 class="hero-title animate-fade-in-down">
            <span class="char" v-for="(char, index) in $t('hero.titleHighlight').split('')" :key="`t-${index}`" :style="{animationDelay: `${index * 0.05}s`}">{{ char }}</span>
            <span class="hero-title-main">{{ $t('hero.titleMain') }}</span>
          </h1>
          <p class="hero-subtitle animate-fade-in-up animation-delay-500 text-light lead">
            {{ $t('hero.subtitle') }}
          </p>
          <div class="hero-cta animate-fade-in-up animation-delay-700">
            <button class="btn btn-accent btn-lg me-3" @click="scrollToSection('how-it-works')">
              <span>{{ $t('hero.ctaDiscover') }}</span> ✨
            </button>
            <button class="btn btn-outline-light btn-lg" @click="scrollToSection('features')">
              <span>{{ $t('hero.ctaExplore') }}</span> 🚀
            </button>
          </div>
        </div>
      </section>
<!-- 
      <section id="how-it-works" class="how-it-works-section py-5 bg-light-shade">
        <div class="container">
          <h2 class="section-title text-center mb-5"><span class="gradient-text">{{ $t('howItWorks.title') }}</span></h2>
          <div class="row g-4">
            <div v-for="(step, index) in howItWorksSteps" :key="step.key" class="col-md-6 col-lg-4 d-flex">
              <div :class="`step-card animate-on-scroll pop-in animation-delay-${index * 100} p-4 text-center d-flex flex-column`">
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-icon mb-3" v-html="step.icon"></div>
                <h3 class="step-title h5 mb-2">{{ $t(step.titleKey) }}</h3>
                <p class="text-muted small flex-grow-1">{{ $t(step.descriptionKey) }}</p>
              </div>
            </div>
          </div>
        </div>
      </section> -->

      <section id="why-trueque" class="why-trueque-section py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 order-lg-2 text-center mb-4 mb-lg-0 animate-on-scroll fade-in-right interactive-image-container">
              <img src="https://www.patrimoniocultural.gob.ec/wp-content/uploads/2015/11/trueque-o-cambeo-de-pimampiro_39053838814_o.jpg" alt="Community Exchange" class="img-fluid rounded-img shadow-lg community-image">
              <div class="floating-icon icon-heart">❤️</div>
              <div class="floating-icon icon-handshake">🤝</div>
              <div class="floating-icon icon-recycle">♻️</div>
            </div>
            <div class="col-lg-6 order-lg-1 animate-on-scroll fade-in-left">
              <h2 class="section-title mb-4"><span class="gradient-text">🌟 {{ $t('whyTrueque.title') }}</span></h2>
              <p class="text-dark lead mb-3 animated-text-reveal" v-html="$t('whyTrueque.lead')"></p>
              <p class="text-muted animated-text-reveal animation-delay-200" v-html="$t('whyTrueque.secondary')"></p>
              <button class="btn btn-accent mt-3" @click="scrollToSection('features')">{{ $t('whyTrueque.ctaButton') }} 👇</button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="features-section py-5 bg-light-shade">
        <div class="container">
          <h2 class="section-title text-center mb-5"><span class="gradient-text">{{ $t('features.title') }}</span></h2>
          <div class="row g-4 justify-content-center">
            <div v-for="(feature, index) in featuresList" :key="feature.key" class="col-md-6 col-lg-3 d-flex align-items-stretch">
              <div :class="`feature-card-wrapper animate-on-scroll pop-in animation-delay-${index * 100}`">
                <div class="feature-card">
                  <div class="feature-card-flipper">
                    <div class="feature-card-front p-4 text-center d-flex flex-column">
                      <div class="feature-icon mb-3" v-html="feature.iconFront"></div>
                      <h3 class="feature-title h5">{{ $t(feature.titleKey) }}</h3>
                      <p class="text-muted small flex-grow-1">{{ $t(feature.descriptionKey) }}</p>
                      <div v-if="feature.frontExtraVisual" v-html="feature.frontExtraVisual" class="mt-auto"></div>
                    </div>
                    <div class="feature-card-back p-4 text-center d-flex flex-column">
                      <div class="feature-icon-back mb-2" v-if="feature.iconBack" v-html="feature.iconBack"></div>
                      <h4 class="h6 feature-back-title">{{ $t(feature.backTitleKey) }}</h4>
                      <p class="small flex-grow-1">{{ $t(feature.backDescriptionKey) }}</p>
                      <div v-if="feature.backExtraVisual" v-html="feature.backExtraVisual" class="mt-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="core-values" class="core-values-section py-5">
        <div class="container">
          <h2 class="section-title text-center mb-5"><span class="gradient-text">{{ $t('coreValues.title') }}</span></h2>
          <div class="row g-4">
            <div v-for="(value, index) in coreValues" :key="value.key" class="col-md-6 col-lg-3 d-flex">
              <div :class="`value-card animate-on-scroll fade-in-up animation-delay-${index*100} p-4 text-center`">
                <div class="value-icon mb-3" v-html="value.icon"></div>
                <h3 class="value-title h5 mb-2">{{ $t(value.titleKey) }}</h3>
                <p class="text-muted small">{{ $t(value.descriptionKey) }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="inspired-exchanges" class="inspired-exchanges-section py-5 bg-light-shade">
        <div class="container">
          <h2 class="section-title text-center mb-5"><span class="gradient-text">{{ $t('inspiredExchanges.title') }}</span></h2>
          <div class="row g-md-5 g-4">
            <div v-for="(exchange, index) in inspiredExchanges" :key="index" class="col-md-6 d-flex">
              <div :class="`exchange-pair-card animate-on-scroll pop-in animation-delay-${index*100} p-3`">
                <div class="exchange-item">
                  <span class="exchange-icon" v-html="exchange.icon1"></span>
                  <p>{{ $t(exchange.item1Key) }}</p>
                </div>
                <div class="exchange-arrow">⇄</div>
                <div class="exchange-item">
                  <span class="exchange-icon" v-html="exchange.icon2"></span>
                  <p>{{ $t(exchange.item2Key) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" class="testimonials-section py-5">
        <div class="container">
          <h2 class="section-title text-center mb-5"><span class="gradient-text">{{ $t('testimonials.title') }}</span></h2>
          <div class="row g-4">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="col-md-6 col-lg-4 d-flex">
              <div :class="`testimonial-card animate-on-scroll fade-in-up animation-delay-${index * 150} p-4`">
                <p class="testimonial-text fst-italic">"{{ $t(testimonial.quoteKey) }}"</p>
                <div class="testimonial-author mt-auto pt-3">
                  <img :src="testimonial.avatar" :alt="$t(testimonial.nameKey)" class="author-avatar me-2"/>
                  <strong>- {{ $t(testimonial.nameKey) }}</strong>
                  <p class="text-muted small ms-2 mb-0">{{ $t(testimonial.detailKey) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="impact-section py-5 bg-light-shade">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 text-center mb-4 mb-lg-0 animate-on-scroll fade-in-left character-trade-animation">
              <div class="character char-a">🧑‍🌾<span class="trade-item item-apple">🍎</span></div>
              <div class="arrows">⇄</div>
              <div class="character char-b"><span class="trade-item item-tool">🛠️</span>👨‍🔧</div>
            </div>
            <div class="col-lg-7 animate-on-scroll fade-in-right">
              <h2 class="section-title mb-3" v-html="$t('impact.title')"></h2>
              <p class="text-dark lead animated-text-reveal animation-delay-300" v-html="$t('impact.lead')"></p>
              <ul class="list-unstyled text-dark mt-3 impact-list">
                <li class="mb-2 animate-on-scroll slide-in-bottom"><i class="fas fa-check-circle me-2 text-accent"></i> {{ $t('impact.listItem1') }}</li>
                <li class="mb-2 animate-on-scroll slide-in-bottom animation-delay-100"><i class="fas fa-check-circle me-2 text-accent"></i> {{ $t('impact.listItem2') }}</li>
                <li class="mb-2 animate-on-scroll slide-in-bottom animation-delay-200"><i class="fas fa-check-circle me-2 text-accent"></i> {{ $t('impact.listItem3') }}</li>
                <li class="mb-2 animate-on-scroll slide-in-bottom animation-delay-300"><i class="fas fa-check-circle me-2 text-accent"></i> {{ $t('impact.listItem4') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" class="cta-section container-fluid text-center py-5">
        <div class="cta-background-animation"></div>
        <div class="cta-content animate-on-scroll fade-in-up">
          <h2 class="cta-title display-5 fw-bold text-light mb-3" v-html="$t('cta.title')"></h2>
          <p class="cta-subtitle lead text-light mb-4">
            {{ $t('cta.subtitle') }}
          </p>
          <div class="d-flex justify-content-center gap-3 cta-buttons">
            <button class="btn btn-accent btn-lg shadow-lg"><span>{{ $t('cta.buttonJoin') }}</span> 🎉</button>
            <button class="btn btn-outline-light btn-lg shadow-lg"><span>{{ $t('cta.buttonTest') }}</span> <span class="arrow-anim">→</span></button>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';



// Component data
const howItWorksSteps = ref([
  { key: 'step1', icon: '📝', titleKey: 'howItWorks.step1Title', descriptionKey: 'howItWorks.step1Desc' },
  { key: 'step2', icon: '🖼️', titleKey: 'howItWorks.step2Title', descriptionKey: 'howItWorks.step2Desc' },
  { key: 'step3', icon: '🤝', titleKey: 'howItWorks.step3Title', descriptionKey: 'howItWorks.step3Desc' },
  { key: 'step4', icon: '🔄', titleKey: 'howItWorks.step4Title', descriptionKey: 'howItWorks.step4Desc' },
  { key: 'step5', icon: '⭐', titleKey: 'howItWorks.step5Title', descriptionKey: 'howItWorks.step5Desc' }
]);

const featuresList = ref([
  { 
    key: 'wasteFree', 
    iconFront: '🌱', 
    titleKey: 'features.wasteFree.title', 
    descriptionKey: 'features.wasteFree.description',
    iconBack: '🌍', 
    backTitleKey: 'features.wasteFree.backTitle', 
    backDescriptionKey: 'features.wasteFree.backDescription',
    backExtraVisual: '<span class="animated-leaf">🍂</span> <span class="animated-leaf">🍃</span>' 
  },
  { 
    key: 'modernBartering', 
    iconFront: '⚖️', 
    titleKey: 'features.modernBartering.title', 
    descriptionKey: 'features.modernBartering.description',
    frontExtraVisual: '<div class="coin-animation-container"><div class="coin"></div><div class="coin"></div><div class="coin"></div></div>',
    iconBack: '🪙', 
    backTitleKey: 'features.modernBartering.backTitle', 
    backDescriptionKey: 'features.modernBartering.backDescription',
    backExtraVisual: '<span class="accent-text">Mix & Match!</span>' 
  },
  { 
    key: 'smartDiscovery', 
    iconFront: '🔍', 
    titleKey: 'features.smartDiscovery.title', 
    descriptionKey: 'features.smartDiscovery.description',
    iconBack: '📍', 
    backTitleKey: 'features.smartDiscovery.backTitle', 
    backDescriptionKey: 'features.smartDiscovery.backDescription',
    backExtraVisual: '<div class="animated-swipe-visual mt-2"><div class="swipe-card-back"></div><div class="swipe-card-back"></div><div class="swipe-card-back"></div></div>' 
  },
  { 
    key: 'skillExchange', 
    iconFront: '🤝', 
    titleKey: 'features.skillExchange.title', 
    descriptionKey: 'features.skillExchange.description',
    iconBack: '💡', 
    backTitleKey: 'features.skillExchange.backTitle', 
    backDescriptionKey: 'features.skillExchange.backDescription',
    backExtraVisual: '<div class="skill-icons">🎨 💻 🎵</div>' 
  }
]);

const coreValues = ref([
  { key: 'sustainability', icon: '🌿', titleKey: 'coreValues.sustainability.title', descriptionKey: 'coreValues.sustainability.description' },
  { key: 'community', icon: '👨‍👩‍👧‍👦', titleKey: 'coreValues.community.title', descriptionKey: 'coreValues.community.description' },
  { key: 'trust', icon: '🛡️', titleKey: 'coreValues.trust.title', descriptionKey: 'coreValues.trust.description' },
  { key: 'value', icon: '💎', titleKey: 'coreValues.value.title', descriptionKey: 'coreValues.value.description' }
]);

const inspiredExchanges = ref([
  { icon1: '🎸', item1Key: 'inspiredExchanges.exchange1_item1', icon2: '🧣', item2Key: 'inspiredExchanges.exchange1_item2' },
  { icon1: '💻', item1Key: 'inspiredExchanges.exchange2_item1', icon2: '🥕', item2Key: 'inspiredExchanges.exchange2_item2' },
  { icon1: '📚', item1Key: 'inspiredExchanges.exchange3_item1', icon2: '🗣️', item2Key: 'inspiredExchanges.exchange3_item2' },
  { icon1: '🍞', item1Key: 'inspiredExchanges.exchange4_item1', icon2: '🚲', item2Key: 'inspiredExchanges.exchange4_item2' }
]);

const testimonials = ref([
  { 
    quoteKey: 'testimonials.testimonial1.quote', 
    nameKey: 'testimonials.testimonial1.name', 
    detailKey: 'testimonials.testimonial1.detail', 
    avatar: 'https://i.pravatar.cc/150?img=1' 
  },
  { 
    quoteKey: 'testimonials.testimonial2.quote', 
    nameKey: 'testimonials.testimonial2.name', 
    detailKey: 'testimonials.testimonial2.detail', 
    avatar: 'https://i.pravatar.cc/150?img=2' 
  },
  { 
    quoteKey: 'testimonials.testimonial3.quote', 
    nameKey: 'testimonials.testimonial3.name', 
    detailKey: 'testimonials.testimonial3.detail', 
    avatar: 'https://i.pravatar.cc/150?img=3' 
  }
]);

// Mouse move parallax for hero background shapes
const mouseX = ref(0);
const mouseY = ref(0);
const handleMouseMove = (event) => {
  mouseX.value = (event.clientX - window.innerWidth / 2) / 30;
  mouseY.value = (event.clientY - window.innerHeight / 2) / 30;
};
const shapeStyle1 = computed(() => ({ transform: `translate(${mouseX.value * 0.5}px, ${mouseY.value * 0.5}px)` }));
const shapeStyle2 = computed(() => ({ transform: `translate(${mouseX.value * -0.8}px, ${mouseY.value * -0.8}px)` }));
const shapeStyle3 = computed(() => ({ transform: `translate(${mouseX.value * 1.2}px, ${mouseY.value * -0.6}px)` }));

// Smooth scroll functionality
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

// Intersection Observer for scroll animations
let observers = [];
const setupIntersectionObserver = () => {
  observers.forEach(observer => observer.disconnect());
  observers = [];
  
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(el);
    observers.push(observer);
  });
};

onMounted(() => {
  setupIntersectionObserver();
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  observers.forEach(observer => observer.disconnect());
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style >
/* Base Styles */

.trueque-homepage-container {
  font-family: var(--primary-font);
  overflow-x: hidden;
}

/* Language Switcher */
.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
  background: rgba(255,255,255,0.9);
  padding: 5px;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  display: flex;
  gap: 5px;
}

.language-switcher button {
  background: none;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 600;
  color: var(--text-dark);
  transition: all 0.2s ease;
  border-radius: calc(var(--border-radius) - 4px);
}

.language-switcher button.active {
  background-color: var(--accent-color);
  color: var(--text-light);
}

.language-switcher button:not(.active):hover {
  background-color: var(--light-shade-bg);
}

/* Gradient Text Utility */
.gradient-text {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
}

/* Button Styles */
.btn {
  border-radius: var(--border-radius);
  padding: 0.85rem 2rem;
  font-weight: 600;
  transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-width: 2px;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-transform: uppercase;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
}

.btn span {
  display: inline-block;
  transition: transform 0.2s ease-out;
  position: relative;
  z-index: 1;
}

.btn:hover span:not(.arrow-anim) {
  transform: scale(1.03);
}

.btn-accent {
  background-color: var(--accent-color);
  color: var(--text-light);
  border-color: var(--accent-color);
}

.btn-accent:hover {
  background-color: var(--accent-color-darker);
  border-color: var(--accent-color-darker);
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 20px rgba(46, 204, 113, 0.3);
}

.btn-outline-light {
  border-color: var(--text-light);
  color: var(--text-light);
  background-color: transparent;
}

.btn-outline-light:hover {
  background-color: var(--text-light);
  color: var(--gradient-primary-start);
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 6px 18px rgba(255,255,255,0.2);
}

/* Section Titles */
.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.2rem;
  }
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--gradient-primary);
  color: var(--text-light);
  padding: 6rem 1rem;
  overflow: hidden;
}

.hero-interactive-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.interactive-shape {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(248, 255, 249, 0.08);
  transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  animation: pulseShape 6s infinite ease-in-out alternate;
}

.interactive-shape.shape1 {
  width: 180px;
  height: 180px;
  top: 15%;
  left: 10%;
  animation-delay: 0s;
}

.interactive-shape.shape2 {
  width: 250px;
  height: 250px;
  bottom: 20%;
  right: 15%;
  animation-delay: 1s;
  background-color: rgba(46, 204, 113, 0.1);
}

.interactive-shape.shape3 {
  width: 120px;
  height: 120px;
  top: 50%;
  left: 45%;
  animation-delay: 2s;
}

@keyframes pulseShape {
  0% { transform: scale(0.98); opacity: 0.6; }
  100% { transform: scale(1.02); opacity: 0.9; }
}

.swapping-animation {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 50px;
  z-index: 1;
}

.swapping-item {
  font-size: 2.5rem;
  animation: swapPlaces 6s infinite ease-in-out;
}

.swapping-item.item-a {
  animation-delay: 0s;
}

.swapping-item.item-b {
  animation-delay: -3s;
}

@keyframes swapPlaces {
  0%, 100% { transform: translateX(0) rotate(0deg) scale(1); opacity: 0.8; }
  25% { transform: translateY(-15px) rotate(10deg) scale(1.05); opacity: 1;}
  50% { transform: translateX(40px) rotate(0deg) scale(1); opacity: 0.8;}
  75% { transform: translateY(-15px) rotate(-10deg) scale(1.05); opacity: 1;}
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 850px;
  padding: 0 20px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.25;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-title .char {
  display: inline-block;
  color: var(--accent-color-light);
  animation: jumpIn 0.5s ease-out forwards;
  opacity: 0;
  transform: translateY(-20px);
}

.hero-title .hero-title-main {
  animation: fadeInText 1s ease-out 0.5s forwards;
  opacity: 0;
  padding-left: 0.25em;
}

@keyframes jumpIn {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInText {
  to { opacity: 1; }
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  color: rgba(248, 255, 249, 0.9);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-cta {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.hero-cta .btn {
  padding: 1rem 2.2rem;
  font-size: 1rem;
}

/* How It Works Section */
.how-it-works-section {
  background-color: var(--light-shade-bg);
}

.how-it-works-section .step-card {
  background-color: #fff;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 25px rgba(44, 62, 80, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 280px;
}

.how-it-works-section .step-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(44, 62, 80, 0.1);
}

.step-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 2px solid var(--accent-color-light);
  border-radius: 50%;
  margin: 0 auto 1rem auto;
  background-color: var(--accent-color-light);
  color: var(--text-dark);
}

.step-icon {
  font-size: 2.5rem;
  color: var(--gradient-primary-start);
  margin-bottom: 1rem;
}

.step-title {
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

/* Why Trueque Section */
.why-trueque-section {
  background-color: #fff;
  position: relative;
  overflow: hidden;
}

.interactive-image-container {
  position: relative;
  padding: 20px;
}

.community-image {
  border-radius: var(--border-radius);
  transition: transform 0.3s ease-out;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  max-width: 100%;
  height: auto;
}

.interactive-image-container:hover .community-image {
  transform: scale(1.02);
}

.floating-icon {
  position: absolute;
  font-size: 1.8rem;
  background: rgba(255,255,255,0.85);
  padding: 0.4rem;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  animation: floatSimple 3.5s infinite ease-in-out;
  z-index: 1;
}

.icon-heart {
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.icon-handshake {
  bottom: 15%;
  right: 10%;
  animation-delay: 0.5s;
}

.icon-recycle {
  top: 40%;
  right: 5%;
  animation-delay: 1s;
}

@keyframes floatSimple {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* Features Section */
.features-section {
  background-color: var(--light-shade-bg);
}

.feature-card-wrapper {
  perspective: 1500px;
  width: 100%;
  display: flex;
}

.feature-card {
  width: 100%;
  min-height: 280px;
  position: relative;
  border-radius: var(--border-radius);
  display: flex;
}

.feature-card-flipper {
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  box-shadow: 0 8px 25px rgba(44, 62, 80, 0.1);
  border-radius: var(--border-radius);
}

.feature-card-wrapper:hover .feature-card-flipper {
  transform: rotateY(180deg);
}

.feature-card-front,
.feature-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  padding: 1.5rem;
}

.feature-card-front {
  background-color: #fff;
}

.feature-card-back {
  background: var(--gradient-accent);
  transform: rotateY(180deg);
  color: var(--text-light);
}

.feature-icon,
.feature-icon-back {
  font-size: 2.8rem;
  color: var(--accent-color);
  line-height: 1;
  transition: transform 0.3s ease;
  margin-bottom: 1rem;
}

.feature-card-wrapper:hover .feature-icon {
  transform: scale(1.05) rotate(3deg);
}

.feature-icon-back {
  color: white;
}

.feature-title {
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.feature-back-title {
  color: white;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* Feature-specific animations */
.coin-animation-container {
  display: flex;
  margin-top: 10px;
  justify-content: center;
}

.coin {
  width: 18px;
  height: 18px;
  background-color: #ffd700;
  border-radius: 50%;
  margin: 0 2px;
  animation: bounceCoin 1s infinite ease-out;
  border: 1.5px solid #DAA520;
}

.coin:nth-child(2) {
  animation-delay: 0.1s;
}

.coin:nth-child(3) {
  animation-delay: 0.2s;
}

@keyframes bounceCoin {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.animated-swipe-visual {
  position: relative;
  height: 50px;
  width: 90px;
  margin: 0 auto;
}

.swipe-card-back {
  position: absolute;
  width: 60px;
  height: 40px;
  background: linear-gradient(135deg, #e0e0e0, #f0f0f0);
  border: 1.5px solid var(--accent-color-light);
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  transform-origin: bottom center;
  animation: swipe-effect-back 3s infinite ease-in-out;
}

.swipe-card-back:nth-child(1) {
  z-index: 3;
  animation-delay: 0s;
}

.swipe-card-back:nth-child(2) {
  z-index: 2;
  transform: rotate(-5deg) translateX(-4px) translateY(2px);
  animation-delay: -0.1s;
}

.swipe-card-back:nth-child(3) {
  z-index: 1;
  transform: rotate(-10deg) translateX(-8px) translateY(4px);
  animation-delay: -0.2s;
}

@keyframes swipe-effect-back {
  0%, 100% { transform: translateX(0) rotate(0deg) scale(1); opacity: 1; }
  30% { transform: translateX(-35px) rotate(-15deg) scale(0.9); opacity: 1; }
  35% { transform: translateX(35px) rotate(0deg) scale(0); opacity: 0; }
  36% { transform: translateX(35px) rotate(0deg) scale(0); opacity: 0; z-index: 0; }
  50% { transform: translateX(0px) rotate(0deg) scale(1); opacity: 1; z-index: 3;}
}

.animated-leaf {
  display: inline-block;
  animation: fall 3s infinite linear;
  font-size: 1.2rem;
}

.animated-leaf:nth-child(2) {
  animation-delay: 1s;
}

@keyframes fall {
  0% { transform: translateY(-8px) rotate(0deg); opacity:1; }
  100% { transform: translateY(18px) rotate(360deg); opacity:0; }
}

.skill-icons {
  font-size: 1.2rem;
  margin-top: 5px;
  animation: danceIcons 3s infinite ease-in-out;
}

@keyframes danceIcons {
  0%,100% { transform:rotate(0deg); }
  25% { transform:rotate(3deg); }
  75% { transform:rotate(-3deg); }
}

/* Core Values Section */
.core-values-section .value-card {
  background-color: #fff;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 15px rgba(44, 62, 80, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.core-values-section .value-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(44, 62, 80, 0.09);
}

.value-icon {
  font-size: 2.5rem;
  color: var(--gradient-primary-start);
  margin-bottom: 1rem;
}

.value-title {
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

/* Inspired Exchanges Section */
.inspired-exchanges-section {
  background-color: var(--light-shade-bg);
}

.inspired-exchanges-section .exchange-pair-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: var(--border-radius);
  box-shadow: 0 5px 20px rgba(0,0,0,0.07);
  width: 100%;
  transition: transform 0.3s ease;
  padding: 1.5rem;
}

.inspired-exchanges-section .exchange-pair-card:hover {
  transform: scale(1.03);
}

.exchange-item {
  text-align: center;
  flex: 1;
}

.exchange-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
  color: var(--accent-color);
}

.exchange-arrow {
  font-size: 1.8rem;
  color: var(--text-dark);
  font-weight: bold;
  margin: 0 1rem;
  animation: arrowPulseHorizontal 2s infinite ease-in-out;
}

@keyframes arrowPulseHorizontal {
  0%,100% { transform: scaleX(1); }
  50% { transform: scaleX(1.2); }
}

/* Testimonials Section */
.testimonials-section .testimonial-card {
  background-color: #fff;
  border-radius: var(--border-radius);
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonials-section .testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

.testimonial-text {
  color: var(--text-dark);
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
  padding-top: 1rem;
  margin-top: 1rem;
}

.author-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}

/* Impact Section */
.impact-section {
  background-color: var(--light-shade-bg);
}

.character-trade-animation {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  gap: 20px;
}

.character {
  position: relative;
}

.trade-item {
  position: absolute;
  font-size: 1.2rem;
  background: white;
  padding: 2px 4px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
}

.char-a .item-apple {
  top: -8px;
  right: -8px;
  animation: itemMoveA 4s infinite ease-in-out;
}

.char-b .item-tool {
  top: -8px;
  left: -8px;
  animation: itemMoveB 4s infinite ease-in-out;
}

.arrows {
  font-size: 1.8rem;
  animation: arrowsPulse 2s infinite;
  color: var(--accent-color);
}

@keyframes itemMoveA {
  0%,100% { transform: translate(0,0) rotate(0deg); }
  50% { transform: translate(25px, 4px) rotate(15deg); }
}

@keyframes itemMoveB {
  0%,100% { transform: translate(0,0) rotate(0deg); }
  50% { transform: translate(-25px, 4px) rotate(-15deg); }
}

@keyframes arrowsPulse {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

.impact-list {
  margin-top: 1.5rem;
}

.impact-list li {
  margin-bottom: 0.5rem;
  opacity: 0;
}

.impact-list .fa-check-circle {
  color: var(--accent-color);
  margin-right: 0.5rem;
  animation: checkMarkPop 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes checkMarkPop {
  from { transform: scale(0.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* CTA Section */
.cta-section {
  background: var(--gradient-reverse);
  color: var(--text-light);
  position: relative;
  overflow: hidden;
  padding: 5rem 1rem;
}

.cta-background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%);
  animation: pulseCTA_BG 4s infinite ease-in-out;
  z-index: 0;
}

@keyframes pulseCTA_BG {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.4); opacity: 0.9; }
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
}

.cta-title {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.pulsing-text {
  animation: pulseText 1.5s infinite ease-in-out;
  display: inline-block;
}

@keyframes pulseText {
  0%, 100% { transform: scale(1); color: var(--accent-color-light); }
  50% { transform: scale(1.05); color: white; }
}

.cta-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: rgba(248, 255, 249, 0.95);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.cta-buttons .btn {
  padding: 1rem 2.2rem;
}

.cta-buttons .btn:hover .arrow-anim {
  transform: translateX(6px) scale(1.05);
}

.arrow-anim {
  display: inline-block;
  transition: transform 0.3s ease-out;
}

.cta-buttons .btn:active {
  transform: translateY(-2px) scale(0.98) !important;
}

.cta-buttons .btn:first-child:hover::after {
  content: '🎊';
  position: absolute;
  top: -10px;
  right: -10px;
  animation: burst 0.5s ease-out;
}

@keyframes burst {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1.3); opacity: 1; }
}

/* Footer */
.trueque-footer {
  background: var(--gradient-primary);
  color: var(--text-light);
  padding: 2rem 0;
}

.footer-links {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.footer-links a {
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--accent-color-light);
  text-decoration: underline;
}

/* Animation Utilities */
.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animation-delay-100 { animation-delay: 0.1s !important; }
.animation-delay-150 { animation-delay: 0.15s !important; }
.animation-delay-200 { animation-delay: 0.2s !important; }
.animation-delay-300 { animation-delay: 0.3s !important; }
.animation-delay-400 { animation-delay: 0.4s !important; }
.animation-delay-500 { animation-delay: 0.5s !important; }
.animation-delay-600 { animation-delay: 0.6s !important; }
.animation-delay-700 { animation-delay: 0.7s !important; }

.animate-on-scroll {
  opacity: 0;
  transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.animate-on-scroll.fade-in-left { transform: translateX(-50px); }
.animate-on-scroll.fade-in-right { transform: translateX(50px); }
.animate-on-scroll.fade-in-up { transform: translateY(40px); }
.animate-on-scroll.pop-in { transform: scale(0.9) translateY(15px); }
.animate-on-scroll.is-visible { opacity: 1; transform: translateX(0) translateY(0) scale(1); }

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .feature-card { min-height: 260px; }
  .step-card { min-height: 220px; }
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.6rem; }
  .hero-subtitle { font-size: 1.1rem; }
  .section-title { font-size: 2rem; }
  .cta-title { font-size: 2.3rem; }
  .feature-card { min-height: 220px; }
  .step-card { min-height: auto; margin-bottom: 1rem; }
  .character-trade-animation { flex-direction: column; gap: 8px; }
  .swapping-animation { bottom: 5%; gap: 20px; }
  .swapping-item { font-size: 2rem; }
  .inspired-exchanges-section .exchange-pair-card { flex-direction: column; gap: 0.5rem; padding: 1rem; }
  .exchange-arrow { transform: rotate(90deg); margin: 0.5rem 0; }
  .footer-links { flex-direction: column; gap: 10px; }
}

@media (max-width: 576px) {
  .hero-title { font-size: 2rem; }
  .hero-cta .btn { padding: 0.7rem 1.3rem; font-size: 0.85rem; }
  .section-title { font-size: 1.7rem; }
  .cta-title { font-size: 1.9rem; }
  .why-trueque-section .floating-icon { font-size: 1.5rem; padding: 0.3rem; }
  .language-switcher { top: 10px; right: 10px; }
  .language-switcher button { padding: 6px 10px; font-size: 0.9rem; }
  .cta-buttons { flex-direction: column; }
  .cta-buttons .btn { width: 100%; }
}
</style>