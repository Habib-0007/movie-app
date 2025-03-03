# Habib Movie App 🎬

A sleek and responsive movie search application built with React and Vite, powered by the OMDB API. This project allows users to search for movies, view details, and explore film information with a clean user interface.

![Demo](https://habib-movie-app.vercel. com/demo.jpg)

---

## 🎬 Features

- **Movie Search**: Find movies by title with instant results
- **Detailed Movie Information**: View comprehensive details including plot, cast, ratings, and more
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast development and production build times

---

## Technologies Used 🛠️

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for better development experience.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TanStack Query**: For fetching, caching, and managing server state.
- **OMDB API**: Provides movie data for the application.

## 🚀 Demo

Check out the live demo: [Habib Movie App](https://habib-movie-app.vercel.app)

## 📋 Prerequisites

- Node.js (v14.x or later)
- npm or yarn

## ⚙️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/habib-0007/movie-app.git
cd movie-app
```

2. **Install dependencies**

```bash
npm install
# or
yarn
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```
VITE_OMDB_API_KEY=your_api_key_here
```

> 📝 **Note:** You need to get your API key from [OMDB API](https://www.omdbapi.com/apikey.aspx)

4. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**

Navigate to `http://localhost:5173`

## 🚢 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This will generate optimized files in the `dist` directory.

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/habib-0007/movie-app)

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/habib-0007/movie-app))

## 📊 API Usage

This project uses the OMDb API (Open Movie Database), which allows:
- 1,000 daily requests with the free tier
- Search by movie title, IMDb ID
- Full movie details including ratings, cast, and plot

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Made with ❤️ by [Habib Adebayo](https://github.com/habib-0007/)