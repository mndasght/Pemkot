📦 Cara Clone Project

Untuk meng-clone project ini dari GitHub:

git clone https://github.com/mndasght/Pemkot.git


Masuk ke folder project:

cd Pemkot

🔧 Cara Menjalankan Project
1. Install dependency Laravel dan frontend:
composer install
npm install

2. Copy file environment
cp .env.example .env

3. Generate key Laravel
php artisan key:generate

4. Konfigurasi database & .env

Sesuaikan berisi seperti:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pemkot_kediri
DB_USERNAME=root
DB_PASSWORD=


5. Migrasi database
php artisan migrate

6. Jalankan server Laravel
php artisan serve
