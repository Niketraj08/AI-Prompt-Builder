
A full-stack MERN application designed to help users generate, manage, and optimize AI prompts for various platforms like ChatGPT, Midjourney, and Claude.
## ✨ Features

- **Prompt Generation Interface**: A clean, intuitive UI for crafting complex AI prompts.
- **Responsive Dashboard**: Manage and organize your prompt collection efficiently.
- **Real-time API**: Fast and secure backend built with Node.js and Express.
- **Database Integration**: MongoDB-driven storage for persistent prompt management.
- **Modern UI/UX**: Built with React, Tailwind CSS, and Framer Motion for smooth animations.

---
## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Framer Motion, Axios, React Router.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (via Mongoose).
- **Tooling**: Vite (for fast frontend builds).

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### 1️⃣ Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/Niketraj08/AI-Prompt-Builder.git
cd AI-Prompt-Builder
```

### 3️⃣ Backend Setup (Server)

1. Navigate to the server directory:
   ```bash
   cd mern-ai-prompt-generator/server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and add your configuration:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server (development mode):
   ```bash
   npm run dev
   ```

### 4️⃣ Frontend Setup (Client)

1. Navigate to the client directory:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

The application should now be accessible at `http://localhost:5173`.

---

## 📂 Project Structure

```text
AI-Prompt-Builder/
├── mern-ai-prompt-generator/
│   ├── client/               # React Frontend (Vite)
│   │   ├── src/
│   │   │   ├── components/   # Reusable UI components
│   │   │   └── pages/        # Main application views
│   │   └── tailwind.config.js
│   └── server/               # Node.js Backend
│       ├── controllers/      # API logic
│       ├── models/           # Mongoose schemas
│       ├── routes/           # API endpoints
│       └── index.js          # Server entry point
└── .gitignore                # Root gitignore
```

---

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Niket Raj** - [GitHub](https://github.com/Niketraj08)
