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
    <!-- Google Material Icons -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-…your-integrity…" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <!-- Navbar -->
    <nav class="navbar">
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
    @yield('content')
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
    <footer class="site-footer">
        <div class="footer-container">
            <!-- Kolom 1: Logo & Semboyan -->
            <div class="footer-column">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Logo_Kota_Kediri_-_Seal_of_Kediri_City.svg"
                    alt="Logo Pemkot Kediri" class="footer-logo">
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
    <script src="{{ asset('js/app.js') }}" defer></script>

</body>

</html>
