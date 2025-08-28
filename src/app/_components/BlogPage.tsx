"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  Calendar,
  User,
  Clock,
  TrendingUp,
  Bot,
  Building2,
  Code,
  Lightbulb
} from 'lucide-react';

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'business', name: 'Business' },
    { id: 'development', name: 'Development' },
    { id: 'industry', name: 'Industry Insights' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'How AI Chatbots Are Revolutionising Lead Generation in 2024',
      summary: 'Discover how businesses are using AI-powered chatbots to capture and qualify leads 24/7, with real-world examples and implementation strategies.',
      category: 'ai',
      categoryName: 'AI & ML',
      author: 'Sarah Johnson',
      date: '15 Jan 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxBSSUyMGNoYXRib3QlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1MDkyMTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
      icon: Bot
    },
    {
      id: 2,
      title: 'The ROI of AI: Measuring Real Business Impact',
      summary: 'Learn how to calculate and demonstrate the return on investment of AI implementations, with metrics and KPIs that matter to business leaders.',
      category: 'business',
      categoryName: 'Business',
      author: 'Michael Chen',
      date: '12 Jan 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBtZXRyaWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1NTAyMjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
      icon: TrendingUp
    },
    {
      id: 3,
      title: 'Construction Tech: AI & Automation Solutions for Project Management',
      summary: 'Explore how construction companies are using AI for scheduling, resource allocation, and predictive maintenance to reduce delays and costs.',
      category: 'industry',
      categoryName: 'Industry Insights',
      author: 'Emma Thompson',
      date: '10 Jan 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1678344647612-29de50226436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTUwMjM4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
      icon: Building2
    },
    {
      id: 4,
      title: 'Building Custom AI & Automation Solutions: A Developer\'s Guide',
      summary: 'Technical insights into developing bespoke AI applications, from choosing the right frameworks to deployment best practices.',
      category: 'development',
      categoryName: 'Development',
      author: 'David Kumar',
      date: '8 Jan 2025',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NTUwNjY5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
      icon: Code
    },
    {
      id: 5,
      title: 'AI in Real Estate: Transforming Property Investment Decisions',
      summary: 'How AI-powered analytics are helping property investors make smarter decisions with market predictions and automated valuation models.',
      category: 'industry',
      categoryName: 'Industry Insights', 
      author: 'Lisa Rodriguez',
      date: '5 Jan 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1720442617080-c25f9955194c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU1MDkwNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
      icon: Building2
    },
    {
      id: 6,
      title: 'The Future of Internal AI Copilots in Business Operations',
      summary: 'Predictions and trends for AI assistants that help teams with data analysis, reporting, and workflow automation.',
      category: 'ai',
      categoryName: 'AI & ML',
      author: 'James Wilson',
      date: '3 Jan 2025',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1645459994498-44bb95c87b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVjaCUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NTA5MjE1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
      icon: Lightbulb
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = selectedFilter === 'all' || post.category === selectedFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Blog
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Insights & Updates
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Stay informed with the latest developments in AI, business automation, and industry-specific solutions. Expert insights to help you make informed decisions about technology adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-muted/30 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 hover:border-primary/50 focus:border-primary transition-colors duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground mr-2" />
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter.id)}
                  className="text-sm hover:scale-105 transition-all duration-200"
                >
                  {filter.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedFilter === 'all' && !searchQuery && (
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <Badge variant="outline" className="mb-4">
                    {featuredPost.categoryName}
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 hover:text-primary transition-colors duration-200">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.summary}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="hover:scale-105 transition-all duration-200">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {searchQuery ? `Search Results (${filteredPosts.length})` : 
               selectedFilter === 'all' ? 'Latest Articles' : 
               `${filters.find(f => f.id === selectedFilter)?.name} Articles`}
            </h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No articles found matching your criteria.</p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('all');
                }}
                className="hover:scale-105 transition-all duration-200"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const IconComponent = post.icon;
                return (
                  <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{post.categoryName}</Badge>
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <IconComponent className="h-4 w-4 text-primary mr-2" />
                        <Badge variant="outline" className="text-xs">{post.categoryName}</Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-3">
                        {post.summary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <User className="h-3 w-3 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="mr-3">{post.date}</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest AI and business automation insights delivered to your inbox. No spam, just valuable content to help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="hover:border-primary/50 focus:border-primary transition-colors duration-200"
              />
              <Button className="hover:scale-105 transition-all duration-200">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}