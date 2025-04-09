
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import EventMap from "@/components/map/EventMap";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { getEvents, Event, getEventsByCategory } from "@/data/mockEvents";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Explore = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [events, setEvents] = useState(() => getEvents());
  const { toast } = useToast();

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setEvents(getEventsByCategory(category));
  };

  // Handle booking an event
  const handleBookEvent = () => {
    toast({
      title: "Booking Initiated",
      description: "In a real app, this would proceed to payment if needed",
    });
    setIsBookingModalOpen(false);
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Explore Events</h1>
        
        {/* Map Section */}
        <div className="mb-8">
          <EventMap events={events} onEventSelect={setSelectedEvent} />
        </div>
        
        {/* Category Tabs */}
        <div className="mb-8">
          <Tabs defaultValue="All" onValueChange={handleCategoryChange} value={selectedCategory}>
            <div className="overflow-auto pb-2">
              <TabsList className="inline-flex w-auto">
                <TabsTrigger value="All">All Events</TabsTrigger>
                <TabsTrigger value="Music">Music</TabsTrigger>
                <TabsTrigger value="Tech">Tech</TabsTrigger>
                <TabsTrigger value="Food">Food</TabsTrigger>
                <TabsTrigger value="Sports">Sports</TabsTrigger>
                <TabsTrigger value="Arts">Arts</TabsTrigger>
                <TabsTrigger value="Business">Business</TabsTrigger>
                <TabsTrigger value="Health">Health</TabsTrigger>
                <TabsTrigger value="Family">Family</TabsTrigger>
              </TabsList>
            </div>

            {/* Events Grid - Same for all tabs since we're filtering the events list */}
            <TabsContent value={selectedCategory} className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover"
                      />
                      {event.price === "Free" && (
                        <Badge className="absolute top-2 right-2 bg-green-600">
                          FREE
                        </Badge>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                        <span className="mx-1">•</span>
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-500 ml-1">
                            {event.location.city}, {event.location.state}
                          </span>
                        </div>
                        <span className="text-purple-600 font-semibold">
                          {typeof event.price === 'number' ? `$${event.price}` : event.price}
                        </span>
                      </div>
                      <Button 
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        onClick={() => setSelectedEvent(event)}
                      >
                        View Details
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Event Details Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="sm:max-w-[625px]">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedEvent.title}</DialogTitle>
              </DialogHeader>
              <div className="mt-2">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title} 
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-semibold">Date & Time</p>
                        <p className="text-sm text-gray-600">
                          {new Date(selectedEvent.date).toLocaleDateString()} at {selectedEvent.time}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-sm text-gray-600">
                          {selectedEvent.location.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {selectedEvent.location.address}, {selectedEvent.location.city}, {selectedEvent.location.state}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-semibold">Organized by</p>
                        <p className="text-sm text-gray-600">
                          {selectedEvent.hostName}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Price</p>
                      <p className="text-2xl text-purple-600 font-bold">
                        {typeof selectedEvent.price === 'number' ? `$${selectedEvent.price}` : selectedEvent.price}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">About this event</h3>
                  <p className="text-gray-600">{selectedEvent.description}</p>
                </div>
                
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => {
                    setSelectedEvent(null);
                    setIsBookingModalOpen(true);
                  }}
                >
                  {selectedEvent.price === "Free" ? "RSVP Now" : "Book Tickets"}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Booking Modal */}
      <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book Event</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="mb-4">
              In a real application, this would contain:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Ticket quantity selection</li>
              <li>Attendee information form</li>
              {selectedEvent && selectedEvent.price !== "Free" && (
                <li>Payment details collection</li>
              )}
            </ul>
            <Button 
              className="w-full bg-purple-600 hover:bg-purple-700"
              onClick={handleBookEvent}
            >
              {selectedEvent && selectedEvent.price === "Free" ? "Confirm RSVP" : "Complete Booking"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Explore;
