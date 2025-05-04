
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Globe, MapPin } from 'lucide-react';
import { Event } from '@/types';
import { formatDate, getEventTypeLabel } from '@/lib/eventUtils';

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center justify-between">
            {event.title}
            <Badge className={`badge-${event.type}`}>
              {getEventTypeLabel(event.type)}
            </Badge>
          </DialogTitle>
        </DialogHeader>
        
        {event.image && (
          <div className="aspect-video w-full overflow-hidden rounded-md mb-4">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">{event.location}</span>
          </div>
          
          <div>
            <h4 className="font-semibold mb-1">College</h4>
            <p>{event.college}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-1">Description</h4>
            <p className="text-muted-foreground">{event.description}</p>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          {event.link && (
            <Button asChild className="w-full sm:w-auto">
              <a href={event.link} target="_blank" rel="noreferrer" className="flex items-center">
                <Globe className="mr-2 h-4 w-4" />
                Visit Event Website
              </a>
            </Button>
          )}
          <Button 
            variant="outline" 
            onClick={onClose} 
            className="w-full sm:w-auto"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
