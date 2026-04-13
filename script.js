const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

if (menuToggle && primaryNav) {
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('is-open');
  };

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    primaryNav.classList.toggle('is-open');
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!primaryNav.classList.contains('is-open')) return;
    if (primaryNav.contains(event.target) || menuToggle.contains(event.target)) return;
    closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeMenu();
  });
}

const initSlider = ({
  trackId,
  itemClass,
  prevId,
  nextId,
  dotsId,
  visibleDesktop,
  visibleTablet,
}) => {
  const track = document.getElementById(trackId);
  if (!track) return;

  const items = Array.from(track.querySelectorAll(`.${itemClass}`));
  if (items.length < 2) return;

  const prev = document.getElementById(prevId);
  const next = document.getElementById(nextId);
  const dotsWrap = dotsId ? document.getElementById(dotsId) : null;

  let index = 0;

  const getVisible = () => {
    if (window.innerWidth <= 800) return 1;
    if (window.innerWidth <= 1100) return visibleTablet;
    return visibleDesktop;
  };

  const maxIndex = () => Math.max(0, items.length - getVisible());

  const renderDots = () => {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    const pages = maxIndex() + 1;
    for (let i = 0; i < pages; i += 1) {
      const dot = document.createElement('button');
      dot.className = `dot${i === index ? ' is-active' : ''}`;
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => {
        index = i;
        update();
      });
      dotsWrap.appendChild(dot);
    }
  };

  const update = () => {
    const width = track.clientWidth;
    const gap = 16;
    const visible = getVisible();
    const itemWidth = (width - (visible - 1) * gap) / visible;
    const offset = (itemWidth + gap) * index;
    track.scrollTo({ left: offset, behavior: 'smooth' });

    if (prev) prev.disabled = index === 0;
    if (next) next.disabled = index >= maxIndex();

    if (dotsWrap) {
      Array.from(dotsWrap.children).forEach((dot, i) => {
        dot.classList.toggle('is-active', i === index);
      });
    }
  };

  prev?.addEventListener('click', () => {
    index = Math.max(0, index - 1);
    update();
  });

  next?.addEventListener('click', () => {
    index = Math.min(maxIndex(), index + 1);
    update();
  });

  window.addEventListener('resize', () => {
    index = Math.min(index, maxIndex());
    renderDots();
    update();
  });

  renderDots();
  update();
};

initSlider({
  trackId: 'project-track',
  itemClass: 'project-card',
  prevId: 'prev-project',
  nextId: 'next-project',
  dotsId: null,
  visibleDesktop: 2,
  visibleTablet: 1,
});

const readMoreButton = document.getElementById('read-more-toggle');
const readMoreContent = document.getElementById('read-more-content');

if (readMoreButton && readMoreContent) {
  readMoreButton.addEventListener('click', () => {
    const expanded = readMoreButton.getAttribute('aria-expanded') === 'true';
    readMoreButton.setAttribute('aria-expanded', String(!expanded));
    readMoreContent.hidden = expanded;
    readMoreButton.textContent = expanded ? 'Read More' : 'Read Less';
  });
}

const heroCarousel = document.getElementById('hero-carousel');

if (heroCarousel) {
  const slides = Array.from(heroCarousel.querySelectorAll('.hero-slide'));
  const prev = document.getElementById('hero-prev');
  const next = document.getElementById('hero-next');
  const dotsWrap = document.getElementById('hero-dots');
  let activeIndex = 0;
  let autoRotate;

  const render = () => {
    slides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === activeIndex);
    });

    if (dotsWrap) {
      Array.from(dotsWrap.children).forEach((dot, index) => {
        dot.classList.toggle('is-active', index === activeIndex);
      });
    }
  };

  const goTo = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    render();
  };

  const restartAutoRotate = () => {
    window.clearInterval(autoRotate);
    autoRotate = window.setInterval(() => {
      goTo(activeIndex + 1);
    }, 5000);
  };

  if (dotsWrap) {
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = `dot${index === activeIndex ? ' is-active' : ''}`;
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to hero image ${index + 1}`);
      dot.addEventListener('click', () => {
        goTo(index);
        restartAutoRotate();
      });
      dotsWrap.appendChild(dot);
    });
  }

  prev?.addEventListener('click', () => {
    goTo(activeIndex - 1);
    restartAutoRotate();
  });

  next?.addEventListener('click', () => {
    goTo(activeIndex + 1);
    restartAutoRotate();
  });

  render();
  restartAutoRotate();
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
