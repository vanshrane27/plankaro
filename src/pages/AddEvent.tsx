
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { addEvent } from "@/data/mockEvents";
import { useAuth } from "@/contexts/AuthContext";

const AddEvent = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    locationName: "",
    address: "",
    city: "",
    state: "",
    price: "",
    priceType: "paid",
    category: "",
    image: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePriceTypeChange = (value: string) => {
    setFormData(prev => ({ 
      ...prev, 
      priceType: value,
      price: value === "free" ? "0" : prev.price
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (
      !formData.title ||
      !formData.description ||
      !formData.date ||
      !formData.time ||
      !formData.locationName ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.category
    ) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Use default image if none provided
    const imageUrl = formData.image || "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
    
    // Create the event object with proper type handling for the price
    const eventData = {
      title: formData.title,
      description: formData.description,
      date: formData.date,
      time: formData.time,
      location: {
        name: formData.locationName,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        coordinates: {
          // In a real app, we would geocode the address to get actual coordinates
          lat: Math.random() * 10 + 30,
          lng: Math.random() * 20 - 100
        }
      },
      // Ensure price is either the literal "Free" or a number
      price: formData.priceType === "free" ? "Free" : Number(formData.price) || 0,
      category: formData.category,
      image: imageUrl,
      hostId: user?.id || "",
      hostName: user?.name || "Event Host"
    };
    
    try {
      // In a real app, this would make an API call to save the event
      const newEvent = addEvent(eventData);
      
      toast({
        title: "Event created!",
        description: "Your event has been added successfully.",
      });
      
      // Navigate to explore page
      setTimeout(() => {
        navigate("/explore");
      }, 1500);
    } catch (error) {
      console.error("Error creating event:", error);
      toast({
        title: "Error",
        description: "There was a problem creating your event. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Create a New Event</h1>
        
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
              <CardDescription>
                Fill in the information below to create your event. All fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Event Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Event Title *</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Summer Music Festival"
                    required
                  />
                </div>
                
                {/* Event Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your event. Include what attendees can expect."
                    className="min-h-[100px]"
                    required
                  />
                </div>
                
                {/* Event Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Event Date *</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Event Time *</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                {/* Event Location */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Location Details</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="locationName">Venue Name *</Label>
                    <Input
                      id="locationName"
                      name="locationName"
                      value={formData.locationName}
                      onChange={handleChange}
                      placeholder="e.g. Central Park"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="e.g. 123 Main Street"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. San Francisco"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="e.g. CA"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Event Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Event Category *</Label>
                  <Select 
                    value={formData.category}
                    onValueChange={(value) => handleSelectChange("category", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Music">Music</SelectItem>
                      <SelectItem value="Sports">Sports</SelectItem>
                      <SelectItem value="Arts">Arts</SelectItem>
                      <SelectItem value="Food">Food</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                      <SelectItem value="Tech">Tech</SelectItem>
                      <SelectItem value="Health">Health</SelectItem>
                      <SelectItem value="Family">Family</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Event Price */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Event Price</h3>
                  
                  <RadioGroup 
                    defaultValue="paid" 
                    value={formData.priceType}
                    onValueChange={handlePriceTypeChange}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paid" id="paid" />
                      <Label htmlFor="paid">Paid Event</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="free" id="free" />
                      <Label htmlFor="free">Free Event</Label>
                    </div>
                  </RadioGroup>
                  
                  {formData.priceType === "paid" && (
                    <div className="space-y-2">
                      <Label htmlFor="price">Ticket Price ($)</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        min="0"
                        step="0.01"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="e.g. 25.00"
                      />
                    </div>
                  )}
                </div>
                
                {/* Event Image */}
                <div className="space-y-2">
                  <Label htmlFor="image">Image URL (Optional)</Label>
                  <Input
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="e.g. https://example.com/image.jpg"
                  />
                  <p className="text-xs text-gray-500">
                    Leave blank to use a default image. In a real application, you would be able to upload an image.
                  </p>
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Event..." : "Create Event"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default AddEvent;
