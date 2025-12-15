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
    const searchSuggestions = document.getElementById("searchSuggestions");
    const searchClear = document.getElementById("searchClear");
    const searchFeedback = document.getElementById("searchFeedback");

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
        // Close suggestions when explicitly searching
        searchSuggestions.classList.remove("show");
        performSearch(true);
    });

    if (searchClear) {
        searchClear.addEventListener("click", () => {
            searchInput.value = "";
            searchClear.style.display = "none";
            searchSuggestions.classList.remove("show");
            searchFeedback.classList.remove("show");
            performSearch(false);
        });
    }

    // Logika Pencarian Baris 2: Search Input Enter Key
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            searchSuggestions.classList.remove("show");
            performSearch(true);
        }
    });

    // Perubahan: Gunakan event 'input' untuk live search & suggestions
    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase().trim();

        // Show/hide clear button
        if (searchClear) {
            searchClear.style.display = query.length > 0 ? "block" : "none";
        }

        if (query.length > 0) {
            updateSuggestions(query);
            // Live filtering
            performSearch(false);
        } else {
            searchSuggestions.classList.remove("show");
            searchFeedback.classList.remove("show");
            performSearch(false);
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener("click", function (e) {
        if (!heroSearchBox.contains(e.target)) {
            searchSuggestions.classList.remove("show");
        }
    });

    // Fungsi untuk mengumpulkan semua item yang bisa dicari
    function collectSearchableItems() {
        const items = [];

        // Collect Story Items
        const storySection = document.getElementById("story-section");
        if (storySection) {
            // Main story content
            const h3 = storySection.querySelector(".story-content h3");
            if (h3)
                items.push({
                    text: h3.textContent,
                    element: storySection,
                    type: "Sejarah",
                });

            // Slider items
            const sliderItems = storySection.querySelectorAll(".card-item img");
            sliderItems.forEach((img) => {
                if (img.alt)
                    items.push({
                        text: img.alt,
                        element: img.closest(".card-item"),
                        type: "Sejarah",
                    });
            });
        }

        // Collect Tours
        const tourCards = document.querySelectorAll(".tour-card");
        tourCards.forEach((card) => {
            const title = card.querySelector("h3").textContent;
            items.push({ text: title, element: card, type: "Wisata" });
        });

        // Collect Culinary
        const culinaryCards = document.querySelectorAll(".culinary-card");
        culinaryCards.forEach((card) => {
            const title = card.querySelector("h4").textContent;
            items.push({ text: title, element: card, type: "Kuliner" });
        });

        // Collect Education
        const eduCards = document.querySelectorAll(".education-card");
        eduCards.forEach((card) => {
            const title = card.querySelector("h3").textContent;
            items.push({ text: title, element: card, type: "Pendidikan" });
        });

        // Collect Agenda
        const agendaItems = document.querySelectorAll(".agenda-list-item");
        agendaItems.forEach((item) => {
            const title = item.querySelector("h4").textContent;
            items.push({ text: title, element: item, type: "Agenda" });
        });

        // Collect Blog/Gallery
        const blogs = document.querySelectorAll(".gallery-blog-card");
        blogs.forEach((blog) => {
            const title = blog.querySelector("h3").textContent;
            items.push({ text: title, element: blog, type: "Blog" });
        });

        const fullCard = document.querySelector(".gallery-full-content h3");
        if (fullCard) {
            items.push({
                text: fullCard.textContent,
                element: fullCard.closest(".gallery-full-card"),
                type: "Video",
            });
        }

        return items;
    }

    // Fungsi update suggestion dropdown
    function updateSuggestions(query) {
        const allItems = collectSearchableItems();
        const matches = allItems.filter((item) =>
            item.text.toLowerCase().includes(query)
        );

        searchSuggestions.innerHTML = "";

        if (matches.length > 0) {
            matches.forEach((match) => {
                const div = document.createElement("div");
                div.className = "suggestion-item";
                div.innerHTML = `${match.text} <span class="match-type">${match.type}</span>`;

                div.addEventListener("click", () => {
                    searchInput.value = match.text;
                    searchSuggestions.classList.remove("show");
                    performSearch(true);

                    if (match.element) {
                        setTimeout(() => {
                            match.element.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            });

                            match.element.style.transition =
                                "transform 0.3s, box-shadow 0.3s";
                            match.element.style.transform = "scale(1.05)";
                            match.element.style.boxShadow =
                                "0 0 20px rgba(255, 215, 0, 0.6)";

                            setTimeout(() => {
                                match.element.style.transform = "";
                                match.element.style.boxShadow = "";
                            }, 1500);
                        }, 300);
                    }
                });

                searchSuggestions.appendChild(div);
            });

            searchSuggestions.classList.add("show");
        } else {
            searchSuggestions.classList.remove("show");
        }
    }

    // Logika Pencarian Baris 3: Fungsi inti (Diperbarui untuk pencarian teks penuh dan filtering total)
    function performSearch(showFeedback = false) {
        const query = searchInput.value.toLowerCase().trim();

        // Fungsi helper untuk toggle visibility item
        const toggleItem = (item, shouldShow) => {
            if (shouldShow) {
                item.classList.remove("hidden-search-item");
                item.classList.add("search-match"); // Add animation class
                // Remove animation class after animation completes so it can re-trigger later if needed
                setTimeout(() => item.classList.remove("search-match"), 500);

                // Khusus untuk education card yang mungkin punya class hidden-card dari filter kategori
                if (item.classList.contains("hidden-card")) {
                    item.classList.remove("hidden-card");
                    // Tandai bahwa ini dibuka oleh search agar nanti bisa dikembalikan (opsional, untuk simplicitas kita buka saja)
                }
            } else {
                item.classList.add("hidden-search-item");
            }
        };

        if (query === "") {
            // Reset: Tampilkan semua section dan item
            allContentSections.forEach((section) => {
                section.classList.remove("hidden-section");
                // Reset semua item yang mungkin disembunyikan
                const items = section.querySelectorAll(
                    ".tour-card, .culinary-card, .education-card, .agenda-list-item, .gallery-blog-card, .gallery-video-card, .card-item"
                );
                items.forEach((item) =>
                    item.classList.remove("hidden-search-item")
                );

                // Kembalikan state awal education cards (hidden-card logic)
                // Karena kita tidak menyimpan state filter sebelumnya, kita reset ke filter default "univ"
                if (section.id === "education-section") {
                    const eduCards =
                        section.querySelectorAll(".education-card");
                    eduCards.forEach((c) => {
                        if (c.dataset.category !== "univ")
                            c.classList.add("hidden-card");
                        else c.classList.remove("hidden-card");
                    });
                    // Reset active button
                    const buttons = section.querySelectorAll(".filter-btn");
                    buttons.forEach((b) => b.classList.remove("active"));
                    const defaultBtn = section.querySelector(
                        '.filter-btn[data-filter="univ"]'
                    );
                    if (defaultBtn) defaultBtn.classList.add("active");
                }
            });
            noResultsMessage.classList.add("hidden-section");
            if (showFeedback) {
                searchFeedback.classList.remove("show");
            }
            return;
        }

        let foundGlobalMatch = false;
        let matchCount = 0;

        // Loop setiap section
        allContentSections.forEach((section) => {
            let sectionHasMatch = false;

            // 1. Cek Section Story
            if (section.id === "story-section") {
                const contentText = section
                    .querySelector(".story-content")
                    .textContent.toLowerCase();
                const cardItems = section.querySelectorAll(".card-item");
                let hasCardMatch = false;

                // Filter individual cards in Story section
                cardItems.forEach((item) => {
                    const imgAlt =
                        item.querySelector("img")?.alt?.toLowerCase() || "";
                    if (imgAlt.includes(query)) {
                        toggleItem(item, true);
                        hasCardMatch = true;
                        matchCount++;
                    } else {
                        toggleItem(item, false);
                    }
                });

                // Show section if text matches OR if any card matches
                if (contentText.includes(query) || hasCardMatch) {
                    sectionHasMatch = true;
                    if (contentText.includes(query) && !hasCardMatch)
                        matchCount++; // Count main story as 1
                }
            }
            // 2. Cek Section Nearby (Header Text Only - Map is excluded)
            else if (section.id === "nearby-section") {
                const headerText = section
                    .querySelector(".nearby-places-header")
                    .textContent.toLowerCase();
                if (headerText.includes(query)) {
                    sectionHasMatch = true;
                    matchCount++;
                }
            }
            // 3. Cek Section Lainnya (Card Based)
            else {
                // Seleksi semua item yang mungkin ada di section ini
                const items = section.querySelectorAll(
                    ".tour-card, .culinary-card, .education-card, .agenda-list-item, .gallery-blog-card, .gallery-video-card, .gallery-full-card"
                );

                if (items.length > 0) {
                    items.forEach((item) => {
                        const text = item.textContent.toLowerCase();
                        if (text.includes(query)) {
                            toggleItem(item, true);
                            sectionHasMatch = true;
                            matchCount++;
                        } else {
                            toggleItem(item, false);
                        }
                    });
                } else {
                    // Fallback jika tidak ada item spesifik (misal hanya teks deskripsi section)
                    if (section.textContent.toLowerCase().includes(query)) {
                        sectionHasMatch = true;
                        matchCount++;
                    }
                }
            }

            // Tampilkan/Sembunyikan Section berdasarkan apakah ada match di dalamnya
            if (sectionHasMatch) {
                section.classList.remove("hidden-section");
                foundGlobalMatch = true;
            } else {
                section.classList.add("hidden-section");
            }
        });

        // Tampilkan pesan "Tidak Ada Hasil"
        if (foundGlobalMatch) {
            noResultsMessage.classList.add("hidden-section");
            if (showFeedback) {
                searchFeedback.textContent = `Ditemukan ${matchCount} hasil untuk "${query}"`;
                searchFeedback.classList.add("show");
                setTimeout(() => {
                    searchFeedback.classList.remove("show");
                }, 3000);

                // Scroll to first visible section
                const firstVisible = document.querySelector(
                    ".page-content > section:not(.hidden-section)"
                );
                if (firstVisible) {
                    firstVisible.scrollIntoView({ behavior: "smooth" });
                }
            }
        } else {
            noResultsMessage.classList.remove("hidden-section");
            if (showFeedback) {
                searchFeedback.textContent = `Tidak ditemukan hasil untuk "${query}"`;
                searchFeedback.classList.add("show");
                setTimeout(() => {
                    searchFeedback.classList.remove("show");
                }, 3000);
                noResultsMessage.scrollIntoView({ behavior: "smooth" });
            }
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
        if (!url) return null;
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

    // Helper function agar tidak perlu menulis ulang kode untuk setiap tombol
    const bindModalButton = (buttonElement) => {
        if (buttonElement) {
            buttonElement.addEventListener("click", (e) => {
                e.preventDefault();
                // MENGAMBIL ID LANGSUNG DARI HTML SAAT DI-KLIK
                // Ini memastikan data yang diambil adalah yang terbaru dari atribut HTML
                const currentVideoId =
                    buttonElement.getAttribute("data-video-id");

                if (currentVideoId) {
                    openModal(currentVideoId);
                } else {
                    console.warn(
                        "Data video ID tidak ditemukan pada tombol ini."
                    );
                }
            });
        }
    };

    // Terapkan logika ke kedua tombol
    bindModalButton(btnJelajahi);
    bindModalButton(btnLayanan);

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
