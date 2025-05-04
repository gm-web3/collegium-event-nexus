
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import EventCard from "@/components/EventCard";
import EventModal from "@/components/EventModal";
import EventFilters from "@/components/EventFilters";
import EventSubmissionForm from "@/components/EventSubmissionForm";
import mockEvents, { colleges } from "@/data/mockEvents";
import { Event, EventFilters as EventFiltersType } from "@/types";
import { filterEvents, getUniqueColleges, sortEventsByDate } from "@/lib/eventUtils";
import { useToast } from "@/hooks/use-toast";

const Index: React.FC = () => {
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [filters, setFilters] = useState<EventFiltersType>({
    search: "",
    type: "all",
    college: "",
    dateRange: {
      from: null,
      to: null,
    },
  });

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleFilterChange = (newFilters: EventFiltersType) => {
    setFilters(newFilters);
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      type: "all",
      college: "",
      dateRange: {
        from: null,
        to: null,
      },
    });
    toast({
      title: "Filters Reset",
      description: "All filters have been reset.",
    });
  };

  const handleEventSubmit = (event: Event) => {
    setEvents([event, ...events]);
  };

  const filteredEvents = sortEventsByDate(filterEvents(events, filters));
  const availableColleges = getUniqueColleges(events);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground shadow-sm">
        <div className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Collegium Event Nexus</h1>
              <p className="text-primary-foreground/80 mt-1">
                Discover and share college tech events in one place
              </p>
            </div>
            <Button onClick={() => setIsFormOpen(true)} className="bg-white text-primary hover:bg-white/90">
              <Plus className="mr-2 h-4 w-4" />
              Submit New Event
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <EventFilters
            colleges={availableColleges}
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={resetFilters}
          />
        </div>

        {filteredEvents.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold mb-4">
              {filteredEvents.length} {filteredEvents.length === 1 ? 'Event' : 'Events'} Found
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={handleEventClick}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold mb-2">No events found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or submit a new event.
            </p>
            <Button onClick={() => setIsFormOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Submit New Event
            </Button>
          </div>
        )}
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Collegium Event Nexus. All rights reserved.</p>
          <p className="text-sm mt-2">
            A platform for discovering and sharing college tech events.
          </p>
        </div>
      </footer>

      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <EventSubmissionForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleEventSubmit}
      />
    </div>
  );
};

export default Index;
