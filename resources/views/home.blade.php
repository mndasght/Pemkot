<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pemerintah Kota Kediri</title>

    <!-- Link CSS -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">


</head>

<body>
    <!-- Navbar -->
    <nav class="navbar tes">
        <div class="logo">KediriMapan</div>
        <ul class="nav-links" id="navLinks">
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Sejarah</a></li>
            <li><a href="#">Wisata</a></li>
            <li><a href="#">Event</a></li>
            <li><a href="#">Berita</a></li>
            <li><a href="#">Kontak</a></li>
        </ul>
        <div class="hamburger" id="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </nav>


    <!-- Hero Section -->
    <section class="hero"
        style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('{{ asset('image/hero.JPG') }}');">
        <div class="hero-content">
            <h1>Selamat Datang di <span>Kota Kediri</span></h1>
            <p>Jelajahi Pesona Sejarah, Budaya, dan Wisata</p>
            <div class="search-box">
                <span class="material-symbols-outlined">search</span>
                <input type="text" placeholder="Cari destinasi, tempat makan, atau budaya...">
                <button type="submit">Cari</button>
            </div>
            <div class="hero-cta-group">
                <a href="#" class="cta-btn">Jelajahi Kota</a>
                <a href="#" class="cta-btn">Cek Layanan</a>
            </div>
        </div>
        <div class="hero-bottom-bar" id="scrollToStory">
            <span class="material-symbols-outlined">keyboard_arrow_up</span>
        </div>
    </section>


    <!-- Konten utama halaman (sheet putih) -->
    <main class="page-content">

        <section class="section-story" id="story-section">
            <div class="story-container"
                style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://placehold.co/1200x600/0D7DA3/white?text=Sejarah+1');">
                <div class="story-content animate-on-scroll animate-slide-in-left">
                    <h2>Kediri Bercerita</h2>
                    <h3>Sejarah Kota Kediri</h3>
                    <p>
                        Kerajaan Kediri, juga disebut Panjalu, berpusat di Daha dan kisahnya tertuang dalam kitab
                        Negarakertagama. Pada tahun 1041, Raja Airlangga membagi kerajaannya menjadi dua untuk
                        menghindari
                        perebutan tahta antara kedua puteranya.
                    </p>
                    <a href="#" class="cta-button">
                        Selengkapnya <span class="arrow">➜</span>
                    </a>
                </div>

                <div class="slider-wrapper animate-on-scroll animate-slide-in-right">
                    <button class="slider-arrow" id="prev-slide" aria-label="Slide sebelumnya">
                        <span class="material-symbols-outlined">chevron_left</span>
                    </button>
                    <div id="card-slider" class="card-slider">
                        <div class="card-item"
                            data-background="https://placehold.co/1200x600/0D7DA3/white?text=Sejarah+1">
                            <img src="https://placehold.co/400x600/0D7DA3/white?text=Candi" alt="Candi Penataran">
                        </div>
                        <div class="card-item"
                            data-background="https://placehold.co/1200x600/1E90FF/white?text=Sejarah+2">
                            <img src="https://placehold.co/400x600/1E90FF/white?text=Gua" alt="Gua Selomangleng">
                        </div>
                        <div class="card-item"
                            data-background="https://placehold.co/1200x600/0D7DA3/white?text=Sejarah+3">
                            <img src="https://placehold.co/400x600/0D7DA3/white?text=Museum" alt="Museum Airlangga">
                        </div>
                        <div class="card-item"
                            data-background="https://placehold.co/1200x600/1E90FF/white?text=Sejarah+4">
                            <img src="https://placehold.co/400x600/1E90FF/white?text=Monumen" alt="Simpang Lima Gumul">
                        </div>
                        <div class="card-item"
                            data-background="https://placehold.co/1200x600/0D7DA3/white?text=Sejarah+5">
                            <img src="https://placehold.co/400x600/0D7DA3/white?text=Air+Terjun" alt="Air Terjun Dolo">
                        </div>
                        <div class="card-item"
                            data-background="https://placehold.co/1200x600/1E90FF/white?text=Sejarah+6">
                            <img src="https://placehold.co/400x600/1E90FF/white?text=Gunung" alt="Gunung Kelud">
                        </div>
                    </div>
                    <button class="slider-arrow" id="next-slide" aria-label="Slide berikutnya">
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- ==== Section Nearby Places (BARU) ==== -->
        <section class="section-nearby-places">
            <div class="nearby-places-container">
                <div class="nearby-places-header animate-on-scroll animate-slide-up">
                    <h2>Cari tempat di sekitarmu</h2>
                    <p>Temukan berbagai lokasi penting di Kota Kediri seperti tempat wisata, kuliner, sekolah,
                        universitas, fasilitas kota, rental kendaraan, hingga pondok pesantren. Pilih kategori yang kamu
                        butuhkan dan jelajahi dengan cepat dan mudah.</p>
                </div>
                <div class="nearby-places-filters animate-on-scroll animate-slide-up">
                    <button class="filter-btn active" data-filter="wisata">Wisata & Kuliner</button>
                    <button class="filter-btn" data-filter="pendidikan">Pendidikan</button>
                    <button class="filter-btn" data-filter="fasilitas">Fasilitas Kota</button>
                    <button class="filter-btn" data-filter="transportasi">Transportasi & Rental</button>
                </div>
                <!-- ==== Peta Interaktif ==== -->
                <div class="nearby-places-map animate-on-scroll animate-slide-up">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63261.94228965021!2d111.97905342167968!3d-7.82823379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1swisata%20kuliner%20di%20Kediri!5e0!3m2!1sen!2sid!4v1731295000000!5m2!1sen!2sid"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
        <!-- ==== END Section Nearby Places ==== -->

        <section class="section-popular-tours">
            <div class="popular-tours-container">
                <div class="popular-tours-header animate-on-scroll animate-slide-up">
                    <h2>Tempat Wisata yang Populer</h2>
                    <a href="#" class="btn-more">Selengkapnya</a>
                </div>
                <div class="popular-tours-slider-wrapper animate-on-scroll animate-stagger">
                    <button class="slider-arrow" id="prev-tour-slide" aria-label="Slide sebelumnya">
                        <span class="material-symbols-outlined">chevron_left</span>
                    </button>
                    <div class="popular-tours-grid">
                        <div class="tour-card">
                            <img src="{{ asset('image/sumber_banteng.webp') }}" alt="Sumber Banteng">
                            <div class="tour-card-title">
                                <h3>Sumber Banteng, Pesantren</h3>
                            </div>
                        </div>
                        <div class="tour-card">
                            <img src="{{ asset('image/goa.JPG') }}" alt="Goa Selomangkleng">
                            <div class="tour-card-title">
                                <h3>Goa Selomangkleng, Mojoroto</h3>
                            </div>
                        </div>
                        <div class="tour-card">
                            <img src="{{ asset('image/taman_sekartaji.webp') }}" alt="Taman Sekartaji">
                            <div class="tour-card-title">
                                <h3>Taman Sekartaji, Mojoroto
                                </h3>
                            </div>
                        </div>
                        <div class="tour-card">
                            <img src="{{ asset('image/taman_brantas.webp') }}" alt="Taman Brantas">
                            <div class="tour-card-title">
                                <h3>Taman Brantas, Kota</h3>
                            </div>
                        </div>
                        <div class="tour-card">
                            <img src="{{ asset('image/museum.webp') }}" alt="Museum Airlangga">
                            <div class="tour-card-title">
                                <h3>Museum Airlangga, Mojoroto</h3>
                            </div>
                        </div>
                        <div class="tour-card">
                            <img src="https://placehold.co/400x600/1E90FF/white?text=Wisata+6" alt="Wisata 6">
                            <div class="tour-card-title">
                                <h3>Wisata 6</h3>
                            </div>
                        </div>
                        <div class="tour-card">
                            <img src="https://placehold.co/400x600/0D7DA3/white?text=Wisata+7" alt="Wisata 7">
                            <div class="tour-card-title">
                                <h3>Wisata 7</h3>
                            </div>
                        </div>
                        <div class="tour-card">
                            <img src="https://placehold.co/400x600/1E90FF/white?text=Wisata+8" alt="Wisata 8">
                            <div class="tour-card-title">
                                <h3>Wisata 8</h3>
                            </div>
                        </div>
                        <div class="tour-card">
                            <img src="https://placehold.co/400x600/0D7DA3/white?text=Wisata+9" alt="Wisata 9">
                            <div class="tour-card-title">
                                <h3>Wisata 9</h3>
                            </div>
                        </div>
                        <div class="tour-card">
                            <img src="https://placehold.co/400x600/1E90FF/white?text=Wisata+10" alt="Wisata 10">
                            <div class="tour-card-title">
                                <h3>Wisata 10</h3>
                            </div>
                        </div>
                    </div>
                    <button class="slider-arrow" id="next-tour-slide" aria-label="Slide berikutnya">
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
        </section>



        <section class="section-culinary">
            <div class="culinary-container">
                <div class="culinary-header animate-on-scroll animate-slide-up">
                    <h2>Yuk Kulineran Bareng Influencer Kediri</h2>
                    <a href="#" class="btn-more">Selengkapnya</a>
                </div>
                <div class="culinary-content">
                    <div class="culinary-main-card animate-on-scroll animate-slide-in-left">
                        <img src="{{ asset('image/cardkuliner.png') }}" alt="Kuliner Utama">
                    </div>

                    <div class="culinary-slider-wrapper animate-on-scroll animate-slide-in-right animate-stagger">
                        <button class="slider-arrow" id="prev-culinary-slide" aria-label="Slide sebelumnya">
                            <span class="material-symbols-outlined">chevron_left</span>
                        </button>
                        <div class="culinary-slider">

                            <div class="culinary-card">
                                <img src="{{ asset('image/sate_kobong.webp') }}" alt="Kuliner 1">
                                <div class="culinary-card-info">
                                    <div class="card-info-row">
                                        <h4>Sate Kobong</h4>
                                        <span class="rating"><span class="material-symbols-outlined">star</span>
                                            4.8</span>
                                    </div>
                                    <div class="card-info-row">
                                        <span class="label">Jam Buka</span>
                                        <span class="value">10:00 - 21:00</span>
                                    </div>
                                    <span class="menu-list-label">Daftar Menu:</span>
                                    <ul class="menu-list">
                                        <li>Sate Ayam</li>
                                        <li>Balungan</li>
                                        <li>Lontong</li>
                                    </ul>
                                    <p class="price">start from <strong>25k idr</strong> per orang</p>
                                </div>
                            </div>

                            <div class="culinary-card">
                                <img src="{{ asset('image/depot_wilis.webp') }}" alt="Kuliner 2">
                                <div class="culinary-card-info">
                                    <div class="card-info-row">
                                        <h4>Depot Wilis</h4>
                                        <span class="rating"><span class="material-symbols-outlined">star</span>
                                            4.5</span>
                                    </div>
                                    <div class="card-info-row">
                                        <span class="label">Jam Buka</span>
                                        <span class="value">06:00 - 19:00</span>
                                    </div>
                                    <span class="menu-list-label">Daftar Menu:</span>
                                    <ul class="menu-list">
                                        <li>Nasi Rawon</li>
                                        <li>Sop Buntut</li>
                                        <li>Rawon Buntut</li>
                                    </ul>
                                    <p class="price">start from <strong>25k idr</strong> per orang</p>
                                </div>
                            </div>

                            <div class="culinary-card">
                                <img src="{{ asset('image/pecel_pudakit.webp') }}" alt="Kuliner 3">
                                <div class="culinary-card-info">
                                    <div class="card-info-row">
                                        <h4>Pecel Pudakit</h4>
                                        <span class="rating"><span class="material-symbols-outlined">star</span>
                                            4.6</span>
                                    </div>
                                    <div class="card-info-row">
                                        <span class="label">Jam Buka</span>
                                        <span class="value">08:00 - 20:00</span>
                                    </div>
                                    <span class="menu-list-label">Daftar Menu:</span>
                                    <ul class="menu-list">
                                        <li>Nasi Pecel</li>
                                        <li>Nasi Tumpang</li>
                                        <li>Nasi Campur</li>
                                    </ul>
                                    <p class="price">start from <strong>10k idr</strong> per box</p>
                                </div>
                            </div>

                            <div class="culinary-card">
                                <img src="{{ asset('image/soto_podjok.webp') }}" alt="Kuliner 4">
                                <div class="culinary-card-info">
                                    <div class="card-info-row">
                                        <h4>Soto Podjok</h4>
                                        <span class="rating"><span class="material-symbols-outlined">star</span>
                                            4.7</span>
                                    </div>
                                    <div class="card-info-row">
                                        <span class="label">Jam Buka</span>
                                        <span class="value">09:00 - 21:00</span>
                                    </div>
                                    <span class="menu-list-label">Daftar Menu:</span>
                                    <ul class="menu-list">
                                        <li>Soto Ayam</li>
                                        <li>Ayam Suwir</li>
                                        <li>Kulit Goreng</li>
                                    </ul>
                                    <p class="price">start from <strong>22k idr</strong> per orang</p>
                                </div>
                            </div>

                            <div class="culinary-card">
                                <img src="{{ asset('image/soto_pakelan.webp') }}" alt="Kuliner 5">
                                <div class="culinary-card-info">
                                    <div class="card-info-row">
                                        <h4>Soto Pakelan</h4>
                                        <span class="rating"><span class="material-symbols-outlined">star</span>
                                            4.4</span>
                                    </div>
                                    <div class="card-info-row">
                                        <span class="label">Jam Buka</span>
                                        <span class="value">10:00 - 18:00</span>
                                    </div>
                                    <span class="menu-list-label">Daftar Menu:</span>
                                    <ul class="menu-list">
                                        <li>Es Campur</li>
                                        <li>Es Teler</li>
                                        <li>Aneka Jus</li>
                                    </ul>
                                    <p class="price">start from <strong>10k idr</strong> per orang</p>
                                </div>
                            </div>

                        </div>
                        <button class="slider-arrow" id="next-culinary-slide" aria-label="Slide berikutnya">
                            <span class="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-education">
            <div class="education-container">
                <div class="education-header animate-on-scroll animate-slide-up">
                    <h2>Kediri, Kota Pelajar</h2>
                    <p>Di Kediri, belajar bisa di mana saja — ada kampus keren, sekolah favorit, sampai pondok pesantren
                        terkenal. Kota ini jadi tempat tumbuhnya pelajar dan mahasiswa yang ingin berkembang, baik dalam
                        ilmu, kreativitas, maupun karakter.</p>
                </div>
                <div class="education-filters animate-on-scroll animate-slide-up">
                    <button class="filter-btn active" data-filter="all">Universitas</button>
                    <button class="filter-btn" data-filter="sd">Sekolah Dasar</button>
                    <button class="filter-btn" data-filter="pesantren">Pondok Pesantren</button>
                    <button class="filter-btn" data-filter="lainnya">Selengkapnya</button>
                </div>
                <div class="education-slider-wrapper animate-on-scroll animate-stagger">
                    <div class="education-grid">
                        <div class="education-card">
                            <div class="education-card-image-wrapper">
                                <img src="{{ asset('image/udinus.webp') }}" alt="Universitas Dian Nuswantoro">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Universitas</span>
                                <h3>Universitas Dian Nuswantoro PSDKU Kediri</h3>
                                <p class="description">Universitas Dian Nuswantoro adalah salah satu perguruan tinggi
                                    swasta terakreditasi Perguruan Tinggi Unggul yang ada di Kota Semarang, Jawa Tengah.
                                    Kini hadir di Kota Kediri, Jawa Timur, Indonesia.</p>
                            </div>
                        </div>
                        <div class="education-card">
                            <div class="education-card-image-wrapper">
                                <img src="{{ asset('image/bhakti_wiyata.webp') }}"
                                    alt="Institut Ilmu Kesehatan Bhakti Wiyata">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Universitas</span>
                                <h3>Institut Ilmu Kesehatan Bhakti Wiyata</h3>
                                <p class="description">Institut Ilmu Kesehatan Bhakti Wiyata Kediri adalah sebuah
                                    perguruan tinggi swasta yang terletak di Kediri, Jawa Timur. Perguruan tinggi ini
                                    didirikan pada tahun 1985 oleh Yayasan Bhakti Husada dengan nama Pendidikan Bhakti
                                    Husada.</p>
                            </div>
                        </div>
                        <div class="education-card">
                            <div class="education-card-image-wrapper">
                                <img src="{{ asset('image/uniska.webp') }}" alt="Uniska">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Universitas</span>
                                <h3>Universitas Islam Kadiri</h3>
                                <p class="description">Universitas Islam Kadiri adalah suatu universitas swasta yang
                                    didirikan serta dikelola oleh Yayasan Bina Cendekia Muslim Pancasila (YBCMP) sejak
                                    1983.</p>
                            </div>
                        </div>
                        <div class="education-card">
                            <div class="education-card-image-wrapper">
                                <img src="{{ asset('image/unp.webp') }}" alt="Universitas Nusantara PGRI">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Universitas</span>
                                <h3>Universitas Nusantara PGRI</h3>
                                <p class="description">UNP Kediri adalah Universitas Nusantara PGRI Kediri, sebuah
                                    perguruan tinggi yang terletak di Kediri, Jawa Timur, yang bernaung di bawah YPPLP
                                    PT-PGRI Kediri.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==== Section Agenda (Baru) ==== -->
        <section class="section-agenda">
            <div class="agenda-container"
                style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://i.pinimg.com/736x/f3/18/ea/f318ea99e2431b5ba84848ffc47055f7.jpg');">

                <div class="agenda-content animate-on-scroll animate-slide-in-left">
                    <div class="agenda-title-block">
                        <div class="agenda-title-text">
                            <span class="title-up">Upcoming</span>
                            <span class="title-down">Agenda</span>
                        </div>
                        <span class="material-symbols-outlined agenda-title-arrow">arrow_right_alt</span>
                    </div>

                    <h3>Agenda yang akan datang di Kota Kediri</h3>
                    <p>
                        Nantikan Setiap Keseruan yang akan datang di Kota Kediri
                    </p>
                    <div class="agenda-preview-card">
                        <img src="https://i.pinimg.com/1200x/4f/78/5a/4f785a43b9d5a9a16225d8f47d3c5026.jpg"
                            alt="Agenda Highlight">
                        <div class="agenda-preview-card-info">
                            <h4>Dhoho Street Fashion 2024</h4>
                        </div>
                    </div>
                </div>

                <div class="agenda-list-wrapper animate-on-scroll animate-slide-in-right animate-stagger">
                    <button class="agenda-scroll-arrow" id="agenda-scroll-up" aria-label="Scroll ke atas">
                        <span class="material-symbols-outlined">keyboard_arrow_up</span>
                    </button>

                    <div class="agenda-list-scroller" id="agenda-list-scroller">
                        <div class="agenda-list-item">
                            <div class="agenda-date">
                                <span class="month">NOV</span>
                                <span class="day">15</span>
                            </div>
                            <div class="agenda-item-info">
                                <h4>Kediri Night Carnival</h4>
                                <p>Pawai budaya dan lampion di sepanjang Jl. Dhoho.</p>
                            </div>
                        </div>
                        <div class="agenda-list-item">
                            <div class="agenda-date">
                                <span class="month">NOV</span>
                                <span class="day">22</span>
                            </div>
                            <div class="agenda-item-info">
                                <h4>Festival Kuliner Tahu</h4>
                                <p>Pesta rakyat merayakan kuliner khas Kediri, Tahu Takwa.</p>
                            </div>
                        </div>
                        <div class="agenda-list-item">
                            <div class="agenda-date">
                                <span class="month">DEC</span>
                                <span class="day">05</span>
                            </div>
                            <div class="agenda-item-info">
                                <h4>Pameran UMKM Kediri</h4>
                                <p>Temukan produk-produk unggulan dari UMKM lokal.</p>
                            </div>
                        </div>
                        <!-- Tambahkan item agenda lagi di sini untuk menguji scroll -->
                        <div class="agenda-list-item">
                            <div class="agenda-date">
                                <span class="month">DEC</span>
                                <span class="day">18</span>
                            </div>
                            <div class="agenda-item-info">
                                <h4>Pentas Seni Akhir Tahun</h4>
                                <p>Pagelaran seni dan budaya di Taman Sekartaji.</p>
                            </div>
                        </div>
                        <div class="agenda-list-item">
                            <div class="agenda-date">
                                <span class="month">JAN</span>
                                <span class="day">01</span>
                            </div>
                            <div class="agenda-item-info">
                                <h4>Kediri Car Free Night</h4>
                                <p>Perayaan malam tahun baru di Simpang Lima Gumul.</p>
                            </div>
                        </div>
                    </div>

                    <button class="agenda-scroll-arrow" id="agenda-scroll-down" aria-label="Scroll ke bawah">
                        <span class="material-symbols-outlined">keyboard_arrow_down</span>
                    </button>
                </div>

            </div>
        </section>
        <!-- ==== Section Gallery (Baru) ==== -->
        <section class="section-gallery">
            <div class="gallery-container">
                <div class="gallery-header animate-on-scroll animate-slide-up">
                    <h2>Galeri Pariwisata & Blog Wisata</h2>
                </div>
                <div class="gallery-content">
                    <div class="gallery-blog-card animate-on-scroll animate-slide-in-left">
                        <img src="https://placehold.co/1200x800/0D7DA3/FFFFFF?text=Blog+Image" alt="Blog Image">
                        <div class="gallery-blog-info">
                            <div class="blog-date">10 NOVEMBER 2025</div>
                            <h3>Menjelajahi Keindahan Tersembunyi di Air Terjun Dolo</h3>
                            <p>
                                Temukan pesona Air Terjun Dolo yang menawan, surga tersembunyi di lereng Gunung Wilis
                                yang
                                menawarkan kesegaran dan pemandangan...
                            </p>
                            <a href="#" class="blog-read-more">
                                Baca Selengkapnya <span class="arrow">➜</span>
                            </a>
                        </div>
                    </div>

                    <div class="gallery-video-card animate-on-scroll animate-slide-in-right">
                        <div class="video-responsive-wrapper">
                            <iframe src="https://www.youtube.com/embed/Zj6euNbvb5I" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                    <div class="gallery-full-card animate-on-scroll animate-slide-up"
                        style="background-image: url('https://placehold.co/1200x800/1E90FF/FFFFFF?text=Simpang+Lima+Gumul+Malam');">
                        <div class="gallery-full-content">
                            <h3>Video Terbaru: Pesona Malam Hari Simpang Lima Gumul</h3>
                            <p>Lihat bagaimana ikon Kota Kediri ini bersinar di malam hari.</p>
                            <div class="gallery-full-tags">
                                <a href="#" class="gallery-tag">Google</a>
                                <a href="#" class="gallery-tag">Trending</a>
                                <a href="#" class="gallery-tag">Baru</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <!-- ==== FOOTER BARU ==== -->

    <!-- Bagian Gambar Pre-Footer (LAPOR) -->
    <div class="pre-footer-image" style="background-image: url('{{ asset('image/footer.webp') }}');">

        <!-- Konten Lapor (BARU) -->
        <div class="lapor-content-wrapper">
            <div class="lapor-image">
                <img src="{{ asset('image/112.png') }}" alt="Lapor Mbak Wali">
            </div>
            <div class="lapor-details">
                <h2>Lapor Mbak Wali 112</h2>
                <p>Sampaikan aduan, kritik, dan saran Anda untuk membangun Kota Kediri menjadi lebih baik. Kami siap
                    merespon dengan cepat.</p>
                <div class="lapor-search-box">
                    <span class="material-symbols-outlined">confirmation_number</span>
                    <input type="text" placeholder="Cari nomor tiket aduan Anda...">
                    <button type="submit">Cek Aduan</button>
                </div>
            </div>
            <!-- GAMBAR KANAN BARU -->
            <div class="lapor-image">
                <img src="{{ asset('image/rsz_fotkanan.png') }}" alt="Aduan 112">
            </div>
        </div>

    </div>
    <!-- Footer Utama -->
    <footer class="site-footer">
        <div class="footer-container">
            <!-- Kolom 1: Logo & Semboyan -->
            <div class="footer-column">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Logo_Kota_Kediri_-_Seal_of_Kediri_City.svg" alt="Logo Pemkot Kediri"
                    class="footer-logo">
                <p>"Kediri Harmoni, Kota Berbudaya dan Melayani"</p>
            </div>
            <!-- Kolom 2: Navigation -->
            <div class="footer-column">
                <h3>Navigation</h3>
                <ul class="footer-links">
                    <li><a href="#">Beranda</a></li>
                    <li><a href="#">Sejarah</a></li>
                    <li><a href="#">Wisata</a></li>
                    <li><a href="#">Event</a></li>
                    <li><a href="#">Berita</a></li>
                </ul>
            </div>
            <!-- Kolom 3: Contact Us -->
            <div class="footer-column">
                <h3>Contact Us</h3>
                <ul class="footer-links">
                    <li>(0354) 123456</li>
                    <li>kontak@kedirikota.go.id</li>
                    <li>Jl.Basuki Rahmat No.15, Kediri</li>
                </ul>
            </div>
            <!-- Kolom 4: Learn More -->
            <div class="footer-column">
                <h3>Learn More</h3>
                <ul class="footer-links">
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
            <!-- Kolom 5: Social Media -->
            <div class="footer-column">
                <h3>Social Media</h3>
                <div class="footer-social-links">
                    <!-- Placeholder untuk ikon, menggunakan inisial -->
                    <a href="#" class="fab fa-facebook-f" aria-label="Facebook"></a>
                    <a href="#" class="fab fa-twitter" aria-label="Twitter"></a>
                    <a href="#" class="fab fa-instagram" aria-label="Instagram"></a>
                    <a href="#" class="fab fa-youtube" aria-label="YouTube"></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2025 Pemerintah Kota Kediri. All rights reserved.
        </div>
    </footer>
    <!-- ==== END FOOTER ==== -->

    <script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>
