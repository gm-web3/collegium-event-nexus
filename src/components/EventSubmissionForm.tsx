
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Event, EventType } from '@/types';
import { generateEventId } from '@/lib/eventUtils';
import { colleges } from '@/data/mockEvents';
import { useToast } from '@/hooks/use-toast';

interface EventSubmissionFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (event: Event) => void;
}

const EventSubmissionForm: React.FC<EventSubmissionFormProps> = ({ isOpen, onClose, onSubmit }) => {
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [location, setLocation] = useState('');
  const [college, setCollege] = useState('');
  const [type, setType] = useState<EventType | ''>('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({
    title: false,
    description: false,
    date: false,
    location: false,
    college: false,
    type: false
  });

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDate(null);
    setLocation('');
    setCollege('');
    setType('');
    setLink('');
    setImage('');
    setErrors({
      title: false,
      description: false,
      date: false,
      location: false,
      college: false,
      type: false
    });
  };

  const validateForm = () => {
    const newErrors = {
      title: title.trim() === '',
      description: description.trim() === '',
      date: date === null,
      location: location.trim() === '',
      college: college === '',
      type: type === ''
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newEvent: Event = {
        id: generateEventId(),
        title,
        description,
        date: date ? format(date, 'yyyy-MM-dd') : '',
        location,
        college,
        type: type as EventType,
        link: link || undefined,
        image: image || undefined
      };
      
      onSubmit(newEvent);
      toast({
        title: "Event Submitted",
        description: "Your event has been added to the dashboard.",
      });
      resetForm();
      onClose();
    } else {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Submit a New Event</DialogTitle>
          <DialogDescription>
            Fill out the form below to add a new event to the platform.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="title" className={cn(errors.title && "text-destructive")}>
                Event Title *
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={cn(errors.title && "border-destructive")}
              />
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="description" className={cn(errors.description && "text-destructive")}>
                Description *
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={cn(errors.description && "border-destructive")}
                rows={4}
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className={cn(errors.date && "text-destructive")}>
                  Event Date *
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal mt-2",
                        !date && "text-muted-foreground",
                        errors.date && "border-destructive"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date || undefined}
                      onSelect={setDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <Label htmlFor="location" className={cn(errors.location && "text-destructive")}>
                  Location *
                </Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={cn("mt-2", errors.location && "border-destructive")}
                  placeholder="Building, Room, etc."
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className={cn(errors.college && "text-destructive")}>
                  College *
                </Label>
                <Select 
                  value={college} 
                  onValueChange={setCollege}
                >
                  <SelectTrigger className={cn("mt-2", errors.college && "border-destructive")}>
                    <SelectValue placeholder="Select College" />
                  </SelectTrigger>
                  <SelectContent>
                    {colleges.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className={cn(errors.type && "text-destructive")}>
                  Event Type *
                </Label>
                <Select 
                  value={type} 
                  onValueChange={(value) => setType(value as EventType)}
                >
                  <SelectTrigger className={cn("mt-2", errors.type && "border-destructive")}>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hackathon">Hackathon</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="techtalk">Tech Talk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="link">
                  Event Website URL <span className="text-muted-foreground">(Optional)</span>
                </Label>
                <Input
                  id="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="https://"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="image">
                  Image URL <span className="text-muted-foreground">(Optional)</span>
                </Label>
                <Input
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="mt-2"
                />
              </div>
            </div>
          </div>
          
          <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2">
            <Button variant="outline" type="button" onClick={() => {
              resetForm();
              onClose();
            }}>
              Cancel
            </Button>
            <Button type="submit">Submit Event</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventSubmissionForm;
