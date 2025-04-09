
import PageLayout from "@/components/layout/PageLayout";
import { CalendarCheck, Globe, Map, Users } from "lucide-react";

const About = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-purple-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EventLocator</h1>
            <p className="text-xl text-purple-100">
              Discover who we are and our mission to connect communities through local events.
            </p>
          </div>
        </div>
        <div className="bg-white w-full h-16 md:h-24 rounded-t-[50%]"></div>
      </div>

      {/* Our Story */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                EventLocator was founded in 2023 with a simple mission: to help people discover meaningful events happening around them and to provide event organizers with a platform to reach their local audience effectively.
              </p>
              <p className="mb-4">
                Our journey began when a group of friends realized how difficult it was to find out about interesting local events. Despite living in vibrant communities, we often missed out on experiences that were happening just around the corner. We decided to solve this problem not just for ourselves, but for everyone.
              </p>
              <p>
                Today, EventLocator connects thousands of people with local experiences that enrich their lives, while helping event organizers to grow their attendance and build thriving communities around shared interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Mission</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 rounded-full p-5 mb-4">
                  <Map className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Discover Local</h3>
                <p className="text-gray-600">
                  We're committed to helping people discover and engage with events that are happening in their local communities, fostering connections that might otherwise never happen.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 rounded-full p-5 mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Build Community</h3>
                <p className="text-gray-600">
                  We believe that shared experiences create stronger communities. Our platform helps bring people together around common interests and passions.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 rounded-full p-5 mb-4">
                  <CalendarCheck className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Empower Hosts</h3>
                <p className="text-gray-600">
                  We provide event organizers with the tools and audience they need to create successful events, helping them focus on what matters most - creating amazing experiences.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 rounded-full p-5 mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect Globally</h3>
                <p className="text-gray-600">
                  While our focus is on local connections, our platform spans the globe, allowing travelers to discover unique experiences wherever they may be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Emma Johnson",
                  role: "Founder & CEO",
                  image: "https://randomuser.me/api/portraits/women/44.jpg"
                },
                {
                  name: "Michael Chen",
                  role: "Co-Founder & CTO",
                  image: "https://randomuser.me/api/portraits/men/32.jpg"
                },
                {
                  name: "Sarah Williams",
                  role: "Head of Marketing",
                  image: "https://randomuser.me/api/portraits/women/68.jpg"
                },
                {
                  name: "David Kim",
                  role: "Lead Developer",
                  image: "https://randomuser.me/api/portraits/men/75.jpg"
                }
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Our Values</h2>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Community First</h3>
                <p className="text-purple-100">
                  We believe in the power of community and prioritize creating tools that bring people together in meaningful ways.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Accessibility</h3>
                <p className="text-purple-100">
                  We're committed to making events discoverable and accessible to everyone, regardless of background or ability.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-purple-100">
                  We continuously strive to improve our platform with innovative features that enhance the experience for both hosts and attendees.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Transparency</h3>
                <p className="text-purple-100">
                  We believe in being transparent with our users about how our platform works and how we use their data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
