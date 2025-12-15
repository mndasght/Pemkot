@extends('layouts.app')
@section('content')
    <!-- Hero Section -->
    <section class="hero" id="hero-section"
        style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('{{ asset('image/heronew.png') }}');">
        <div class="hero-content">
            <h1>Selamat Datang di <span>Kota Kediri</span></h1>
            <p>Jelajahi Pesona Sejarah, Budaya, dan Wisata</p>
            <div class="search-box" id="heroSearchBox">
                <span class="material-symbols-outlined search-icon">search</span>
                <input type="text" id="searchInput" placeholder="Cari destinasi, tempat makan, atau budaya...">
                <span id="clearSearch" class="material-symbols-outlined clear-icon">close</span>
                <button type="button" id="searchButton">Cari</button>
            </div>
            <!-- Feedback Hasil Pencarian -->
            <div id="searchFeedback" class="search-feedback"></div>

            <div class="hero-cta-group">
                <a href="#" class="cta-btn" id="btn-jelajahi-kota" data-video-id="iKUdILVt41o">Jelajahi Kota</a>
                <a href="#" class="cta-btn" id="btn-cek-layanan" data-video-id="2iRu7qsSfCw">Cek Layanan</a>
            </div>
        </div>
        <div class="hero-bottom-bar" id="scrollToStory">
            <span class="material-symbols-outlined">keyboard_arrow_up</span>
        </div>
    </section>


    <!-- Konten utama halaman -->
    <main class="page-content">

        <!-- PENGUMUMAN TIDAK ADA HASIL -->
        <div id="noResultsMessage" class="hidden-section"
            style="padding: 100px 5%; text-align: center; margin: 0 auto; max-width: 800px;">
            <span class="material-symbols-outlined"
                style="font-size: 5rem; color: var(--accent-color); margin-bottom: 15px;">sentiment_dissatisfied</span>
            <h3 style="color: var(--dark-color); font-family: 'Poppins', sans-serif; font-size: 1.8rem;">Maaf, tidak ada
                konten yang cocok.</h3>
            <p style="color: var(--gray); font-size: 1.1rem; margin-top: 10px;">Coba gunakan kata kunci lain (misalnya:
                'kuliner', 'universitas', 'sejarah') atau hapus pencarian Anda.</p>
        </div>

        <section class="section-story" id="story-section">
            <div class="story-container"
                style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://kediripedia.com/wp-content/uploads/2024/03/COLLECTIE_TROPENMUSEUM_Verhoogde_Brantasbrug_te_Kediri_Oost-Java_TMnr_10007564-1.jpg');">
                <div class="story-content animate-on-scroll animate-slide-in-left">
                    <h2>Kediri Bercerita</h2>
                    <h3>Sejarah Kota Kediri</h3>
                    <p>
                        Kerajaan Kediri, juga disebut Panjalu, berpusat di Daha dan kisahnya tertuang dalam kitab
                        Negarakertagama. Pada tahun 1041, Raja Airlangga membagi kerajaannya menjadi dua untuk
                        menghindari
                        perebutan tahta antara kedua puteranya.
                    </p>
                    <a href="{{ url('/sejarah') }}" class="cta-button">
                        Selengkapnya <span class="arrow">➜</span>
                    </a>
                </div>

                <div class="slider-wrapper animate-on-scroll animate-slide-in-right">
                    <button class="slider-arrow" id="prev-slide" aria-label="Slide sebelumnya">
                        <span class="material-symbols-outlined">chevron_left</span>
                    </button>
                    <div id="card-slider" class="card-slider">
                        <div class="card-item"
                            data-background="https://kediripedia.com/wp-content/uploads/2024/03/COLLECTIE_TROPENMUSEUM_Verhoogde_Brantasbrug_te_Kediri_Oost-Java_TMnr_10007564-1.jpg">
                            <img src="https://kediripedia.com/wp-content/uploads/2024/03/COLLECTIE_TROPENMUSEUM_Verhoogde_Brantasbrug_te_Kediri_Oost-Java_TMnr_10007564-1.jpg"
                                alt="Jembatan Lama">
                        </div>
                        <div class="card-item" data-background="{{ asset('image/goa.webp') }}">
                            <img src="{{ asset('image/goa.webp') }}" alt="Goa Selomangleng">
                        </div>
                        <div class="card-item" data-background="{{ asset('image/museum.webp') }}">
                            <img src="{{ asset('image/museum.webp') }}" alt="Museum Airlangga">
                        </div>
                        <div class="card-item" data-background="{{ asset('image/heronew.png') }}">
                            <img src="{{ asset('image/heronew.png') }}" alt="Gereja Merah">
                        </div>
                    </div>
                    <button class="slider-arrow" id="next-slide" aria-label="Slide berikutnya">
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- ==== Section Nearby Places ==== -->
        <section class="section-nearby-places" id="nearby-section">
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
                    <iframe id="nearby-map-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63261.94228965021!2d111.97905342167968!3d-7.82823379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1swisata%20kuliner%20di%20Kediri!5e0!3m2!1sen!2sid!4v1731295000000!5m2!1sen!2sid"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>

        <section class="section-popular-tours" id="tours-section">
            <div class="popular-tours-container">
                <div class="popular-tours-header animate-on-scroll animate-slide-up">
                    <h2>Tempat Wisata yang Populer</h2>
                    <a href="{{ url('/wisata') }}" class="btn-more">Selengkapnya</a>
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
                            <img src="{{ asset('image/goa.webp') }}"
                                alt="Goa Selomangkleng">
                            <div class="tour-card-title">
                                <h3>Goa Selomangkleng, Mojoroto</h3>
                            </div>
                        </div>
                        <div class="tour-card">
                            <img src="{{ asset('image/taman_sekartaji.webp') }}"
                                alt="Taman Sekartaji">
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
                            <img src="{{ asset('image/museum.webp') }}"
                                alt="Museum Airlangga">
                            <div class="tour-card-title">
                                <h3>Museum Airlangga, Mojoroto</h3>
                            </div>
                        </div>
                    </div>
                    <button class="slider-arrow" id="next-tour-slide" aria-label="Slide berikutnya">
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
        </section>



        <section class="section-culinary" id="culinary-section">
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
                                        <span class="value">10:00 - 18:01</span>
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

        <section class="section-education" id="education-section">
            <div class="education-container">
                <div class="education-header animate-on-scroll animate-slide-up">
                    <h2>Kediri, Kota Pelajar</h2>
                    <p>Di Kediri, belajar bisa di mana saja — ada kampus keren, sekolah favorit, sampai pondok pesantren
                        terkenal. Kota ini jadi tempat tumbuhnya pelajar dan mahasiswa yang ingin berkembang, baik dalam
                        ilmu, kreativitas, maupun karakter.</p>
                </div>
                <div class="education-filters animate-on-scroll animate-slide-up">
                    <button class="filter-btn active" data-filter="univ">Universitas</button>
                    <button class="filter-btn" data-filter="sd">Sekolah Dasar</button>
                    <button class="filter-btn" data-filter="pesantren">Pondok Pesantren</button>
                    <button class="filter-btn" data-filter="lainnya">SMA & Lainnya</button>
                </div>
                <div class="education-slider-wrapper animate-on-scroll animate-stagger">
                    <div class="education-grid">

                        <!-- Kategori: Universitas -->
                        <div class="education-card" data-category="univ">
                            <div class="education-card-image-wrapper">
                                <img src="{{ asset('image/udinus.webp') }}"
                                    alt="Universitas Dian Nuswantoro">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Universitas</span>
                                <h3>Universitas Dian Nuswantoro PSDKU Kediri</h3>
                                <p class="description">Universitas Dian Nuswantoro adalah salah satu perguruan tinggi
                                    swasta terakreditasi Perguruan Tinggi Unggul yang hadir di Kota Kediri.</p>
                            </div>
                        </div>
                        <div class="education-card" data-category="univ">
                            <div class="education-card-image-wrapper">
                                <img src="{{ asset('image/bhakti_wiyata.webp') }}"
                                    alt="Institut Ilmu Kesehatan Bhakti Wiyata">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Universitas</span>
                                <h3>Institut Ilmu Kesehatan Bhakti Wiyata</h3>
                                <p class="description">Institut Ilmu Kesehatan pertama di Indonesia yang mencetak tenaga
                                    kesehatan profesional.</p>
                            </div>
                        </div>
                        <div class="education-card" data-category="univ">
                            <div class="education-card-image-wrapper">
                                <img src="{{ asset('image/uniska.webp') }}" alt="Uniska">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Universitas</span>
                                <h3>Universitas Islam Kadiri</h3>
                                <p class="description">Universitas Islam Kadiri adalah universitas swasta tertua di
                                    Kediri yang terus berinovasi.</p>
                            </div>
                        </div>
                        <div class="education-card" data-category="univ">
                            <div class="education-card-image-wrapper">
                                <img src="{{ asset('image/unp.webp') }}"
                                    alt="Universitas Nusantara PGRI">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Universitas</span>
                                <h3>Universitas Nusantara PGRI</h3>
                                <p class="description">Kampus pencetak pendidik dan wirausahawan muda yang kompeten di
                                    bidangnya.</p>
                            </div>
                        </div>

                        <!-- Kategori: Sekolah Dasar (SD) -->
                        <div class="education-card hidden-card" data-category="sd">
                            <div class="education-card-image-wrapper">
                                <img src="https://placehold.co/400x500/FFD700/333333?text=SD+Santa+Maria"
                                    alt="SDK Santa Maria">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Sekolah Dasar</span>
                                <h3>SDK Santa Maria</h3>
                                <p class="description">Sekolah dasar swasta yang mengedepankan pendidikan karakter dan
                                    disiplin tinggi.</p>
                            </div>
                        </div>
                        <div class="education-card hidden-card" data-category="sd">
                            <div class="education-card-image-wrapper">
                                <img src="https://placehold.co/400x500/0D7DA3/FFFFFF?text=SD+Plus+Rahmat"
                                    alt="SD Plus Rahmat">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Sekolah Dasar</span>
                                <h3>SD Plus Rahmat</h3>
                                <p class="description">Sekolah dasar berbasis Islam terpadu yang memadukan kurikulum
                                    nasional dan keagamaan.</p>
                            </div>
                        </div>
                        <div class="education-card hidden-card" data-category="sd">
                            <div class="education-card-image-wrapper">
                                <img src="https://placehold.co/400x500/1E90FF/FFFFFF?text=SDN+Banjaran+4"
                                    alt="SDN Banjaran 4">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Sekolah Dasar</span>
                                <h3>SDN Banjaran 4</h3>
                                <p class="description">Salah satu sekolah dasar favorit dengan segudang prestasi akademik
                                    dan non-akademik di Kota Kediri.</p>
                            </div>
                        </div>

                        <!-- Kategori: Pondok Pesantren -->
                        <div class="education-card hidden-card" data-category="pesantren">
                            <div class="education-card-image-wrapper">
                                <img src="https://placehold.co/400x500/121212/FFFFFF?text=Ponpes+Lirboyo"
                                    alt="Ponpes Lirboyo">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Pondok Pesantren</span>
                                <h3>Ponpes Lirboyo</h3>
                                <p class="description">Salah satu pesantren terbesar dan tertua di Indonesia, menjadi
                                    pusat studi Islam klasik.</p>
                            </div>
                        </div>
                        <div class="education-card hidden-card" data-category="pesantren">
                            <div class="education-card-image-wrapper">
                                <img src="https://placehold.co/400x500/0D7DA3/FFFFFF?text=Ponpes+Wali+Barokah"
                                    alt="Ponpes Wali Barokah">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Pondok Pesantren</span>
                                <h3>Ponpes Wali Barokah</h3>
                                <p class="description">Pondok pesantren besar yang terletak di pusat kota, fokus pada
                                    pendalaman Al-Quran dan Hadits.</p>
                            </div>
                        </div>
                        <div class="education-card hidden-card" data-category="pesantren">
                            <div class="education-card-image-wrapper">
                                <img src="https://placehold.co/400x500/1E90FF/FFFFFF?text=Ponpes+Kedunglo"
                                    alt="Ponpes Kedunglo">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Pondok Pesantren</span>
                                <h3>Ponpes Kedunglo</h3>
                                <p class="description">Pesantren yang dikenal dengan kegiatan Mujahadah Kubro dan
                                    pendidikan karakternya.</p>
                            </div>
                        </div>

                        <!-- Kategori: Lainnya (SMA/SMK/Perpus) -->
                        <div class="education-card hidden-card" data-category="lainnya">
                            <div class="education-card-image-wrapper">
                                <img src="https://placehold.co/400x500/FFD700/333333?text=SMAN+1+Kediri"
                                    alt="SMAN 1 Kediri">
                            </div>
                            <div class="education-card-info">
                                <span class="type">SMA Negeri</span>
                                <h3>SMAN 1 Kediri</h3>
                                <p class="description">Sekolah menengah atas rujukan dengan fasilitas lengkap dan lulusan
                                    berkualitas.</p>
                            </div>
                        </div>
                        <div class="education-card hidden-card" data-category="lainnya">
                            <div class="education-card-image-wrapper">
                                <img src="https://placehold.co/400x500/0D7DA3/FFFFFF?text=MAN+2+Kota"
                                    alt="MAN 2 Kota Kediri">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Madrasah Aliyah</span>
                                <h3>MAN 2 Kota Kediri</h3>
                                <p class="description">Madrasah unggulan dengan berbagai program keterampilan dan
                                    prestasi nasional.</p>
                            </div>
                        </div>
                        <div class="education-card hidden-card" data-category="lainnya">
                            <div class="education-card-image-wrapper">
                                <img src="https://placehold.co/400x500/1E90FF/FFFFFF?text=Perpustakaan+Kota"
                                    alt="Perpustakaan Kota Kediri">
                            </div>
                            <div class="education-card-info">
                                <span class="type">Fasilitas Publik</span>
                                <h3>Perpustakaan Kota Kediri</h3>
                                <p class="description">Pusat literasi warga dengan koleksi buku lengkap dan ruang baca
                                    yang nyaman.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- ==== Section Agenda (Baru) ==== -->
        <section class="section-agenda" id="agenda-section">
            <div class="agenda-container"
                style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://live.staticflickr.com/65535/54928693191_2360361fea.jpg');">

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
                    <!-- Card Preview Kiri -->
                    <div class="agenda-preview-card">
                        <img src="https://live.staticflickr.com/65535/54928861463_e4c182380f_z.jpg"
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
                        <div class="agenda-list-item active"
                            data-image="https://live.staticflickr.com/65535/54928861463_e4c182380f_z.jpg">
                            <div class="agenda-date">
                                <span class="month">NOV</span>
                                <span class="day">10</span>
                            </div>
                            <div class="agenda-item-info">
                                <h4>Dhoho Street Fashion 2024</h4>
                                <p>Pagelaran busana tahunan kebanggaan Kota Kediri.</p>
                            </div>
                        </div>

                        <div class="agenda-list-item"
                            data-image="https://live.staticflickr.com/65535/54927793167_204cdeaff1_w.jpg">
                            <div class="agenda-date">
                                <span class="month">NOV</span>
                                <span class="day">15</span>
                            </div>
                            <div class="agenda-item-info">
                                <h4>Kediri Night Carnival</h4>
                                <p>Pawai budaya dan lampion di sepanjang Jl. Dhoho.</p>
                            </div>
                        </div>
                        <div class="agenda-list-item"
                            data-image="https://live.staticflickr.com/65535/54928906499_675f77ab09_w.jpg">
                            <div class="agenda-date">
                                <span class="month">NOV</span>
                                <span class="day">22</span>
                            </div>
                            <div class="agenda-item-info">
                                <h4>Festival Kuliner Tahu</h4>
                                <p>Pesta rakyat merayakan kuliner khas Kediri, Tahu Takwa.</p>
                            </div>
                        </div>
                        <div class="agenda-list-item"
                            data-image="https://live.staticflickr.com/65535/54928861468_efc1848c1d.jpg">
                            <div class="agenda-date">
                                <span class="month">DEC</span>
                                <span class="day">05</span>
                            </div>
                            <div class="agenda-item-info">
                                <h4>Pameran UMKM Kediri</h4>
                                <p>Temukan produk-produk unggulan dari UMKM lokal.</p>
                            </div>
                        </div>
                        <div class="agenda-list-item"
                            data-image="https://live.staticflickr.com/65535/54928906504_2099c47f19_c.jpg">
                            <div class="agenda-date">
                                <span class="month">DEC</span>
                                <span class="day">18</span>
                            </div>
                            <div class="agenda-item-info">
                                <h4>Pentas Seni Akhir Tahun</h4>
                                <p>Pagelaran seni dan budaya di Taman Sekartaji.</p>
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
        <section class="section-gallery" id="gallery-section">
            <div class="gallery-container">
                <div class="gallery-header animate-on-scroll animate-slide-up">
                    <h2>Galeri Pariwisata & Blog Wisata</h2>
                </div>
                <div class="gallery-content">
                    <div class="gallery-blog-card animate-on-scroll animate-slide-in-left">
                        <img src="{{ asset('image/gunungklotok.png') }}" alt="Blog Image">
                        <div class="gallery-blog-info">
                            <div class="blog-date">10 NOVEMBER 2025</div>
                            <h3>Menjelajahi Keindahan Tersembunyi di Kota Kediri</h3>
                            <p>
                                Temukan pesona Kota Kediri, surga tersembunyi di lereng Gunung Wilis
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
                            <iframe id="gallery-youtube-video" src="https://www.youtube.com/embed/Zj6euNbvb5I"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                    <div class="gallery-full-card animate-on-scroll animate-slide-up"
                        style="background-image: url('{{ asset('image/gunungklotok.png') }}');">
                        <div class="gallery-full-content">
                            <h3>Video Terbaru: Pesona Malam Hari Kota Kediri</h3>
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
@endsection
