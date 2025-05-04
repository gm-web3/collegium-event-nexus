
# Collegium Event Nexus

A modern web platform for discovering and sharing college tech events. This application serves as a central hub for students to find hackathons, tech talks, and workshops across multiple colleges.

![Collegium Event Nexus](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070)

## Features

- **Event Discovery**: Browse a curated list of upcoming tech events from multiple colleges
- **Advanced Filtering**: Find events by type, college, date range, and keywords
- **Event Submission**: Submit new events to be added to the platform
- **Responsive Design**: Access the platform on any device with a fully responsive UI
- **Rich Event Details**: View comprehensive information about each event including descriptions, locations, and external links

## Tech Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: Strongly-typed JavaScript for more reliable code
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Shadcn UI**: High-quality UI components built with Radix UI and Tailwind
- **date-fns**: Modern JavaScript date utility library
- **Vite**: Next-generation frontend tooling for faster development

## Project Structure

```
src/
├── components/      # React components
│   ├── EventCard.tsx
│   ├── EventFilters.tsx
│   ├── EventModal.tsx
│   └── EventSubmissionForm.tsx
├── data/           # Mock data
│   └── mockEvents.ts
├── lib/            # Utility functions
│   └── eventUtils.ts
├── pages/          # Page components
│   ├── Index.tsx
│   └── NotFound.tsx
├── types/          # TypeScript type definitions
│   └── index.ts
├── App.tsx         # Main app component
└── main.tsx        # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
```sh
git clone <repository-url>
cd collegium-event-nexus
```

2. Install dependencies
```sh
npm install
# or
yarn install
```

3. Start the development server
```sh
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Development

### Adding New Events

Events can be added in two ways:

1. **Via the UI**: Use the "Submit New Event" button on the dashboard to open the submission form
2. **Via Code**: Add new events to the `mockEvents.ts` file

### Mock Data

The application currently uses mock data located in `src/data/mockEvents.ts`. This can be replaced with API calls to fetch real data in production.

### Future Enhancements

- User authentication for personalized event tracking
- Email notifications for upcoming events
- Integration with college calendar systems
- Event recommendation based on user preferences
- Social sharing functionality

## Deployment

To build the application for production:

```sh
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

## License

MIT License - See the LICENSE file for details
