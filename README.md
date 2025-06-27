# Emrullah Alku - Personal Portfolio

<div align="center">
  <img src="https://github.com/EmrullahAlku/Portfolio/blob/main/public/image.png?raw=true" alt="Portfolio Screenshot" width="700"/>
</div>

<br>

<div align="center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Femrullahalku%2FEmrullahPortfolio)

</div>

## About The Project

This is the repository for my personal portfolio website, built to showcase my skills, projects, and professional journey. The entire site is designed to be dynamic and easily manageable, leveraging the power of Nuxt.js and Nuxt Content. All content, from the "About Me" story to my educational background and projects, is managed through simple Markdown files.

**Live Demo:** [**emrullahalku.me**](https://emrullahalku.me)

### ✨ Features

- **Fully Dynamic Content**: All text and data are fetched from local Markdown files using Nuxt Content.
- **Modern & Animated UI**: A unique circular navigation menu with smooth animations.
- **Dark/Light Mode**: Easy-to-use theme switcher for user comfort.
- **Interactive Elements**: Modals for viewing certificates, filterable project lists, and more.
- **SEO Optimized**: Dynamic meta tags for each page to ensure good search engine visibility.
- **Responsive Design**: Fully accessible on all devices, from desktops to mobile phones.

### 🛠️ Built With

- **Framework**: [Nuxt.js](https://nuxt.com/)
- **Content Management**: [Nuxt Content](https://content.nuxt.com/)
- **Styling**: Custom CSS with CSS Variables
- **Icons**: [Nuxt Icon](https://github.com/nuxt-modules/icon)
- **Deployment**: [Vercel](https://vercel.com/)

### 📂 Project Structure

A key feature of this project is its content management approach. All page content is stored in the `/content` directory.

- `/content/index.md`: Content for the homepage.
- `/content/about.md`: Content for the "About Me" page.
- `/content/education.md`: Contains educational history, certificates, and skills.
- `/content/repositories.md`: Lists all the projects.
- `/content/contact.md`: Information for the contact page.

The structure of this content is validated by schemas defined in `/content.config.ts` using Zod.

### 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

**Prerequisites:**

- Node.js (v18.x or newer)
- npm or yarn

**Installation:**

1.  Clone the repo:
    ```sh
    git clone https://github.com/emrullahalku/Portfolio.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd Portfolio
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Run the development server:
    ```sh
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) in your browser.

### 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
