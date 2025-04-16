# AI Fake News Detector

A modern web application that uses AI to detect fake news and misinformation in text content. This full-stack application provides real-time analysis of news articles, statements, and claims to help users distinguish fact from fiction.

![AI Fake News Detector Screenshot](public/screenshot.png)

## Features

- **Claim Detection**: Identifies factual claims in text content
- **Fact Verification**: Verifies claims against trusted sources
- **Confidence Analysis**: Provides confidence ratings (True, False, Misleading, Unverified)
- **Source Citations**: Links to credible sources that support or contradict claims
- **Modern UI/UX**: Responsive design with dark theme and smooth animations
- **Real-time Processing**: Quick analysis with visual feedback

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Framer Motion
- **UI Components**: Custom components with Heroicons
- **Styling**: Tailwind CSS for responsive design
- **Animations**: Framer Motion for smooth transitions
- **Backend**: (To be implemented with Python)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/AI-Fake-News-Detector.git
   cd AI-Fake-News-Detector
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
AI-Fake-News-Detector/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js app pages
│   │   ├── page.js      # Homepage
│   │   ├── about/       # About page
│   │   └── privacy/     # Privacy policy page
│   ├── components/      # Reusable components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Features.js
│   │   ├── FactCheckForm.js
│   │   ├── FactCheckResult.js
│   │   └── Loader.js
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## Development Roadmap

- [x] Frontend UI design and implementation
- [x] Mock fact-checking functionality
- [ ] Python backend with NLP models
- [ ] API integration between frontend and backend
- [ ] User accounts and saved results
- [ ] Browser extension

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- This project was created as part of combating misinformation online
- Inspired by fact-checking organizations and their important work
- Built with modern web technologies and AI
