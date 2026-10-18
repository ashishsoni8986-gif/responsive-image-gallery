/**
 * LUMINA GALLERY - INTERACTIVE JAVASCRIPT ENGINE
 * Features:
 * - Dynamic Responsive Grid with Lazy Loading
 * - Interactive Lightbox with Preload & Hardware Acceleration
 * - Previous / Next Circular Navigation
 * - Keyboard Navigation (Left, Right, Escape, Spacebar, Fullscreen, Zoom)
 * - Touch Swipe Gestures for Mobile (Swipe Left/Right for Nav, Swipe Down to Close)
 * - Real-Time Category Filtering & Search with Live Counters
 * - Slideshow Auto-Play & Fullscreen API
 * - Light / Dark Theme Persistence
 */

(function () {
  'use strict';

  // --- Curated Photography Dataset (20 High-Quality Verified Assets) ---
  const GALLERY_DATA = [
    // Nature
    {
      id: 1,
      title: "Yosemite Valley Mist",
      category: "nature",
      location: "Yosemite National Park, USA",
      description: "Morning fog blankets ancient granite monoliths and pine forests in Yosemite Valley.",
      thumbUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 2,
      title: "Foggy Alpine Ridges",
      category: "nature",
      location: "Swiss Alps, Switzerland",
      description: "Atmospheric mountain ridges drifting through early morning mist and quiet peaks.",
      thumbUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 3,
      title: "Aurora Borealis Dance",
      category: "nature",
      location: "Tromsø, Norway",
      description: "Vibrant emerald green northern lights undulating across the arctic night sky.",
      thumbUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 4,
      title: "Verdant Sunset Valley",
      category: "nature",
      location: "Tuscany, Italy",
      description: "Golden hour sun rays illuminating lush undulating agricultural hills and cypress trees.",
      thumbUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1600&q=85"
    },

    // Architecture
    {
      id: 5,
      title: "Geometric Glass Horizon",
      category: "architecture",
      location: "Frankfurt, Germany",
      description: "Low-angle perspective of towering glass corporate skyscrapers meeting the clear blue sky.",
      thumbUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 6,
      title: "Minimalist Monolith",
      category: "architecture",
      location: "Copenhagen, Denmark",
      description: "Clean geometric symmetry, dramatic shadows, and minimalist Nordic architectural harmony.",
      thumbUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 7,
      title: "Futuristic Fluidity",
      category: "architecture",
      location: "Valencia, Spain",
      description: "Organic sculptural arches and stark white concrete reflections at the City of Arts and Sciences.",
      thumbUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 8,
      title: "Rhythm of Windows",
      category: "architecture",
      location: "Berlin, Germany",
      description: "A hypnotic repetitive pattern of modern residential windows and metallic balustrades.",
      thumbUrl: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=85"
    },

    // Travel
    {
      id: 9,
      title: "Turquoise Horizon Shore",
      category: "travel",
      location: "Maldives",
      description: "Silky soft sand beaches kissed by crystal-clear shallow coral waters at high noon.",
      thumbUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 10,
      title: "Desert Highway Expedition",
      category: "travel",
      location: "Utah, USA",
      description: "An open highway stretching toward iconic red sandstone buttes in the vast American Southwest.",
      thumbUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 11,
      title: "Santorini Cliffside Vista",
      category: "travel",
      location: "Oia, Santorini, Greece",
      description: "Sun-drenched whitewashed villas and radiant blue domes overlooking the deep Aegean caldera.",
      thumbUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 12,
      title: "Balloons Over Cappadocia",
      category: "travel",
      location: "Göreme, Cappadocia, Turkey",
      description: "Scores of multicolored hot air balloons drifting above dramatic fairy chimney volcanic rock valleys.",
      thumbUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=85"
    },

    // Wildlife
    {
      id: 13,
      title: "Majestic Savannah Lion",
      category: "wildlife",
      location: "Serengeti, Tanzania",
      description: "Intense golden-eyed gaze of a male lion scanning the open plains during twilight golden hour.",
      thumbUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 14,
      title: "Curious Red Fox",
      category: "wildlife",
      location: "Hokkaido, Japan",
      description: "An alert red fox pausing in a subalpine meadow with intense curiosity toward the camera lens.",
      thumbUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 15,
      title: "Giant Panda Retreat",
      category: "wildlife",
      location: "Chengdu, China",
      description: "A giant panda contentedly snacking on fresh green bamboo shoots in a misty mountain sanctuary.",
      thumbUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 16,
      title: "Vibrant Scarlet Macaw",
      category: "wildlife",
      location: "Osa Peninsula, Costa Rica",
      description: "Radiant feathers of deep red, gold, and turquoise blue glowing in the rainforest canopy.",
      thumbUrl: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1600&q=85"
    },

    // Urban
    {
      id: 17,
      title: "Tokyo Cyberpunk Rain",
      category: "urban",
      location: "Shinjuku, Tokyo, Japan",
      description: "Luminous neon shop signs and street traffic reflecting off rain-slicked asphalt in midnight Tokyo.",
      thumbUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 18,
      title: "Metropolitan Blue Hour",
      category: "urban",
      location: "Manhattan, New York, USA",
      description: "Dusk skyline of iconic Midtown skyscrapers illuminating in shades of cobalt and warm amber.",
      thumbUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 19,
      title: "Avenues From Above",
      category: "urban",
      location: "Chicago, USA",
      description: "High-angle view of bustling urban transit, yellow cabs, and historic architecture canyons.",
      thumbUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1600&q=85"
    },
    {
      id: 20,
      title: "Neon Market Alleyways",
      category: "urban",
      location: "Mong Kok, Hong Kong",
      description: "Dense multi-story neon signs and street merchants bustling under the night canopy.",
      thumbUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=650&q=80",
      fullUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=85"
    }
  ];

  // --- State Variables ---
  let currentFilteredList = [...GALLERY_DATA];
  let currentActiveIndex = 0;
  let activeCategory = 'all';
  let searchQuery = '';
  let slideshowTimer = null;
  let isZoomed = false;

  // Touch Swipe State
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  // --- DOM Elements ---
  const galleryGrid = document.getElementById('galleryGrid');
  const emptyState = document.getElementById('emptyState');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const visibleCountEl = document.getElementById('visibleCount');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  // Lightbox Elements
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxMainImg = document.getElementById('lightboxMainImg');
  const lightboxMediaContainer = document.getElementById('lightboxMediaContainer');
  const lightboxSpinner = document.getElementById('lightboxSpinner');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxCategoryTag = document.getElementById('lightboxCategoryTag');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const locationText = document.getElementById('locationText');
  const lightboxDescription = document.getElementById('lightboxDescription');
  const thumbnailStrip = document.getElementById('thumbnailStrip');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const zoomToggleBtn = document.getElementById('zoomToggleBtn');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const slideshowBtn = document.getElementById('slideshowBtn');
  const downloadPhotoBtn = document.getElementById('downloadPhotoBtn');

  // Category Badges
  const countAll = document.getElementById('countAll');
  const countNature = document.getElementById('countNature');
  const countArchitecture = document.getElementById('countArchitecture');
  const countTravel = document.getElementById('countTravel');
  const countWildlife = document.getElementById('countWildlife');
  const countUrban = document.getElementById('countUrban');

  // --- Initialize Application ---
  function init() {
    initTheme();
    updateCategoryBadges();
    applyFilterAndSearch();
    bindEventListeners();
  }

  // --- Theme Management ---
  function initTheme() {
    const savedTheme = localStorage.getItem('lumina_theme') || 
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('lumina_theme', newTheme);
  }

  // --- Update Badge Counts ---
  function updateCategoryBadges() {
    if (countAll) countAll.textContent = GALLERY_DATA.length;
    if (countNature) countNature.textContent = GALLERY_DATA.filter(i => i.category === 'nature').length;
    if (countArchitecture) countArchitecture.textContent = GALLERY_DATA.filter(i => i.category === 'architecture').length;
    if (countTravel) countTravel.textContent = GALLERY_DATA.filter(i => i.category === 'travel').length;
    if (countWildlife) countWildlife.textContent = GALLERY_DATA.filter(i => i.category === 'wildlife').length;
    if (countUrban) countUrban.textContent = GALLERY_DATA.filter(i => i.category === 'urban').length;
  }

  // --- Render Gallery Cards ---
  function renderGallery(items) {
    galleryGrid.innerHTML = '';

    if (items.length === 0) {
      emptyState.classList.remove('hidden');
      visibleCountEl.textContent = '0';
      return;
    }

    emptyState.classList.add('hidden');
    visibleCountEl.textContent = items.length;

    items.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View ${item.title}`);
      card.dataset.index = index;

      card.innerHTML = `
        <div class="card-media-wrap">
          <span class="card-badge">${item.category}</span>
          <img 
            class="card-img" 
            src="${item.thumbUrl}" 
            alt="${escapeHtml(item.title)}" 
            loading="lazy" 
            decoding="async"
          />
          <div class="card-overlay">
            <div class="overlay-preview-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
            <div class="overlay-text">
              <h3 class="overlay-title">${escapeHtml(item.title)}</h3>
              <div class="overlay-meta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${escapeHtml(item.location)}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-content">
          <h4 class="card-title">${escapeHtml(item.title)}</h4>
          <p class="card-subtitle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${escapeHtml(item.location)}</span>
          </p>
        </div>
      `;

      // Event listeners for card click and Enter key
      card.addEventListener('click', () => openLightbox(index));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      galleryGrid.appendChild(card);
    });
  }

  // --- Filtering & Search Logic ---
  function applyFilterAndSearch() {
    const q = searchQuery.trim().toLowerCase();

    currentFilteredList = GALLERY_DATA.filter((item) => {
      const matchesCategory = (activeCategory === 'all' || item.category === activeCategory);
      const matchesSearch = !q || (
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      );
      return matchesCategory && matchesSearch;
    });

    renderGallery(currentFilteredList);
    buildThumbnailStrip();
  }

  // --- Lightbox Operations ---
  function openLightbox(index) {
    if (currentFilteredList.length === 0) return;
    currentActiveIndex = index;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    loadLightboxImage(currentActiveIndex, null);
    lightboxModal.focus();
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
    stopSlideshow();
    resetZoom();
  }

  function loadLightboxImage(index, animationClass) {
    const item = currentFilteredList[index];
    if (!item) return;

    // Reset zoom state on new image
    resetZoom();

    // Show loading spinner
    lightboxSpinner.style.opacity = '1';

    // Update Counter & Metadata
    lightboxCounter.textContent = `${index + 1} / ${currentFilteredList.length}`;
    lightboxCategoryTag.textContent = item.category;
    lightboxTitle.textContent = item.title;
    locationText.textContent = item.location;
    lightboxDescription.textContent = item.description;
    downloadPhotoBtn.href = item.fullUrl;
    downloadPhotoBtn.setAttribute('download', `${item.title.replace(/\s+/g, '-').toLowerCase()}.jpg`);

    // Handle animations
    lightboxMainImg.className = 'lightbox-img';
    if (animationClass) {
      lightboxMainImg.classList.add(animationClass);
    }

    // Set Image Source
    const imgObj = new Image();
    imgObj.src = item.fullUrl;

    imgObj.onload = () => {
      lightboxMainImg.src = item.fullUrl;
      lightboxMainImg.alt = item.title;
      lightboxSpinner.style.opacity = '0';
    };

    imgObj.onerror = () => {
      // Fallback to thumbnail if high-res takes long
      lightboxMainImg.src = item.thumbUrl;
      lightboxSpinner.style.opacity = '0';
    };

    // Update active thumbnail
    updateActiveThumbnail(index);

    // Background preloading of adjacent images for instant next/prev switches
    preloadAdjacentImages(index);
  }

  function preloadAdjacentImages(centerIndex) {
    const total = currentFilteredList.length;
    if (total <= 1) return;

    const nextIdx = (centerIndex + 1) % total;
    const prevIdx = (centerIndex - 1 + total) % total;

    const nextImg = new Image();
    nextImg.src = currentFilteredList[nextIdx].fullUrl;

    const prevImg = new Image();
    prevImg.src = currentFilteredList[prevIdx].fullUrl;
  }

  // --- Previous / Next Navigation ---
  function showNextImage() {
    if (currentFilteredList.length <= 1) return;
    currentActiveIndex = (currentActiveIndex + 1) % currentFilteredList.length;
    loadLightboxImage(currentActiveIndex, 'slide-in-right');
  }

  function showPrevImage() {
    if (currentFilteredList.length <= 1) return;
    currentActiveIndex = (currentActiveIndex - 1 + currentFilteredList.length) % currentFilteredList.length;
    loadLightboxImage(currentActiveIndex, 'slide-in-left');
  }

  // --- Thumbnail Strip in Lightbox ---
  function buildThumbnailStrip() {
    thumbnailStrip.innerHTML = '';
    currentFilteredList.forEach((item, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `thumb-item ${idx === currentActiveIndex ? 'active' : ''}`;
      thumb.setAttribute('title', item.title);
      thumb.innerHTML = `<img src="${item.thumbUrl}" alt="Thumbnail of ${escapeHtml(item.title)}">`;
      thumb.addEventListener('click', () => {
        const animation = idx > currentActiveIndex ? 'slide-in-right' : 'slide-in-left';
        currentActiveIndex = idx;
        loadLightboxImage(currentActiveIndex, animation);
      });
      thumbnailStrip.appendChild(thumb);
    });
  }

  function updateActiveThumbnail(index) {
    const thumbs = thumbnailStrip.querySelectorAll('.thumb-item');
    thumbs.forEach((thumb, idx) => {
      if (idx === index) {
        thumb.classList.add('active');
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  // --- Zoom Functionality ---
  function toggleZoom() {
    isZoomed = !isZoomed;
    if (isZoomed) {
      lightboxMediaContainer.classList.add('is-zoomed');
      zoomToggleBtn.querySelector('.zoom-in-icon').classList.add('hidden');
      zoomToggleBtn.querySelector('.zoom-out-icon').classList.remove('hidden');
    } else {
      resetZoom();
    }
  }

  function resetZoom() {
    isZoomed = false;
    lightboxMediaContainer.classList.remove('is-zoomed');
    if (zoomToggleBtn) {
      const zoomIn = zoomToggleBtn.querySelector('.zoom-in-icon');
      const zoomOut = zoomToggleBtn.querySelector('.zoom-out-icon');
      if (zoomIn) zoomIn.classList.remove('hidden');
      if (zoomOut) zoomOut.classList.add('hidden');
    }
  }

  // --- Slideshow Functionality ---
  function toggleSlideshow() {
    if (slideshowTimer) {
      stopSlideshow();
    } else {
      startSlideshow();
    }
  }

  function startSlideshow() {
    slideshowBtn.querySelector('.play-icon').classList.add('hidden');
    slideshowBtn.querySelector('.pause-icon').classList.remove('hidden');
    slideshowBtn.style.color = '#10b981';
    slideshowTimer = setInterval(showNextImage, 3500);
  }

  function stopSlideshow() {
    if (slideshowTimer) {
      clearInterval(slideshowTimer);
      slideshowTimer = null;
    }
    if (slideshowBtn) {
      const playIcon = slideshowBtn.querySelector('.play-icon');
      const pauseIcon = slideshowBtn.querySelector('.pause-icon');
      if (playIcon) playIcon.classList.remove('hidden');
      if (pauseIcon) pauseIcon.classList.add('hidden');
      slideshowBtn.style.color = '#ffffff';
    }
  }

  // --- Fullscreen API ---
  function toggleFullscreen() {
    const fsEnter = fullscreenBtn.querySelector('.fs-enter-icon');
    const fsExit = fullscreenBtn.querySelector('.fs-exit-icon');

    if (!document.fullscreenElement) {
      if (lightboxModal.requestFullscreen) {
        lightboxModal.requestFullscreen();
      } else if (lightboxModal.webkitRequestFullscreen) {
        lightboxModal.webkitRequestFullscreen();
      }
      if (fsEnter && fsExit) {
        fsEnter.classList.add('hidden');
        fsExit.classList.remove('hidden');
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      if (fsEnter && fsExit) {
        fsEnter.classList.remove('hidden');
        fsExit.classList.add('hidden');
      }
    }
  }

  // Update fullscreen button icon on native exit
  document.addEventListener('fullscreenchange', () => {
    const fsEnter = fullscreenBtn.querySelector('.fs-enter-icon');
    const fsExit = fullscreenBtn.querySelector('.fs-exit-icon');
    if (!document.fullscreenElement && fsEnter && fsExit) {
      fsEnter.classList.remove('hidden');
      fsExit.classList.add('hidden');
    }
  });

  // --- Touch Swipe Handlers (Mobile Support) ---
  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipeGesture();
  }

  function handleSwipeGesture() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    // Minimum swipe threshold
    if (absX > 50 && absX > absY) {
      if (deltaX < 0) {
        // Swiped Left -> Next image
        showNextImage();
      } else {
        // Swiped Right -> Previous image
        showPrevImage();
      }
    } else if (deltaY > 80 && absY > absX) {
      // Swiped Downwards -> Close Lightbox (Native app-like gesture!)
      closeLightbox();
    }
  }

  // --- Event Listeners Setup ---
  function bindEventListeners() {
    // Theme toggle
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Category Filter Buttons
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        activeCategory = btn.dataset.category;
        applyFilterAndSearch();
      });
    });

    // Search Input
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchQuery.length > 0) {
        clearSearchBtn.classList.remove('hidden');
      } else {
        clearSearchBtn.classList.add('hidden');
      }
      applyFilterAndSearch();
    });

    // Clear Search Button
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      searchInput.focus();
      applyFilterAndSearch();
    });

    // Reset Filters from Empty State
    resetFiltersBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      activeCategory = 'all';
      filterButtons.forEach(b => {
        b.classList.toggle('active', b.dataset.category === 'all');
        b.setAttribute('aria-selected', b.dataset.category === 'all');
      });
      applyFilterAndSearch();
    });

    // Lightbox Controls
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrevImage();
    });

    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showNextImage();
    });

    closeLightboxBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });

    zoomToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleZoom();
    });

    lightboxMediaContainer.addEventListener('click', () => {
      toggleZoom();
    });

    fullscreenBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFullscreen();
    });

    slideshowBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSlideshow();
    });

    // Click outside lightbox image/toolbar closes modal
    lightboxModal.addEventListener('click', (e) => {
      if (
        e.target === lightboxModal || 
        e.target.classList.contains('lightbox-stage')
      ) {
        closeLightbox();
      }
    });

    // Touch Swipe Gestures on Mobile
    lightboxModal.addEventListener('touchstart', handleTouchStart, { passive: true });
    lightboxModal.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Global Keyboard Navigation
    window.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('active')) return;

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          showPrevImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          showNextImage();
          break;
        case 'Escape':
          e.preventDefault();
          closeLightbox();
          break;
        case ' ': // Spacebar
          e.preventDefault();
          toggleSlideshow();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case '+':
        case '=':
          e.preventDefault();
          toggleZoom();
          break;
      }
    });
  }

  // --- Helper Functions ---
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Bootstrap when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
