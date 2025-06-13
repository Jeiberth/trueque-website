<template>
    <div class="how-trueque-works-page-container">

      <div class="how-trueque-works-page">
        <header class="htw-hero-section text-center">
          <div class="htw-hero-bg-shapes">
            <div class="htw-shape htw-shape1"></div>
            <div class="htw-shape htw-shape2"></div>
            <div class="htw-shape htw-shape3"></div>
          </div>
          <div class="container">
            <h1 class="htw-main-title animate-pop-in" style="color: white !important;">{{ $t('how-it-works.intro.title') }}</h1>
            <p class="htw-subtitle lead animate-fade-in-up animation-delay-300">{{ $t('how-it-works.intro.subtitle') }}</p>
          </div>
        </header>

        <section class="htw-step-section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 order-lg-2 animate-on-scroll fade-in-right">
                <div class="htw-animation-placeholder discover-match-animation">
                  <div class="dm-card dm-card1"><span>{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Bicicleta Usada' : 'Used Bicycle' }}</span>🚲</div>
                  <div class="dm-card dm-card2"><span>{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Laptop' : 'Laptop' }}</span>💻</div>
                  <div class="dm-card dm-card3"><span>{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Tarjeta de Regalo' : 'Gift Card' }}</span>🎁💳</div>
                  <div class="dm-match-indicator">💖<br/><span>{{ $t('how-it-works.pageTitle').includes('Cómo') ? '¡Coincidencia!' : 'It\'s a Match!' }}</span></div>
                </div>
              </div>
              <div class="col-lg-6 order-lg-1 animate-on-scroll fade-in-left">
                <h3 class="htw-step-supertitle">{{ $t('how-it-works.step1.superTitle') }}</h3>
                <h2 class="htw-step-title">{{ $t('how-it-works.step1.title') }}</h2>
                <p class="htw-step-description">{{ $t('how-it-works.step1.description') }}</p>
                <div class="htw-feature-highlight">
                  <h4>{{ $t('how-it-works.step1.feature1_title') }}</h4>
                  <p>{{ $t('how-it-works.step1.feature1_desc') }}</p>
                </div>
                <div class="htw-feature-highlight">
                  <h4>{{ $t('how-it-works.step1.feature2_title') }}</h4>
                  <p>{{ $t('how-it-works.step1.feature2_desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="htw-step-section htw-bg-light">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 animate-on-scroll fade-in-left">
                 <div class="htw-animation-placeholder chat-animation">
                  <div class="chat-bubble chat-user1">
                      {{ $t('how-it-works.pageTitle').includes('Cómo') ? '¡Hola! Me gusta tu Lámpara Vintage.' : 'Hi! Love your Vintage Lamp.' }}
                      <img src="https://cdn-icons-png.flaticon.com/512/234/234006.png" alt="Vintage Lamp Icon" style="width: 100px;">
                  </div>
                  <div class="chat-bubble chat-user2">
                      {{ $t('how-it-works.pageTitle').includes('Cómo') ? '¡Gracias! A mí me interesan tus Clases de Guitarra.' : 'Thanks! I\'m interested in your Guitar Lessons.' }}
                      <img src="https://cdn-icons-png.flaticon.com/512/1575/1575409.png" alt="Guitar Lessons Icon" style="width: 100px;">
                  </div>
                  <div class="chat-bubble chat-user1">
                      {{ $t('how-it-works.pageTitle').includes('Cómo') ? '¡Genial! ¿Hacemos un trueque?' : 'Great! Let\'s make a trade?' }}
                  </div>
                </div>
              </div>
              <div class="col-lg-6 animate-on-scroll fade-in-right">
                <h3 class="htw-step-supertitle">{{ $t('how-it-works.step2.superTitle') }}</h3>
                <h2 class="htw-step-title">{{ $t('how-it-works.step2.title') }}</h2>
                <p class="htw-step-description">{{ $t('how-it-works.step2.description') }}</p>
                <div class="htw-feature-highlight">
                  <h4>{{ $t('how-it-works.step2.feature1_title') }}</h4>
                  <p>{{ $t('how-it-works.step2.feature1_desc') }}</p>
                </div>
                <div class="htw-feature-highlight">
                  <h4>{{ $t('how-it-works.step2.feature2_title') }}</h4>
                  <p>{{ $t('how-it-works.step2.feature2_desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="htw-step-section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 order-lg-2 animate-on-scroll fade-in-right">
                <div class="htw-animation-placeholder negotiation-animation">
                  <div class="negotiation-panel my-offer">
                    <h5>{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Mi Oferta' : 'My Offer' }}</h5>
                    <div class="neg-item"><span>{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Libro Raro' : 'Rare Book' }}</span> 📚</div>
                    <div class="neg-item coin-stack"><span>+ $5</span> 💰</div>
                  </div>
                  <div class="negotiation-scale">⚖️</div>
                  <div class="negotiation-panel their-request">
                     <h5>{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Su Petición' : 'Their Request' }}</h5>
                    <div class="neg-item"><span>{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Planta Casera' : 'House Plant' }}</span> 🌱</div>
                  </div>
                  <div class="offer-status">{{ $t('how-it-works.pageTitle').includes('Cómo') ? '¡Oferta Enviada!' : 'Offer Sent!' }}</div>
                </div>
              </div>
              <div class="col-lg-6 order-lg-1 animate-on-scroll fade-in-left">
                <h3 class="htw-step-supertitle">{{ $t('how-it-works.step3.superTitle') }}</h3>
                <h2 class="htw-step-title">{{ $t('how-it-works.step3.title') }}</h2>
                <p class="htw-step-description">{{ $t('how-it-works.step3.description') }}</p>
                <div class="htw-feature-highlight">
                  <h4>{{ $t('how-it-works.step3.feature1_title') }}</h4>
                  <p>{{ $t('how-it-works.step3.feature1_desc') }}</p>
                </div>
                <div class="htw-feature-highlight">
                  <h4>{{ $t('how-it-works.step3.feature2_title') }}</h4>
                  <p>{{ $t('how-it-works.step3.feature2_desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="htw-step-section htw-bg-light">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 animate-on-scroll fade-in-left">
                <div class="htw-animation-placeholder profile-reviews-animation">
                  <div class="profile-card-htw">
                    <img src="https://i.pravatar.cc/80?img=5" alt="User Avatar" class="profile-avatar-htw">
                    <h4>Elizabeth2005</h4>
                    <div class="trade-count-htw">{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Trueques:' : 'Trades:' }} <span class="count-anim">27</span></div>
                    <div class="reviews-htw">
                      <h5>{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Reseñas:' : 'Reviews:' }}</h5>
                      <div class="review-stars">★★★★☆ <span class="review-text-htw">{{ $t('how-it-works.pageTitle').includes('Cómo') ? '(¡Genial!)' : '(Great!)' }}</span></div>
                      <div class="review-stars">★★★★★ <span class="review-text-htw">{{ $t('how-it-works.pageTitle').includes('Cómo') ? '(Excelente)' : '(Excellent)' }}</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 animate-on-scroll fade-in-right">
                <h3 class="htw-step-supertitle">{{ $t('how-it-works.step4.superTitle') }}</h3>
                <h2 class="htw-step-title">{{ $t('how-it-works.step4.title') }}</h2>
                <p class="htw-step-description">{{ $t('how-it-works.step4.description') }}</p>
                <div class="htw-feature-highlight">
                  <h4>{{ $t('how-it-works.step4.feature1_title') }}</h4>
                  <p>{{ $t('how-it-works.step4.feature1_desc') }}</p>
                </div>
                <div class="htw-feature-highlight">
                  <h4>{{ $t('how-it-works.step4.feature2_title') }}</h4>
                  <p>{{ $t('how-it-works.step4.feature2_desc') }}</p>
                </div>
                 <div class="htw-feature-highlight">
                  <h4>{{ $t('how-it-works.step4.feature3_title') }}</h4>
                  <p>{{ $t('how-it-works.step4.feature3_desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="htw-step-section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 order-lg-2 animate-on-scroll fade-in-right">
                 <div class="htw-animation-placeholder inventory-upload-animation">
                  <div class="upload-form-mock">
                    <h5>{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Subir Artículo' : 'Upload Item' }}</h5>
                    <div class="form-field-mock title-field">{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Título...' : 'Title...' }}</div>
                    <div class="form-field-mock desc-field">{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Descripción...' : 'Description...' }}</div>
                    <div class="form-field-mock category-field">{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Categoría ▼' : 'Category ▼' }}</div>
                    <div class="upload-icon-mock">📤</div>
                  </div>
                  <div class="filter-tags-mock">
                      <span>{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Electrónica' : 'Electronics' }}</span>
                      <span>{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Libros' : 'Books' }}</span>
                      <span>{{ $t('how-it-works.pageTitle').includes('Cómo') ? 'Ropa' : 'Clothing' }}</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 order-lg-1 animate-on-scroll fade-in-left">
                <h3 class="htw-step-supertitle">{{ $t('how-it-works.step5.superTitle') }}</h3>
                <h2 class="htw-step-title">{{ $t('how-it-works.step5.title') }}</h2>
                <p class="htw-step-description">{{ $t('how-it-works.step5.description') }}</p>
                <div class="htw-feature-highlight">
                  <h4>{{ $t('how-it-works.step5.feature1_title') }}</h4>
                  <p>{{ $t('how-it-works.step5.feature1_desc') }}</p>
                </div>
                <div class="htw-feature-highlight">
                  <h4>{{ $t('how-it-works.step5.feature2_title') }}</h4>
                  <p>{{ $t('how-it-works.step5.feature2_desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="htw-outro-section text-center">
          <div class="container">
            <h2 class="htw-main-title animate-on-scroll pop-in" style="color: white !important;">{{ $t('how-it-works.outro.title') }}</h2>
            <p class="htw-subtitle lead animate-on-scroll fade-in-up animation-delay-200">{{ $t('how-it-works.outro.subtitle') }}</p>
            <!-- <button class="btn btn-accent btn-lg htw-cta-button animate-on-scroll pop-in animation-delay-400">
              {{ $t('how-it-works.outro.ctaButton') }} 🚀
            </button> -->
            <router-link :to="{ name: 'signup' }" class="btn btn-accent btn-lg htw-cta-button animate-on-scroll pop-in animation-delay-400" >
                {{ $t('how-it-works.outro.ctaButton') }} 🚀
            </router-link>
          </div>
        </section>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

  // Intersection Observer for scroll animations
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
          } else {
            // entry.target.classList.remove('is-visible'); // Optional: re-animate on scroll up
          }
        });
      }, { threshold: 0.1 });
      observer.observe(el);
      observers.push(observer);
    });
  };

  onMounted(() => {
    setupIntersectionObserver();

  });

  onUnmounted(() => {
    observers.forEach(observer => observer.disconnect());
  });


  </script>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  .how-trueque-works-page-container {
    font-family: var(--primary-font);
    color: var(--text-dark);
  }
  .language-switcher-how {
    position: fixed; top: 15px; right: 15px; z-index: 1010;
    background: rgba(255,255,255,0.9); padding: 5px;
    border-radius: var(--border-radius); box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  }
  .language-switcher-how button {
    background: none; border: none; padding: 8px 12px; cursor: pointer;
    font-weight: 600; color: var(--text-dark); transition: all 0.2s ease;
  }
  .language-switcher-how button.active {
    background-color: var(--accent-color); color: var(--text-light);
    border-radius: calc(var(--border-radius) - 4px);
  }
  .language-switcher-how button:not(.active):hover { color: var(--accent-color-darker); }

  .how-trueque-works-page {
    overflow-x: hidden;
  }

  .htw-hero-section {
    padding: 6rem 0 4rem;
    background: linear-gradient(135deg, var(--primary-start), var(--text-dark));
    color: var(--text-light);
    position: relative;
    overflow: hidden;
  }
  .htw-hero-bg-shapes { position: absolute; top:0; left:0; width:100%; height:100%; z-index:0; }
  .htw-shape {
    position: absolute; border-radius: 50%;
    background-color: rgba(255,255,255,0.07);
    animation: htw-float 20s infinite ease-in-out alternate;
  }
  .htw-shape1 { width: 200px; height: 200px; top: 10%; left: 5%; animation-duration: 18s; }
  .htw-shape2 { width: 300px; height: 300px; bottom: 5%; right: 10%; animation-duration: 22s; background-color: rgba(46, 204, 113, 0.1); }
  .htw-shape3 { width: 150px; height: 150px; top: 30%; left: 50%; transform: translateX(-50%); animation-duration: 20s; }
  @keyframes htw-float {
    0% { transform: translateY(0px) rotate(0deg) scale(1); }
    100% { transform: translateY(-30px) rotate(45deg) scale(1.1); }
  }

  .htw-main-title {
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    position: relative; z-index: 1;
  }
  .htw-subtitle {
    font-size: 1.25rem;
    max-width: 700px;
    margin: 0 auto 1rem auto;
    opacity: 0.9;
    position: relative; z-index: 1;
  }

  .htw-step-section {
    padding: 4rem 0;
  }
  .htw-step-section.htw-bg-light {
    background-color: var(--light-shade-bg);
  }
  .htw-step-supertitle {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--accent-color-darker);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }
  .htw-step-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 1.5rem;
  }
  .htw-step-description {
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: #555;
  }
  .htw-feature-highlight {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    border-left: 3px solid var(--accent-color);
  }
  .htw-feature-highlight h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 0.3rem;
  }
  .htw-feature-highlight p {
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 0;
  }

  .htw-animation-placeholder {
    background-color: #e9ecef;
    border-radius: var(--border-radius);
    padding: 2rem;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  }

  /* Discover & Match Animation */
  .discover-match-animation { perspective: 1000px; }
  .dm-card {
    background-color: white; padding: 1rem; border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center; font-weight: 500;
    position: absolute; transition: transform 0.5s ease, opacity 0.5s ease;
    width: 120px;
  }
  .dm-card span { display: block; margin-bottom: 0.3rem; }
  .dm-card1 { transform: translateX(-60px) rotate(-10deg) scale(0.9); animation: swipeCard1 8s infinite ease-in-out; }
  .dm-card2 { transform: scale(1); z-index: 2; animation: swipeCard2 8s infinite ease-in-out; }
  .dm-card3 { transform: translateX(60px) rotate(10deg) scale(0.9); animation: swipeCard3 8s infinite ease-in-out; }
  .dm-match-indicator {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0);
    font-size: 2rem; color: #ff4757; text-align: center;
    animation: matchAppear 8s infinite ease-in-out; z-index: 3;
    background: white; padding: 1rem; border-radius: 50%;
  }
  .dm-match-indicator span { font-size: 0.8rem; color: var(--text-dark); display: block; }

  @keyframes swipeCard1 { 0%,100% { transform: translateX(-60px) rotate(-10deg) scale(0.9); opacity: 0.7; } 20% { transform: translateX(-150px) rotate(-20deg) scale(0.8); opacity: 0; } 25%, 75% { transform: translateX(0) rotate(0) scale(0); opacity:0; } 80% { transform: translateX(-60px) rotate(-10deg) scale(0.9); opacity: 0.7; } }
  @keyframes swipeCard2 { 0%,100% { transform: scale(1); opacity: 1; } 20% { transform: translateY(-10px) scale(1.1); opacity: 1; } 35% { transform: translateY(-10px) scale(1.1); opacity: 1; } 40% { transform: translateY(-10px) scale(0); opacity:0; } 41%, 75% { opacity:0; } 80% {transform: scale(1); opacity: 1;} }
  @keyframes swipeCard3 { 0%,100% { transform: translateX(60px) rotate(10deg) scale(0.9); opacity: 0.7; } 20% { transform: translateX(150px) rotate(20deg) scale(0.8); opacity: 0; } 25%, 75% { transform: translateX(0) rotate(0) scale(0); opacity:0; } 80% { transform: translateX(60px) rotate(10deg) scale(0.9); opacity: 0.7; } }
  @keyframes matchAppear { 0%, 35% { transform: translate(-50%, -50%) scale(0); opacity:0; } 40% { transform: translate(-50%, -50%) scale(1.2); opacity:1; } 50% { transform: translate(-50%, -50%) scale(1); opacity:1; } 60%, 100% { transform: translate(-50%, -50%) scale(0); opacity:0;} }

  /* Chat Animation */
  .chat-animation { justify-content: flex-end; padding:1rem; gap: 0.5rem; }
  .chat-bubble {
    background-color: white; padding: 0.8rem 1rem; border-radius: 15px;
    max-width: 70%; font-size: 0.9rem; position: relative;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    opacity: 0; animation: bubbleAppear 1.5s forwards;
    display: flex; align-items: center; gap: 0.5rem;
  }
  .chat-bubble img { border-radius: 4px; }
  .chat-bubble.chat-user1 { align-self: flex-start; background-color: var(--accent-color-darker); color:white; border-bottom-left-radius: 3px; animation-delay: 0.5s; }
  .chat-bubble.chat-user2 { align-self: flex-end; background-color: #fff; border-bottom-right-radius: 3px; animation-delay: 1.5s; }
  .chat-bubble.chat-user1:nth-of-type(3) { animation-delay: 2.5s; }
  @keyframes bubbleAppear { from { transform: translateY(10px) scale(0.8); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }

  /* Negotiation Animation */
  .negotiation-animation { flex-direction: row; justify-content: space-around; align-items: center; }
  .negotiation-panel { background: white; padding: 1rem; border-radius: 8px; width: 40%; text-align: center; }
  .negotiation-panel h5 { font-weight: 600; margin-bottom: 0.8rem; }
  .neg-item { background: var(--light-shade-bg); padding: 0.5rem; border-radius: 4px; margin-bottom: 0.5rem; font-size: 0.9rem; animation: itemPopIn 0.5s ease-out forwards; opacity:0; }
  .neg-item:nth-child(2) { animation-delay: 0.3s; }
  .neg-item.coin-stack { animation-delay: 0.6s; color: #b8860b; }
  .negotiation-scale { font-size: 3rem; color: var(--text-dark); animation: scaleTip 2s infinite alternate ease-in-out; }
  .offer-status { position: absolute; bottom: 1rem; font-weight: bold; color: var(--primary-start); animation: statusPopIn 0.5s 1s forwards; opacity:0; }
  @keyframes itemPopIn { from {transform:scale(0.5); opacity:0;} to {transform:scale(1); opacity:1;} }
  @keyframes scaleTip { from {transform: rotate(-5deg);} to {transform: rotate(5deg);} }
  @keyframes statusPopIn { from {transform:translateY(10px); opacity:0;} to {transform:translateY(0); opacity:1;} }

  /* Profile & Reviews Animation */
  .profile-card-htw { background: white; padding: 1.5rem; border-radius: var(--border-radius); text-align: center; animation: profileCardShow 0.8s ease-out; }
  .profile-avatar-htw { width: 80px; height: 80px; border-radius: 50%; margin-bottom: 0.5rem; border: 3px solid var(--accent-color); }
  .profile-card-htw h4 { font-weight: 600; margin-bottom: 0.2rem; }
  .trade-count-htw { font-size: 0.9rem; color: #555; margin-bottom: 0.8rem; }
  .trade-count-htw .count-anim { font-weight: bold; animation: countUpAnim 1s 0.5s forwards; opacity:0; display:inline-block; }
  .reviews-htw h5 { font-size: 1rem; font-weight: 600; margin-bottom: 0.3rem; }
  .review-stars { color: #f39c12; font-size: 0.9rem; margin-bottom: 0.2rem; animation: starsAppear 0.5s forwards; opacity:0; }
  .review-stars:nth-of-type(2) { animation-delay: 0.3s; }
  .review-text-htw { color: var(--text-dark); font-style: italic; font-size: 0.8rem; }
  @keyframes profileCardShow { from { transform: scale(0.8) rotateY(90deg); opacity:0; } to { transform: scale(1) rotateY(0deg); opacity:1; } }
  @keyframes countUpAnim { from { transform: translateY(10px); opacity:0; } to { transform: translateY(0); opacity:1; } } /* Simple pop, actual counting is complex */
  @keyframes starsAppear { from { opacity:0; letter-spacing: 5px; } to { opacity:1; letter-spacing: 1px; } }

  /* Inventory & Upload Animation */
  .inventory-upload-animation { gap: 1rem; }
  .upload-form-mock { background: white; padding: 1.5rem; border-radius: 8px; width: 70%; text-align: left; }
  .upload-form-mock h5 { font-weight: 600; margin-bottom: 1rem; text-align: center; }
  .form-field-mock { background: var(--light-shade-bg); padding: 0.7rem; border-radius: 4px; margin-bottom: 0.7rem; font-size: 0.9rem; color: #777; animation: fieldSlideIn 0.5s ease-out forwards; opacity:0; }
  .form-field-mock.title-field { animation-delay: 0.2s; }
  .form-field-mock.desc-field { animation-delay: 0.4s; }
  .form-field-mock.category-field { animation-delay: 0.6s; }
  .upload-icon-mock { font-size: 2.5rem; text-align: center; margin-top: 1rem; color: var(--accent-color); animation: iconPulse 1.5s infinite; }
  .filter-tags-mock { display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; margin-top: 1rem; }
  .filter-tags-mock span { background: var(--accent-color-darker); color: white; padding: 0.3rem 0.7rem; font-size: 0.8rem; border-radius: 15px; animation: tagPop 0.3s ease-out forwards; opacity:0; transform:scale(0.5); }
  .filter-tags-mock span:nth-child(1) { animation-delay: 0.8s; }
  .filter-tags-mock span:nth-child(2) { animation-delay: 0.9s; }
  .filter-tags-mock span:nth-child(3) { animation-delay: 1.0s; }
  @keyframes fieldSlideIn { from { transform: translateX(-20px); opacity:0; } to { transform: translateX(0); opacity:1; } }
  @keyframes iconPulse { 0%,100% {transform: scale(1);} 50% {transform: scale(1.15);} }
  @keyframes tagPop { to { opacity:1; transform:scale(1);} }


  .htw-outro-section {
    padding: 4rem 0;
    background: linear-gradient(135deg, var(--text-dark), var(--primary-start));
    color: var(--text-light);
  }
  .htw-cta-button {
    padding: 0.9rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 1rem;
    background-color: var(--accent-color);
    color: var(--text-light);
    border: none;
  }
  .htw-cta-button:hover {
    background-color: var(--accent-color-darker);
    transform: translateY(-3px);
  }

  /* Animation Utilities */
  .animate-pop-in { animation: popInGlobal 0.7s ease-out forwards; opacity: 0; transform: scale(0.8); }
  .animate-fade-in-up { animation: fadeInUpGlobal 0.7s ease-out forwards; opacity: 0; transform: translateY(30px); }
  .animate-fade-in-left { animation: fadeInLeftGlobal 0.7s ease-out forwards; opacity: 0; transform: translateX(-30px); }
  .animate-fade-in-right { animation: fadeInRightGlobal 0.7s ease-out forwards; opacity: 0; transform: translateX(30px); }

  .animation-delay-100 { animation-delay: 0.1s !important; }
  .animation-delay-200 { animation-delay: 0.2s !important; }
  .animation-delay-300 { animation-delay: 0.3s !important; }
  .animation-delay-400 { animation-delay: 0.4s !important; }

  .animate-on-scroll.is-visible,
  .animate-pop-in.is-visible,
  .animate-fade-in-up.is-visible,
  .animate-fade-in-left.is-visible,
  .animate-fade-in-right.is-visible {
    opacity: 1;
    transform: scale(1) translateY(0) translateX(0);
  }

  @keyframes popInGlobal { to { opacity: 1; transform: scale(1); } }
  @keyframes fadeInUpGlobal { to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeInLeftGlobal { to { opacity: 1; transform: translateX(0); } }
  @keyframes fadeInRightGlobal { to { opacity: 1; transform: translateX(0); } }

  /* Responsive */
  @media (max-width: 991px) {
    .htw-step-title { font-size: 2rem; }
    .htw-animation-placeholder { min-height: 300px; margin-bottom: 2rem; }
    .htw-step-section .row > div:first-child { margin-bottom: 2rem; } /* Space if animation is first */
    .htw-step-section .row > div.order-lg-2 + div.order-lg-1 { margin-bottom:0; } /* No double margin */
  }
  @media (max-width: 767px) {
    .htw-main-title { font-size: 2.5rem; }
    .htw-subtitle { font-size: 1.1rem; }
    .htw-step-title { font-size: 1.8rem; }
    .htw-animation-placeholder { padding: 1.5rem; min-height: 280px; }
    .language-switcher-how { top:10px; right:10px; padding:3px; }
    .language-switcher-how button { padding: 6px 10px; font-size:0.9rem; }
    .dm-card { width: 100px; font-size:0.8rem; }
    .negotiation-animation { flex-direction: column; gap:1rem; }
    .negotiation-panel { width: 80%; }
  }

  </style>
