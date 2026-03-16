import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Github, ExternalLink, Play, Code, Database, Users, Shield, Zap, CheckCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectData: Record<string, any> = {
    'airline-reservation': {
      title: 'Airline Reservation System',
      subtitle: 'Full-Stack Flight Booking Platform',
      description: 'A comprehensive airline reservation system that revolutionizes the flight booking experience with intuitive design and robust functionality.',
      longDescription: 'This project represents a complete airline management solution built from the ground up. The system handles complex flight operations, passenger management, and booking workflows with a focus on user experience and system reliability. It demonstrates advanced database design, secure transaction processing, and scalable architecture principles.',
      tech: ['Java', 'MySQL', 'HTML5', 'CSS3', 'Servlets', 'JDBC', 'JavaScript'],
      gradient: 'from-blue-600 to-purple-600',
      problemStatement: 'Traditional airline booking systems often suffer from poor user experience, limited real-time data synchronization, and complex booking processes. The need for a modern, intuitive, and efficient airline reservation system was evident.',
      solution: 'Developed a comprehensive web-based application that streamlines the entire flight booking process, from search to confirmation, while ensuring data consistency and user satisfaction.',
      features: [
        'Real-time flight search and availability checking',
        'Secure passenger registration and profile management',
        'Interactive seat selection with visual seat map',
        'Multiple payment options and secure transactions',
        'Booking confirmation and e-ticket generation',
        'Flight status updates and notifications',
        'Admin dashboard for flight management',
        'Comprehensive booking history and cancellation system'
      ],
      architecture: [
        'Frontend: HTML5, CSS3, JavaScript for responsive UI',
        'Backend: Java Servlets for business logic',
        'Database: MySQL for data persistence',
        'Connection: JDBC for database connectivity',
        'Security: Session management and input validation'
      ],
      workflow: [
        'User searches for flights with preferred criteria',
        'System queries database for available flights',
        'User selects flight and proceeds to booking',
        'Passenger details are collected and validated',
        'Seat selection interface allows choosing preferred seats',
        'Payment processing and booking confirmation',
        'E-ticket generation and email notification'
      ],
      challenges: [
        'Implementing concurrent booking prevention',
        'Ensuring data consistency across multiple transactions',
        'Optimizing database queries for fast search results',
        'Creating intuitive user interface for complex operations'
      ],
      learnings: [
        'Advanced Java web development patterns',
        'Database design and optimization techniques',
        'User experience design principles',
        'Transaction management and data integrity'
      ]
    },
    'banking-system': {
      title: 'Banking Management System',
      subtitle: 'Secure Digital Banking Platform',
      description: 'A robust banking management system that provides secure account management, transaction processing, and comprehensive financial services.',
      longDescription: 'This banking system represents a complete digital banking solution with emphasis on security, reliability, and user experience. The platform handles various banking operations including account management, fund transfers, transaction history, and administrative functions with bank-grade security measures.',
      tech: ['Java', 'JDBC', 'MySQL', 'JSP', 'Servlets', 'HTML5', 'CSS3', 'Bootstrap'],
      gradient: 'from-green-600 to-blue-600',
      problemStatement: 'Traditional banking systems require physical presence for most operations, leading to inconvenience and time consumption. There was a need for a secure, efficient digital banking platform that could handle various banking operations remotely.',
      solution: 'Created a comprehensive web-based banking system that allows customers to perform banking operations securely online while maintaining the highest standards of security and data protection.',
      features: [
        'Secure user authentication and authorization',
        'Account balance inquiry and mini statements',
        'Fund transfer between accounts',
        'Transaction history with detailed filtering',
        'Fixed deposit and recurring deposit management',
        'Loan application and management system',
        'Mobile and email notifications',
        'Admin panel for account management'
      ],
      architecture: [
        'Presentation Layer: JSP pages with Bootstrap styling',
        'Business Layer: Java Servlets for core logic',
        'Data Layer: MySQL database with JDBC connectivity',
        'Security Layer: Encryption and session management',
        'Integration Layer: Email and SMS services'
      ],
      workflow: [
        'Customer logs in with secure credentials',
        'Dashboard displays account summary and recent transactions',
        'User selects desired banking operation',
        'System validates transaction and applies business rules',
        'Database is updated with transaction details',
        'Confirmation and receipt generation',
        'Notification sent to customer'
      ],
      challenges: [
        'Implementing robust security measures',
        'Handling concurrent transactions safely',
        'Ensuring compliance with banking regulations',
        'Creating audit trails for all operations'
      ],
      learnings: [
        'Financial system architecture patterns',
        'Security best practices for sensitive data',
        'Transaction processing and rollback mechanisms',
        'Regulatory compliance in software development'
      ]
    },
    'cortex-ai': {
      title: 'Cortex AI Assistant',
      subtitle: 'Intelligent Conversational AI Platform',
      description: 'An advanced AI assistant that leverages cutting-edge natural language processing to provide intelligent, context-aware responses through an intuitive chat interface.',
      longDescription: 'Cortex AI represents the next generation of conversational AI assistants, built with modern machine learning techniques and a focus on natural, human-like interactions. The system understands context, maintains conversation history, and provides intelligent responses across a wide range of topics and use cases.',
      tech: ['Python', 'TensorFlow', 'Natural Language Processing', 'React', 'Node.js', 'WebSocket', 'MongoDB', 'Docker'],
      gradient: 'from-purple-600 to-pink-600',
      problemStatement: 'Existing AI assistants often lack context awareness, provide generic responses, and fail to maintain meaningful conversations. There was a need for an AI system that could understand nuanced queries and provide personalized, intelligent responses.',
      solution: 'Developed Cortex AI using advanced NLP models and machine learning algorithms to create a conversational AI that understands context, learns from interactions, and provides meaningful assistance across various domains.',
      features: [
        'Advanced natural language understanding',
        'Context-aware conversation handling',
        'Multi-modal input support (text, voice)',
        'Personalized response generation',
        'Real-time conversation processing',
        'Integration with external knowledge bases',
        'Conversation history and analytics',
        'Customizable AI personality and behavior'
      ],
      architecture: [
        'AI Engine: TensorFlow-based neural networks',
        'NLP Pipeline: Text processing and understanding',
        'Frontend: React-based chat interface',
        'Backend: Node.js API with WebSocket support',
        'Database: MongoDB for conversation storage',
        'Deployment: Docker containers with cloud hosting'
      ],
      workflow: [
        'User inputs query through chat interface',
        'NLP pipeline processes and understands the input',
        'Context engine analyzes conversation history',
        'AI model generates appropriate response',
        'Response is formatted and delivered to user',
        'Conversation data is stored for learning',
        'System learns and improves from interactions'
      ],
      challenges: [
        'Training AI models for accurate understanding',
        'Maintaining context across long conversations',
        'Ensuring response quality and relevance',
        'Scaling the system for multiple concurrent users'
      ],
      learnings: [
        'Machine learning model development and training',
        'Natural language processing techniques',
        'Real-time system architecture design',
        'User experience design for AI interfaces'
      ]
    }
  };

  const project = projectData[id || ''];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-primary hover:text-primary-glow"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" className="glow-border border-primary hover:bg-primary/20">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button className="glow-border bg-primary/20 hover:bg-primary/30 text-primary border-primary">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-grid">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`h-64 bg-gradient-to-br ${project.gradient} rounded-2xl mb-8 relative overflow-hidden glow-card`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-4xl md:text-6xl font-bold glow-text mb-2">{project.title}</h1>
                <p className="text-xl">{project.subtitle}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <Card className="glow-card bg-card/50 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Project Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="glow-card bg-card/50 border-secondary/20">
                  <CardHeader>
                    <CardTitle className="text-secondary">Technology Stack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string) => (
                        <Badge key={tech} variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glow-card bg-card/50 border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-accent">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Development Time</span>
                      <span className="text-sm font-medium">3 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Team Size</span>
                      <span className="text-sm font-medium">Solo Project</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Status</span>
                      <span className="text-sm font-medium text-green-400">Completed</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glow-card bg-card/50 border-destructive/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <Shield className="h-5 w-5" />
                    Problem Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.problemStatement}</p>
                </CardContent>
              </Card>
              
              <Card className="glow-card bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Zap className="h-5 w-5" />
                    Solution Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glow-card bg-card/50 border-primary/20 h-full">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{feature}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-secondary">System Architecture</h2>
            <Card className="glow-card bg-card/50 border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Database className="h-5 w-5" />
                  Technical Architecture
                </CardTitle>
                <CardDescription>
                  Detailed breakdown of the system components and their interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.architecture.map((item: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/50"
                    >
                      <Code className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Project Workflow */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-accent">Project Workflow</h2>
            <div className="space-y-6">
              {project.workflow.map((step: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glow-card bg-card/50 border-accent/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <p className="text-muted-foreground">{step}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 glow-text">Project Demonstration</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glow-card bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Play className="h-5 w-5" />
                    Live Demo
                  </CardTitle>
                  <CardDescription>
                    Interactive demonstration of key features
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Play className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Experience the full functionality of {project.title} through our interactive demo.
                  </p>
                  <Button className="w-full glow-border bg-primary/20 hover:bg-primary/30 text-primary border-primary">
                    <Play className="mr-2 h-4 w-4" />
                    Launch Demo
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glow-card bg-card/50 border-secondary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-secondary">
                    <Users className="h-5 w-5" />
                    Screenshots & Gallery
                  </CardTitle>
                  <CardDescription>
                    Visual showcase of the application interface
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore the user interface and key features through our comprehensive screenshot gallery.
                  </p>
                  <Button variant="outline" className="w-full glow-border border-secondary hover:bg-secondary/20">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Gallery
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Learnings */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glow-card bg-card/50 border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-destructive">Challenges Faced</CardTitle>
                  <CardDescription>
                    Technical and design challenges overcome during development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.challenges.map((challenge: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <Shield className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glow-card bg-card/50 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Key Learnings</CardTitle>
                  <CardDescription>
                    Skills and knowledge gained from this project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.learnings.map((learning: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{learning}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 glow-text">Interested in This Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore the source code, try the live demo, or get in touch to discuss similar projects and collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="glow-border bg-primary/20 hover:bg-primary/30 text-primary border-primary px-8 py-3">
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </Button>
              <Button variant="outline" className="glow-border border-secondary hover:bg-secondary/20 px-8 py-3">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
              <Button variant="outline" className="glow-border border-accent hover:bg-accent/20 px-8 py-3" onClick={() => navigate('/#contact')}>
                <Users className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
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

export default ProjectDetail;