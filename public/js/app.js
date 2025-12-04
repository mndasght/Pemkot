document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector(".hero");

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

    const updateNavbarBackground = () => {
        const triggerHeight = heroSection ? heroSection.offsetHeight - 80 : 100;

        if (window.scrollY > triggerHeight) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", updateNavbarBackground);

    updateNavbarBackground();

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

    initializeStorySlider();
    initializeToursSlider();
    initializeCulinarySlider();
    initializeEducationSlider();
    initializeScrollButton();
    initializeAgendaScroller();
    initializeAgendaInteractivity();

    initializeFilterButtons(".education-filters .filter-btn");
    initializeFilterButtons(".nearby-places-filters .filter-btn");
});

const mapQueries = {
    wisata: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63261.94228965021!2d111.97905342167968!3d-7.82823379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1swisata%20kuliner%20di%20Kediri!5e0!3m2!1sen!2sid!4v1731295000000!5m2!1sen!2sid",
    pendidikan:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63261.94228965021!2d111.97905342167968!3d-7.82823379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spendidikan%20di%20Kediri!5e0!3m2!1sen!2sid!4v1731295000001!5m2!1sen!2sid",
    fasilitas:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63261.94228965021!2d111.97905342167968!3d-7.82823379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfasilitas%20kota%20di%20Kediri!5e0!3m2!1sen!2sid!4v1731295000002!5m2!1sen!2sid",
    transportasi:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63261.94228965021!2d111.97905342167968!3d-7.82823379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stransportasi%20rental%20di%20Kediri!5e0!3m2!1sen!2sid!4v1731295000003!5m2!1sen!2sid",
};

function initializeFilterButtons(selector) {
    const filterButtons = document.querySelectorAll(selector);
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const parent = button.parentElement;
            parent
                .querySelectorAll(".filter-btn")
                .forEach((btn) => btn.classList.remove("active"));

            button.classList.add("active");

            if (parent.classList.contains("education-filters")) {
                const filterValue = button.dataset.filter;
                const educationCards = document.querySelectorAll(
                    ".education-grid .education-card"
                );

                educationCards.forEach((card) => {
                    if (card.dataset.category === filterValue) {
                        card.classList.remove("hidden-card");

                        card.style.animation = "none";
                        card.offsetHeight;
                        card.style.animation = null;
                    } else {
                        card.classList.add("hidden-card");
                    }
                });
            }

            if (parent.classList.contains("nearby-places-filters")) {
                const filter = button.dataset.filter;
                const mapIframe = document.querySelector(
                    ".nearby-places-map iframe"
                );
                if (mapIframe && mapQueries[filter]) {
                    mapIframe.src = mapQueries[filter];
                }
            }
        });
    });
}

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

function initializeEducationSlider() {}

function initializeAgendaScroller() {
    const scroller = document.getElementById("agenda-list-scroller");
    const upButton = document.getElementById("agenda-scroll-up");
    const downButton = document.getElementById("agenda-scroll-down");

    if (!scroller || !upButton || !downButton) return;

    const checkScroll = () => {
        const scrollTop = scroller.scrollTop;
        const maxScroll = scroller.scrollHeight - scroller.clientHeight;

        upButton.classList.toggle("hidden", scrollTop <= 0);
        downButton.classList.toggle("hidden", scrollTop >= maxScroll - 1);
    };

    const firstItem = scroller.querySelector(".agenda-list-item");
    if (!firstItem) {
        upButton.classList.add("hidden");
        downButton.classList.add("hidden");
        return;
    }

    const scrollAmount = firstItem.offsetHeight + 20;

    upButton.addEventListener("click", () => {
        scroller.scrollTop -= scrollAmount;
    });

    downButton.addEventListener("click", () => {
        scroller.scrollTop += scrollAmount;
    });

    scroller.addEventListener("scroll", checkScroll);

    new ResizeObserver(checkScroll).observe(scroller);

    checkScroll();
}

function initializeAgendaInteractivity() {
    const agendaItems = document.querySelectorAll(".agenda-list-item");
    const previewImage = document.querySelector(".agenda-preview-card img");
    const previewTitle = document.querySelector(".agenda-preview-card-info h4");

    if (!agendaItems.length || !previewImage || !previewTitle) return;

    agendaItems.forEach((item) => {
        item.addEventListener("click", function () {
            agendaItems.forEach((i) => i.classList.remove("active"));

            this.classList.add("active");

            const newImageSrc = this.getAttribute("data-image");
            const newTitleText = this.querySelector(
                ".agenda-item-info h4"
            ).innerText;

            previewImage.style.opacity = "0";
            previewTitle.style.opacity = "0";
            previewTitle.style.transform = "translateY(10px)";

            setTimeout(() => {
                if (newImageSrc) previewImage.src = newImageSrc;
                previewTitle.innerText = newTitleText;

                requestAnimationFrame(() => {
                    previewImage.style.opacity = "1";
                    previewTitle.style.opacity = "1";
                    previewTitle.style.transform = "translateY(0)";
                });
            }, 300);
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
