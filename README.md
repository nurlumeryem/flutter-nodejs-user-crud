# 👩‍💻 Flutter + Node.js Fullstack CRUD Uygulaması

Bu projede Flutter ile mobil arayüz, Node.js + Express ile backend geliştirdim. Kullanıcılar üzerinde CRUD işlemleri yapılmaktadır.

## 📁 Proje Yapısı

- `/flutter` : Mobil uygulama kodları (Flutter)
- `/backend` : Backend API (Node.js, Express)

## 🔗 API Örnekleri

- `GET /users` → Tüm kullanıcıları getirir  
- `POST /users` → Yeni kullanıcı oluşturur  

## 📱 Flutter Özellikleri

- `http` paketiyle API çağrısı
- State yönetimi: `StatefulWidget`
- Form ve listeleme ekranları

## 🧠 Backend Özellikleri

- Express.js ile CRUD endpoint'leri
- Basit JSON veri saklama
- CORS desteği

## 🚀 Projeyi Çalıştırma

### Flutter tarafı:
```bash
cd flutter
flutter pub get
flutter run

### Node.js tarafı::
cd backend
npm install
node index.js


