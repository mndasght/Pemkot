@extends('layouts.app')
@section('content')
    <header class="detail-hero" id="heroSection"
        style="background-image: url('https://kediripedia.com/wp-content/uploads/2024/03/COLLECTIE_TROPENMUSEUM_Verhoogde_Brantasbrug_te_Kediri_Oost-Java_TMnr_10007564-1.jpg');">

        <div class="detail-hero-container">
            <!-- Konten Kiri -->
            <div class="detail-hero-content">
                <h3>Sejarah Kota Kediri</h3>
                <p>
                    Kerajaan Kediri, juga disebut Panjalu, berpusat di Daha. Temukan jejak kejayaan masa lalu yang masih
                    hidup hingga kini melalui situs-situs bersejarah yang tersebar di seluruh penjuru kota.
                </p>
                <a href="#main-content" class="cta-button">
                    Jelajahi Lebih Lanjut
                </a>
            </div>

            <!-- Slider Kanan (Card Slide) -->
            <div class="hero-slider-wrapper">
                <div class="hero-card-slider" id="heroSlider">
                    <!-- Card 1 -->
                    <div class="hero-card-item active"
                        data-bg="https://kediripedia.com/wp-content/uploads/2024/03/COLLECTIE_TROPENMUSEUM_Verhoogde_Brantasbrug_te_Kediri_Oost-Java_TMnr_10007564-1.jpg" data-index="0">
                        <img src="https://kediripedia.com/wp-content/uploads/2024/03/COLLECTIE_TROPENMUSEUM_Verhoogde_Brantasbrug_te_Kediri_Oost-Java_TMnr_10007564-1.jpg" alt="Jembatan Lama">
                    </div>
                    <!-- Card 2 -->
                    <div class="hero-card-item" data-bg="{{ asset('image/goa.webp') }}"
                        data-index="1">
                        <img src="{{ asset('image/goa.webp') }}" alt="Gua">
                    </div>
                    <!-- Card 3 -->
                    <div class="hero-card-item" data-bg="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSztJpAIRZgDfPXNn0ZcDfhqWQeC1_F4Lmal_f1W-_N1Sy4i9yppuOlxyJWPLyYC9GtPdGGFgXRnBE17a4-6AlCMKS1eWdxG4lJJ0bLqvJgSvxADP_iKz7Y7RtSVGzxGeqM76ihyMA=s1360-w1360-h1020-rw"
                        data-index="2">
                        <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSztJpAIRZgDfPXNn0ZcDfhqWQeC1_F4Lmal_f1W-_N1Sy4i9yppuOlxyJWPLyYC9GtPdGGFgXRnBE17a4-6AlCMKS1eWdxG4lJJ0bLqvJgSvxADP_iKz7Y7RtSVGzxGeqM76ihyMA=s1360-w1360-h1020-rw" alt="Museum">
                    </div>
                    <!-- Card 4 -->
                    <div class="hero-card-item" data-bg="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwkVcQR5hg6CjftEDSU7ObdEo9FENMetZmh40AM6WbBqXbeLoCQ6mSjnm7kU5Mk5PKLrZsCYvNTZ0IOx8rpTMM0wKrMdnZ5mTbOqZavSM-yQbruGBSADQdx5rllV3dsel8sMT2Hog=s1360-w1360-h1020-rw"
                        data-index="3">
                        <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwkVcQR5hg6CjftEDSU7ObdEo9FENMetZmh40AM6WbBqXbeLoCQ6mSjnm7kU5Mk5PKLrZsCYvNTZ0IOx8rpTMM0wKrMdnZ5mTbOqZavSM-yQbruGBSADQdx5rllV3dsel8sMT2Hog=s1360-w1360-h1020-rw" alt="Monumen">
                    </div>
                </div>
            </div>
        </div>

        <!-- Indikator Dots (Sekarang di luar container, posisi absolute bottom center) -->
        <div class="slider-dots" id="sliderDots">
            <!-- Dots akan digenerate oleh JS -->
        </div>
    </header>

    <!-- Main Content (Grid Card 5x2) -->
    <main class="main-container" id="main-content">

        <h2 class="section-title">Sejarah Populer Lainnya</h2>

        <!-- Grid 10 Kartu -->
        <div class="history-grid">

            <!-- Card 1 -->
            <div class="history-card">
                <div class="history-card-img-wrapper">
                    <img src="https://placehold.co/400x500/0D7DA3/white?text=>Lebak Tumpang" alt="Lebak Tumpang"
                        class="history-card-img">
                </div>
                <div class="history-card-content">
                    <h4 class="history-card-title">Lebak Tumpang</h4>
                    <div class="history-card-location">Kec. Mojoroto</div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="history-card">
                <div class="history-card-img-wrapper">
                    <img src="https://placehold.co/400x500/1E90FF/white?text=Taman Ngronggo" alt="Taman Ngronggo"
                        class="history-card-img">
                </div>
                <div class="history-card-content">
                    <h4 class="history-card-title">Taman Ngronggo</h4>
                    <div class="history-card-location">Kec. Kota</div>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="history-card">
                <div class="history-card-img-wrapper">
                    <img src="https://placehold.co/400x500/FFD700/333?text=Tritoyoso Park" alt="Tritoyoso Park"
                        class="history-card-img">
                </div>
                <div class="history-card-content">
                    <h4 class="history-card-title">Tritoyoso Park</h4>
                    <div class="history-card-location">Kec. Kota</div>
                </div>
            </div>

            <!-- Card 4 -->
            <div class="history-card">
                <div class="history-card-img-wrapper">
                    <img src="https://placehold.co/400x500/333/white?text=Jembatan+Lama" alt="Jembatan Lama"
                        class="history-card-img">
                </div>
                <div class="history-card-content">
                    <h4 class="history-card-title">Jembatan Lama Brantas</h4>
                    <div class="history-card-location">Kota Kediri</div>
                </div>
            </div>

            <!-- Card 5 -->
            <div class="history-card">
                <div class="history-card-img-wrapper">
                    <img src="https://placehold.co/400x500/a057d3/white?text=Masjid+Agung" alt="Masjid Agung"
                        class="history-card-img">
                </div>
                <div class="history-card-content">
                    <h4 class="history-card-title">Masjid Agung Kota Kediri</h4>
                    <div class="history-card-location">Alun-Alun Kota</div>
                </div>
            </div>

            <!-- Card 6 -->
            <div class="history-card">
                <div class="history-card-img-wrapper">
                    <img src="https://placehold.co/400x500/57a0d3/white?text=Klenteng" alt="Klenteng Tjoe Hwie Kiong"
                        class="history-card-img">
                </div>
                <div class="history-card-content">
                    <h4 class="history-card-title">Klenteng Tjoe Hwie Kiong</h4>
                    <div class="history-card-location">Jl. Yos Sudarso</div>
                </div>
            </div>

            <!-- Card 7 -->
            <div class="history-card">
                <div class="history-card-img-wrapper">
                    <img src="https://placehold.co/400x500/d357a0/white?text=Gereja+Merah" alt="Gereja Merah"
                        class="history-card-img">
                </div>
                <div class="history-card-content">
                    <h4 class="history-card-title">Gereja Merah</h4>
                    <div class="history-card-location">Bandar Lor</div>
                </div>
            </div>

            <!-- Card 8 -->
            <div class="history-card">
                <div class="history-card-img-wrapper">
                    <img src="https://placehold.co/400x500/a0d357/white?text=Taman Air Pagora" alt="Taman Air Pagora"
                        class="history-card-img">
                </div>
                <div class="history-card-content">
                    <h4 class="history-card-title">Taman Air Pagora</h4>
                    <div class="history-card-location">Kec. Kota</div>
                </div>
            </div>

            <!-- Card 9 -->
            <div class="history-card">
                <div class="history-card-img-wrapper">
                    <img src="https://placehold.co/400x500/d3a057/white?text=Makam+Aulia" alt="Makam Aulia Setono Gedong"
                        class="history-card-img">
                </div>
                <div class="history-card-content">
                    <h4 class="history-card-title">Makam Setono Gedong</h4>
                    <div class="history-card-location">Setono Gedong</div>
                </div>
            </div>

            <!-- Card 10 -->
            <div class="history-card">
                <div class="history-card-img-wrapper">
                    <img src="https://placehold.co/400x500/57d3a0/white?text=Totok+Kerot" alt="Taman Sekartaji"
                        class="history-card-img">
                </div>
                <div class="history-card-content">
                    <h4 class="history-card-title">Taman Sekartaji</h4>
                    <div class="history-card-location">Kec. Kota</div>
                </div>
            </div>

        </div>
    </main>

@endsection
