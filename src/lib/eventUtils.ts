
import { Event, EventFilters, EventType } from '../types';

export const getUniqueColleges = (events: Event[]): string[] => {
  return Array.from(new Set(events.map(event => event.college))).sort();
};

export const filterEvents = (events: Event[], filters: EventFilters): Event[] => {
  return events.filter(event => {
    // Filter by search term
    const searchMatch = !filters.search || 
      event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      event.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      event.college.toLowerCase().includes(filters.search.toLowerCase());
    
    // Filter by event type
    const typeMatch = filters.type === 'all' || event.type === filters.type;
    
    // Filter by college
    const collegeMatch = !filters.college || event.college === filters.college;
    
    // Filter by date range
    let dateMatch = true;
    if (filters.dateRange.from || filters.dateRange.to) {
      const eventDate = new Date(event.date);
      
      if (filters.dateRange.from) {
        dateMatch = dateMatch && eventDate >= filters.dateRange.from;
      }
      
      if (filters.dateRange.to) {
        dateMatch = dateMatch && eventDate <= filters.dateRange.to;
      }
    }
    
    return searchMatch && typeMatch && collegeMatch && dateMatch;
  });
};

export const sortEventsByDate = (events: Event[]): Event[] => {
  return [...events].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
};

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    weekday: 'long'
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const getEventTypeLabel = (type: EventType): string => {
  switch (type) {
    case 'hackathon':
      return 'Hackathon';
    case 'workshop':
      return 'Workshop';
    case 'techtalk':
      return 'Tech Talk';
    default:
      return type;
  }
};

export const generateEventId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
