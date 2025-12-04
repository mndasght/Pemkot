@extends('layouts.app')
@section('content')
    <section class="gallery-hero" id="heroSection"
        style="background-image: url('https://placehold.co/1920x1080/0D7DA3/white?text=Gunung+Kelud+View');">
        <video class="hero-bg-video" id="heroBgVideo" loop muted playsinline>
            <source src="" type="video/mp4">
        </video>
        <div class="hero-cards-container">
            <div class="hero-card active" data-type="image"
                data-src="https://placehold.co/1920x1080/0D7DA3/white?text=Gunung+Kelud+View"><img
                    src="https://placehold.co/300x200/0D7DA3/white?text=Kawah" alt="Kawah"></div>
            <div class="hero-card" data-type="image"
                data-src="https://placehold.co/1920x1080/1E90FF/white?text=Simpang+Lima+Night"><img
                    src="https://placehold.co/300x200/1E90FF/white?text=SLG+Malam" alt="SLG"></div>
            <div class="hero-card" data-type="video"
                data-src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"><img
                    src="https://placehold.co/300x200/FFD700/333?text=Video+Taman" alt="Video">
                <div class="play-indicator"><span class="material-symbols-outlined"
                        style="font-size: 3rem;">play_circle</span></div>
            </div>
            <div class="hero-card more-card" data-type="image"
                data-src="https://placehold.co/1920x1080/a057d3/white?text=Wisata+Lainnya"><img
                    src="https://placehold.co/300x200/a057d3/white?text=Lainnya" alt="Lainnya"></div>
        </div>
    </section>

    <!-- Search Bar -->
    <section class="search-filter-section">
        <div class="search-bar-card">
            <div class="search-item">
                <div class="search-icon-box"><span class="material-symbols-outlined">location_on</span></div>
                <div class="search-text-box">
                    <h5>Location</h5><select class="search-select">
                        <option disabled selected>Where are you going</option>
                        <option>Gunung Kelud</option>
                    </select>
                </div>
            </div>
            <div class="divider"></div>
            <div class="search-item">
                <div class="search-icon-box"><span class="material-symbols-outlined">near_me</span></div>
                <div class="search-text-box">
                    <h5>Distance</h5><select class="search-select">
                        <option disabled selected>Distance k/m</option>
                    </select>
                </div>
            </div>
            <div class="divider"></div>
            <div class="search-item">
                <div class="search-icon-box"><span class="material-symbols-outlined">group</span></div>
                <div class="search-text-box">
                    <h5>Max People</h5><select class="search-select">
                        <option disabled selected>0</option>
                    </select>
                </div>
            </div>
            <button class="search-action-btn"><span class="material-symbols-outlined">search</span></button>
        </div>
    </section>

    <!-- Konten Utama -->
    <section class="content-placeholder">
        <h1 class="main-title">Gunung Kelud</h1>
        <div class="wisata-meta">
            <div class="meta-location"><span class="material-symbols-outlined">location_on</span> Kec. Ngancar, Kediri</div>
            <span class="meta-separator">|</span>
            <div class="meta-rating">
                <div class="rating-stars"><span class="material-symbols-outlined">star</span><span
                        class="material-symbols-outlined">star</span><span
                        class="material-symbols-outlined">star</span><span
                        class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span>
                </div>
                <span class="review-count">(854 Review)</span>
            </div>
        </div>

        <div class="wisata-description">
            <h3>Deskripsi</h3>
            <p>Gunung Kelud adalah salah satu gunung berapi paling aktif di Indonesia yang menawarkan pemandangan kawah
                memukau dengan air berwarna hijau tosca.</p>
            <p>Pengunjung dapat menikmati udara sejuk pegunungan, menjelajahi terowongan ampera, atau mencoba wisata offroad
                jeep yang menantang.</p>
            <p>Fasilitas yang tersedia juga sangat lengkap, mulai dari area parkir yang luas, warung kuliner, hingga spot
                foto instagramable.</p>
            <p>Jalan menuju kawah sudah tertata rapi, sehingga memudahkan pengunjung untuk menikmati keindahan alam tanpa
                harus mendaki terlalu sulit.</p>
        </div>

        <!-- Map -->
        <div class="nearby-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63261.94228965021!2d111.97905342167968!3d-7.82823379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1swisata%20di%20Kediri!5e0!3m2!1sen!2sid!4v1731295000000!5m2!1sen!2sid"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <!-- CUSTOMER REVIEW (FIXED) -->
        <div class="customer-review-section">
            <!-- Kiri: Summary -->
            <div class="review-summary">
                <h4>Customer Review</h4>
                <div class="rating-big">5.00</div>
                <!-- Bintang Besar -->
                <div class="rating-stars-big">
                    <span class="material-symbols-outlined">star</span><span
                        class="material-symbols-outlined">star</span><span
                        class="material-symbols-outlined">star</span><span
                        class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span>
                </div>
                <span class="rating-total-count">854 reviews</span>
            </div>

            <!-- Kanan: Detail Bars (Paling Kanan) -->
            <div class="review-details">
                <div class="review-bar-item"><span class="review-label">Guide</span>
                    <div class="progress-container">
                        <div class="progress-bar" style="width: 96%;"></div>
                    </div><span class="review-score">4.8</span>
                </div>
                <div class="review-bar-item"><span class="review-label">Transportation</span>
                    <div class="progress-container">
                        <div class="progress-bar" style="width: 90%;"></div>
                    </div><span class="review-score">4.5</span>
                </div>
                <div class="review-bar-item"><span class="review-label">Value for money</span>
                    <div class="progress-container">
                        <div class="progress-bar" style="width: 98%;"></div>
                    </div><span class="review-score">4.9</span>
                </div>
                <div class="review-bar-item"><span class="review-label">Safety</span>
                    <div class="progress-container">
                        <div class="progress-bar" style="width: 94%;"></div>
                    </div><span class="review-score">4.7</span>
                </div>
            </div>
        </div>

        <!-- Info Sekitar -->
        <div class="nearby-info-grid">
            <div class="nearby-info-item">
                <div class="info-icon-circle"><span class="material-symbols-outlined">location_on</span></div>
                <div class="info-text-wrapper">
                    <h4>Populer didekatmu</h4>
                    <p>Tempat paling sering dikunjungi.</p>
                </div>
            </div>
            <div class="nearby-info-item">
                <div class="info-icon-circle"><span class="material-symbols-outlined">favorite</span></div>
                <div class="info-text-wrapper">
                    <h4>Favorite didekatmu</h4>
                    <p>Rating tertinggi & ulasan terbaik.</p>
                </div>
            </div>
            <div class="nearby-info-item">
                <div class="info-icon-circle"><span class="material-symbols-outlined">groups</span></div>
                <div class="info-text-wrapper">
                    <h4>Ramai di dekatmu</h4>
                    <p>Lokasi padat pengunjung saat ini.</p>
                </div>
            </div>
        </div>
    </section>
@endsection
