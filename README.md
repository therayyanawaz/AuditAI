# 🤖 AuditAI - AI-Powered Code Reviewer

<div align="center">

![AuditAI Logo](https://img.shields.io/badge/AuditAI-Code%20Reviewer-blue?style=for-the-badge&logo=robot)

**Transform your code quality with intelligent AI-powered reviews**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Available-brightgreen?style=for-the-badge)](https://ai-code-reviewer-one-pink.vercel.app/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-orange?style=for-the-badge)](CONTRIBUTING.md)

</div>

## 🎯 Overview

**AuditAI** is a revolutionary AI-powered code review platform that acts as your personal coding mentor. Leveraging the advanced capabilities of Google's Gemini API, it provides instant, intelligent feedback on code written in any programming language. Whether you're a beginner learning to code or an experienced developer seeking optimization insights, AuditAI helps you write better, cleaner, and more efficient code.

### 🚀 Why Choose AuditAI?

- **Instant Intelligence**: Get comprehensive code reviews in seconds, not hours
- **Universal Language Support**: Works with JavaScript, Python, Java, C++, Go, Rust, and 50+ other languages
- **Deep Analysis**: Beyond syntax checking - focuses on best practices, performance, and security
- **Learning-Focused**: Detailed explanations help you understand *why* changes are needed
- **Zero Setup**: Start reviewing code immediately with our intuitive web interface

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌍 **Multi-Language Support** | Supports 50+ programming languages with intelligent syntax recognition |
| ⚡ **Lightning-Fast Reviews** | Get comprehensive feedback in under 3 seconds |
| 🔍 **Deep Code Analysis** | Bug detection, security vulnerabilities, performance optimization |
| 📚 **Educational Insights** | Learn best practices with detailed explanations |
| 🎨 **Beautiful Interface** | Clean, intuitive UI with real-time syntax highlighting |
| 📱 **Responsive Design** | Works seamlessly on desktop, tablet, and mobile devices |
| 🔒 **Privacy-First** | Your code is processed securely and never stored |

## 🛠️ Technology Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Google AI](https://img.shields.io/badge/Google_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)

</div>

**Frontend Dependencies:**
- **React 19.1** - Modern React with latest features
- **Vite** - Ultra-fast build tool and dev server
- **react-simple-code-editor** - Lightweight code editor component
- **Prism.js** - Syntax highlighting for 200+ languages
- **Axios** - Promise-based HTTP client
- **react-markdown** - Render Markdown with React

**Backend Dependencies:**
- **Express.js 5.1** - Fast, minimalist web framework
- **Google Gemini AI** - Advanced language model for code analysis
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
AuditAI/
├── 📂 backend/
│   ├── 📂 src/
│   │   ├── 📂 controllers/
│   │   │   └── ai.controller.js     # Request handling logic
│   │   ├── 📂 routes/
│   │   │   └── ai.routes.js         # API route definitions
│   │   ├── 📂 services/
│   │   │   └── ai.services.js       # Gemini AI integration
│   │   └── app.js                   # Express app configuration
│   ├── server.js                    # Server entry point
│   ├── package.json                 # Backend dependencies
│   └── envsample.txt               # Environment variables template
├── 📂 Frontend/
│   ├── 📂 src/
│   │   ├── App.jsx                  # Main React component
│   │   ├── App.css                  # Application styles
│   │   ├── main.jsx                 # React app entry point
│   │   └── 📂 assets/               # Static assets
│   ├── 📂 public/                   # Public files
│   ├── index.html                   # HTML template
│   ├── package.json                 # Frontend dependencies
│   └── vite.config.js              # Vite configuration
└── README.md                        # This file
```

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v8.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** - [Download here](https://git-scm.com/)
- **Google AI Studio API Key** - [Get yours here](https://makersuite.google.com/app/apikey)

### 📥 Installation

#### 1. Clone the Repository

```bash
   git clone https://github.com/Akashrana1001/ai-code-reviewer.git
   cd ai-code-reviewer
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
   cd backend

# Install dependencies
   npm install

# Create environment file
cp envsample.txt .env

# Edit .env file and add your Gemini API key
echo "GEMINI_API_KEY=your_actual_gemini_api_key_here" > .env
```

#### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd Frontend

# Install dependencies
   npm install

# Create environment file
echo "VITE_BACKEND_URL=http://localhost:3000" > .env
```

#### 4. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Backend will start on http://localhost:3000
```

**Terminal 2 - Frontend:**
```bash
cd Frontend
   npm run dev
# Frontend will start on http://localhost:5173
```

🎉 **Success!** Open your browser and navigate to `http://localhost:5173` to start using AuditAI!

## 📖 Usage Guide

### Basic Usage

1. **Open the Application**: Navigate to the local or live demo URL
2. **Write or Paste Code**: Use the left panel editor to input your code
3. **Click Review**: Press the "Review" button to analyze your code
4. **Review Feedback**: Detailed suggestions appear in the right panel

### Example Review Session

**Input Code:**
```javascript
function calculateTotal(items) {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total = total + items[i].price;
    }
    return total;
}
```

**AI Review Output:**
- ✅ **Use Modern Syntax**: Replace `var` with `const`/`let`
- 🔄 **Optimize Loop**: Consider using `reduce()` for better readability
- 🛡️ **Add Validation**: Check if `items` is an array and handle edge cases
- 📝 **Add Documentation**: Include JSDoc comments for better maintainability

### Supported Languages

<details>
<summary>Click to see all supported languages</summary>

- JavaScript/TypeScript
- Python
- Java
- C/C++
- C#
- Go
- Rust
- Ruby
- PHP
- Swift
- Kotlin
- Scala
- HTML/CSS
- SQL
- And 40+ more!

</details>

## 🔧 Troubleshooting

### Common Issues and Solutions

#### ❌ "API Key not found" Error

**Problem**: Backend returns authentication error  
**Solution**: 
1. Ensure your `.env` file in the backend directory contains: `GEMINI_API_KEY=your_key_here`
2. Verify your API key is valid at [Google AI Studio](https://makersuite.google.com/)
3. Restart the backend server after adding the key

#### ❌ "Cannot connect to backend" Error

**Problem**: Frontend cannot reach the backend  
**Solution**:
1. Verify backend is running on `http://localhost:3000`
2. Check frontend `.env` file contains: `VITE_BACKEND_URL=http://localhost:3000`
3. Ensure no firewall is blocking the connection
4. Try restarting both frontend and backend

#### ❌ "Module not found" Error

**Problem**: Dependencies are missing  
**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### ❌ "Port already in use" Error

**Problem**: Default ports are occupied  
**Solution**:
- Backend: Change port in `server.js` and update frontend `.env`
- Frontend: Vite will automatically suggest an alternative port

### Performance Tips

1. **Large Files**: For files >1000 lines, consider reviewing smaller sections
2. **API Limits**: The free Gemini API has rate limits - wait a moment between requests
3. **Browser Cache**: Clear browser cache if experiencing display issues

### Getting Help

If you're still experiencing issues:

1. 📋 Check our [FAQ section](#faq)
2. 🐛 [Report a bug](https://github.com/Akashrana1001/ai-code-reviewer/issues)
3. 💬 [Start a discussion](https://github.com/Akashrana1001/ai-code-reviewer/discussions)
4. 📧 Contact the maintainers

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Here's how you can help make AuditAI even better:

### 🌟 Ways to Contribute

- 🐛 **Report Bugs**: Found an issue? Let us know!
- 💡 **Suggest Features**: Have ideas for improvements?
- 🔧 **Fix Issues**: Pick up an issue and submit a PR
- 📚 **Improve Documentation**: Help make our docs clearer
- 🎨 **Enhance UI/UX**: Make the interface more beautiful
- ⚡ **Optimize Performance**: Help us make it faster

### 📋 Contribution Process

#### 1. Setup Development Environment

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/ai-code-reviewer.git
cd ai-code-reviewer

# Add upstream remote
git remote add upstream https://github.com/Akashrana1001/ai-code-reviewer.git

# Setup the project (follow installation guide above)
```

#### 2. Create a Feature Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Examples:
# git checkout -b feature/dark-mode
# git checkout -b fix/api-error-handling
# git checkout -b docs/installation-guide
```

#### 3. Make Your Changes

- Write clean, well-documented code
- Follow existing code style and conventions
- Add tests for new features (if applicable)
- Update documentation as needed

#### 4. Test Your Changes

```bash
# Frontend tests
cd Frontend
npm run lint

# Backend tests (add tests if applicable)
cd backend
npm test
```

#### 5. Submit a Pull Request

```bash
# Commit your changes
git add .
git commit -m "feat: add dark mode toggle"

# Push to your fork
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear title and description
- Screenshots/GIFs for UI changes
- Reference any related issues
- Add appropriate labels

### 🎯 Pull Request Guidelines

**Good PR Title Examples:**
- `feat: add dark mode support`
- `fix: resolve API timeout issues`
- `docs: improve installation instructions`
- `style: update button component styling`

**PR Description Should Include:**
- What changes were made and why
- How to test the changes
- Screenshots (for UI changes)
- Breaking changes (if any)

### 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment Details**:
   - OS and version
   - Browser and version
   - Node.js version

2. **Steps to Reproduce**:
   ```
   1. Go to '...'
   2. Click on '...'
   3. See error
   ```

3. **Expected vs Actual Behavior**
4. **Screenshots/Error Messages**
5. **Code Samples** (if applicable)

### 💡 Feature Requests

For feature requests, please provide:
- Clear description of the feature
- Use case and motivation
- Proposed implementation (if you have ideas)
- Mockups/wireframes (for UI features)

### 📝 Development Guidelines

#### Code Style

- **Frontend**: Follow React best practices, use hooks, functional components
- **Backend**: Use async/await, proper error handling, meaningful variable names
- **General**: Write self-documenting code with clear comments

#### Commit Messages

Follow conventional commits:
```
type(scope): description

feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

## 🚀 Deployment

### Frontend Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# In the Frontend directory
cd Frontend
vercel

# Follow the prompts:
# - Framework: Vite
# - Root Directory: Frontend/
# - Build Command: npm run build
# - Output Directory: dist
```

**Environment Variables:**
- `VITE_BACKEND_URL`: Your backend URL (e.g., `https://your-backend.onrender.com`)

### Backend Deployment (Render)

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
4. Add environment variable:
   - `GEMINI_API_KEY`: Your Google AI Studio API key

### Alternative Deployment Options

<details>
<summary>Other deployment platforms</summary>

#### Frontend
- **Netlify**: Connect GitHub repo, set build command `npm run build`, publish directory `dist`
- **GitHub Pages**: Use GitHub Actions with Vite build
- **Firebase Hosting**: `firebase init hosting` and `firebase deploy`

#### Backend
- **Railway**: Connect repo, auto-detects Node.js
- **Heroku**: Create app, add environment variables, deploy
- **DigitalOcean App Platform**: Connect repo, configure build settings

</details>

## 📋 FAQ

<details>
<summary><strong>Is my code data secure?</strong></summary>

Yes! Your code is sent to Google's Gemini API for analysis but is not stored permanently. We recommend not submitting sensitive production code with secrets or personal information.

</details>

<details>
<summary><strong>What programming languages are supported?</strong></summary>

AuditAI supports 50+ programming languages including JavaScript, Python, Java, C++, Go, Rust, and many more. The AI model can understand and provide feedback on virtually any programming language.

</details>

<details>
<summary><strong>Are there any usage limits?</strong></summary>

The free tier of Google's Gemini API has rate limits. For heavy usage, consider upgrading to a paid plan. The limits are quite generous for personal and small team use.

</details>

<details>
<summary><strong>Can I use this for commercial projects?</strong></summary>

Yes! AuditAI is released under the MIT License, making it free for commercial use. However, check Google's Gemini API terms for any commercial usage restrictions.

</details>

<details>
<summary><strong>How accurate are the AI suggestions?</strong></summary>

The AI provides highly accurate suggestions for common patterns, best practices, and potential issues. However, always review suggestions critically and test changes in your specific context.

</details>

## 🗺️ Roadmap

### 🚧 Currently In Development
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 💾 **Save Reviews**: Export review results as PDF/Markdown
- 🔄 **Diff View**: Visual comparison of original vs suggested code

### 🎯 Planned Features
- **Multi-file Analysis**: Review entire projects
- **Custom Rules**: Define your own coding standards
- **Team Integration**: Collaborate on code reviews
- **IDE Extensions**: VS Code, IntelliJ plugins
- **Detailed Metrics**: Code quality scoring
- **Language-specific Analysis**: Deeper insights per language

### 💡 Ideas for the Future
- **Real-time Collaboration**: Live code review sessions
- **Learning Paths**: Guided improvement suggestions
- **Integration APIs**: Connect with GitHub, GitLab
- **Mobile App**: Native mobile code review app

Vote on features and suggest new ones in our [Discussions](https://github.com/Akashrana1001/ai-code-reviewer/discussions)!

## 🏆 Contributors

We're grateful to all the amazing people who have contributed to AuditAI:

<div align="center">

### 🏆 Core Team

| Contributor | Role | Contributions |
|-------------|------|---------------|
| [**Akash Rana**](https://github.com/Akashrana1001) | 👑 Creator & Lead Developer | Initial development, architecture, AI integration |
| [**therayyanawaz**](https://github.com/therayyanawaz) | 🔧 Contributor | Feature enhancements, bug fixes, documentation |

### 🌟 Special Thanks

- **Google AI Team** - For the incredible Gemini API
- **Vercel** - For seamless frontend hosting
- **Render** - For reliable backend hosting
- **All Beta Testers** - For valuable feedback and bug reports

</div>

**Want to see your name here?** [Contribute to the project](#contributing) and join our growing community!

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 AuditAI Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

### 🌟 Star the Project

If AuditAI has helped you write better code, please consider giving it a star! ⭐

[![GitHub stars](https://img.shields.io/github/stars/Akashrana1001/ai-code-reviewer?style=social)](https://github.com/Akashrana1001/ai-code-reviewer/stargazers)

### 📞 Connect With Us

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Akashrana1001/ai-code-reviewer)
[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Available-brightgreen?style=for-the-badge)](https://ai-code-reviewer-one-pink.vercel.app/)

---

**Made with ❤️ by the AuditAI Community**

*Empowering developers to write better code, one review at a time.*

</div>
