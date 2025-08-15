import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Globe, 
  Shield,
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Calendar,
  TrendingUp
} from 'lucide-react';

export function DevelopmentPage() {
  const services = [
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Responsive, scalable web applications built with modern frameworks and best practices.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      features: ['Mobile-responsive design', 'SEO optimization', 'Performance optimization', 'Security hardening'],
      price: 'Starting at $15,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android with exceptional user experience.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      features: ['Cross-platform compatibility', 'Offline functionality', 'Push notifications', 'App store optimization'],
      price: 'Starting at $25,000'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services for modern, distributed applications.',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      features: ['Auto-scaling infrastructure', 'High availability', 'Disaster recovery', 'Cost optimization'],
      price: 'Starting at $20,000'
    },
    {
      icon: Database,
      title: 'API Development',
      description: 'Robust, secure APIs and microservices architecture for seamless system integration.',
      technologies: ['REST', 'GraphQL', 'gRPC', 'WebSockets'],
      features: ['API documentation', 'Rate limiting', 'Authentication', 'Real-time capabilities'],
      price: 'Starting at $12,000'
    }
  ];

  const portfolio = [
    {
      title: 'Construction Management Platform',
      category: 'Construction',
      description: 'Full-stack project management solution with real-time tracking and AI-powered scheduling.',
      image: 'https://images.unsplash.com/photo-1678344647612-29de50226436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTUwMjM4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      results: ['40% reduction in project delays', '25% cost savings', '98% user satisfaction']
    },
    {
      title: 'Real Estate Analytics Dashboard',
      category: 'Real Estate',
      description: 'Comprehensive analytics platform for property management and investment analysis.',
      image: 'https://images.unsplash.com/photo-1720442617080-c25f9955194c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU1MDkwNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      results: ['60% faster decision making', '35% ROI improvement', '99.9% uptime']
    },
    {
      title: 'Tech Startup MVP',
      category: 'Technology',
      description: 'Rapid prototyping and MVP development for a SaaS platform with AI capabilities.',
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NTUwNjY5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Next.js', 'Express', 'Redis', 'Stripe'],
      results: ['3 months to market', '$1M funding raised', '10K+ users in beta']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create detailed technical specifications.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'UI/UX design and system architecture planning with scalability and security in mind.',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing, code reviews, and quality assurance.',
      duration: '6-12 weeks'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Production deployment, performance optimization, and ongoing maintenance support.',
      duration: 'Ongoing'
    }
  ];

  const testimonials = [
    {
      name: 'David Miller',
      role: 'CTO, BuildFast Construction',
      content: 'The development team delivered a robust platform that transformed our project management. Excellent code quality and attention to detail.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'CEO, PropTech Innovations',
      content: 'Professional, efficient, and results-driven. They understood our vision and delivered beyond expectations.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Custom Development
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Building Tomorrow's Software Today
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From concept to deployment, we create custom software solutions 
                that drive business growth. Specializing in web applications, 
                mobile apps, and cloud-native architectures for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base px-8">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NTUwNjY5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Software Development Team"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Development Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive software development solutions tailored to your business needs 
              and built with cutting-edge technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">{service.price}</Badge>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Showcase of successful projects across different industries, 
              highlighting our technical expertise and business impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-background group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge>{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm">
                          <TrendingUp className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology that ensures quality delivery, clear communication, 
              and successful project outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                <Badge variant="outline" className="text-xs">
                  <Calendar className="h-3 w-3 mr-1" />
                  {step.duration}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Client Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-background">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-primary/5 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your development needs and create a solution that 
              drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8">
                Get Project Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}