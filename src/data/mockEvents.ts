
import { Event } from '../types';

export const colleges = [
  'MIT', 
  'Stanford University', 
  'Harvard University', 
  'Carnegie Mellon University', 
  'UC Berkeley',
  'Georgia Tech',
  'University of Washington',
  'Cornell University'
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'AI Hackathon 2025',
    description: 'A 48-hour hackathon focused on AI innovation. Build projects using cutting-edge AI technologies. Open to all skill levels.',
    date: '2025-05-15',
    location: 'Main Campus, Building 7',
    college: 'MIT',
    type: 'hackathon',
    link: 'https://example.com/aihackathon',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b'
  },
  {
    id: '2',
    title: 'Web Development Workshop',
    description: 'Learn modern web development techniques with React and Node.js. Bring your laptop and be ready to code!',
    date: '2025-05-10',
    location: 'Computer Science Building, Room 301',
    college: 'Stanford University',
    type: 'workshop',
    link: 'https://example.com/webdevworkshop'
  },
  {
    id: '3',
    title: 'Future of Quantum Computing',
    description: 'Tech talk by Dr. Jane Smith, quantum computing pioneer. Explore the latest advances in quantum algorithms and hardware.',
    date: '2025-05-20',
    location: 'Physics Auditorium',
    college: 'Harvard University',
    type: 'techtalk',
    link: 'https://example.com/quantumtalk'
  },
  {
    id: '4',
    title: 'Cybersecurity Challenge',
    description: 'Put your hacking skills to the test with our annual cybersecurity challenge. Prizes for the top teams.',
    date: '2025-05-25',
    location: 'Computer Science Department',
    college: 'Carnegie Mellon University',
    type: 'hackathon',
    link: 'https://example.com/cybersecurity',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
  },
  {
    id: '5',
    title: 'Mobile App Development Workshop',
    description: 'Hands-on workshop for building cross-platform mobile apps with Flutter. All skill levels welcome.',
    date: '2025-06-01',
    location: 'Engineering Center, Room 205',
    college: 'UC Berkeley',
    type: 'workshop',
    link: 'https://example.com/flutterworkshop'
  },
  {
    id: '6',
    title: 'The Impact of Large Language Models',
    description: 'Tech talk featuring experts from leading AI research teams discussing the societal impact of LLMs.',
    date: '2025-06-05',
    location: 'Computer Science Auditorium',
    college: 'Stanford University',
    type: 'techtalk',
    link: 'https://example.com/llmtalk'
  },
  {
    id: '7',
    title: 'Robotics Innovation Challenge',
    description: 'Design and build robotic solutions to real-world problems in this weekend-long hackathon.',
    date: '2025-06-10',
    location: 'Robotics Lab',
    college: 'MIT',
    type: 'hackathon',
    link: 'https://example.com/roboticshack',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a'
  },
  {
    id: '8',
    title: 'Cloud Computing Fundamentals',
    description: 'Workshop covering AWS, Azure, and Google Cloud basics. Get hands-on experience with cloud services.',
    date: '2025-06-15',
    location: 'Information Sciences Building',
    college: 'Georgia Tech',
    type: 'workshop',
    link: 'https://example.com/cloudworkshop'
  },
  {
    id: '9',
    title: 'The Future of AR/VR Technologies',
    description: 'Industry leaders discuss upcoming trends and innovations in augmented and virtual reality.',
    date: '2025-06-20',
    location: 'Media Arts Center',
    college: 'University of Washington',
    type: 'techtalk',
    link: 'https://example.com/arvrtalk'
  },
  {
    id: '10',
    title: 'Data Science for Social Good',
    description: 'Hackathon focused on using data science to address social challenges. Mentors from leading tech companies will be present.',
    date: '2025-06-25',
    location: 'Data Science Institute',
    college: 'Cornell University',
    type: 'hackathon',
    link: 'https://example.com/datasciencehack',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3'
  }
];

export default mockEvents;
