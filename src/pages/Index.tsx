import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/9954b1ea-6797-4053-9fe5-62ace47c3689.png" 
                alt="MIRA2223.FUN Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Hello, I'm <span className="text-primary">Mira</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Creating Simple, Beautiful Projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover-scale">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a dedicated developer with a passion for creating innovative solutions that make a difference. 
                  With expertise in modern web technologies, I focus on building applications that are both 
                  beautiful and functional.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open source 
                  projects, or sharing my knowledge with the developer community.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">AWS</Badge>
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
            
            {/* Words of Wisdom integrated into About section */}
            <div className="mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">Words of Wisdom</h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="group hover-scale bg-card border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <blockquote className="text-lg text-foreground mb-4 italic">
                      "If you cringe at your old code, you're improving!"
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Tsoding</cite>
                  </CardContent>
                </Card>
                
                <Card className="group hover-scale bg-card border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <blockquote className="text-lg text-foreground mb-4 italic">
                      "If your code runs 24/7, you shouldn't."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- LiveOverflow</cite>
                  </CardContent>
                </Card>
                
                <Card className="group hover-scale bg-card border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <blockquote className="text-lg text-foreground mb-4 italic">
                      "Great ideas grow offline. Go touch some grass."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- tsoding</cite>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="group hover-scale bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-4xl">🚀</div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Project {project}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">React</Badge>
                      <Badge variant="outline" className="text-xs">API</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and interesting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex justify-center gap-6">
            <Button size="lg" variant="outline" className="hover-scale">
              <Mail className="h-5 w-5 mr-2" />
              Email Me
            </Button>
            <Button size="lg" variant="outline" className="hover-scale">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="hover-scale">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/40 bg-background/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Mira. Built with ❤️ using React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
