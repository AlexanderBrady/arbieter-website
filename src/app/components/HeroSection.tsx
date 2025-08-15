import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Trusted by industry leaders
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Transforming Construction, Real Estate & Tech with{' '}
              <span className="text-primary">AI Solutions</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We deliver cutting-edge AI integrations and custom development solutions 
              that streamline operations, reduce costs, and accelerate growth for 
              forward-thinking businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="text-base px-8"
                onClick={() => window.location.hash = 'contact'}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8"
                onClick={() => window.location.hash = 'demo'}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative lg:ml-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1678344647612-29de50226436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NTUwMjM4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern construction and technology"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
              <div className="text-sm font-medium">AI Powered</div>
              <div className="text-xs opacity-90">Solutions</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background border rounded-lg p-4 shadow-lg">
              <div className="text-sm font-medium">99.9% Uptime</div>
              <div className="text-xs text-muted-foreground">Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}