# Valluri Rahul - Professional Portfolio Website 🚀

A high-performance, interactive, and visually stunning portfolio website built with modern web technologies. This project showcases my skills as a Full Stack Engineer through advanced animations, 3D effects, and a premium UI design.

🔗 **Live Demo:** [https://valluri-rahul-portfolio.vercel.app](https://valluri-rahul-portfolio.vercel.app)

## 🛠️ Tech Stack

*   **Core:** React.js (Vite), JavaScript (ES6+)
*   **Styling:** Tailwind CSS, Vanilla CSS (for custom variables & glassmorphism)
*   **Animations:** Framer Motion, React Icons
*   **3D & Effects:** Custom Canvas effects (Particle Background, Code Rain), SVG animations

## 📂 Project Structure & File Guide

Here is a detailed guide to the project files located in `src/`:

### **Core Files**
*   **`main.jsx`**: The entry point of the React application. Handles DOM rendering.
*   **`App.jsx`**: The main layout component. It orchestrates the website structure, including the Header, Hero, Main Sections, Footer, and global effects (Magnetic Cursor, Live Chat).
*   **`index.css`**: The global stylesheet. Defines CSS variables for themes (Light/Dark), custom animations like `glow`, `float`, and `blob`, and Tailwind imports.

### **Components (`src/components/`)**

#### **Layout & Navigation**
*   **`Header.jsx`**: The responsive navigation bar. Features a glassmorphic design, scroll-aware active state, mobile drawer, and Dark Mode toggle.
*   **`Footer.jsx`**: The application footer containing social links, quick navigation, and copyright info.
*   **`LoadingScreen.jsx`**: A professional entrance animation that plays when the site first loads.

#### **Hero & Background Effects**
*   **`Hero.jsx`**: The landing section. Features a Typing Effect, call-to-action buttons, and a 3D orbiting tech stack visualization.
*   **`ParticleBackground.jsx`**: A canvas-based background effect with floating connected particles.
*   **`CodeRain.jsx`**: A Matrix-inspired falling code effect for a "hacker/developer" aesthetic.
*   **`TypingEffect.jsx`**: A reusable component that cycles through text strings with a typewriter animation.

#### **Content Sections**
*   **`About.jsx`**: Biographical section. Includes profile image, achievements, education, and integrates the **SkillsRadar**.
*   **`SkillsRadar.jsx`**: An interactive, SVG-based spider/radar chart visualizing technical proficiency across different domains (Frontend, Backend, AI, etc.).
*   **`Stats.jsx`**: Animated counter metrics (e.g., "Years Experience", "Projects Completed") displayed in a grid.
*   **`Services.jsx`**: Cards detailing professional services (Frontend Dev, Full Stack, UI/UX).
*   **`ProcessShowcase.jsx`**: A step-by-step visualization of my workflow (Discovery -> Design -> Develop -> Deliver) with connecting lines.
*   **`Projects.jsx`**: A filterable portfolio gallery. Allows visitors to view projects by category (React, Animation, etc.) and see details like tech stack and live links.
*   **`ClientLogos.jsx`**: A 3D infinite carousel/grid of client logos with hover effects.
*   **`Certifications.jsx`**: Premium cards displaying professional credentials with "Verified" status badges and hover animations.
*   **`Testimonials.jsx`**: A review slider showcasing feedback from clients or colleagues.
*   **`Contact.jsx`**: A functional contact form with validation and a sleek UI.

#### **Interactive Widgets**
*   **`MagneticCursor.jsx`**: A custom cursor that "sticks" to interactive elements and applies a blend-mode effect.
*   **`ScrollProgressIndicator.jsx`**: A circular progress bar at the bottom right that fills up as you scroll and acts as a "Back to Top" button.
*   **`LiveChat.jsx`**: A simulated AI chat widget. It mimics a support conversation with preset "Quick Reply" options.

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Bunnyvalluri/mywebsite.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```

## ⚙️ Configuration

### Contact Form
The contact form is configured to use **Formspark**.
- **Endpoint**: `https://submit-form.com/YOUR_FORM_ID`
- **Location**: `src/components/Contact.jsx` and `src/components/EnhancedContact.jsx`
- **Current ID**: `RRB6NqsxA`

## 🎨 Features Highlights

*   **Dark/Light Mode**: Fully supported with a dedicated toggle.
*   **Responsive Design**: Mobile-first approach ensuring perfect layout on phones, tablets, and desktops.
*   **Glassmorphism**: Extensive use of backdrop-blur and semi-transparent layers for a modern feel.
*   **Performance**: Optimized animations using hardware acceleration (GPU) via Framer Motion.

---
© 2024 Valluri Rahul. All Rights Reserved.
