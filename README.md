
# Fullstack ChatApp 💬

**An engaging real-time chat application built with Next.js + Node.js/Express, using Socket.io and MongoDB.**

---

## 🚀 Features

- Real-time messaging with Socket.io  
- JWT-based authentication (signup, login, protected routes)  
- Persisted chat history in MongoDB  
- Responsive UI with Next.js & Tailwind CSS  
- User presence indicators (online/offline)  
- Dark mode support  

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS  
- **Backend**: Express, Socket.io, Mongoose/MongoDB  
- **Auth**: JSON Web Tokens (JWT)  
- **Real-time**: Socket.io  

---

## ⚙️ Getting Started

1. `git clone https://github.com/daivya4/fullstack_chatapp.git`  
2. `cd fullstack_chatapp`  
3. Create a `.env` with:

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Install:

   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

5. Run locally:

   ```bash
   # Root
   npm run dev

   # Or separate
   (frontend) npm run dev
   (backend) npm start
   ```

6. Open at [http://localhost:3000](http://localhost:3000)

---

## 🔧 Scripts

| Command                      | Description                    |
|-----------------------------|--------------------------------|
| `npm run dev`               | Starts both frontend & backend |
| `cd frontend && npm build`  | Builds Next.js frontend        |
| `cd backend && npm start`   | Starts Node.js backend         |

---

## 🤝 Contribution

1. Fork the repo  
2. Create your branch (`git checkout -b feature/foo`)  
3. Commit your changes (`git commit -am 'feat: add awesome feature'`)  
4. Push to the branch (`git push origin feature/foo`)  
5. Open a Pull Request  

---

## 📄 License

MIT License — see [LICENSE](LICENSE)

---

> Made with ❤️ by Daivya 😎
