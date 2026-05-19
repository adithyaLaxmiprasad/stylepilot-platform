# StylePilot AI

StylePilot AI is an elite, AI-powered personal stylist platform designed with a premium, luxury-grade aesthetic. By leveraging Google's cutting-edge Gemini Vision AI, StylePilot analyzes images of your existing wardrobe and curates sophisticated, personalized outfit combinations based on your exact preferences.

## ✨ Core Features
- **Luxury UI/UX:** A minimalist, Apple-inspired interface featuring the elegant `Jost` typography, "Brand Gold" accents, interactive cursor-tracking background glows, and a dynamic "Aurora Mesh".
- **Dynamic Feedback:** Features a bespoke, seamlessly animated clothing-icon loader while the AI curates your styles.
- **Multimodal AI Analysis:** Upload multiple images of clothing items at once. The AI analyzes textures, colors, and cuts to suggest cohesive outfits.
- **Visual Preference Selectors:** Choose your skin tone through a sleek, interactive visual guide and select your preferred color palette via custom hex inputs.
- **Style Archive:** A horizontal, elegantly scrollable history tracker that automatically saves your top outfit from the last 5 generations, gracefully preventing text overflow.
- **Fluid Animations:** Powered by `framer-motion`, the application features staggered layout reveals, buttery smooth custom dropdowns, and elegant card hovers.

## 🏗️ Architecture
The project follows a microservice-like architecture divided into three main modules:
1. **Frontend (`/frontend`)**: Built with Next.js (App Router), React, Tailwind CSS, and Framer Motion.
2. **Backend (`/backend`)**: Built with Node.js and Express. Uses `multer` to handle multipart/form-data (image arrays) sent from the frontend.
3. **AI Service (`/ai-service`)**: Built with Node.js and the official `@google/genai` SDK. Communicates with `gemini-2.5-flash` to process images and generate strictly structured JSON outfit data.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A Google Gemini API Key

### 1. Environment Setup
Create a `.env` file in the `backend` or `ai-service` directory:
```env
GEMINI_API_KEY=your_google_api_key_here
```

### 2. Running the Backend
Navigate to the backend directory, install dependencies, and start the Express server.
```bash
cd backend
npm install
npm run dev
# Runs on http://localhost:5000
```

### 3. Running the Frontend
In a new terminal, navigate to the frontend directory, install dependencies, and start the Next.js development server.
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

## 🎨 Design Philosophy
StylePilot AI aims to avoid the "generic web app" look. By employing frosted glass effects (`backdrop-blur`), subtle glowing drop shadows, and rigorous tracking in typography, the platform feels like a digital luxury boutique.

---
**Created by:** ADITHYA L  
**Contact:** adithya.l386@gmail.com
