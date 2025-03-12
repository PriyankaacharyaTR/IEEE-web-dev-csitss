# CSITSS 2025 Conference Website

A modern, responsive website for the International Conference on Computer Science, Information Technology, and Smart Systems (CSITSS) 2025.

## Overview

CSITSS 2025 is a premier forum for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns in computer science and information technology. The website serves as the main platform for conference information, paper submissions, and registrations.

## Features

- 🎨 Modern, responsive design with dark mode support
- 🚀 Built with React and TypeScript
- 🎭 Smooth animations using Framer Motion
- 📱 Mobile-friendly navigation
- 🎯 Key sections include:
  - Home page with conference overview
  - Call for Papers with submission guidelines
  - Registration system
  - Committee members
  - Conference tracks
  - Speakers information
  - Sponsors showcase
  - Contact information

## Tech Stack

- **Frontend Framework**: React 18
- **Type System**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PriyankaacharyaTR/IEEE-web-dev-csitss.git
cd csitss-2025
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

### Environment Variables

No environment variables are required for basic setup.

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── lib/             # Utility functions
└── assets/          # Static assets

```

## Key Components

- `Layout.tsx`: Main layout component with navigation and footer
- `Home.tsx`: Landing page with conference highlights
- `CallForPapers.tsx`: Paper submission guidelines and deadlines
- `Registration.tsx`: Conference registration system
- `Committee.tsx`: Committee members information
- `Speakers.tsx`: Featured speakers showcase
- `Sponsors.tsx`: Sponsor information and tiers
- `Contact.tsx`: Contact information and form

## Deployment

The website is automatically deployed to Netlify when changes are pushed to the main branch. The deployment process includes:

1. Building the project using Vite
2. Deploying the `dist` folder to Netlify
3. Handling client-side routing with `_redirects` file

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Conference Email - priyankatr.is23@rvce.edu.in

## Acknowledgments

- Images from Unsplash
- Icons from Lucide React
- Design inspiration from modern conference websites
