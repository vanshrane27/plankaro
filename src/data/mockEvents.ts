
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: {
    name: string;
    address: string;
    city: string;
    state: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  price: number | "Free";
  category: string;
  image: string;
  hostId: string;
  hostName: string;
}

export const mockEvents: Event[] = [
  {
    id: "evt001",
    title: "Summer Music Festival",
    description: "Join us for a night of amazing live performances featuring top artists from around the world. There will be food vendors, merchandise, and more!",
    date: "2023-10-15",
    time: "7:00 PM",
    location: {
      name: "Central Park",
      address: "123 Park Ave",
      city: "San Francisco",
      state: "CA",
      coordinates: {
        lat: 37.7749,
        lng: -122.4194
      }
    },
    price: 59,
    category: "Music",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    hostId: "user123",
    hostName: "Event Productions Inc."
  },
  {
    id: "evt002",
    title: "Tech Innovation Summit",
    description: "Explore the latest technological innovations and network with industry leaders and developers. Workshops, keynotes, and networking sessions included.",
    date: "2023-11-05",
    time: "9:00 AM",
    location: {
      name: "Tech Convention Center",
      address: "456 Innovation Blvd",
      city: "Austin",
      state: "TX",
      coordinates: {
        lat: 30.2672,
        lng: -97.7431
      }
    },
    price: "Free",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    hostId: "user456",
    hostName: "TechHub Austin"
  },
  {
    id: "evt003",
    title: "International Food Festival",
    description: "Taste delicious cuisines from around the world, with chef demonstrations and food competitions. Over 30 food vendors will be present.",
    date: "2023-12-10",
    time: "12:00 PM",
    location: {
      name: "Downtown Plaza",
      address: "789 Main St",
      city: "Chicago",
      state: "IL",
      coordinates: {
        lat: 41.8781,
        lng: -87.6298
      }
    },
    price: 25,
    category: "Food",
    image: "https://images.unsplash.com/photo-1470753937643-efeb931202a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    hostId: "user789",
    hostName: "Global Cuisines Association"
  },
  {
    id: "evt004",
    title: "Charity 5K Run",
    description: "Run for a cause! All proceeds go to supporting local homeless shelters. Participants will receive a t-shirt and medal.",
    date: "2023-10-22",
    time: "8:00 AM",
    location: {
      name: "Riverside Park",
      address: "321 River Rd",
      city: "Boston",
      state: "MA",
      coordinates: {
        lat: 42.3601,
        lng: -71.0589
      }
    },
    price: 35,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1509649547310-bf692a86dece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    hostId: "user101",
    hostName: "CommunityCare Foundation"
  },
  {
    id: "evt005",
    title: "Art Exhibition: Modern Perspectives",
    description: "Featuring works from emerging artists exploring contemporary themes and techniques. Gallery talks and artist meet-and-greets included.",
    date: "2023-11-15",
    time: "6:30 PM",
    location: {
      name: "Contemporary Art Museum",
      address: "555 Gallery Way",
      city: "New York",
      state: "NY",
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    },
    price: 15,
    category: "Arts",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    hostId: "user202",
    hostName: "Arts Collective NYC"
  },
  {
    id: "evt006",
    title: "Business Networking Mixer",
    description: "Connect with professionals from various industries in a relaxed setting. Complimentary appetizers and cash bar available.",
    date: "2023-10-30",
    time: "5:00 PM",
    location: {
      name: "Grand Hotel Lounge",
      address: "888 Business Ave",
      city: "Seattle",
      state: "WA",
      coordinates: {
        lat: 47.6062,
        lng: -122.3321
      }
    },
    price: 10,
    category: "Business",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    hostId: "user303",
    hostName: "Seattle Business Network"
  },
  {
    id: "evt007",
    title: "Outdoor Yoga Session",
    description: "Join our certified instructors for a rejuvenating yoga session in the park. All skill levels welcome. Please bring your own mat.",
    date: "2023-10-18",
    time: "9:00 AM",
    location: {
      name: "Sunrise Park",
      address: "777 Wellness Rd",
      city: "Denver",
      state: "CO",
      coordinates: {
        lat: 39.7392,
        lng: -104.9903
      }
    },
    price: "Free",
    category: "Health",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    hostId: "user404",
    hostName: "Denver Wellness Community"
  },
  {
    id: "evt008",
    title: "Family Fun Day",
    description: "A day of activities for the whole family including games, rides, face painting, and food. Fun for all ages!",
    date: "2023-11-20",
    time: "10:00 AM",
    location: {
      name: "Community Recreation Center",
      address: "444 Family Ln",
      city: "Atlanta",
      state: "GA",
      coordinates: {
        lat: 33.7490,
        lng: -84.3880
      }
    },
    price: 5,
    category: "Family",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    hostId: "user505",
    hostName: "Atlanta Family Association"
  }
];

export const getEvents = () => {
  return mockEvents;
};

export const getEventById = (id: string) => {
  return mockEvents.find(event => event.id === id);
};

export const getEventsByCategory = (category: string) => {
  return category === "All" 
    ? mockEvents 
    : mockEvents.filter(event => event.category === category);
};

export const getEventsByLocation = (lat: number, lng: number, radiusInKm: number) => {
  // Simple distance calculation (would be more sophisticated in a real app)
  return mockEvents.filter(event => {
    const eventLat = event.location.coordinates.lat;
    const eventLng = event.location.coordinates.lng;
    
    // Rough distance calculation (not accounting for Earth's curvature)
    const distance = Math.sqrt(
      Math.pow(lat - eventLat, 2) + 
      Math.pow(lng - eventLng, 2)
    ) * 111; // 1 degree is roughly 111km
    
    return distance <= radiusInKm;
  });
};

export const addEvent = (event: Omit<Event, "id">) => {
  const newEvent = {
    ...event,
    id: `evt${mockEvents.length + 1}`.padStart(6, '0')
  };
  mockEvents.push(newEvent);
  return newEvent;
};
