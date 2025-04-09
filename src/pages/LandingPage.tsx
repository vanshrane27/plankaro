
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import { MapPin, Calendar, Users, Clock, Sparkles, Star } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const LandingPage = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Discover Local Events <span className="block mt-2">Around You</span>
              </h1>
              <p className="text-lg md:text-xl text-purple-100">
                Find and join exciting events nearby or promote your own events to the local community.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {isAuthenticated ? (
                  <Link to="/explore">
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                      Explore Events
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/auth">
                      <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                        Get Started
                      </Button>
                    </Link>
                    <Link to="/explore">
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                        Browse Events
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="People at an event" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-16 md:h-24 rounded-t-[50%]"></div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How EventLocator Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy to discover, join, and create events in your local area,
              connecting communities through shared experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Discover Nearby</h3>
              <p className="text-gray-600">
                Find events happening around you with our location-based search.
                Filter by distance, category, or date.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Join & Book</h3>
              <p className="text-gray-600">
                Book tickets for paid events or RSVP to free ones with just a few clicks.
                Secure, fast, and convenient.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Host Events</h3>
              <p className="text-gray-600">
                Create and promote your own events, set pricing, manage attendees,
                and grow your community.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Event Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From live music to professional networking, find events that match your interests.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Music", icon: "🎵" },
              { name: "Sports", icon: "🏆" },
              { name: "Arts", icon: "🎨" },
              { name: "Food", icon: "🍕" },
              { name: "Business", icon: "💼" },
              { name: "Education", icon: "📚" },
              { name: "Outdoors", icon: "🌳" },
              { name: "Networking", icon: "🤝" },
              { name: "Tech", icon: "💻" },
              { name: "Health", icon: "🧘" },
              { name: "Family", icon: "👨‍👩‍👧‍👦" },
              { name: "Charity", icon: "❤️" }
            ].map((category, index) => (
              <Link 
                key={index} 
                to={isAuthenticated ? "/explore" : "/auth"}
                className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-medium text-gray-800">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Events
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out these popular upcoming events in various locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                  alt="Music festival" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-xs">
                  FEATURED
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>Oct 15, 2023</span>
                  <span className="mx-1">•</span>
                  <Clock className="h-4 w-4" />
                  <span>7:00 PM</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Summer Music Festival</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Join us for a night of amazing live performances featuring top artists from around the world.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500 ml-1">San Francisco, CA</span>
                  </div>
                  <span className="text-purple-600 font-semibold">$59</span>
                </div>
              </div>
            </Card>

            {/* Event 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                  alt="Tech conference" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs">
                  FREE
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>Nov 5, 2023</span>
                  <span className="mx-1">•</span>
                  <Clock className="h-4 w-4" />
                  <span>9:00 AM</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tech Innovation Summit</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Explore the latest technological innovations and network with industry leaders and developers.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500 ml-1">Austin, TX</span>
                  </div>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>
              </div>
            </Card>

            {/* Event 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1470753937643-efeb931202a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                  alt="Food festival" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>Dec 10, 2023</span>
                  <span className="mx-1">•</span>
                  <Clock className="h-4 w-4" />
                  <span>12:00 PM</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">International Food Festival</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Taste delicious cuisines from around the world, with chef demonstrations and food competitions.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500 ml-1">Chicago, IL</span>
                  </div>
                  <span className="text-purple-600 font-semibold">$25</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to={isAuthenticated ? "/explore" : "/auth"}>
              <Button className="bg-purple-600 hover:bg-purple-700">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from event hosts and attendees who use EventLocator.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-center">
                "As an event host, EventLocator has significantly increased my attendance rates. The location-based discovery helps me reach the right audience."
              </p>
              <div className="flex items-center justify-center">
                <div>
                  <p className="font-semibold text-center">Michael Johnson</p>
                  <p className="text-sm text-gray-500 text-center">Event Organizer</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-center">
                "I've discovered so many amazing events in my area that I would have never found otherwise. The booking process is also super easy!"
              </p>
              <div className="flex items-center justify-center">
                <div>
                  <p className="font-semibold text-center">Sarah Williams</p>
                  <p className="text-sm text-gray-500 text-center">Regular Attendee</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-center">
                "The platform made it easy to set up and manage my local charity event. I especially love the detailed analytics on attendance."
              </p>
              <div className="flex items-center justify-center">
                <div>
                  <p className="font-semibold text-center">David Chen</p>
                  <p className="text-sm text-gray-500 text-center">Charity Organizer</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discover or Host Events?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our community of event hosts and attendees today and start connecting with local experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={isAuthenticated ? "/explore" : "/auth"}>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold">
                {isAuthenticated ? "Explore Events" : "Sign Up Now"}
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 border-2 font-semibold">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LandingPage;
