# Rupal Bohra - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion animations.

## 🚀 Features

- **Modern Design**: Clean and minimalist light theme design
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **TypeScript**: Full TypeScript support for type safety
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **SEO Optimized**: Meta tags and structured data
- **Mobile Navigation**: Responsive mobile-friendly navigation menu

## 📄 Pages

- **Home** - Hero section with call-to-action buttons
- **About** - Personal bio and statistics
- **Projects** - Showcase of completed projects with descriptions
- **Skills** - Technical skills with proficiency levels
- **Contact** - Contact form and contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## 🚀 Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build for production:
```bash
npm run build
```

### Production

Start the production server:
```bash
npm start
```

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   ├── skills/
│   │   └── page.tsx        # Skills page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── ProjectCard.tsx     # Project card component
│   └── SkillBadge.tsx      # Skill badge component
├── lib/
│   └── animations.ts       # Reusable animation variants
├── public/                 # Static assets
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.ts          # Next.js configuration
```

## 🎨 Customization

### Update Personal Information

- **Home Page**: Edit `app/page.tsx` to update intro text and social links
- **About Page**: Edit `app/about/page.tsx` to update bio and statistics
- **Contact Page**: Edit `app/contact/page.tsx` to update contact information

### Update Projects

Edit the `projects` array in `app/projects/page.tsx` to add or modify projects.

### Update Skills

Edit the `skillCategories` array in `app/skills/page.tsx` to add or modify skills and proficiency levels.

### Modify Theme

Edit `tailwind.config.ts` to customize colors, fonts, and other theme properties.

## 📝 Environment Variables

Create a `.env.local` file if needed for environment-specific variables.

## 🚢 Deployment

### Deploy to GitHub Pages

1. Create a GitHub repository
2. Push your code to GitHub
3. Configure GitHub Pages in repository settings
4. The site will be live at `https://yourusername.github.io`

### Deploy to Vercel

1. Sign up at [Vercel](https://vercel.com)
2. Connect your GitHub repository
3. Vercel will automatically deploy on push

## 📧 Contact

- Email: rupal@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]
- Twitter: [Your Twitter Handle]

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Rupal Bohra** - Full Stack Developer

---

Made with ❤️ using Next.js and Tailwind CSS
