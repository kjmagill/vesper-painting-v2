const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    primaryNav.classList.toggle('is-open');
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
  trackId: 'testimonial-track',
  itemClass: 'testimonial-card',
  prevId: 'prev-testimonial',
  nextId: 'next-testimonial',
  dotsId: 'testimonial-dots',
  visibleDesktop: 3,
  visibleTablet: 2,
});

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

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
