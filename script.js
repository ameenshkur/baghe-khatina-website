const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const picker = document.querySelector('.language-picker');
const languageButton = picker?.querySelector('.language-trigger');
const languageMenu = picker?.querySelector('.language-menu');
const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const isArabic = document.documentElement.dir === 'rtl';
const isKurdish = document.documentElement.lang === 'ckb';

function setLanguageMenu(open) {
  if (!languageButton || !languageMenu) return;
  languageButton.setAttribute('aria-expanded', String(open));
  languageMenu.hidden = !open;
}

function setMobileMenu(open) {
  if (!menuButton || !mainNav) return;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', isKurdish ? (open ? 'مێنیووەکە دابخە' : 'مێنیووەکە بکەرەوە') : isArabic ? (open ? 'أغلق القائمة' : 'افتح القائمة') : (open ? 'Close menu' : 'Open menu'));
  mainNav.classList.toggle('is-open', open);
}

languageButton?.addEventListener('click', () => {
  setMobileMenu(false);
  setLanguageMenu(languageMenu.hidden);
});

languageButton?.addEventListener('keydown', event => {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    setLanguageMenu(true);
    languageMenu.querySelector('a')?.focus();
  }
});

menuButton?.addEventListener('click', () => {
  setLanguageMenu(false);
  setMobileMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

window.matchMedia('(min-width: 821px)').addEventListener('change', event => {
  if (event.matches) setMobileMenu(false);
});

mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMobileMenu(false)));

document.addEventListener('click', event => {
  if (picker && !picker.contains(event.target)) setLanguageMenu(false);
  if (mainNav && menuButton && !mainNav.contains(event.target) && !menuButton.contains(event.target)) setMobileMenu(false);
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (languageMenu && !languageMenu.hidden) {
    setLanguageMenu(false);
    languageButton.focus();
  } else if (menuButton?.getAttribute('aria-expanded') === 'true') {
    setMobileMenu(false);
    menuButton.focus();
  }
});

// Whole heading lines preserve Arabic joining and the original accessible text.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const activeAnimations = new Set();
document.querySelectorAll('h1, h2').forEach(heading => {
  const lines = heading.innerHTML.split(/<br\s*\/?>/i);
  heading.innerHTML = lines.map(line => `<span class="heading-line"><span>${line}</span></span>`).join('');
});

function playEntrance(element) {
  if (motionPreference.matches || !element.animate) return;
  const animation = element.animate([
    { opacity: 0.15, transform: 'translateY(24px)' },
    { opacity: 1, transform: 'translateY(0)' }
  ], { duration: 750, easing: 'cubic-bezier(.16,1,.3,1)' });
  activeAnimations.add(animation);
  animation.finished.catch(() => {}).finally(() => activeAnimations.delete(animation));
  element.querySelectorAll('.heading-line > span').forEach((line, index) => {
    const reveal = line.animate(isArabic ? [
      { opacity: 0, transform: 'translateY(24px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ] : [
      { transform: 'translateY(105%)' }, { transform: 'translateY(0)' }
    ], { duration: 950, delay: index * 100, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
    activeAnimations.add(reveal);
    reveal.finished.catch(() => {}).finally(() => activeAnimations.delete(reveal));
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      playEntrance(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
}
motionPreference.addEventListener('change', event => {
  if (event.matches) activeAnimations.forEach(animation => animation.cancel());
});

// The editorial frames open as they enter the reading area. Each pair has a
// small offset, while image depth, caption and rule follow the same progress.
const scrollMedia = [...document.querySelectorAll('[data-scroll-media]')];
let mediaFrameRequested = false;
function updateScrollMedia() {
  mediaFrameRequested = false;
  if (motionPreference.matches) {
    scrollMedia.forEach(card => card.removeAttribute('style'));
    return;
  }
  const viewport = innerHeight;
  scrollMedia.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const secondInPair = [...card.parentElement.children].indexOf(card) % 2 === 1;
    const start = viewport * (secondInPair ? .98 : 1.04);
    const end = viewport * (secondInPair ? .62 : .68);
    const progress = Math.max(0, Math.min(1, (start - top) / (start - end)));
    card.style.setProperty('--reveal-cover', `${Math.round((1 - progress) * 100)}%`);
    card.style.setProperty('--reveal-rise', `${Math.round((1 - progress) * 44)}px`);
    card.style.setProperty('--reveal-scale', (1.12 - progress * .12).toFixed(3));
    card.style.setProperty('--reveal-opacity', progress.toFixed(3));
    card.style.setProperty('--reveal-line', `${Math.round(progress * 48)}px`);
  });
}
function scheduleScrollMedia() {
  if (mediaFrameRequested) return;
  mediaFrameRequested = true;
  requestAnimationFrame(updateScrollMedia);
}
if (scrollMedia.length) {
  addEventListener('scroll', scheduleScrollMedia, { passive: true });
  addEventListener('resize', scheduleScrollMedia);
  addEventListener('load', scheduleScrollMedia);
  document.fonts?.ready.then(scheduleScrollMedia);
  motionPreference.addEventListener('change', scheduleScrollMedia);
  updateScrollMedia();
}

// Reveal the existing scroll control after the visitor stays on the hero.
const hero = document.getElementById('home');
const scrollCue = document.querySelector('.hero-scroll-cue');
let cueTimer;
let heroActive = false;
function hideScrollCue() {
  scrollCue?.classList.remove('is-visible');
  scrollCue?.setAttribute('aria-hidden', 'true');
  scrollCue?.setAttribute('tabindex', '-1');
}
function updateScrollCue() {
  if (!hero || !scrollCue) return;
  const rect = hero.getBoundingClientRect();
  const active = document.visibilityState === 'visible' && rect.top <= innerHeight * .24 && rect.bottom >= innerHeight * .58;
  if (active === heroActive) return;
  heroActive = active;
  clearTimeout(cueTimer);
  hideScrollCue();
  if (active) cueTimer = setTimeout(() => {
    if (heroActive) {
      scrollCue.classList.add('is-visible');
      scrollCue.setAttribute('aria-hidden', 'false');
      scrollCue.removeAttribute('tabindex');
    }
  }, 8000);
}
hideScrollCue();
addEventListener('scroll', updateScrollCue, { passive: true });
addEventListener('resize', updateScrollCue);
document.addEventListener('visibilitychange', updateScrollCue);
updateScrollCue();
scrollCue?.addEventListener('click', () => {
  clearTimeout(cueTimer);
  hideScrollCue();
});

// Mark the section at the reading position, including the final short section.
const sectionLinks = [...(mainNav?.querySelectorAll('a[href^="#"]') || [])];
const sections = sectionLinks.map(link => document.querySelector(link.hash)).filter(Boolean);
let scheduled = false;
function updateCurrentSection() {
  scheduled = false;
  const readingLine = document.querySelector('.site-header').offsetHeight + Math.min(180, innerHeight * .22);
  let current = sections[0]?.id || null;
  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= readingLine) current = section.id;
  });
  if (scrollY > 0 && innerHeight + scrollY >= document.documentElement.scrollHeight - 8) current = sections.at(-1)?.id;
  sectionLinks.forEach(link => {
    if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
function scheduleSectionUpdate() {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateCurrentSection); }
}
addEventListener('scroll', scheduleSectionUpdate, { passive: true });
addEventListener('resize', scheduleSectionUpdate);
addEventListener('load', updateCurrentSection);
updateCurrentSection();
