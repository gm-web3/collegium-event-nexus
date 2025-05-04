
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarIcon, Search, X } from "lucide-react";
import { EventFilters } from '@/types';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface EventFiltersProps {
  colleges: string[];
  filters: EventFilters;
  onFilterChange: (filters: EventFilters) => void;
  onReset: () => void;
}

const EventFiltersComponent: React.FC<EventFiltersProps> = ({ 
  colleges, 
  filters, 
  onFilterChange, 
  onReset 
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filters,
      search: e.target.value
    });
  };

  const handleTypeChange = (value: string) => {
    onFilterChange({
      ...filters,
      type: value as EventFilters['type']
    });
  };

  const handleCollegeChange = (value: string) => {
    onFilterChange({
      ...filters,
      college: value
    });
  };

  return (
    <div className="bg-card p-4 rounded-lg shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-grow relative">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Search className="h-4 w-4" />
          </div>
          <Input
            placeholder="Search events..."
            value={filters.search}
            onChange={handleSearchChange}
            className="pl-8"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <div className="w-full sm:w-auto min-w-[150px]">
            <Select
              value={filters.type}
              onValueChange={handleTypeChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="hackathon">Hackathon</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
                <SelectItem value="techtalk">Tech Talk</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full sm:w-auto min-w-[150px]">
            <Select
              value={filters.college}
              onValueChange={handleCollegeChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select College" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Colleges</SelectItem>
                {colleges.map((college) => (
                  <SelectItem key={college} value={college}>
                    {college}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Label className="text-sm mb-1 sm:mb-0 sm:mr-2">Date Range:</Label>
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[130px] justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {filters.dateRange.from ? (
                    format(filters.dateRange.from, "PP")
                  ) : (
                    <span>Start date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={filters.dateRange.from || undefined}
                  onSelect={(date) =>
                    onFilterChange({
                      ...filters,
                      dateRange: { ...filters.dateRange, from: date }
                    })
                  }
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[130px] justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {filters.dateRange.to ? (
                    format(filters.dateRange.to, "PP")
                  ) : (
                    <span>End date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={filters.dateRange.to || undefined}
                  onSelect={(date) =>
                    onFilterChange({
                      ...filters,
                      dateRange: { ...filters.dateRange, to: date }
                    })
                  }
                  initialFocus
                  className="pointer-events-auto"
                  disabled={date => 
                    filters.dateRange.from ? date < filters.dateRange.from : false
                  }
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <Button 
          variant="ghost" 
          size="sm"
          onClick={onReset}
          className="ml-auto"
        >
          <X className="h-4 w-4 mr-1" /> Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default EventFiltersComponent;
