# 🎬 Films Review

<div align="center">

![Films Review Banner](https://img.shields.io/badge/Films%20Review-Movie%20Discovery%20Platform-3b82f6?style=for-the-badge&logo=film&logoColor=white)

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952b3?style=flat-square&logo=bootstrap)](https://getbootstrap.com/)
[![TMDB API](https://img.shields.io/badge/TMDB-API-01d277?style=flat-square&logo=themoviedatabase)](https://www.themoviedb.org/)
[![Font Awesome](https://img.shields.io/badge/Font%20Awesome-Icons-339af0?style=flat-square&logo=font-awesome)](https://fontawesome.com/)

_A modern, responsive movie discovery platform built with Next.js and TMDB API_

[🚀 Live Demo](#) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://github.com/yourusername/films-review/issues) • [✨ Request Feature](https://github.com/yourusername/films-review/issues)

</div>

---

## ✨ Features

### 🔍 **Smart Discovery**

- **Advanced Search** - Find movies by title with real-time suggestions
- **Popular Movies** - Discover trending and popular content
- **Intelligent Recommendations** - Get personalized movie suggestions
- **Genre Exploration** - Browse movies by categories

### 💖 **Personal Watchlist**

- **Save Favorites** - Add movies to your personal watchlist
- **TMDB Integration** - Sync with your TMDB account
- **Quick Access** - Easy watchlist management
- **Visual Indicators** - Clear watchlist status on all movies

### 🎭 **Rich Movie Details**

- **Comprehensive Info** - Cast, crew, ratings, and descriptions
- **Interactive Ratings** - Visual star ratings and TMDB scores
- **Cast & Crew** - Detailed information about movie personnel
- **Production Details** - Studios, release dates, and technical specs

### 🎨 **Modern UI/UX**

- **Dark Theme** - Professional dark mode with consistent colors
- **Responsive Design** - Optimized for all devices
- **Smooth Animations** - Elegant transitions and hover effects
- **Loading States** - Beautiful skeleton screens and loading indicators

### 🔧 **Technical Excellence**

- **Server-Side Rendering** - Fast initial page loads with Next.js
- **Optimized Performance** - Efficient image loading and caching
- **Accessibility** - WCAG compliant with proper ARIA labels
- **SEO Optimized** - Meta tags and structured data

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or later
- **npm** or **yarn** package manager
- **TMDB API Key** (free at [themoviedb.org](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/films-review.git
   cd films-review
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**

   ```bash
   cp .env.example .env.local
   ```

   Add your TMDB API key to `.env.local`:

   ```env
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Project Structure

```
films-review/
├── 📁 public/                 # Static assets
├── 📁 src/
│   ├── 📁 app/               # Next.js app directory
│   │   ├── 📁 api/           # API routes
│   │   ├── 📁 componants/    # React components
│   │   │   ├── 🎬 Card.jsx
│   │   │   ├── 🔍 MovieSearch.jsx
│   │   │   ├── 🧭 Nav.jsx
│   │   │   ├── 📄 Pagination.jsx
│   │   │   ├── ⭐ StarRating.jsx
│   │   │   └── 💖 WatchlistButton.jsx
│   │   ├── 📁 context/       # React context providers
│   │   ├── 📁 movie/[id]/    # Dynamic movie detail pages
│   │   ├── 📁 watchlist/     # Watchlist page
│   │   ├── 🌐 globals.css    # Global styles
│   │   ├── 📱 layout.js      # Root layout
│   │   └── 🏠 page.js        # Home page
│   └── 📁 lib/               # Utility functions
├── 📄 package.json
├── ⚙️ next.config.mjs
└── 📖 README.md
```

---

## 🎯 Key Components

### 🎬 **Movie Cards**

- Responsive movie posters
- Interactive hover effects
- Quick watchlist actions
- Rating displays

### 🔍 **Search Interface**

- Real-time search suggestions
- Debounced input handling
- Clear search functionality
- Results pagination

### 💖 **Watchlist System**

- TMDB account integration
- Persistent storage
- Visual status indicators
- Bulk management

### ⭐ **Rating Components**

- Star rating displays
- Circular progress indicators
- Color-coded ratings
- TMDB score integration

---

## 🎨 Design System

### 🎨 **Color Palette**

- **Primary**: `#3b82f6` (Professional Blue)
- **Accent**: `#f59e0b` (Amber)
- **Background**: `#0a0e13` (Deep Navy)
- **Surface**: `#111827` (Dark Gray)
- **Text**: `#f9fafb` (Light Gray)

### 📱 **Typography**

- **Headings**: Geist Sans
- **Body**: System font stack
- **Code**: Geist Mono

### 🎭 **Components**

- Consistent spacing system
- Professional shadows
- Smooth transitions
- Accessible focus states

---

## 🔧 Configuration

### Environment Variables

```env
# TMDB API Configuration
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here

# Optional: Custom configuration
NEXT_PUBLIC_APP_NAME=Films Review
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### Next.js Configuration

```javascript
// next.config.mjs
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
  experimental: {
    appDir: true,
  },
};
```

---

## 📚 API Integration

### TMDB API Endpoints Used

- **Movie Search**: `/search/movie`
- **Popular Movies**: `/movie/popular`
- **Movie Details**: `/movie/{id}`
- **Movie Credits**: `/movie/{id}/credits`
- **Movie Recommendations**: `/movie/{id}/recommendations`
- **Account Watchlist**: `/account/{account_id}/watchlist`

### Authentication Flow

1. Generate request token
2. User authorizes on TMDB
3. Create session
4. Store session ID locally
5. Access user's watchlist

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**

   ```bash
   vercel --prod
   ```

2. **Set Environment Variables**

   - Add `NEXT_PUBLIC_TMDB_API_KEY` in Vercel dashboard

3. **Deploy**
   - Automatic deployments on git push

### Other Platforms

- **Netlify**: Compatible with Next.js static export
- **Railway**: Full-stack deployment support
- **AWS Amplify**: Serverless deployment option

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork the repository**
2. **Create feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open Pull Request**

---

## 📊 Performance

### Core Web Vitals

- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

### Optimization Features

- **Image Optimization** - Next.js automatic optimization
- **Code Splitting** - Automatic route-based splitting
- **Caching** - Efficient API response caching
- **Bundle Analysis** - Optimized bundle sizes

---

## 🐛 Troubleshooting

### Common Issues

#### 🔑 **API Key Issues**

```bash
Error: TMDB API key not found
```

**Solution**: Ensure `NEXT_PUBLIC_TMDB_API_KEY` is set in `.env.local`

#### 🔄 **Hydration Errors**

```bash
Warning: Text content did not match
```

**Solution**: Check for client/server rendering mismatches

#### 📱 **Mobile Issues**

```bash
Touch events not working
```

**Solution**: Ensure proper touch event handlers

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[TMDB](https://www.themoviedb.org/)** - For the amazing movie database API
- **[Next.js](https://nextjs.org/)** - For the incredible React framework
- **[Bootstrap](https://getbootstrap.com/)** - For the responsive CSS framework
- **[Font Awesome](https://fontawesome.com/)** - For the beautiful icons

---

## 📞 Support

- **📧 Email**: support@films-review.com
- **💬 Discord**: [Join our community](https://discord.gg/films-review)
- **🐦 Twitter**: [@FilmsReview](https://twitter.com/filmsreview)
- **📖 Documentation**: [docs.films-review.com](https://docs.films-review.com)

---

<div align="center">

**Made with ❤️ by the Films Review Team**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/films-review?style=social)](https://github.com/yourusername/films-review/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/films-review?style=social)](https://github.com/yourusername/films-review/network)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/films-review)](https://github.com/yourusername/films-review/issues)

</div>
