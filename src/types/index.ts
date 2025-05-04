
export type EventType = 'hackathon' | 'workshop' | 'techtalk';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  college: string;
  type: EventType;
  link?: string;
  image?: string;
}

export interface EventFilters {
  search: string;
  type: EventType | 'all';
  college: string;
  dateRange: {
    from: Date | null;
    to: Date | null;
  };
}
