<template>
    <nav class="navbar" :class="{ 'scrolled': isScrolled }">
      <div class="navbar-container">
        <div class="left-section">
          <div class="logo-container">
            <img src="../../assets/truequeLogo.jpg" alt="Trueque Logo" class="logo">
            <span class="brand-name">Trueque</span>
          </div>
        </div>

        <ul class="nav-links">
          <li v-for="(link, index) in middleLinks" :key="index">
            <a
              :href="link.href"
              class="nav-link"
              :class="{ 'active': activeLink === link.name }"
              @click="setActiveLink(link.name)"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>

        <div class="right-section">
          <div class="language-selector">
            <button
              class="language-option"
              :class="{ 'active': language === 'en' }"
              @click="setLanguage('en')"
            >
              EN
            </button>
            <span class="language-divider">/</span>
            <button
              class="language-option"
              :class="{ 'active': language === 'es' }"
              @click="setLanguage('es')"
            >
              ES
            </button>
          </div>

          <a href="#signup" class="sign-up-button"  :class="{ 'active': activeLink === null }" @click="setActiveLink('signup')">
            {{ $t("Sign Up") }}
          </a>

          <button
            class="mobile-menu-button"
            @click="toggleMobileMenu"
            aria-label="Toggle navigation"
          >
            <div class="menu-icon" :class="{ 'open': isMobileOpen }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      <transition name="menu-slide">
        <div v-if="isMobileOpen" class="mobile-menu">
          <div class="mobile-header">
            <div class="mobile-logo-container">
              <img src="https://jeiberth.github.io/MyWebsite/trueque/truequeLogo.jpg" alt="Trueque Logo" class="mobile-logo">
              <span class="mobile-brand-name">Trueque</span>
            </div>
            <button class="mobile-close-button" @click="toggleMobileMenu">
              &times;
            </button>
          </div>

          <div class="mobile-menu-content">
            <ul class="mobile-nav-links">
              <li v-for="(link, index) in middleLinks" :key="`mobile-${index}`">
                <a
                  :href="link.href"
                  class="mobile-nav-link"
                  :class="{ 'active': activeLink === link.name }"
                  @click="handleMobileClick(link.name)"
                >
                  {{ link.name }}
                </a>
              </li>
            </ul>

            <div class="mobile-footer">
              <div class="mobile-language-selector">
                <button
                  class="mobile-language-option"
                  :class="{ 'active': language === 'en' }"
                  @click="setLanguage('en')"
                >
                  English
                </button>
                <button
                  class="mobile-language-option"
                  :class="{ 'active': language === 'es' }"
                  @click="setLanguage('es')"
                >
                  Español
                </button>
              </div>
               <a href="#signup" class="mobile-sign-up-button"  :class="{ 'active': activeLink === null }" @click="() => { setActiveLink('signup'); toggleMobileMenu(); }">
                  {{ $t("Sign Up") }}
                </a>
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </template>

  <script setup>
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
  import { useI18n } from 'vue-i18n'
  const { locale } = useI18n()
  const { t } = useI18n();

  const middleLinks = computed(() => [
    { name: t('Home'), href: '#' },
    { name: t('How It Works'), href: '#how-it-works' },
    { name: t('About Us'), href: '#about' },
    { name: t('Privacy Policy'), href: '#privacy' }
    ]);
  const activeLink = ref('Home');
  const isScrolled = ref(false);
  const isMobileOpen = ref(false);
  const language = ref('en');

  const setActiveLink = (linkName) => {
    // If the sign-up is clicked, we clear any active middle link
    if (linkName === 'signup') {
        activeLink.value = null;
    } else {
        activeLink.value = linkName;
    }
    };


  const setLanguage = (lang) => {
    language.value = lang;
    locale.value = lang;
  };

  const toggleMobileMenu = () => {
    isMobileOpen.value = !isMobileOpen.value;
    if (isMobileOpen.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleMobileClick = (linkName) => {
    setActiveLink(linkName);
    toggleMobileMenu();
  };

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    language.value = locale.value;
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
    document.body.style.overflow = '';
  });
  </script>

  <style scoped>

  /* Base navbar */
  .navbar {
    /* position: fixed;
    top: 0;
    left: 0; */
    width: 100%;
    padding: 1.2rem 0;
    background: var(--gradient-primary);
    z-index: 1000;
    transition: all 0.4s ease;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }

  .navbar.scrolled {
    padding: 0.8rem 0;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  }

  .navbar-container {
    /* max-width: 1280px; */
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: auto 1fr auto; /* Left, Center, Right */
    align-items: center;
    gap: 2rem;
  }

  /* Left Section */
  .left-section {
    display: flex;
    justify-content: flex-start; /* Align logo and name to the left */
  }

  /* Logo + Name (Left) */
  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--text-light);
  }

  .brand-name {
    font-weight: 700;
    font-size: 1.4rem;
    color: var(--text-light);
    letter-spacing: 0.5px;
  }

  /* Middle Navigation */
  .nav-links {
      display: flex;
      list-style: none;
      justify-content: center; /* Center the navigation links */
      align-items: center; /* Vertically align items in the middle */
      gap: 2rem;
      margin: 0;
      padding: 0;
  }

    .sign-up-button.active {
        background: var(--signup-color);
        color: white;
        border: 2px solid white;
    }

    .mobile-sign-up-button.active {
        background: var(--signup-color);
        color: white;
        border: 2px solid white;
    }



  .nav-link {
    color: var(--text-light);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.5rem 0;
    position: relative;
    transition: all 0.3s ease;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--text-light);
    transition: width 0.3s ease;
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }

  /* Right Section */
  .right-section {
    display: flex;
    align-items: center;
    justify-content: flex-end; /* Align language and sign-up to the right */
    gap: 1.5rem;
  }

  /* Language Selector */
  .language-selector {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .language-option {
    background: none;
    border: none;
    color: rgba(248, 255, 249, 0.7);
    font-weight: 500;
    cursor: pointer;
    padding: 0.2rem 0.5rem;
    transition: all 0.3s ease;
  }

  .language-option.active {
    color: var(--text-light);
    font-weight: 600;
  }

  .language-divider {
    color: rgba(248, 255, 249, 0.5);
  }

  /* Sign Up Button */
  .sign-up-button {
    background: var(--text-light);
    color: var(--text-dark);
    padding: 0.6rem 1.5rem;
    border-radius: var(--border-radius);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border: 2px solid white;
    cursor: pointer;
  }

  .sign-up-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  /* Mobile Menu Button */
  .mobile-menu-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: none;
  }

  .menu-icon {
    width: 24px;
    height: 18px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu-icon span {
    display: block;
    width: 100%;
    height: 2px;
    background: var(--text-light);
    transition: all 0.3s ease;
  }

  .menu-icon.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .menu-icon.open span:nth-child(2) {
    opacity: 0;
  }

  .menu-icon.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  /* Mobile Menu */
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--gradient-reverse);
    z-index: 999;
    display: flex;
    flex-direction: column;
  }

  .mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid rgba(248, 255, 249, 0.1);
  }

  .mobile-logo-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .mobile-logo {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--text-light);
  }

  .mobile-brand-name {
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--text-light);
  }

  .mobile-close-button {
    background: none;
    border: none;
    color: var(--text-light);
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem;
  }

  .mobile-menu-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    overflow-y: auto;
  }

  .mobile-nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
  }

  .mobile-nav-link {
    color: var(--text-light);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem;
    display: block;
    border-radius: var(--border-radius);
    transition: all 0.3s ease;
  }

  .mobile-nav-link:hover,
  .mobile-nav-link.active {
    background: rgba(248, 255, 249, 0.1);
  }

  .mobile-footer {
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(248, 255, 249, 0.1);
    display: flex; /* Added flexbox */
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items horizontally */
    gap: 1rem; /* Add some space between items */
  }

  .mobile-language-selector {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 0; /* Adjusted margin */
  }

  .mobile-language-option {
    background: none;
    border: none;
    color: rgba(248, 255, 249, 0.7);
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    padding: 0.5rem;
  }

  .mobile-language-option.active {
    color: var(--text-light);
    font-weight: 600;
    text-decoration: underline;
  }

  .mobile-sign-up-button {
    display: block;
    background: var(--text-light);
    color: var(--text-dark);
    padding: 1rem;
    border-radius: var(--border-radius);
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    border: 2px solid white;

    transition: all 0.3s ease;
    margin-top: 0; /* Adjusted margin */
  }

  .mobile-sign-up-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  /* Animations */
  .menu-slide-enter-active,
  .menu-slide-leave-active {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .menu-slide-enter-from,
  .menu-slide-leave-to {
    transform: translateX(100%);
  }

  /* Responsive styles */
  @media (max-width: 992px) {
    .navbar-container {
      grid-template-columns: auto 1fr auto;
      gap: 1rem;
      padding: 0 1.5rem;
    }

    .nav-links {
      display: none;
    }

    .mobile-menu-button {
      display: block;
    }

    .right-section {
      gap: 1rem;
    }

    .language-selector,
    .sign-up-button {
      display: none;
    }
  }

  @media (max-width: 576px) {
    .brand-name {
      font-size: 1.2rem;
    }

    .logo {
      width: 36px;
      height: 36px;
    }
  }
  </style>
