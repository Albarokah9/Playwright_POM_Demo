# Playwright_POM_Demo

Ini adalah project **Demo Page Object Model (POM)** menggunakan [Playwright](https://playwright.dev/).

## Struktur Project

- `pages/`  
  Berisi file Page Object, misal: `login.js`.
- `tests/`  
  Berisi file-file pengujian (test) Playwright yang menggunakan Page Object.
- `playwright.config.js`  
  Konfigurasi Playwright.
- `package.json`  
  Konfigurasi npm dan skrip untuk menjalankan test.

## Cara Menjalankan Test

1. Install dependencies:
   ```sh
   npm install
   ```

2. Jalankan semua test:
   ```sh
   npm test
   ```

3. Jalankan test spesifik (contoh login):
   ```sh
   npm run test:spec
   ```

4. Lihat report hasil test:
   ```sh
   npm run report
   ```

## Fitur

- Contoh implementasi Page Object Model (POM) dengan Playwright.
- Test login otomatis menggunakan page object.
- Contoh test lain pada aplikasi demo.

---

Project ini ditujukan sebagai referensi belajar otomatisasi testing web dengan Playwright dan