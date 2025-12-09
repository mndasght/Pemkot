document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector(".hero"); // Referensi ke elemen Hero

    // Elemen pencarian baru
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const allContentSections = document.querySelectorAll(
        ".page-content > section"
    );
    const noResultsMessage = document.getElementById("noResultsMessage");

    // --- Logika Floating Search (BARU) ---
    const floatingSearchButton = document.getElementById(
        "floatingSearchButton"
    );
    const heroSearchBox = document.querySelector(".search-box");

    const updateFloatingButton = () => {
        const triggerHeight = heroSection
            ? heroSection.offsetHeight * 0.8
            : 500; // Muncul setelah 80% Hero
        if (window.scrollY > triggerHeight) {
            floatingSearchButton.classList.add("visible");
        } else {
            floatingSearchButton.classList.remove("visible");
        }
    };

    floatingSearchButton.addEventListener("click", () => {
        // Gulir ke kotak pencarian di Hero
        if (heroSearchBox) {
            heroSearchBox.scrollIntoView({ behavior: "smooth" });
            // Fokuskan input setelah menggulir
            setTimeout(() => {
                searchInput.focus();
            }, 500); // Beri sedikit waktu untuk scroll
        }
    });

    // Tambahkan listener untuk floating button ke window scroll
    window.addEventListener("scroll", updateFloatingButton);
    updateFloatingButton(); // Panggil sekali saat load
    // --- End Logika Floating Search ---

    // --- Logika Pencarian ---
    searchButton.addEventListener("click", () => {
        performSearch();
    });

    // Logika Pencarian Baris 2: Search Input Enter Key
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            performSearch();
        }
    });

    // Logika Pencarian Baris 3: Fungsi inti (Diperbarui untuk pencarian teks penuh dan filtering total)
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();

        if (query === "") {
            // Tampilkan semua section jika query kosong
            allContentSections.forEach((section) => {
                section.classList.remove("hidden-section");
            });
            noResultsMessage.classList.add("hidden-section");
            document
                .getElementById("story-section")
                .scrollIntoView({ behavior: "smooth" });
            return;
        }

        let foundMatch = false;
        let firstMatchSection = null;

        // 1. Sembunyikan semua section dan pesan "Tidak Ada Hasil" di awal
        allContentSections.forEach((section) => {
            section.classList.add("hidden-section");
        });
        noResultsMessage.classList.add("hidden-section");

        // 2. Loop dan cari kecocokan di SEMUA section (termasuk Story dan Nearby)
        allContentSections.forEach((section) => {
            // Ambil SEMUA teks yang terlihat di dalam section
            const content = section.textContent || "";

            if (content.toLowerCase().includes(query)) {
                section.classList.remove("hidden-section");
                foundMatch = true;
                if (!firstMatchSection) {
                    firstMatchSection = section;
                }
            }
        });

        // 3. Tampilkan pesan "Tidak Ada Hasil" atau gulir ke hasil pertama
        if (foundMatch) {
            // Gulir ke section pertama yang ditemukan
            if (firstMatchSection) {
                firstMatchSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Tampilkan pesan "Tidak Ada Hasil"
            noResultsMessage.classList.remove("hidden-section");
            // Gulir ke pesan notifikasi
            noResultsMessage.scrollIntoView({ behavior: "smooth" });
        }
    }
    // --- End Logika Pencarian ---

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
        navbar.classList.toggle("nav-open");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
            navbar.classList.remove("nav-open");
        });
    });

    // Navbar Scroll Effect
    const updateNavbarBackground = () => {
        const triggerHeight = heroSection ? heroSection.offsetHeight - 80 : 100;

        if (window.scrollY > triggerHeight) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Panggil updateFloatingButton di sini juga untuk memastikan sinkronisasi
        updateFloatingButton();
    };

    window.addEventListener("scroll", updateNavbarBackground);
    updateNavbarBackground();

    // Animate elements on scroll
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    animatedElements.forEach((element) => observer.observe(element));

    // Initialize sliders
    initializeStorySlider();
    initializeToursSlider();
    initializeCulinarySlider();
    initializeEducationSlider();
    initializeScrollButton();
    initializeAgendaScroller();
    initializeAgendaInteractivity(); // Panggil fungsi interaksi baru
    initializeVideoModal(); // Panggil fungsi modal video baru

    // Initialize filter buttons (termasuk yang baru)
    initializeFilterButtons(".education-filters .filter-btn");
    initializeFilterButtons(".nearby-places-filters .filter-btn");
});

// *** FITUR INTERAKTIF BARU: Video Modal Logic ***
function initializeVideoModal() {
    const modal = document.getElementById("videoModal");
    const closeBtn = document.querySelector(".video-modal-close");
    const videoFrame = document.getElementById("modalVideoFrame");
    const btnJelajahi = document.getElementById("btn-jelajahi-kota");
    const btnLayanan = document.getElementById("btn-cek-layanan");

    // Fungsi untuk mengekstrak ID YouTube dari URL atau ID langsung
    const extractVideoId = (url) => {
        // Kasus 1: ID langsung (misalnya, 'dQw4w9WgXcQ')
        if (!url.includes("http")) {
            return url;
        }

        // Kasus 2: URL lengkap atau youtu.be
        try {
            const urlObj = new URL(url);
            if (urlObj.hostname.includes("youtube.com")) {
                return urlObj.searchParams.get("v");
            } else if (urlObj.hostname.includes("youtu.be")) {
                return urlObj.pathname.substring(1);
            }
        } catch (e) {
            console.error("Invalid video URL format:", url);
        }
        return null;
    };

    const openModal = (videoUrl) => {
        const videoId = extractVideoId(videoUrl);
        if (!videoId) return;

        // Gunakan ID yang sudah terverifikasi untuk iframe
        const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        videoFrame.src = youtubeEmbedUrl;
        modal.classList.add("open");
        // Menghentikan scroll pada body saat modal terbuka
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        modal.classList.remove("open");
        // Hentikan video dengan menghapus src (penting agar video berhenti berputar di background)
        videoFrame.src = "";
        // Mengembalikan scroll pada body
        document.body.style.overflow = "";
    };

    // Event listener untuk tombol "Jelajahi Kota"
    if (btnJelajahi) {
        btnJelajahi.addEventListener("click", (e) => {
            e.preventDefault();
            // Menggunakan ID placeholder yang teruji
            const videoId = "dQw4w9WgXcQ";
            openModal(videoId);
        });
    }

    // Event listener untuk tombol "Cek Layanan"
    if (btnLayanan) {
        btnLayanan.addEventListener("click", (e) => {
            e.preventDefault();
            // Menggunakan ID placeholder yang teruji
            const videoId = "dQw4w9WgXcQ";
            openModal(videoId);
        });
    }

    // Event listener untuk tombol Close (X)
    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    // Event listener untuk menutup modal saat mengklik di luar konten (overlay)
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
}

// *** FITUR INTERAKTIF BARU: Objek untuk query peta ***
const mapQueries = {
    wisata: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63261.94228965021!2d111.97905342167968!3d-7.82823379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1swisata%20kuliner%20di%20Kediri!5e0!3m2!1sen!2sid!4v1731295000000!5m2!1sen!2sid",
    pendidikan:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63261.94228965021!2d111.97905342167968!3d-7.82823379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spendidikan%20di%20Kediri!5e0!3m2!1sen!2sid!4v1731295000001!5m2!1sen!2sid",
    fasilitas:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63261.94228965021!2d111.97905342167968!3d-7.82823379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfasilitas%20kota%20di%20Kediri!5e0!3m2!1sen!2sid!4v1731295000002!5m2!1sen!2sid",
    transportasi:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63261.94228965021!2d111.97905342167968!3d-7.82823379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stransportasi%20rental%20di%20Kediri!5e0!3m2!1sen!2sid!4v1731295000003!5m2!1sen!2sid",
};

// Fungsi umum untuk filter buttons
function initializeFilterButtons(selector) {
    const filterButtons = document.querySelectorAll(selector);
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Dapatkan parent container dan hapus 'active' dari saudaranya
            const parent = button.parentElement;
            parent
                .querySelectorAll(".filter-btn")
                .forEach((btn) => btn.classList.remove("active"));
            // Tambahkan 'active' ke tombol yang diklik
            button.classList.add("active");

            // *** LOGIKA FILTERING PENDIDIKAN ***
            if (parent.classList.contains("education-filters")) {
                const filterValue = button.dataset.filter;
                const educationCards = document.querySelectorAll(
                    ".education-grid .education-card"
                );

                educationCards.forEach((card) => {
                    // Jika filter 'univ' (default awal) atau kategori kartu sesuai dengan tombol
                    if (card.dataset.category === filterValue) {
                        card.classList.remove("hidden-card");
                        // Trigger animasi ulang (opsional, untuk efek halus)
                        card.style.animation = "none";
                        card.offsetHeight; /* trigger reflow */
                        card.style.animation = null;
                    } else {
                        card.classList.add("hidden-card");
                    }
                });
            }

            // *** FITUR INTERAKTIF BARU: Ganti source iframe peta ***
            if (parent.classList.contains("nearby-places-filters")) {
                const filter = button.dataset.filter;
                const mapIframe = document.getElementById("nearby-map-iframe");
                if (mapIframe && mapQueries[filter]) {
                    mapIframe.src = mapQueries[filter];
                }
            }
        });
    });
}

// Hero Scroll Button
function initializeScrollButton() {
    const scrollToStoryBtn = document.getElementById("scrollToStory");
    const storySection = document.getElementById("story-section");
    if (scrollToStoryBtn && storySection) {
        scrollToStoryBtn.addEventListener("click", () => {
            storySection.scrollIntoView({
                behavior: "smooth",
            });
        });
    }
}

function initializeStorySlider() {
    const slider = document.querySelector("#card-slider");
    const prevButton = document.getElementById("prev-slide");
    const nextButton = document.getElementById("next-slide");
    if (!slider) return;
    const cards = slider.querySelectorAll(".card-item");
    const storyContainer = document.querySelector(".story-container");

    if (!prevButton || !nextButton || !storyContainer || cards.length === 0)
        return;

    const handleArrows = () => {
        if (!slider) return;
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        prevButton.classList.toggle("hidden", slider.scrollLeft <= 0);
        nextButton.classList.toggle(
            "hidden",
            slider.scrollLeft >= maxScrollLeft - 1
        );
    };

    const updateActiveCardAndBackground = () => {
        const sliderRect = slider.getBoundingClientRect();
        let closestCard = null;
        let minDistance = Infinity;

        cards.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            const distance = Math.abs(cardRect.left - sliderRect.left);
            if (distance < minDistance) {
                minDistance = distance;
                closestCard = card;
            }
        });

        if (closestCard && !closestCard.classList.contains("active")) {
            cards.forEach((c) => c.classList.remove("active"));
            closestCard.classList.add("active");

            const newBg = closestCard.dataset.background;
            if (newBg) {
                storyContainer.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${newBg}')`;
            }
        }
    };

    let scrollTimeout;
    slider.addEventListener("scroll", () => {
        handleArrows();
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveCardAndBackground, 50);
    });

    cards.forEach((card) => {
        card.addEventListener("click", (e) => {
            const newBg = e.currentTarget.dataset.background;
            if (newBg) {
                storyContainer.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${newBg}')`;
            }

            const sliderPaddingLeft = parseInt(
                getComputedStyle(slider).paddingLeft,
                10
            );
            const targetScrollLeft =
                e.currentTarget.offsetLeft - sliderPaddingLeft;
            slider.scrollTo({
                left: targetScrollLeft,
                behavior: "smooth",
            });
            setTimeout(updateActiveCardAndBackground, 50);
        });
    });

    const slideAmount = cards.length > 0 ? cards[0].offsetWidth + 20 : 200;
    nextButton.addEventListener("click", () => {
        slider.scrollLeft += slideAmount;
    });

    prevButton.addEventListener("click", () => {
        slider.scrollLeft -= slideAmount;
    });

    setTimeout(() => {
        updateActiveCardAndBackground();
        handleArrows();
    }, 100);
}

function initializeToursSlider() {
    const slider = document.querySelector(".popular-tours-grid");
    const prevButton = document.getElementById("prev-tour-slide");
    const nextButton = document.getElementById("next-tour-slide");

    if (!slider || !prevButton || !nextButton) return;

    const handleArrows = () => {
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        prevButton.classList.toggle("hidden", slider.scrollLeft <= 0);
        nextButton.classList.toggle(
            "hidden",
            slider.scrollLeft >= maxScrollLeft - 1
        );
    };

    slider.addEventListener("scroll", handleArrows);

    const tourCard = slider.querySelector(".tour-card");
    if (!tourCard) return;

    const slideAmount = tourCard.offsetWidth + 20;
    nextButton.addEventListener("click", () => {
        slider.scrollLeft += slideAmount;
    });

    prevButton.addEventListener("click", () => {
        slider.scrollLeft -= slideAmount;
    });

    handleArrows();
}

function initializeCulinarySlider() {
    const slider = document.querySelector(".culinary-slider");
    const prevButton = document.getElementById("prev-culinary-slide");
    const nextButton = document.getElementById("next-culinary-slide");

    if (!slider || !prevButton || !nextButton) return;

    const handleArrows = () => {
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        prevButton.classList.toggle("hidden", slider.scrollLeft <= 0);
        nextButton.classList.toggle(
            "hidden",
            slider.scrollLeft >= maxScrollLeft - 1
        );
    };

    slider.addEventListener("scroll", handleArrows);

    const culinaryCard = slider.querySelector(".culinary-card");
    if (!culinaryCard) return;

    const slideAmount = culinaryCard.offsetWidth + 20; // 20 is the gap
    nextButton.addEventListener("click", () => {
        slider.scrollLeft += slideAmount;
    });

    prevButton.addEventListener("click", () => {
        slider.scrollLeft -= slideAmount;
    });

    handleArrows();
}

function initializeEducationSlider() {
    // Slider ini tidak memiliki panah di versi Anda, jadi kita hanya
    // perlu memastikan filternya berfungsi (sudah di-handle oleh initializeFilterButtons)
    // dan bisa di-scroll di mobile (sudah di-handle oleh CSS 'overflow-x: auto').
    // Tidak ada JS khusus yang diperlukan untuk slider ini selain filter.
}

function initializeAgendaScroller() {
    const scroller = document.getElementById("agenda-list-scroller");
    const upButton = document.getElementById("agenda-scroll-up");
    const downButton = document.getElementById("agenda-scroll-down");

    if (!scroller || !upButton || !downButton) return;

    const checkScroll = () => {
        const scrollTop = scroller.scrollTop;
        const maxScroll = scroller.scrollHeight - scroller.clientHeight;

        // Tambahkan toleransi 1px untuk kalkulasi browser
        upButton.classList.toggle("hidden", scrollTop <= 0);
        downButton.classList.toggle("hidden", scrollTop >= maxScroll - 1);
    };

    const firstItem = scroller.querySelector(".agenda-list-item");
    if (!firstItem) {
        // Jika tidak ada item, sembunyikan tombol
        upButton.classList.add("hidden");
        downButton.classList.add("hidden");
        return;
    }

    const scrollAmount = firstItem.offsetHeight + 20; // Tinggi item + gap

    upButton.addEventListener("click", () => {
        scroller.scrollTop -= scrollAmount;
    });

    downButton.addEventListener("click", () => {
        scroller.scrollTop += scrollAmount;
    });

    scroller.addEventListener("scroll", checkScroll);

    // Periksa juga saat ukuran berubah (jika item ditambahkan/dihapus secara dinamis nanti)
    new ResizeObserver(checkScroll).observe(scroller);

    // Pengecekan awal
    checkScroll();
}

// Fungsi Baru: Mengatur interaksi klik pada list agenda
function initializeAgendaInteractivity() {
    const agendaItems = document.querySelectorAll(".agenda-list-item");
    const previewCard = document.querySelector(".agenda-preview-card");
    const previewImage = previewCard ? previewCard.querySelector("img") : null;
    const previewTitle = previewCard
        ? previewCard.querySelector(".agenda-preview-card-info h4")
        : null;

    if (!agendaItems.length || !previewImage || !previewTitle) return;

    agendaItems.forEach((item) => {
        item.addEventListener("click", function () {
            // 1. Hapus kelas active dari semua item
            agendaItems.forEach((i) => i.classList.remove("active"));

            // 2. Tambahkan kelas active ke item yang diklik
            this.classList.add("active");

            // 3. Ambil data dari item yang diklik
            const newImageSrc = this.getAttribute("data-image");
            const newTitleText = this.querySelector(
                ".agenda-item-info h4"
            ).innerText;

            // 4. Update card preview dengan efek fade dan slide halus
            // State 1: Fade Out & Slide Down sedikit
            previewImage.style.opacity = "0";
            previewTitle.style.opacity = "0";
            previewTitle.style.transform = "translateY(10px)";

            setTimeout(() => {
                // State 2: Ganti Konten (saat tidak terlihat)
                if (newImageSrc) previewImage.src = newImageSrc;
                previewTitle.innerText = newTitleText;

                // State 3: Fade In & Slide Up kembali (setelah konten terganti)
                // Gunakan requestAnimationFrame atau sedikit delay agar browser merender perubahan konten dulu
                requestAnimationFrame(() => {
                    previewImage.style.opacity = "1";
                    previewTitle.style.opacity = "1";
                    previewTitle.style.transform = "translateY(0)";
                });
            }, 300); // Waktu tunggu sesuai durasi transisi CSS (0.3s)
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
    });

    const slider = document.getElementById("heroSlider");
    const heroSection = document.getElementById("heroSection");
    const cards = document.querySelectorAll(".hero-card-item");
    const dotsContainer = document.getElementById("sliderDots");

    cards.forEach((card, index) => {
        const dot = document.createElement("div");
        dot.classList.add("slider-dot");
        if (index === 0) dot.classList.add("active");

        dot.addEventListener("click", () => {
            activateCard(index);
        });

        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".slider-dot");

    function activateCard(index) {
        const targetCard = cards[index];

        cards.forEach((c) => c.classList.remove("active"));
        dots.forEach((d) => d.classList.remove("active"));

        targetCard.classList.add("active");
        if (dots[index]) dots[index].classList.add("active");

        const newBg = targetCard.getAttribute("data-bg");
        heroSection.style.backgroundImage = `url('${newBg}')`;

        const sliderWidth = slider.clientWidth;
        const cardWidth = targetCard.offsetWidth;

        const targetScroll =
            targetCard.offsetLeft - sliderWidth / 2 + cardWidth / 2;

        slider.scrollTo({
            left: targetScroll,
            behavior: "smooth",
        });
    }

    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            activateCard(index);
        });
    });
});

// wisata page
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
    });

    const heroSection = document.getElementById("heroSection");
    const heroTitle = document.getElementById("heroTitle");
    const heroDesc = document.getElementById("heroDesc");
    const heroTextBox = document.getElementById("heroTextBox");
    const cards = document.querySelectorAll(".slide-card");
    const slider = document.getElementById("cardSlider");
    const paginationContainer = document.getElementById("heroPagination");

    // A. Generate Dots
    cards.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("pagination-dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
            cards[index].click();
        });
        paginationContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll(".pagination-dot");

    // B. Event Listener Card
    cards.forEach((card, index) => {
        card.addEventListener("click", function () {
            cards.forEach((c) => c.classList.remove("active"));
            this.classList.add("active");

            dots.forEach((d) => d.classList.remove("active"));
            if (dots[index]) dots[index].classList.add("active");

            const title = this.getAttribute("data-title");
            const desc = this.getAttribute("data-desc");
            const bg = this.getAttribute("data-bg");

            heroTextBox.classList.remove("fade-in");
            void heroTextBox.offsetWidth;
            heroTitle.innerText = title;
            heroDesc.innerText = desc;
            heroTextBox.classList.add("fade-in");

            heroSection.style.backgroundImage = `url('${bg}')`;

            const paddingLeft = 20;
            const targetScroll = this.offsetLeft - paddingLeft;
            slider.scrollTo({
                left: targetScroll,
                behavior: "smooth",
            });
        });
    });

    // 3. Map Filter Logic
    const filterBtns = document.querySelectorAll(".filter-btn");
    const mapIframe = document.querySelector(".nearby-map iframe");
    const mapQueries = {
        wisata: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63261.94228965021!2d111.97905342167968!3d-7.82823379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1swisata%20di%20Kediri!5e0!3m2!1sen!2sid!4v1731295000000!5m2!1sen!2sid",
        fasilitas:
            "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63261.94228965021!2d111.97905342167968!3d-7.82823379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfasilitas%20kota%20di%20Kediri!5e0!3m2!1sen!2sid!4v1731295000002!5m2!1sen!2sid",
        transportasi:
            "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63261.94228965021!2d111.97905342167968!3d-7.82823379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stransportasi%20rental%20di%20Kediri!5e0!3m2!1sen!2sid!4v1731295000003!5m2!1sen!2sid",
    };

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");
            if (mapQueries[filter]) {
                mapIframe.src = mapQueries[filter];
            }
        });
    });
});

// wisata detail
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
    });

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Hero Interaction
    const heroSection = document.getElementById("heroSection");
    const heroBgVideo = document.getElementById("heroBgVideo");
    const cards = document.querySelectorAll(".hero-card");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            const type = this.getAttribute("data-type");
            const src = this.getAttribute("data-src");

            cards.forEach((c) => c.classList.remove("active"));
            this.classList.add("active");

            if (type === "video") {
                heroBgVideo.src = src;
                heroBgVideo.classList.add("active");
                heroBgVideo
                    .play()
                    .catch((e) => console.log("Autoplay prevented:", e));
            } else {
                heroBgVideo.classList.remove("active");
                heroBgVideo.pause();
                heroBgVideo.src = "";

                const img = new Image();
                img.src = src;
                img.onload = () => {
                    heroSection.style.backgroundImage = `url('${src}')`;
                };
            }
        });
    });

    // Animasi Progress Bar saat scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target
                    .getAttribute("style")
                    .split("width:")[1];
            }
        });
    });
    document
        .querySelectorAll(".progress-bar")
        .forEach((bar) => observer.observe(bar));
});
