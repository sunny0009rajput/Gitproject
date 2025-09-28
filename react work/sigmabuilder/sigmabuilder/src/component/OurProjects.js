import React, { useState } from 'react';
import { MapPin, Calendar, Home, Users, Star, Filter, ChevronRight, Eye, Heart, Share2 } from 'lucide-react';

export default function OurProjects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'luxury', label: 'Luxury Homes' },
    { id: 'apartments', label: 'Apartments' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Sunset Vista Residences',
      category: 'residential',
      location: 'Beverly Hills, CA',
      price: '$2.5M - $4.2M',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=400&fit=crop'
      ],
      bedrooms: '3-5',
      bathrooms: '3-4',
      size: '2,500 - 4,000 sq ft',
      completed: '2024',
      status: 'Completed',
      description: 'Luxurious hillside homes with panoramic city views and modern amenities.',
      features: ['Pool & Spa', 'Smart Home', 'Gourmet Kitchen', 'Private Garden']
    },
    {
      id: 2,
      title: 'Metropolitan Tower',
      category: 'commercial',
      location: 'Downtown LA, CA',
      price: '$850K - $1.8M',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&h=400&fit=crop'
      ],
      bedrooms: '1-3',
      bathrooms: '1-2',
      size: '800 - 2,200 sq ft',
      completed: '2023',
      status: 'Sold Out',
      description: 'Premier urban living in the heart of downtown with world-class amenities.',
      features: ['Rooftop Deck', 'Fitness Center', 'Concierge', '24/7 Security']
    },
    {
      id: 3,
      title: 'Oceanfront Estates',
      category: 'luxury',
      location: 'Malibu, CA',
      price: '$8.5M - $15M',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=400&fit=crop'
      ],
      bedrooms: '5-7',
      bathrooms: '6-8',
      size: '6,000 - 10,000 sq ft',
      completed: '2024',
      status: 'Available',
      description: 'Exclusive beachfront properties with private beach access and infinity pools.',
      features: ['Private Beach', 'Wine Cellar', 'Home Theater', 'Guest House']
    },
    {
      id: 4,
      title: 'Garden Court Apartments',
      category: 'apartments',
      location: 'Santa Monica, CA',
      price: '$450K - $750K',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop'
      ],
      bedrooms: '1-2',
      bathrooms: '1-2',
      size: '650 - 1,200 sq ft',
      completed: '2023',
      status: 'Few Available',
      description: 'Modern apartments with beautiful garden courtyards and coastal proximity.',
      features: ['Garden Views', 'Parking', 'Pet Friendly', 'Near Beach']
    },
    {
      id: 5,
      title: 'Skyline Business Center',
      category: 'commercial',
      location: 'Century City, CA',
      price: '$1.2M - $3.5M',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop'
      ],
      bedrooms: '2-4',
      bathrooms: '2-3',
      size: '1,100 - 2,800 sq ft',
      completed: '2024',
      status: 'Pre-Launch',
      description: 'Premium office condos with stunning city views and executive amenities.',
      features: ['City Views', 'Conference Rooms', 'Valet Parking', 'Executive Lounge']
    },
    {
      id: 6,
      title: 'Heritage Hills',
      category: 'residential',
      location: 'Pasadena, CA',
      price: '$950K - $1.8M',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=400&fit=crop'
      ],
      bedrooms: '3-4',
      bathrooms: '2-3',
      size: '1,800 - 2,800 sq ft',
      completed: '2023',
      status: 'Available',
      description: 'Classic family homes in a peaceful neighborhood with tree-lined streets.',
      features: ['Large Yards', 'Family Rooms', 'Attached Garage', 'Quiet Street']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'Sold Out': return 'bg-red-100 text-red-800';
      case 'Few Available': return 'bg-yellow-100 text-yellow-800';
      case 'Pre-Launch': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto">
              Discover our portfolio of exceptional properties, from luxury estates to modern apartments, each crafted with precision and designed for extraordinary living.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Filter className="w-5 h-5 text-gray-600 mr-3" />
              <span className="text-lg font-semibold text-gray-800">Filter Projects</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">
              Showing <span className="font-bold text-blue-600">{filteredProjects.length}</span> projects
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Gallery */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>

                  {/* Action Buttons */}
                  <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <Share2 className="w-5 h-5 text-gray-600 hover:text-blue-500" />
                    </button>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-lg font-bold text-gray-900">{project.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Property Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    <div className="text-center">
                      <Home className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                      <div className="text-sm text-gray-500">Bedrooms</div>
                      <div className="font-semibold text-gray-900">{project.bedrooms}</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                      <div className="text-sm text-gray-500">Bathrooms</div>
                      <div className="font-semibold text-gray-900">{project.bathrooms}</div>
                    </div>
                    <div className="text-center">
                      <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                      <div className="text-sm text-gray-500">Size</div>
                      <div className="font-semibold text-gray-900 text-xs">{project.size}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Completion Info */}
                  <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Completed: {project.completed}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Eye className="w-4 h-4 mr-2" />
                      <span className="text-sm">View Details</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      View Project
                    </button>
                    <button className="flex-1 border-2 border-blue-500 text-blue-500 py-3 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Perfect Property?</span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
              Explore our exclusive collection of properties and discover your dream home or investment opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule a Viewing
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}