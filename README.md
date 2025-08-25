🎬 Searchly - Movie Discovery App

Access the website 
https://searchlyapp.netlify.app/


🚀 Setup Instructions
Prerequisites

Download Node.js (version 16 or higher) 
get OMDB API key 

1️⃣ Clone the Repository
git clone <your-repo-url>
cd MovieSearch

2️⃣ Install Dependencies
npm install

3️⃣ Configure API Key

Sign up at OMDB API for a free key.

Replace YOUR_API_KEY_HERE in:

src/pages/Home.jsx (around line 25)

src/pages/MovieDetails.jsx (around line 15)

4️⃣ Start Development Server
npm run dev

Open http://localhost:5173 in your browser.

5️⃣ Build for Production
npm run build
