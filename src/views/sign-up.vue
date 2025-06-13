<template>
    <div class="join-waitlist-page-container">
      <div class="join-waitlist-page">
        <header class="jwl-hero-section">
          <div class="jwl-hero-bg-shapes">
            <div class="jwl-shape jwl-shape1"></div>
            <div class="jwl-shape jwl-shape2"></div>
            <div class="jwl-shape jwl-shape3"></div>
          </div>
          <div class="container jwl-hero-layout-container">
            <div class="jwl-hero-content">
              <div class="jwl-logo animate-pop-in">
                <span class="jwl-logo-icon">🔄</span>
                <span class="jwl-logo-text">{{ $t('waitlist.logoText') }}</span>
              </div>
              <h1 class="jwl-main-title animate-pop-in animation-delay-100" style="color: white !important;">{{ $t('waitlist.headline') }}</h1>
              <p class="jwl-subtitle lead animate-fade-in-up animation-delay-300">{{ $t('waitlist.description') }}</p>
            </div>

            <div class="jwl-hero-visual animate-on-scroll fade-in-up animation-delay-500">
              <div class="jwl-app-preview">
                <div class="jwl-phone-mockup">
                  <div class="jwl-screen">
                    <img src="../assets/screenshoot.png"
                         :alt="$t('waitlist.appPreview.screenshotAlt')"
                         class="jwl-app-screenshot" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section class="jwl-signup-section" id="jwl-form-section-target">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 animate-on-scroll fade-in-left">
                <div class="jwl-countdown-container">
                  <h3 class="jwl-countdown-title">{{ countdownFinished ? $t('waitlist.launched') : $t('waitlist.countdownTitle') }}</h3>
                  <div v-if="!countdownFinished" class="jwl-countdown">
                    <div class="jwl-countdown-item">
                      <span class="jwl-countdown-number">{{ countdown.days }}</span>
                      <span class="jwl-countdown-label">{{ $t('waitlist.days') }}</span>
                    </div>
                    <div class="jwl-countdown-separator">:</div>
                    <div class="jwl-countdown-item">
                      <span class="jwl-countdown-number">{{ countdown.hours }}</span>
                      <span class="jwl-countdown-label">{{ $t('waitlist.hours') }}</span>
                    </div>
                    <div class="jwl-countdown-separator">:</div>
                    <div class="jwl-countdown-item">
                      <span class="jwl-countdown-number">{{ countdown.minutes }}</span>
                      <span class="jwl-countdown-label">{{ $t('waitlist.minutes') }}</span>
                    </div>
                    <div class="jwl-countdown-separator">:</div>
                    <div class="jwl-countdown-item">
                      <span class="jwl-countdown-number">{{ countdown.seconds }}</span>
                      <span class="jwl-countdown-label">{{ $t('waitlist.seconds') }}</span>
                    </div>
                  </div>
                </div>

                <div class="jwl-social-proof animate-on-scroll fade-in-up animation-delay-200">
                  <div class="jwl-signup-counter">
                    <div class="jwl-counter-number">{{ animatedSignups }}+</div>
                    <div class="jwl-counter-text">{{ $t('waitlist.socialProof', { count: animatedSignups }) }}</div>
                  </div>
                  <div class="jwl-testimonial">
                    <div class="jwl-testimonial-content">
                      "{{ $t('waitlist.testimonial') }}"
                    </div>
                    <div class="jwl-testimonial-author">- {{ $t('waitlist.userName') }}</div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 animate-on-scroll fade-in-right">
                <div class="jwl-signup-form-container">
                  <h3 class="jwl-form-title">{{ $t('waitlist.formTitle') }}</h3>
                  <form class="jwl-signup-form" @submit.prevent="submitForm">
                    <div class="jwl-form-group">
                      <input type="email" v-model="email" :placeholder="$t('waitlist.emailPlaceholder')" required>
                      <button type="submit" class="jwl-submit-btn" :disabled="submitting">
                        <span v-if="!submitting">{{ $t('waitlist.submit') }}</span>
                        <span v-else class="jwl-spinner"></span>
                      </button>
                    </div>
                     <p v-if="formMessage" class="jwl-form-feedback" :class="{ 'success': formSuccess, 'error': !formSuccess }">{{ formMessage }}</p>
                    <p class="jwl-privacy-note">{{ $t('waitlist.privacy') }}</p>
                  </form>

                  <div class="jwl-incentives">
                    <h4>{{ $t('waitlist.incentivesTitle') }}</h4>
                    <div class="jwl-incentive-item">
                      <span class="jwl-incentive-icon">⭐</span>
                      <span>{{ $t('waitlist.incentive1') }}</span>
                    </div>
                    <div class="jwl-incentive-item">
                      <span class="jwl-incentive-icon">🔔</span>
                      <span>{{ $t('waitlist.incentive2') }}</span>
                    </div>
                    <div class="jwl-incentive-item">
                      <span class="jwl-incentive-icon">🚩</span>
                      <span>{{ $t('waitlist.incentive3') }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="jwl-faq-section">
          <div class="container">
            <h2 class="jwl-section-title text-center animate-on-scroll fade-in-up">{{ $t('waitlist.faqTitle') }}</h2>
            <div class="jwl-faq-container">
              <div class="jwl-faq-item animate-on-scroll fade-in-up"
                   v-for="(faq, index) in translatedFaqs" :key="index"
                   :class="{ 'active': activeFaq === index }"
                   @click="toggleFaq(index)">
                <div class="jwl-faq-question">
                  <h3>{{ faq.question }}</h3>
                  <span class="jwl-faq-toggle">{{ activeFaq === index ? '−' : '+' }}</span>
                </div>
                <div class="jwl-faq-answer">
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="jwl-final-cta text-center">
          <div class="container">
            <h2 class="jwl-cta-title animate-on-scroll pop-in" style="color: white !important;">{{ $t('waitlist.finalCta') }}</h2>
            <p class="jwl-cta-subtitle animate-on-scroll fade-in-up animation-delay-200">{{ $t('waitlist.benefitReminder') }}</p>
            <button class="jwl-cta-button animate-on-scroll pop-in animation-delay-400" @click="scrollToForm">
              {{ $t('waitlist.joinButton') }}
            </button>
          </div>
        </section>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t, tm } = useI18n();

  const initialSignups = 750;
  const animatedSignups = ref(initialSignups);
  const email = ref("");
  const submitting = ref(false);
  const formMessage = ref("");
  const formSuccess = ref(false);

  const activeFaq = ref(null);
  const translatedFaqs = computed(() => tm('waitlist.faqs') || []);

  const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const countdownFinished = ref(false);
  let countdownInterval = null;

  const updateCountdown = () => {
    const now = new Date().getTime();
    const launchDate = new Date(new Date().getFullYear(), 5, 12, 0, 0, 0).getTime(); // June 12
    const diff = launchDate - now;

    if (diff <= 0) {
      countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      countdownFinished.value = true;
      if (countdownInterval) clearInterval(countdownInterval);
      return;
    }
    countdownFinished.value = false;
    countdown.value.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdown.value.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    countdown.value.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    countdown.value.seconds = Math.floor((diff % (1000 * 60)) / 1000);
  };

  const submitForm = () => {
    if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      formMessage.value = t('waitlist.submitError');
      formSuccess.value = false;
      setTimeout(() => formMessage.value = "", 3000);
      return;
    }

    submitting.value = true;
    formMessage.value = "";

    fetch("https://formsubmit.co/ajax/truequeww@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: email.value,
        _subject: "New Waitlist Signup",
        _captcha: "false"
      })
    })
    .then(response => {
      if (response.ok) {
        animatedSignups.value += 1;
        email.value = "";
        formMessage.value = t('waitlist.submitSuccess');
        formSuccess.value = true;
      } else {
        throw new Error("Form submit failed.");
      }
    })
    .catch(error => {
      formMessage.value = t('waitlist.submitError');
      formSuccess.value = false;
    })
    .finally(() => {
      submitting.value = false;
      setTimeout(() => formMessage.value = "", 3000);
    });

   /* submitting.value = true;
    formMessage.value = "";
    setTimeout(() => {
      submitting.value = false;
      animatedSignups.value += 1;
      email.value = "";
      formMessage.value = t('waitlist.submitSuccess');
      formSuccess.value = true;
      setTimeout(() => formMessage.value = "", 3000);
    }, 1500);*/
  };

  const toggleFaq = (index) => {
    activeFaq.value = activeFaq.value === index ? null : index;
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('jwl-form-section-target');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  let observers = [];
  const setupIntersectionObserver = () => {
    observers.forEach(observer => observer.disconnect());
    observers = [];
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-pop-in, .animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right');
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

  let signupAnimationTimer = null;
  const animateInitialSignups = () => {
      let currentDisplayCount = 0;
      const targetCount = initialSignups;
      if (targetCount === 0) {
          animatedSignups.value = 0;
          return;
      }
      const duration = 1500;
      const increment = targetCount / (duration / 16);

      signupAnimationTimer = setInterval(() => {
          currentDisplayCount += increment;
          if (currentDisplayCount >= targetCount) {
              animatedSignups.value = targetCount;
              clearInterval(signupAnimationTimer);
          } else {
              animatedSignups.value = Math.floor(currentDisplayCount);
          }
      }, 16);
  };

  onMounted(() => {
    updateCountdown();
    if (!countdownFinished.value) {
      countdownInterval = setInterval(updateCountdown, 1000);
    }
    animateInitialSignups();
    setupIntersectionObserver();
  });

  onUnmounted(() => {
    if (countdownInterval) clearInterval(countdownInterval);
    if (signupAnimationTimer) clearInterval(signupAnimationTimer);
    observers.forEach(observer => observer.disconnect());
  });
  </script>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');


  .join-waitlist-page-container {
    font-family: 'Poppins', sans-serif;
    color: var(--text-dark);
    line-height: 1.6;
  }
  .join-waitlist-page { overflow-x: hidden; }
  .container {
    width: 90%; max-width: 1100px; margin-left: auto; margin-right: auto;
    padding-left: 15px; padding-right: 15px; position: relative; z-index: 2;
  }
  .row { display: flex; flex-wrap: wrap; margin-left: -15px; margin-right: -15px; }
  .col-lg-6 { width: 100%; padding-left: 15px; padding-right: 15px; }
  @media (min-width: 992px) { .col-lg-6 { flex: 0 0 50%; max-width: 50%; } }
  .align-items-center { align-items: center; }
  .text-center { text-align: center; }
  .lead { font-size: 1.15rem; font-weight: 300; }

  /* Hero Section */
  .jwl-hero-section {
    padding: 4rem 0; /* Adjusted padding */
    background: linear-gradient(135deg, var(--primary-start), var(--text-dark));
    color: var(--text-light); position: relative; overflow: hidden;
  }
  .jwl-hero-bg-shapes { position: absolute; top:0; left:0; width:100%; height:100%; z-index:0; }
  .jwl-shape { position: absolute; border-radius: 50%; background-color: rgba(255,255,255,0.07); animation: jwl-float 20s infinite ease-in-out alternate; }
  .jwl-shape1 { width: 200px; height: 200px; top: 10%; left: 5%; animation-duration: 18s; }
  .jwl-shape2 { width: 300px; height: 300px; bottom: 5%; right: 10%; animation-duration: 22s; background-color: rgba(46,204,113,0.1); }
  .jwl-shape3 { width: 150px; height: 150px; top: 30%; left: 50%; transform: translateX(-50%); animation-duration: 20s; }
  @keyframes jwl-float { 0% { transform: translateY(0px) rotate(0deg) scale(1); } 100% { transform: translateY(-30px) rotate(45deg) scale(1.1); } }

  .jwl-hero-layout-container {
    display: flex;
    flex-direction: column; /* Mobile first: stacked */
    align-items: center;
    text-align: center;
  }
  .jwl-hero-content {
    z-index: 1; /* Ensure text is above bg shapes if any overlap */
  }
  .jwl-hero-visual {
    margin-top: 2rem; /* Space between text content and phone on mobile */
    width: 100%; /* Ensure it can be centered or constrained */
    display: flex; /* For centering the .jwl-app-preview */
    justify-content: center;
    z-index: 1;
  }

  @media (min-width: 992px) { /* Desktop layout */
    .jwl-hero-section { padding: 5rem 0; }
    .jwl-hero-layout-container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left; /* Align text to left for content column */
    }
    .jwl-hero-content {
      flex-basis: 50%;
      padding-right: 2rem; /* Space between text and phone */
      justify-content: center;
    }
    .jwl-hero-visual {
      flex-basis: 45%; /* Give it a bit less than 50% to account for padding/margins */
      margin-top: 0; /* Reset mobile margin */
      justify-content: flex-end; /* Align phone to the right of its container */
    }
    .jwl-logo { justify-content: flex-start; } /* Align logo items to start */
  }

  .jwl-logo {
    display: inline-flex; align-items: center; margin-bottom: 1.5rem;
    font-size: 2rem; font-weight: 700;
  }
  .jwl-logo-icon { margin-right: 0.5rem; animation: jwl-spin 8s infinite linear; }
  @keyframes jwl-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

  .jwl-main-title {
    font-size: clamp(2.2rem, 5vw, 2.8rem); font-weight: 700; margin-bottom: 1.5rem; line-height: 1.2;
  }
  .jwl-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.25rem); max-width: 700px;
    margin-bottom: 2rem; opacity: 0.9;
    /* Remove margin auto for desktop left align */
  }
  @media (min-width: 992px) {
    .jwl-subtitle { margin-left: 0; margin-right: 0; }
  }


  /* App Preview & Phone Mockup */
  .jwl-app-preview {
    max-width: 300px; /* Control max size of the phone */
    width: 100%; /* Allow it to shrink if container is smaller */
    margin: 0 auto; /* Center on mobile if visual container is wider */
  }
  @media (min-width: 992px) {
    .jwl-app-preview { margin: 0; /* Let flexbox handle alignment */ }
  }

  .jwl-phone-mockup {
    background: #1c1c1e; border-radius: 36px; padding: 12px; position: relative;
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4), 0 10px 10px -5px rgba(0,0,0,0.1);
    transform: perspective(1200px) rotateY(0deg) rotateX(0deg);
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .jwl-phone-mockup:hover { transform: perspective(1200px) rotateY(5deg) rotateX(2deg) scale(1.02); }
  .jwl-phone-mockup::before { /* Notch */
    content: ''; position: absolute; top: 12px; left: 50%; transform: translateX(-50%);
    width: 30%; height: 12px; background-color: #000; border-radius: 6px; z-index: 2;
  }
  .jwl-screen {
    background: white; border-radius: 24px; overflow: hidden;
    height: 500px; /* Adjust height as needed for screenshot aspect ratio */
    position: relative;
    display: flex; /* To help center/position the image if needed */
    align-items: center;
    justify-content: center;
  }
  .jwl-app-screenshot {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Cover the area, might crop */
    /* object-fit: contain; /* Fit within area, might show bg, use if screenshot aspect ratio is fixed */
    border-radius: 24px; /* Match screen's inner radius */
    display: block; /* Remove extra space below image */
  }

  /* Signup Section - Styles from previous response, largely unchanged */
  .jwl-signup-section { padding: 5rem 0; background: white; }
  .jwl-countdown-container { margin-bottom: 3rem; text-align: center;}
  .jwl-countdown-title { font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-dark); }
  .jwl-countdown { display: flex; justify-content: center; align-items: center; gap: 10px; flex-wrap: wrap; }
  .jwl-countdown-item {
    display: flex; flex-direction: column; align-items: center; background: var(--bg-light);
    border-radius: var(--border-radius); padding: 15px 10px; min-width: 70px;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.06), var(--jwl-box-shadow); transition: transform 0.3s ease;
  }
  .jwl-countdown-item:hover { transform: translateY(-3px); }
  .jwl-countdown-number { font-size: 2.2rem; font-weight: 700; color: var(--primary-start); line-height: 1; text-shadow: 1px 1px 2px rgba(0,0,0,0.1); }
  .jwl-countdown-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px; color: #555; margin-top: 5px; }
  .jwl-countdown-separator { font-size: 1.8rem; font-weight: bold; color: var(--primary-start); padding-top: 10px; }

  .jwl-social-proof { margin-top: 3rem; }
  .jwl-signup-counter {
    background: var(--primary-start); color: white; border-radius: var(--border-radius); padding: 20px;
    text-align: center; margin-bottom: 2rem; box-shadow: var(--jwl-box-shadow); position: relative; overflow: hidden;
  }
  .jwl-signup-counter::before {
    content: ""; position: absolute; top: -50%; left: -125%; width: 100%; height: 250%;
    background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
    transform: skewX(-25deg); animation: jwl-shine-alt 4s infinite linear;
  }
  @keyframes jwl-shine-alt { 0% { left: -125%; } 100% { left: 125%; } }
  .jwl-counter-number { font-size: 3rem; font-weight: 700; line-height: 1; margin-bottom: 5px; }
  .jwl-counter-text { font-size: 1rem; opacity: 0.9; max-width: 300px; margin: auto;}
  .jwl-testimonial {
    background: white; border-radius: var(--border-radius); padding: 20px;
    box-shadow: var(--jwl-box-shadow); position: relative; border-left: 5px solid var(--accent-color);
  }
  .jwl-testimonial-content { font-style: italic; margin-bottom: 10px; position: relative; }
  .jwl-testimonial-content::before {
    content: '“'; font-size: 2.5rem; color: var(--accent-color); opacity: 0.3;
    position: absolute; top: -15px; left: -10px; line-height: 1;
  }
  .jwl-testimonial-author { font-weight: 600; text-align: right; color: var(--primary-start); }

  .jwl-signup-form-container {
    background: white; border-radius: var(--border-radius); padding: 30px;
    box-shadow: var(--jwl-box-shadow); position: relative; overflow: hidden; margin-top: 2rem;
  }
  @media (min-width: 992px) { .jwl-signup-form-container { margin-top: 0; } }
  .jwl-signup-form-container::after {
    content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 5px;
    background: linear-gradient(to right, var(--primary-start), var(--accent-color));
  }
  .jwl-form-title { font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; color: var(--text-dark); }
  .jwl-signup-form { margin-bottom: 1.5rem; }
  .jwl-form-group { display: flex; margin-bottom: 1rem; }
  .jwl-form-group input {
    flex-grow: 1; padding: 15px; border: 1px solid #ddd;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    font-size: 1rem; transition: var(--jwl-transition);
  }
  .jwl-form-group input:focus { outline: none; border-color: var(--accent-color); box-shadow: 0 0 0 3px rgba(46,204,113,0.2); }
  .jwl-submit-btn {
    background: var(--accent-color); color: white; border: none;
    border-radius: 0 var(--border-radius) var(--border-radius) 0; padding: 0 25px;
    font-size: 1rem; font-weight: 600; cursor: pointer; transition: var(--jwl-transition);
    min-width: 120px; display: inline-flex; align-items: center; justify-content: center;
  }
  .jwl-submit-btn:hover:not(:disabled) { background: var(--accent-color-darker); }
  .jwl-submit-btn:disabled { background: #ccc; cursor: not-allowed; }
  .jwl-spinner {
    display: inline-block; width: 20px; height: 20px; border: 3px solid rgba(255,255,255,0.3);
    border-radius: 50%; border-top-color: white; animation: jwl-spin 1s ease-in-out infinite;
  }
  .jwl-form-feedback {
    text-align: center; margin-top: -0.5rem; margin-bottom: 1rem; font-weight: 500;
    padding: 0.5rem; border-radius: 4px;
  }
  .jwl-form-feedback.success { color: var(--primary-start); background-color: #eaf7f0; }
  .jwl-form-feedback.error { color: #d9534f; background-color: #f8d7da; }
  .jwl-privacy-note { font-size: 0.8rem; color: #666; text-align: center; }

  .jwl-incentives { background: var(--bg-light); border-radius: var(--border-radius); padding: 20px; }
  .jwl-incentives h4 { font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-dark); text-align: center; }
  .jwl-incentive-item {
    display: flex; align-items: center; margin-bottom: 0.8rem; padding: 10px;
    border-radius: 6px; transition: var(--jwl-transition);
  }
  .jwl-incentive-item:hover { background: rgba(46,204,113,0.1); transform: translateX(5px); }
  .jwl-incentive-icon {
    font-size: 1.2rem; margin-right: 10px; width: 30px; height: 30px; background: white;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  /* FAQ Section */
  .jwl-faq-section { padding: 5rem 0; background: var(--bg-light); }
  .jwl-section-title { font-size: clamp(1.8rem,4vw,2.2rem); font-weight: 700; margin-bottom: 3rem; color: var(--text-dark); }
  .jwl-faq-container { max-width: 800px; margin: 0 auto; }
  .jwl-faq-item {
    background: white; border-radius: var(--border-radius); margin-bottom: 15px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05); overflow: hidden; transition: var(--jwl-transition);
  }
  .jwl-faq-item.active { box-shadow: 0 5px 20px rgba(46,204,113,0.15); }
  .jwl-faq-question {
    padding: 20px; cursor: pointer; display: flex; justify-content: space-between;
    align-items: center; transition: var(--jwl-transition);
  }
  .jwl-faq-question h3 { margin: 0; font-size: 1.1rem; font-weight: 600; color: var(--text-dark); }
  .jwl-faq-item.active .jwl-faq-question h3, .jwl-faq-question:hover h3 { color: var(--primary-start); }
  .jwl-faq-toggle { font-size: 1.5rem; font-weight: 300; color: var(--accent-color); transition: transform 0.3s ease; }
  .jwl-faq-item.active .jwl-faq-toggle { transform: rotate(45deg); }
  .jwl-faq-answer { padding: 0 20px; max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out, padding 0.4s ease-out; }
  .jwl-faq-item.active .jwl-faq-answer { padding-bottom: 20px; max-height: 500px; }
  .jwl-faq-answer p { margin: 0; color: #555; line-height: 1.7; }

  /* Final CTA */
  .jwl-final-cta { padding: 5rem 0; background: linear-gradient(135deg,var(--text-dark),var(--primary-start)); color: var(--text-light); }
  .jwl-cta-title { font-size: clamp(2rem,4.5vw,2.5rem); font-weight: 700; margin-bottom: 1rem; }
  .jwl-cta-subtitle { font-size: clamp(1rem,2.5vw,1.2rem); max-width: 600px; margin: 0 auto 2rem; opacity: 0.9; }
  .jwl-cta-button {
    background: var(--accent-color); color: white; border: none; border-radius: 50px;
    padding: 15px 40px; font-size: 1.2rem; font-weight: 600; cursor: pointer;
    transition: var(--jwl-transition); box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    text-transform: uppercase; letter-spacing: 0.5px;
  }
  .jwl-cta-button:hover {
    background: white; color: var(--accent-color-darker); transform: translateY(-5px) scale(1.03);
    box-shadow: 0 15px 30px rgba(0,0,0,0.25);
  }

  /* Animation Utilities */
  .animate-pop-in, .animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right { opacity: 0; }
  .animate-pop-in { transform: scale(0.8); }
  .animate-fade-in-up { transform: translateY(30px); }
  .animate-fade-in-left { transform: translateX(-30px); }
  .animate-fade-in-right { transform: translateX(30px); }
  .animation-delay-100 { transition-delay:0.1s !important; animation-delay:0.1s !important; }
  .animation-delay-200 { transition-delay:0.2s !important; animation-delay:0.2s !important; }
  .animation-delay-300 { transition-delay:0.3s !important; animation-delay:0.3s !important; }
  .animation-delay-400 { transition-delay:0.4s !important; animation-delay:0.4s !important; }
  .animation-delay-500 { transition-delay:0.5s !important; animation-delay:0.5s !important; }
  .animate-on-scroll.is-visible, .animate-pop-in.is-visible, .animate-fade-in-up.is-visible, .animate-fade-in-left.is-visible, .animate-fade-in-right.is-visible {
    opacity: 1; transform: scale(1) translateY(0) translateX(0); animation-name: none;
  }
  .animate-pop-in:not(.animate-on-scroll) { animation: popInGlobal 0.7s 0.1s ease-out forwards; }
  .animate-fade-in-up:not(.animate-on-scroll) { animation: fadeInUpGlobal 0.7s 0.1s ease-out forwards; }
  @keyframes popInGlobal { to { opacity: 1; transform: scale(1); } }
  @keyframes fadeInUpGlobal { to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeInLeftGlobal { to { opacity: 1; transform: translateX(0); } }
  @keyframes fadeInRightGlobal { to { opacity: 1; transform: translateX(0); } }

  /* Responsive Adjustments from previous, mostly fine */
  @media (max-width: 991px) {
    .jwl-hero-section { padding: 3rem 0; } /* Adjusted padding for better mobile hero */
    .jwl-main-title { font-size: 2rem; }
    .jwl-subtitle { font-size: 1rem; }
    .jwl-app-preview { max-width: 280px; }
    .jwl-phone-mockup { border-radius: 30px; padding: 10px; }
    .jwl-screen { border-radius: 20px; height: 450px;}
    .jwl-phone-mockup::before { height: 10px; border-radius: 5px;}
    .jwl-countdown-item { min-width: 60px; padding: 10px 8px; }
    .jwl-countdown-number { font-size: 1.8rem; }
    .jwl-countdown-label { font-size: 0.65rem; }
    .jwl-countdown-separator { font-size: 1.5rem; }
    .jwl-signup-form-container { padding: 25px; }
    .jwl-form-group input { font-size: 0.9rem; padding: 12px; }
    .jwl-submit-btn { font-size: 0.9rem; padding: 0 20px; }
    .jwl-cta-title { font-size: 1.8rem; }
    .jwl-cta-subtitle { font-size: 1rem; }
    .jwl-cta-button { font-size: 1rem; padding: 12px 30px; }
    .jwl-faq-question h3 { font-size: 1rem; }
  }
  @media (max-width: 767px) {
    .jwl-hero-layout-container { text-align: center; } /* Ensure content is centered on mobile */
    .jwl-logo { justify-content: center; } /* Center logo on mobile */
    .jwl-subtitle { margin-left: auto; margin-right: auto; } /* Center subtitle on mobile */
    .col-lg-6 { margin-bottom: 2rem; }
    .col-lg-6:last-child { margin-bottom: 0; }
    .jwl-signup-section .row { flex-direction: column; }
    .jwl-countdown { gap: 5px; }
    .jwl-counter-number { font-size: 2.5rem; }
    .jwl-counter-text { font-size: 0.9rem; }
  }
  </style>
