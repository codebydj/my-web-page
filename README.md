# CodeByDJ - Modern Full Stack Developer Portfolio

A beautiful, modern, and fully responsive developer portfolio built with React, Tailwind CSS, and Framer Motion.

## 🌟 Features

✨ **Modern Design**

- Dark theme with professional glassmorphism effects
- Smooth animations and transitions using Framer Motion
- Responsive design that works on all devices
- Clean typography with Inter and Poppins fonts

🚀 **Key Sections**

- **Navbar** - Sticky navigation with smooth scroll and mobile menu
- **Hero** - Animated typing effect with CTA buttons
- **Featured Projects** - Showcase 3 main projects (SmartStudy, FS-Portal, SmartResult)
- **Mini Projects** - Horizontal scrollable slider with project categories
- **Skills** - Categorized skills with proficiency levels
- **Stats** - Animated counters showing achievements
- **About** - Personal story and contact information
- **Timeline** - Development journey visualization
- **Contact** - Contact form and social links
- **Footer** - Quick links and tech stack

## 🎨 Design Highlights

- **Color Scheme**: Dark mode with sky blue accents
- **Typography**: Modern, clean, and readable
- **Layout**: Professional hierarchy with proper spacing
- **Animations**: Subtle, smooth, and performance-optimized
- **Accessibility**: Semantic HTML and keyboard navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons & Lucide Icons
- **Routing**: React Router DOM

## 📦 Installation

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

   The portfolio will open at `http://localhost:3000`

3. **Build for Production**

   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── FeaturedProjects.jsx
│   ├── MiniProjects.jsx
│   ├── Skills.jsx
│   ├── Stats.jsx
│   ├── About.jsx
│   ├── Timeline.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/                 # Data files
│   ├── projects.js       # Featured and mini projects
│   └── skills.js         # Skills data
├── styles/               # Styling
│   └── index.css        # Global styles
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## 🚀 Deployment

The portfolio can be deployed on:

- **Vercel** - Recommended for Vite projects
- **Netlify** - Simple drag-and-drop deployment
- **GitHub Pages** - Free static hosting
- **Any static host** - Build with `npm run build`

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🎯 Customization

### Update Your Information

1. Edit contact links in `Navbar.jsx` and `Contact.jsx`
2. Update project data in `src/data/projects.js`
3. Modify skills in `src/data/skills.js`
4. Update About section content in `About.jsx`

### Change Colors

Edit the color palette in `tailwind.config.js`:

```js
colors: {
  primary: { ... }  // Change primary color
  dark: { ... }     // Change background color
}
```

### Modify Animations

Adjust animation speeds and effects in individual component files using Framer Motion props.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest
- Mobile browsers: All modern versions

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev)

## 📞 Contact

- Email: jayad6889@gmail.com
- GitHub: [@codebydj](https://github.com/codebydj)
- Location: Dharmavaram, Andhra Pradesh, India

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with ❤️ using modern web technologies.

---

**Made with React + Tailwind CSS + Framer Motion** 🚀
