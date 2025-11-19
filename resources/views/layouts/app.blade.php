<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'My Laravel App')</title>

    <!-- CSS -->
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar">
        <div class="navbar-container">
            <!-- Logo / Title -->
            <div class="navbar-logo">
                <a href="{{ url('/') }}">🌿</a>
            </div>

            <!-- Nav Links -->
            <ul class="navbar-links">
                <li><a href="{{ url('/') }}">Beranda</a></li>
                <li><a href="{{ url('/sejarah') }}">Sejarah</a></li>
                <li><a href="{{ url('/wisata') }}">Wisata</a></li>
                <li><a href="{{ url('/event') }}">Event</a></li>
                <li><a href="{{ url('/berita') }}">Berita</a></li>
                <li><a href="{{ url('/kontak') }}">Kontak</a></li>
            </ul>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="content">
        @yield('content')
    </main>

    <!-- Footer -->
    <footer class="footer">
        &copy; {{ date('Y') }} My Laravel App
    </footer>

</body>

</html>
