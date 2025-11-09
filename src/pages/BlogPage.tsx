import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Shield, Lock, AlertTriangle, TrendingUp } from "lucide-react";
import blogHero from "@/assets/blog-hero.jpg";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Zero Trust Architecture in 2025",
      excerpt: "Exploring how Zero Trust security models are reshaping enterprise cybersecurity strategies and why traditional perimeter-based defenses are becoming obsolete.",
      category: "Security Strategy",
      date: "2025-03-15",
      readTime: "8 min read",
      icon: Shield,
      featured: true,
    },
    {
      id: 2,
      title: "AI-Powered Threat Detection: Separating Hype from Reality",
      excerpt: "An in-depth look at how artificial intelligence and machine learning are transforming threat detection and response capabilities in modern SOCs.",
      category: "AI & Security",
      date: "2025-03-10",
      readTime: "6 min read",
      icon: TrendingUp,
      featured: true,
    },
    {
      id: 3,
      title: "Ransomware Attack Patterns: 2025 Trends and Prevention",
      excerpt: "Analysis of emerging ransomware tactics and practical strategies organizations can implement to protect critical data and maintain business continuity.",
      category: "Threat Intelligence",
      date: "2025-03-05",
      readTime: "10 min read",
      icon: AlertTriangle,
      featured: false,
    },
    {
      id: 4,
      title: "Building a Human Firewall: Security Awareness That Works",
      excerpt: "Beyond checkbox training - how to create a security-conscious culture where employees become your strongest defense against cyber threats.",
      category: "Training",
      date: "2025-02-28",
      readTime: "7 min read",
      icon: Shield,
      featured: false,
    },
    {
      id: 5,
      title: "Compliance Automation: Streamlining SOC 2 and ISO 27001",
      excerpt: "Practical approaches to automating compliance workflows, reducing audit preparation time, and maintaining continuous compliance posture.",
      category: "Compliance",
      date: "2025-02-20",
      readTime: "9 min read",
      icon: Lock,
      featured: false,
    },
    {
      id: 6,
      title: "The CISO's Guide to Board-Level Security Reporting",
      excerpt: "How to communicate cyber risk effectively to executives and board members, translating technical threats into business impact.",
      category: "Leadership",
      date: "2025-02-15",
      readTime: "6 min read",
      icon: TrendingUp,
      featured: false,
    },
  ];

  const categories = ["All", "Security Strategy", "AI & Security", "Threat Intelligence", "Training", "Compliance", "Leadership"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={blogHero} 
            alt="Cybersecurity Insights" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/70" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 text-base px-4 py-1">Insights & Resources</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Cybersecurity Intelligence Hub
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights, industry trends, and best practices from our security professionals
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="hover:scale-105 transition-transform"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => {
              const IconComponent = post.icon;
              return (
                <Card 
                  key={post.id} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Latest Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post) => {
              const IconComponent = post.icon;
              return (
                <Card 
                  key={post.id} 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-3">Stay Ahead of Cyber Threats</CardTitle>
              <CardDescription className="text-base max-w-2xl mx-auto">
                Subscribe to our newsletter for weekly cybersecurity insights, threat intelligence updates, and expert analysis delivered to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-md border border-input bg-background text-foreground w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" className="w-full sm:w-auto">
                Subscribe Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
