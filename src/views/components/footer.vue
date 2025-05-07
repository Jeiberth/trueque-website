
<template>
    <footer class="footer">
      <div class="footer-container">
        <!-- Brand & Logo -->
        <div class="footer-section brand-section">
          <div class="logo-container">
            <img
              src="../../assets/truequeLogo.jpg"
              alt="Trueque Logo"
              class="logo"
              loading="lazy"
            />
            <span class="brand-name">Trueque</span>
          </div>
          <p class="footer-description">
            {{ $t('Connecting communities through sustainable exchange.') }}
          </p>
        </div>

        <!-- Social Links -->
        <div class="footer-section social-section">
          <h4>{{ $t('Follow Us') }}</h4>
          <div class="social-links">
            <a :href="socialLinks.instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a :href="socialLinks.facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
            <a :href="socialLinks.tiktok" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
            <a :href="socialLinks.youtube" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="footer-section contact-section">
          <h4>{{ $t('Contact Us') }}</h4>
          <p><i class="fas fa-envelope"></i> truequeww@gmail.com</p>
          <!-- <p><i class="fas fa-phone"></i> +1 (555) 123-4567</p> -->
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Trueque. {{ $t('All rights reserved.') }}</p>
        <!-- <div class="footer-links">
          <a href="#">{{ $t('Privacy Policy') }}</a>
          <a href="#">{{ $t('Terms of Service') }}</a>
          <a href="#">{{ $t('Cookie Policy') }}</a>
        </div> -->
      </div>
    </footer>
  </template>

  <script setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { locale } = useI18n()

  const socialLinks = computed(() => {
    const lang = locale.value
    return {
      instagram: lang === 'es' ? 'https://instagram.com/trueque.es' : 'https://instagram.com/trueque.en',
      facebook: lang === 'es' ? 'https://www.facebook.com/profile.php?id=61574890337035' : 'https://www.facebook.com/profile.php?id=61574936397748',
      tiktok: lang === 'es' ? 'https://tiktok.com/@trueque.es' : 'https://tiktok.com/@trueque.en',
      youtube: lang === 'es' ? 'https://youtube.com/@trueque-es' : 'https://youtube.com/@trueque-en',
    }
  })
  </script>

  <style scoped>
  .footer {
    background: var(--gradient-primary);
    color: var(--text-light);
    padding: 2.5rem 1rem 1rem;
    font-family: inherit;
  }

  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .footer-section {
    flex: 1;
    min-width: min(100%, 250px);
    margin-bottom: 1.5rem;
  }

  .brand-section {
    display: flex;
    flex-direction: column;
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 0.8rem;
  }

  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--text-light);
  }

  .brand-name {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .footer-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
    line-height: 1.4;
    margin-top: 0.5rem;
    margin-bottom: 0px;
  }

  .footer-section h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: white;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .social-links a {
    color: var(--text-light);
    font-size: 1.5rem;
    transition: transform 0.2s ease, color 0.3s ease;
    display: inline-block;
  }

  .social-links a:hover {
    color: var(--signup-color);
    transform: translateY(-2px);
  }

  .contact-section p {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
  }

  .contact-section i {
    width: 1rem;
    text-align: center;
  }

  .footer-bottom {
    text-align: center;
    padding-top: 1.5rem;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    margin-top: 1.5rem;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0.8rem;
  }

  .footer-links a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-links a:hover {
    color: white;
    text-decoration: underline;
  }

  /* Mobile Optimization */
  @media (max-width: 768px) {
    .footer {
      padding: 2rem 0.5rem 1rem;
    }

    .footer-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1rem;
      padding: 0 0.5rem;
    }

    .footer-section {
      width: 100%;
      max-width: 300px;
      margin-bottom: 1.5rem;
    }

    .logo-container {
      justify-content: center;
    }

    .social-links {
      justify-content: center;
    }

    .contact-section p {
      justify-content: center;
    }

    .footer-links {
      gap: 0.8rem 1.2rem;
    }
  }

  @media (max-width: 480px) {
    .footer {
      padding: 1.5rem 0.5rem 0.5rem;
    }

    .footer-bottom {
      padding-top: 1rem;
      margin-top: 1rem;
    }

    .footer-links {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
  </style>
