# 🍽️ Restaurant App

A modern, responsive restaurant website built with React and Chakra UI. This elegant dining experience showcases a restaurant's menu, story, testimonials, and reservation system with beautiful animations and user-friendly interface.

![Restaurant App](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Chakra UI](https://img.shields.io/badge/Chakra%20UI-2.8.2-38B2AC?style=for-the-badge&logo=chakra-ui)
![Vite](https://img.shields.io/badge/Vite-5.1.4-646CFF?style=for-the-badge&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0.8-0055FF?style=for-the-badge&logo=framer)

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Technology Stack](#-technology-stack)
- [Components](#-components)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🎨 **Modern Design**
- Responsive design that works on all devices
- Beautiful animations powered by Framer Motion
- Elegant color scheme and typography
- Smooth scrolling navigation

### 🍽️ **Restaurant Features**
- **Hero Section**: Eye-catching landing with reservation booking
- **Menu Display**: Categorized menu items with images and descriptions
- **About Section**: Restaurant story and mission
- **Testimonials**: Customer reviews and ratings
- **Contact Information**: Location, hours, and contact details
- **Reservation System**: Interactive booking form

### 🚀 **Technical Features**
- Fast development with Vite
- Component-based architecture
- Responsive design with Chakra UI
- Smooth animations and transitions
- SEO-friendly structure
- Cross-browser compatibility

## 🎯 Demo

The app features a complete restaurant website with:

- **Homepage**: Hero section with reservation booking
- **Menu**: Categorized food items (Seafood, Meat, Vegetarian, Desserts)
- **About**: Restaurant story and values
- **Testimonials**: Customer reviews
- **Contact**: Location and contact information
- **Footer**: Additional links and information

## 🛠️ Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/restaurant-app.git
   cd restaurant-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🚀 Usage

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
restaurant-app/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── components/         # React components
│   │   ├── About.jsx      # About section component
│   │   ├── Contact.jsx    # Contact information
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Hero.jsx       # Hero section with reservation
│   │   ├── Menu.jsx       # Menu display component
│   │   ├── Navbar.jsx     # Navigation bar
│   │   └── Testimonials.jsx # Customer testimonials
│   ├── hooks/             # Custom React hooks
│   │   └── useScrollSpy.js
│   ├── styles/            # Additional styles
│   ├── assets/            # Images and static assets
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Application entry point
│   ├── index.css          # Global styles
│   └── App.css            # App-specific styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.2.0** - Modern JavaScript library for building user interfaces
- **React DOM** - React rendering for web applications

### UI Framework & Styling
- **Chakra UI 2.8.2** - Modern component library for React
- **Chakra Icons 2.1.1** - Icon library for Chakra UI
- **Emotion** - CSS-in-JS library for styling
- **Framer Motion 11.0.8** - Animation library for React

### Development Tools
- **Vite 5.1.4** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **React Icons 5.0.1** - Popular icon library

### Build & Development
- **@vitejs/plugin-react** - Vite plugin for React
- **TypeScript types** - Type definitions for better development experience

## 🧩 Components

### Core Components

#### `Hero.jsx`
- Landing section with background image
- Reservation booking modal
- Call-to-action buttons
- Animated content with Framer Motion

#### `Menu.jsx`
- Categorized menu display (Seafood, Meat, Vegetarian, Desserts)
- Interactive menu items with images and descriptions
- Modal for detailed menu item view
- Responsive grid layout

#### `About.jsx`
- Restaurant story and mission
- Feature highlights with icons
- Animated content sections
- Responsive layout

#### `Testimonials.jsx`
- Customer reviews and ratings
- Star rating display
- Carousel/slider functionality
- Customer testimonials

#### `Contact.jsx`
- Contact information display
- Location details
- Business hours
- Contact form (if implemented)

#### `Navbar.jsx`
- Navigation menu
- Smooth scrolling to sections
- Responsive mobile menu
- Brand/logo display

#### `Footer.jsx`
- Additional links and information
- Social media links
- Copyright information
- Contact details

## 🎨 Customization

### Styling
The app uses Chakra UI's theme system. You can customize:

1. **Colors**: Modify the theme colors in `App.jsx`
2. **Typography**: Update font sizes and families
3. **Spacing**: Adjust padding and margins
4. **Components**: Customize individual component styles

### Content
- **Menu Items**: Update the `foodVarieties` object in `Menu.jsx`
- **About Content**: Modify the text in `About.jsx`
- **Testimonials**: Update customer reviews in `Testimonials.jsx`
- **Contact Info**: Change contact details in `Contact.jsx`

### Images
- Replace placeholder images with your restaurant's photos
- Update hero background image in `Hero.jsx`
- Add your restaurant's logo

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options

#### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

#### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

#### GitHub Pages
1. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/restaurant-app",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Chakra UI** for the beautiful component library
- **Framer Motion** for smooth animations
- **React Icons** for the icon library
- **Unsplash** for placeholder images
- **Vite** for the fast development experience

## 📞 Support

If you have any questions or need help with the project:

- Create an issue on GitHub
- Contact the development team
- Check the documentation

---

**Made with ❤️ using React, Chakra UI, and Framer Motion**

*Last updated: December 2024*
