# TradeSage AI - Intelligent Trading Platform

TradeSage AI is a modern, feature-rich trading platform that combines advanced analytics, AI-powered insights, and real-time market data to provide traders with a comprehensive trading experience.

![TradeSage AI Dashboard](https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=2000)

## Features

- 📊 **Real-time Market Data**: Live tracking of crypto, stocks, options, and futures
- 🤖 **AI-Powered Insights**: Smart trading recommendations and risk analysis
- 📈 **Advanced Analytics**: Comprehensive charts and technical analysis tools
- 💼 **Portfolio Management**: Track and manage your investments across multiple assets
- 🔒 **Secure Authentication**: JWT-based authentication system
- 🌓 **Dark/Light Mode**: Customizable theme support
- 📱 **Responsive Design**: Optimized for all devices

## Tech Stack

- **Frontend**: Next.js 13.5, React 18
- **Styling**: Tailwind CSS, shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Authentication**: JWT (jose)
- **State Management**: React Hooks
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Development**: TypeScript

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tradesage-ai.git
cd tradesage-ai
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_JWT_SECRET=your-secret-key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

To start the production server:
```bash
npm start
```

## Project Structure

```
tradesage-ai/
├── app/                    # Next.js 13 app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   └── ...                # Other pages
├── components/            # React components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── charts/           # Chart components
│   └── ...               # Feature-specific components
├── lib/                   # Utility functions and configurations
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Global styles
```

## Key Features Breakdown

### Trading Features
- Real-time market data streaming
- Multiple order types (Market, Limit)
- Advanced charting with multiple timeframes
- Portfolio tracking and analysis
- Multi-asset support (Crypto, Stocks, Options, Futures)

### AI Features
- Market sentiment analysis
- Trading pattern recognition
- Risk assessment
- Portfolio optimization suggestions
- Automated trading signals

### Security Features
- JWT-based authentication
- Protected API routes
- Secure password handling
- Session management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@tradesage-ai.com or join our Slack channel.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)