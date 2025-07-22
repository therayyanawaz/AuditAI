
AI Code Reviewer
========================

A powerful AI-powered code review tool leveraging the Google Gemini API to provide instant, intelligent feedback on code written in various programming languages.

🔗 Live Demo: https://ai-code-reviewer-one-pink.vercel.app/

--------------------------------------------------
FEATURES
--------------------------------------------------
- ✅ Multi-language Code Support
- ⚡ Instant AI-Powered Code Reviews
- 📊 Comprehensive Suggestions: Bug Detection, Optimization, Best Practices
- 💻 Simple & Clean User Interface
- 🎨 Real-time Syntax Highlighting (Prism.js)

--------------------------------------------------
TECHNOLOGIES USED
--------------------------------------------------

Frontend:
- React.js
- Vite
- react-simple-code-editor
- axios
- react-markdown
- prismjs

Backend:
- Node.js
- Express.js
- Google Gemini API
- axios
- dotenv
- cors

--------------------------------------------------
PROJECT STRUCTURE
--------------------------------------------------

ai-code-reviewer/
├── backend/
│   ├── node_modules/
│   ├── server.js               # Express server + Gemini API
│   ├── package.json
│   ├── .env                    # GEMINI_API_KEY
│   └── ... other backend files
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── App.js              # Main React Component
│   │   └── ... other components
│   ├── .env                    # VITE_BACKEND_URL
│   ├── package.json
│   └── vite.config.js

--------------------------------------------------
INSTALLATION GUIDE
--------------------------------------------------

📌 Prerequisites:
- Node.js (LTS version)
- npm or Yarn
- Git

1. Clone the Repository:
   git clone https://github.com/Akashrana1001/ai-code-reviewer.git
   cd ai-code-reviewer

2. Backend Setup:
   cd backend
   npm install
   Create .env file with:
   GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
   Start backend:
   npm start

3. Frontend Setup:
   cd ../frontend
   npm install
   Create .env file with:
   VITE_BACKEND_URL=http://localhost:3000
   Start frontend:
   npm run dev

--------------------------------------------------
DEPLOYMENT
--------------------------------------------------

Frontend (Vercel):
- Root: frontend/
- Build Command: npm run build
- Output: dist
- Env Var: VITE_BACKEND_URL = https://ai-code-reviewer-efte.onrender.com/

Backend (Render):
- Root: backend/
- Build Command: npm install
- Start Command: node server.js
- Env Var: GEMINI_API_KEY = your actual key

--------------------------------------------------
USAGE
--------------------------------------------------

1. Open the frontend app.
2. Paste/write code into the editor.
3. Click "Review".
4. AI-generated feedback appears in the right panel.

--------------------------------------------------
CONTRIBUTING
--------------------------------------------------

1. Fork the repo.
2. Create a feature branch.
3. Make and commit changes.
4. Push and open a pull request.

--------------------------------------------------
LICENSE
--------------------------------------------------

Licensed under the MIT License.

--------------------------------------------------
ACKNOWLEDGEMENTS
--------------------------------------------------

- Google Gemini API
- Vercel
- Render

Made with ❤️ by Akash Rana
