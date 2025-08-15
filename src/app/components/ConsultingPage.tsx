import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Search, 
  Map, 
  Route,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  BarChart3,
  Target,
  Clock,
  TrendingUp,
  Users,
  Lightbulb
} from 'lucide-react';

export function ConsultingPage() {
  const consultingProcess = [
    {
      step: '01',
      title: 'Discovery Session',
      description: 'Understand your challenges and goals.',
      details: 'We begin with an in-depth analysis of your current workflows, pain points, and business objectives. Through detailed discussions with your team, we identify specific areas where AI can create the most impact.',
      icon: Search,
      outcomes: [
        'Clear understanding of business challenges',
        'Identified workflow inefficiencies',
        'Defined success metrics and KPIs'
      ]
    },
    {
      step: '02',
      title: 'Solution Mapping',
      description: 'Identify AI opportunities and practical integrations.',
      details: 'Our experts map out specific AI solutions that align with your business needs. We evaluate feasibility, potential ROI, and integration requirements to ensure practical implementation.',
      icon: Map,
      outcomes: [
        'Tailored AI solution recommendations',
        'Integration complexity assessment',
        'Risk and feasibility analysis'
      ]
    },
    {
      step: '03',
      title: 'Implementation Roadmap',
      description: 'Provide a clear plan, timeline, and projected ROI.',
      details: 'We deliver a comprehensive roadmap with phased implementation, realistic timelines, budget estimates, and projected return on investment to guide your AI transformation journey.',
      icon: Route,
      outcomes: [
        'Detailed implementation timeline',
        'Budget and resource planning',
        'Clear ROI projections and milestones'
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Our consulting approach has delivered an average 300% ROI for clients within the first year.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work directly with AI specialists who have implemented solutions across multiple industries.'
    },
    {
      icon: Clock,
      title: 'Fast Results',
      description: 'From initial consultation to actionable roadmap in just 2-3 weeks.'
    },
    {
      icon: Target,
      title: 'Tailored Solutions',
      description: 'Every recommendation is specifically designed for your business, industry, and team.'
    }
  ];

  const successStories = [
    {
      company: 'BuildTech Solutions',
      industry: 'Construction',
      challenge: 'Manual project scheduling causing delays',
      result: '40% reduction in project delays',
      icon: BarChart3
    },
    {
      company: 'PropertyFlow Investments',
      industry: 'Real Estate', 
      challenge: 'Inefficient property analysis process',
      result: '60% faster decision making',
      icon: TrendingUp
    },
    {
      company: 'Grand Hotels Group',
      industry: 'Hospitality',
      challenge: 'Manual guest service processes',
      result: '50% reduction in admin time',
      icon: Users
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
                AI Consulting
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                AI Consulting That Actually Delivers
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We work with you to identify the AI solutions your business actually needs — not just what's trendy. From lead-chasing chatbots to internal copilots and process automation, our consulting process starts with understanding your workflows and ends with actionable, measurable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-base px-8 hover:scale-105 transition-all duration-200"
                  onClick={() => window.location.hash = 'contact'}
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base px-8 hover:scale-105 transition-all duration-200"
                  onClick={() => window.location.hash = 'case-studies'}
                >
                  View Success Stories
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc1NTA5MjE2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business consulting meeting"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Process Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Our Consulting Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A structured approach to identifying and implementing AI solutions that deliver real business value.
            </p>
          </div>

          <div className="space-y-12">
            {consultingProcess.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-transparent">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-2">
                            {step.step}
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">{step.description}</p>
                      <p className="text-sm mb-6">{step.details}</p>
                      <div>
                        <h4 className="font-semibold mb-3">Key Outcomes:</h4>
                        <ul className="space-y-2">
                          {step.outcomes.map((outcome, outcomeIndex) => (
                            <li key={outcomeIndex} className="flex items-start text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="relative h-80 lg:h-96">
                      <ImageWithFallback
                        src={index === 0 
                          ? "https://images.unsplash.com/photo-1745970649957-b4b1f7fde4ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya3Nob3AlMjBjb2xsYWJvcmF0aW9uJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzU1MTA0ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          : index === 1
                          ? "https://images.unsplash.com/photo-1587606690900-6d7ebb2c9cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya3Nob3AlMjBjb2xsYWJvcmF0aW9uJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzU1MTA0ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          : "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcm9hZG1hcCUyMHBsYW5uaW5nJTIwd2hpdGVib2FyZHxlbnwxfHx8fDE3NTUxMDQ4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        }
                        alt={
                          index === 0 
                            ? "Professional business strategy meeting with team collaboration"
                            : index === 1
                            ? "Team workshop session for AI solution mapping and planning"
                            : "Strategic roadmap planning session with technology implementation timeline"
                        }
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Why Choose Arbieter Consulting
            </h2>
            <p className="text-lg text-muted-foreground">
              Our approach combines technical expertise with practical business understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center p-6 bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Client Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Real businesses achieving measurable improvements through our consulting process.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => {
              const IconComponent = story.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="mb-3 text-xs">{story.industry}</Badge>
                  <h3 className="font-semibold mb-2">{story.company}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Challenge:</strong> {story.challenge}
                  </p>
                  <div className="text-lg font-bold text-primary">{story.result}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-background rounded-2xl p-12 shadow-lg">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start with a comprehensive consultation to identify exactly where AI can create the most value for your business. No obligations, just expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-base px-12 py-6 hover:scale-105 transition-all duration-200"
                onClick={() => window.location.hash = 'contact'}
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8 py-6 hover:scale-105 transition-all duration-200"
                onClick={() => window.location.hash = 'demo'}
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}