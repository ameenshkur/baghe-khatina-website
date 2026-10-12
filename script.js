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

// One predictable entrance system across all three language pages.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!motionPreference.matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion-ready');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
  document.querySelectorAll('[data-reveal], [data-scroll-media], .expertise-row').forEach(element => revealObserver.observe(element));
}

// Let the real figures remain readable without JavaScript or with reduced motion.
// Animate them once when the reach section enters view.
const reachNumbers = document.querySelectorAll('.reach-number[data-count]');
if (reachNumbers.length && !motionPreference.matches && 'IntersectionObserver' in window) {
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      countObserver.unobserve(entry.target);
      const element = entry.target;
      const target = Number(element.dataset.count);
      if (!Number.isFinite(target)) return;
      const duration = 1300;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        element.textContent = String(Math.round(target * (1 - (1 - progress) ** 3)));
        if (progress < 1) requestAnimationFrame(tick);
      }
      element.textContent = '0';
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.3 });
  reachNumbers.forEach(number => countObserver.observe(number));
}

// A small scroll-linked depth shift on the two large photographs.
if (!motionPreference.matches) {
  const depthImages = document.querySelectorAll('.hero-photo--filled img, .interlude-photo[src]');
  let depthScheduled = false;
  function updateDepth() {
    depthScheduled = false;
    depthImages.forEach(image => {
      const section = image.closest('section');
      const rect = section.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > innerHeight) return;
      const distance = (rect.top + rect.height / 2 - innerHeight / 2) / (innerHeight + rect.height);
      image.style.setProperty('--photo-shift', `${Math.max(-40, Math.min(40, distance * -90))}px`);
    });
  }
  function scheduleDepth() {
    if (!depthScheduled) { depthScheduled = true; requestAnimationFrame(updateDepth); }
  }
  addEventListener('scroll', scheduleDepth, { passive: true });
  addEventListener('resize', scheduleDepth);
  updateDepth();
}

// Enhance the existing, translated brand cards into the portfolio from the
// concept. The original grid remains available when JavaScript is disabled.
const portfolioWall = document.querySelector('.partner-wall');
if (portfolioWall) {
  const cards = [...portfolioWall.querySelectorAll(':scope > .partner-logo')];
  const words = isKurdish
    ? { region: 'کۆمەڵەی براندەکان', list: 'براندێک هەڵبژێرە', previous: 'براندی پێشوو', next: 'براندی داهاتوو', label: 'کۆمەڵەی براندەکان' }
    : isArabic
      ? { region: 'محفظة العلامات', list: 'اختر علامة', previous: 'العلامة السابقة', next: 'العلامة التالية', label: 'محفظة العلامات' }
      : { region: 'Brand portfolio', list: 'Choose a brand', previous: 'Previous brand', next: 'Next brand', label: 'Portfolio' };
  if (cards.length > 1) {
    const carousel = document.createElement('div');
    carousel.className = 'portfolio-carousel';
    carousel.setAttribute('role', 'region');
    carousel.setAttribute('aria-roledescription', 'carousel');
    carousel.setAttribute('aria-label', words.region);

    const index = document.createElement('div');
    index.className = 'brand-index';
    index.setAttribute('aria-label', words.list);
    const mobilePicker = document.createElement('div');
    mobilePicker.className = 'mobile-brand-picker';
    const pickerLabel = document.createElement('label');
    pickerLabel.htmlFor = 'portfolio-brand-select';
    pickerLabel.textContent = words.list;
    const pickerSelect = document.createElement('select');
    pickerSelect.id = 'portfolio-brand-select';
    mobilePicker.append(pickerLabel, pickerSelect);
    const stage = document.createElement('div');
    stage.className = 'portfolio-stage';
    const controls = document.createElement('div');
    controls.className = 'portfolio-controls';
    const previous = document.createElement('button');
    previous.type = 'button';
    previous.setAttribute('aria-label', words.previous);
    previous.textContent = isArabic ? '→' : '←';
    const next = document.createElement('button');
    next.type = 'button';
    next.setAttribute('aria-label', words.next);
    next.textContent = isArabic ? '←' : '→';
    const count = document.createElement('span');
    count.className = 'portfolio-count';
    count.setAttribute('aria-live', 'polite');
    controls.append(previous, count, next);
    portfolioWall.before(carousel);
    carousel.append(index, mobilePicker, stage);
    stage.append(portfolioWall, controls);

    let current = 0;
    cards.forEach((card, position) => {
      const logo = card.querySelector('.logo-stage img');
      const description = card.querySelector('p');
      const name = logo?.alt || card.dataset.brand || String(position + 1);
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = name;
      button.addEventListener('click', () => showBrand(position));
      index.append(button);
      const option = document.createElement('option');
      option.value = String(position);
      option.textContent = name;
      pickerSelect.append(option);

      const info = document.createElement('div');
      info.className = 'portfolio-info';
      const kicker = document.createElement('span');
      kicker.className = 'portfolio-kicker';
      kicker.textContent = `${words.label} / ${String(position + 1).padStart(2, '0')}`;
      const heading = document.createElement('h3');
      heading.textContent = name;
      info.append(kicker, heading);
      if (description) info.append(description);
      card.append(info);
      card.setAttribute('role', 'group');
      card.setAttribute('aria-roledescription', 'slide');
      card.setAttribute('aria-label', `${position + 1} / ${cards.length}: ${name}`);
    });

    function showBrand(position) {
      current = (position + cards.length) % cards.length;
      cards.forEach((card, i) => { card.hidden = i !== current; });
      [...index.children].forEach((button, i) => button.setAttribute('aria-current', String(i === current)));
      pickerSelect.value = String(current);
      count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
    }
    pickerSelect.addEventListener('change', () => showBrand(Number(pickerSelect.value)));
    previous.addEventListener('click', () => showBrand(current - 1));
    next.addEventListener('click', () => showBrand(current + 1));
    carousel.addEventListener('keydown', event => {
      if (event.target === pickerSelect) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        showBrand(current + (event.key === 'ArrowRight' ? 1 : -1) * (isArabic ? -1 : 1));
      }
    });
    showBrand(0);
  }
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
