
import React, { useEffect, useRef, useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Event } from "@/data/mockEvents";
import { useToast } from "@/components/ui/use-toast";

interface MapProps {
  events: Event[];
  onEventSelect: (event: Event) => void;
}

const EventMap = ({ events, onEventSelect }: MapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  // In a real app, we'd use a proper map library like Mapbox, Google Maps, or Leaflet
  // This is a simplified mockup for demonstration purposes
  
  useEffect(() => {
    if (mapContainerRef.current) {
      // Map initialization would happen here with a real map library
      console.log("Map would initialize here with events:", events);
    }
  }, [events]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      toast({
        title: "Search feature",
        description: `In a real app, this would search for '${searchQuery}' on the map`,
      });
    }
  };
  
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2">
        <form onSubmit={handleSearch} className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search for locations..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <Button 
          onClick={() => {
            toast({
              title: "Using current location",
              description: "In a real app, this would request and use your current location",
            });
          }}
          variant="outline"
        >
          Near Me
        </Button>
      </div>
      
      {/* Map container */}
      <div 
        ref={mapContainerRef} 
        className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden border border-gray-200"
      >
        {/* This would be replaced with actual map API in a real implementation */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
          <MapPin className="h-12 w-12 text-purple-300 mb-4" />
          <p className="text-center max-w-xs px-4">
            In a real application, an interactive map would be displayed here using Mapbox, Google Maps, or similar API.
          </p>
        </div>
        
        {/* Event markers - these would be actual map markers in a real implementation */}
        <div className="absolute inset-0">
          {events.map((event, index) => (
            <div 
              key={event.id}
              className="absolute cursor-pointer"
              style={{
                left: `${Math.random() * 70 + 15}%`,
                top: `${Math.random() * 70 + 15}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => onEventSelect(event)}
            >
              <div className="relative group">
                <div className="bg-purple-600 rounded-full p-1 shadow-md group-hover:bg-purple-700">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white p-2 rounded shadow-md whitespace-nowrap text-xs">
                    {event.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventMap;
