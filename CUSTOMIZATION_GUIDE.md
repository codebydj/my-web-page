# 🔧 Customization Guide with Code Examples

## 1. Update Your Profile Information

### Update Contact Info in Navbar

**File**: `src/components/Navbar.jsx`

Find the `socialLinks` array and update:

```jsx
const socialLinks = [
  { icon: FiGithub, href: "https://github.com/YOUR-USERNAME", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/YOUR-PROFILE",
    label: "LinkedIn",
  },
  { icon: FiMail, href: "mailto:YOUR-EMAIL@gmail.com", label: "Email" },
];
```

### Update Hero Section Text

**File**: `src/components/Hero.jsx`

```jsx
const fullText = 'Your Job Title Here'  // Change this

// And update the subtitle:
<motion.p variants={itemVariants} className="...">
  Your custom tagline or description here.
</motion.p>
```

### Update About Section

**File**: `src/components/About.jsx`

```jsx
// Replace the bio paragraphs:
<p className="text-lg text-gray-300 leading-relaxed">
  Your custom bio here. Write about your journey and passion.
</p>

// Update contact details:
<motion.div className="flex items-center gap-3...">
  <div className="p-2 rounded-lg bg-primary-500/20">
    <FiMail className="w-5 h-5 text-primary-400" />
  </div>
  <a href="mailto:YOUR-EMAIL@gmail.com">your-email@gmail.com</a>
</motion.div>
```

---

## 2. Add or Update Projects

### Add a New Featured Project

**File**: `src/data/projects.js`

```js
export const featuredProjects = [
  // ... existing projects
  {
    id: 4,
    title: "Your Project Name",
    description: "Your project description",
    shortDesc: "Short one-liner",
    image: "https://your-image-url.com/image.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/your-username/repo",
    liveDemo: "https://your-project-demo.com",
    status: "Live", // or "In Progress"
    highlights: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
];
```

### Add a Mini Project

**File**: `src/data/projects.js`

```js
export const htmlCssProjects = [
  // ... existing projects
  {
    id: 108,
    title: "Your Mini Project",
    category: "HTML/CSS", // or "JavaScript", "UI Experiments"
    image: "https://your-image-url.com/thumb.jpg",
    demo: "https://codepen.io/link",
    code: "https://github.com/link",
    difficulty: "Beginner", // or "Intermediate", "Full Stack"
    tags: ["Tag1", "Tag2", "Tag3"],
  },
];
```

---

## 3. Customize Skills Section

### Add New Skill Category

**File**: `src/data/skills.js`

```js
import { FaRust } from "react-icons/fa"; // Add icon import

export const skillsData = {
  // ... existing categories
  systems: {
    category: "Systems & DevOps",
    icon: FaRust,
    color: "#CE422B",
    skills: [
      { name: "Docker", icon: null, level: 75 },
      { name: "Linux", icon: null, level: 80 },
      { name: "AWS", icon: null, level: 70 },
    ],
  },
};
```

### Add Skill to Existing Category

**File**: `src/data/skills.js`

```js
backend: {
  category: "Backend Development",
  icon: FaNode,
  color: "#68A063",
  skills: [
    // ... existing skills
    { name: "GraphQL", icon: null, level: 75 },
  ]
}
```

---

## 4. Change Color Scheme

### Modify Primary Color

**File**: `tailwind.config.js`

Replace all instances of the primary color:

```js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',    // ← Change this (main color)
        600: '#0284c7',    // ← And these
        700: '#0369a1',
        800: '#075985',
        900: '#0c3d66',
      },
      // ... rest of colors
    }
  }
}
```

**Color Suggestions**:

- Purple: `#a855f7` (primary)
- Green: `#10b981` (primary)
- Pink: `#ec4899` (primary)
- Orange: `#f97316` (primary)
- Red: `#ef4444` (primary)

### Use a Color Palette Generator

1. Visit: https://tailwindcss.com/resources/tailwindcss-cheatsheet
2. Find color generator tools
3. Generate palette
4. Update `tailwind.config.js`

---

## 5. Customize Animations

### Slow Down All Animations

**Search in all components for**:

```jsx
transition={{ duration: 0.6 }}  // Change to 1.2
```

### Speed Up Animations

```jsx
transition={{ duration: 0.3 }}  // Faster
```

### Disable Hero Typing Effect

**File**: `src/components/Hero.jsx`

```jsx
// Replace animated text with static:
<span className="gradient-text inline-block">Full Stack Web Developer</span>
```

---

## 6. Customize Timeline

### Add New Timeline Event

**File**: `src/components/Timeline.jsx`

```jsx
const timelineData = [
  // ... existing events
  {
    year: "2026",
    title: "Major Achievement",
    description: "Something significant happened here...",
    icon: FiCode,
    color: "from-cyan-500 to-cyan-600",
  },
];
```

---

## 7. Update Contact Form

### Change Form Fields

**File**: `src/components/Contact.jsx`

```jsx
// Add a new field:
<div>
  <label className="block text-sm font-semibold mb-2">Company</label>
  <input
    type="text"
    name="company"
    placeholder="Your company"
    className="w-full bg-white/10 border border-white/20..."
    required
  />
</div>
```

### Connect to Email Service (Formspree Example)

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
```

---

## 8. Update Footer

### Add More Quick Links

**File**: `src/components/Footer.jsx`

```jsx
const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" }, // Add new link
  { label: "Testimonials", href: "#testimonials" },
];
```

### Update Tech Stack in Footer

```jsx
const techStack = [
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "MongoDB",
  "Vite",
  "GraphQL", // Add more
  "Docker",
];
```

---

## 9. Add a Resume Download Link

### Create Public Resume

1. Create PDF: `public/resume.pdf`
2. Update Hero button:

```jsx
<motion.a
  href="/resume.pdf"
  download="Dhanunjaya_Resume.pdf"
  whileHover={{ scale: 1.05 }}
  className="px-8 py-3 glass-morphism...">
  Download Resume
</motion.a>
```

---

## 10. Update Meta Information

### SEO & Meta Tags

**File**: `index.html`

```html
<meta name="description" content="Your unique description here" />
<meta name="keywords" content="React, Full Stack, Web Developer" />
<meta name="author" content="Your Name" />
<meta property="og:title" content="Your Portfolio Title" />
<meta property="og:description" content="Your portfolio description" />
<meta property="og:image" content="https://your-preview-image.jpg" />
```

---

## 11. Add Google Analytics

### Insert in `index.html` before closing `</head>`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual ID.

---

## 12. Change Animation Speed Globally

Create a new file `src/config/animations.js`:

```js
export const animationDurations = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  verySlow: 1.5,
};

export const animationDelays = {
  fast: 0.1,
  normal: 0.2,
  slow: 0.4,
};
```

Then use in components:

```jsx
import { animationDurations } from "../config/animations";

<motion.div transition={{ duration: animationDurations.normal }}>
  Content
</motion.div>;
```

---

## 13. Create New Component

### Create a Testimonials Component

1. Create `src/components/Testimonials.jsx`
2. Add data to `src/data/testimonials.js`
3. Import in `App.jsx`
4. Add to JSX

**Example**:

```jsx
<section id="testimonials">
  <Testimonials />
</section>
```

---

## 14. Update Responsive Breakpoints

**Tailwind Default Breakpoints** (in `tailwind.config.js`):

```js
screens: {
  'sm': '640px',   // Small
  'md': '768px',   // Medium
  'lg': '1024px',  // Large
  'xl': '1280px',  // Extra Large
  '2xl': '1536px', // 2X Extra Large
}
```

Use in components:

```jsx
<div className="text-sm md:text-lg lg:text-2xl">Responsive text</div>
```

---

## 15. Environment Variables (Optional)

Create `.env.local`:

```
VITE_CONTACT_EMAIL=your-email@gmail.com
VITE_GITHUB_USERNAME=your-username
VITE_FORM_ID=your-formspree-id
```

Use in components:

```jsx
const email = import.meta.env.VITE_CONTACT_EMAIL;
```

---

## 🎯 Most Common Customizations

### What Users Usually Change First:

1. ✅ Your name/title
2. ✅ Project links
3. ✅ Social media links
4. ✅ Email and phone
5. ✅ Color scheme
6. ✅ Profile image

### Before Deploying, Test:

1. Click all links
2. Test contact form
3. Check mobile view
4. Test dark mode
5. Run `npm run build`

---

**Need Help?** Check component files for more examples!
