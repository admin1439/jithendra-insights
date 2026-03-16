import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink, Code, Database, Shield, Zap, Star } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate();

  const skills = [
    { category: 'Programming Languages', items: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'Kotlin', level: 75 }
    ]},
    { category: 'Web Development', items: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'React', level: 90 },
      { name: 'Spring Boot', level: 80 },
      { name: 'Servlets/JSP', level: 85 }
    ]},
    { category: 'Database', items: [
      { name: 'MySQL', level: 88 },
      { name: 'JDBC', level: 85 }
    ]},
    { category: 'Cybersecurity Tools', items: [
      { name: 'Nmap', level: 80 },
      { name: 'Wireshark', level: 75 },
      { name: 'Kali Linux', level: 82 },
      { name: 'Ettercap', level: 70 }
    ]}
  ];

  const projects = [
    {
      id: 'airline-reservation',
      title: 'Airline Reservation System',
      description: 'A comprehensive system that allows users to book flights, check seat availability, manage passenger details, and cancel bookings with an intuitive interface.',
      tech: ['Java', 'MySQL', 'HTML', 'CSS', 'Servlets'],
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      id: 'banking-system',
      title: 'Banking Management System',
      description: 'A secure banking application that manages bank accounts, deposits, withdrawals, balance checking, and transaction history with robust security features.',
      tech: ['Java', 'JDBC', 'MySQL', 'JSP'],
      gradient: 'from-green-600 to-blue-600'
    },
    {
      id: 'cortex-ai',
      title: 'Cortex AI Assistant',
      description: 'An intelligent AI assistant similar to ChatGPT that provides intelligent responses and interacts with users through an intuitive chat interface.',
      tech: ['AI/LLM', 'Modern UI', 'Real-time Chat'],
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  const certifications = [
    { name: 'Java Programming', issuer: 'Oracle', year: 2023, verified: true },
    { name: 'Web Development', issuer: 'Coursera', year: 2023, verified: true },
    { name: 'Cybersecurity Fundamentals', issuer: 'Cisco', year: 2023, verified: true },
    { name: 'Database Management', issuer: 'MySQL', year: 2024, verified: true }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 max-w-4xl mx-auto px-6"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 glow-text"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            JITHENDRA
          </motion.h1>
          
          <div className="h-20 mb-8">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'AI Enthusiast',
                2000,
                'Cybersecurity Learner',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-2xl md:text-4xl text-primary-glow font-semibold"
              repeat={Infinity}
            />
          </div>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Passionate Computer Science student crafting innovative solutions through code, 
            exploring the frontiers of AI, and securing digital landscapes with cutting-edge cybersecurity practices.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Button 
              onClick={() => scrollToSection('projects')}
              className="glow-border bg-primary/20 hover:bg-primary/30 text-primary border-primary px-8 py-3"
            >
              <Code className="mr-2 h-4 w-4" />
              View Projects
            </Button>
            <Button 
              variant="outline" 
              className="glow-border border-primary hover:bg-primary/20 px-8 py-3"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="glow-border border-secondary hover:bg-secondary/20 px-8 py-3"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glow-text">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full glow-card p-1">
                    <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                      <div className="text-6xl">👨‍💻</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate Computer Science student with an insatiable curiosity for technology and innovation. 
                  My journey in the digital realm spans across multiple domains, each offering unique challenges and opportunities for growth.
                </p>
                
                <div className="grid gap-4">
                  <Card className="glow-card bg-card/50 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                        <Code className="h-5 w-5" />
                        Full Stack Development
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Crafting end-to-end solutions with modern web technologies, from responsive frontends to robust backend systems.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glow-card bg-card/50 border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-secondary">
                        <Zap className="h-5 w-5" />
                        Artificial Intelligence
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Exploring machine learning algorithms and AI applications to solve real-world problems with intelligent solutions.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glow-card bg-card/50 border-accent/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-accent">
                        <Shield className="h-5 w-5" />
                        Cybersecurity
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learning to protect digital assets and understanding security vulnerabilities to build safer applications.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Education & Goals</h3>
                  <p className="text-muted-foreground">
                    Currently pursuing Computer Science with a focus on building real-world projects that make a difference. 
                    My goal is to contribute to innovative technologies while continuously learning and adapting to the ever-evolving tech landscape.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glow-text">
              Skills & Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="glow-card bg-card/50 border-primary/20 h-full">
                    <CardHeader>
                      <CardTitle className="text-primary">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.items.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glow-text">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <Card className="glow-card bg-card/50 border-primary/20 h-full overflow-hidden group-hover:border-primary/50 transition-all duration-300">
                    <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <Database className="h-8 w-8" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-primary group-hover:text-primary-glow transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-md border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button 
                        className="w-full glow-border bg-primary/20 hover:bg-primary/30 text-primary border-primary"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glow-text">
              Certifications
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="glow-card bg-card/50 border-primary/20 h-full text-center">
                    <CardHeader className="pb-2">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                        <Star className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-sm text-primary">{cert.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">{cert.year}</p>
                      {cert.verified && (
                        <div className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded-md">
                          <Star className="h-3 w-3" />
                          Verified
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 glow-text">
              Get In Touch
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glow-card bg-card/50 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Contact Form</CardTitle>
                    <CardDescription>Send me a message and I'll get back to you!</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="glow-border bg-background/50"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="glow-border bg-background/50"
                    />
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="glow-border bg-background/50 min-h-[100px]"
                    />
                    <Button className="w-full glow-border bg-primary/20 hover:bg-primary/30 text-primary border-primary">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Connect With Me</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:jithendra127@gmail.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      jithendra127@gmail.com
                    </a>
                    <a
                      href="https://github.com/GALIJITHENDRASAICHANDRABARADVAJ"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      github.com/GALIJITHENDRASAICHANDRABARADVAJ
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jithendra-g-b3834628b/"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      linkedin.com/in/jithendra
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      India
                    </div>
                  </div>
                </div>
                
                <Card className="glow-card bg-card/50 border-secondary/20">
                  <CardHeader>
                    <CardTitle className="text-secondary">Let's Build Something Amazing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      I'm always interested in new opportunities, collaborations, and innovative projects. 
                      Whether you have a project idea, want to discuss technology, or just say hello, I'd love to hear from you!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Jithendra. Built with passion using React, TypeScript, and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;