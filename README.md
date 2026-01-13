# 🧠 Resumind - AI-Powered Resume Analyzer

Resumind is a sophisticated AI-driven platform designed to help job seekers optimize their resumes for specific roles. By leveraging advanced Large Language Models (LLMs) and cloud-native infrastructure, Resumind provides actionable feedback, ATS scoring, and visual insights to bridge the gap between candidates and their dream jobs.

![Resumind Banner](https://raw.githubusercontent.com/KerelosNasser/resume-analyzer/main/public/images/bg-main.svg)

## ✨ Key Features

- **🎯 Job-Specific Analysis**: Upload your resume along with a specific Job Description to get tailored feedback.
- **📊 ATS Scoring**: Get an instant ATS compatibility score to understand how well your resume performs against automated filters.
- **🔍 Visual Side-by-Side Review**: Converts PDF resumes to images for a fluid, interactive reviewing experience alongside AI feedback.
- **🛠️ Improvement Roadmap**: Detailed breakdown of sections (Summary, Experience, Skills) with clear, actionable improvement tips.
- **☁️ Cloud-Native Experience**: Fully integrated with Puter.js for secure authentication, file storage, and AI processing.

## 🧠 How it Works

Resumind follows a structured pipeline to ensure high-quality analysis:

1.  **File Ingestion**: Users upload their resume in PDF format.
2.  **Visual Conversion**: The PDF is processed using `pdf.js` to create a high-resolution image representation, allowing the user to view their resume natively in the feedback dashboard.
3.  **Context Gathering**: Users provide the target **Job Title** and **Job Description**, giving the AI the necessary context for a "matching" analysis.
4.  **AI Analysis**: The resume and job context are sent to **Claude 3.5 Sonnet**. The AI performs a deep dive into:
    - **ATS Compatibility**: Formatting, keywords, and parsability.
    - **Content Depth**: Impact of experience and relevance of skills.
    - **Tone & Style**: Professionalism and readability.
    - **Structural Integrity**: Layout and information hierarchy.
5.  **Data Persistence**: Results are stored in **Puter's Key-Value store**, enabling fast retrieval and persistent history without a complex database setup.

## 🚀 Tech Stack

### Frontend

- **Framework**: [React 19](https://react.dev/) + [React Router 7](https://reactrouter.com/) (v7)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand.js.org/)
- **Animations**: [tw-animate-css](https://github.com/shuding/tw-animate)

### Platform & AI (Powered by Puter.js)

- **AI Engine**: Claude 3.5 Sonnet (via Puter AI)
- **Storage**: Puter Cloud File System
- **Database**: Puter Key-Value Storage
- **Auth**: Puter Auth (Single Sign-On)

### Processing

- **PDF Engine**: [PDF.js](https://mozilla.github.io/pdf.js/) for high-fidelity PDF-to-Image conversion.

## 🛠️ Getting Started

### Prerequisites

- [pnpm](https://pnpm.io/) installed.
- A [Puter.com](https://puter.com/) account for environment integration.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KerelosNasser/resume-analyzer.git
   cd resume-analyzer
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 📦 Deployment

### Docker

The project is containerized and ready for deployment:

```bash
docker build -t resumind .
docker run -p 3000:3000 resumind
```

### Puter.com (Recommended)

Since the app heavily uses `Puter.js`, it is optimized for hosting on the Puter.com platform. Just upload your build folder to Puter and point the entry point to `index.html`.

## 🛡️ Security & Privacy

Resumind uses Puter's isolated cloud environment. Your resumes are stored in your own Puter account's file system, ensuring you maintain full control over your data.

---

Built with ❤️ by [Kerelos Nasser](https://github.com/KerelosNasser)
