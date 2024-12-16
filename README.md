# Urban Motion

**Urban Motion** adalah aplikasi penyewaan kendaraan yang memungkinkan pengguna untuk menyewa kendaraan dengan mudah kapan saja, di mana saja. Repositori ini berisi kode sumber untuk **Frontend** dan **Backend** aplikasi.

## Prasyarat
Sebelum memulai, pastikan Anda telah menginstal:  
- [Node.js](https://nodejs.org/)  
- Git  

## Cara Menjalankan Aplikasi

### 1. Clone Repositori
Clone repositori ini ke komputer lokal Anda menggunakan git bash:
```bash
    git clone <REPOSITORY_URL> 
    cd <REPOSITORY_NAME>
```

### 2. Setup Backend 

1. Buatlah database di MySQL dengan nama "car_rental"

2. Masuk ke direktori backend di terminal:
   ```bash
    cd backend
   ```

4. Instal Dependensi
    Jalankan perintah berikut untuk menginstal semua paket yang diperlukan:
   ```bash
    npm install
   ```

6. Jalankan Migrasi dan Seed Database

    Pastikan database Anda berjalan, lalu eksekusi perintah berikut:
    1. Jalankan Migrasi:
       ```bash
        npm run migrate-up
       ```

    3. Seed Database:
       ```bash
        npm run seed-up
       ```
        
7. Jalankan Aplikasi
    Setelah pengaturan selesai, Anda dapat memulai aplikasi dengan menjalankan:
   ```bash
    npm run dev
   ```

### 3. Setup Frontend 
1. Masuk ke direktori frontend
    ```bash
    cd frontend
    ```

2. Instal Dependensi
    Jalankan perintah berikut untuk menginstal semua paket yang diperlukan:
   ```bash
    npm install
   ```
        
4. Jalankan Aplikasi
    Setelah pengaturan selesai, Anda dapat memulai aplikasi dengan menjalankan:
   ```bash
    npm run dev
   ```


### 4. Akses Aplikasi
    Frontend akan tersedia di: http://localhost:5173  
    Backend akan tersedia di: http://localhost:5000 (atau sesuai konfigurasi Anda)

