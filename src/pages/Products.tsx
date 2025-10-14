import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Wrench, 
  Users, 
  Award, 
  Zap, 
  Shield,
  ArrowRight,
  Star,
  CheckCircle,
  Eye,
  Target,
  Lightbulb
} from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const Products = () => {
  const capabilities = [
    {
      icon: <Building2 className="h-8 w-8 text-[#E8A341]" />,
      title: "Engenharia Civil Avançada",
      category: "Construção",
      description: "Equipe de engenheiros civis e arquitetos que transforma visões em projetos detalhados e funcionais.",
      features: [
        "Projetos residenciais de luxo",
        "Complexos comerciais modernos",
        "Infraestrutura urbana e rural",
        "Gestão completa de obras"
      ],
      expertise: "15+ anos",
      projects: "200+",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80"
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#E8A341]" />,
      title: "Diagnóstico Automotivo",
      category: "Automóvel",
      description: "Tecnologia de diagnóstico de ponta para identificar rapidez e precisão problemas complexos em veículos.",
      features: [
        "Equipamentos de última geração",
        "Diagnóstico de sistemas eletrônicos",
        "Análise de ECUs e ABS",
        "Relatórios técnicos detalhados"
      ],
      expertise: "10+ anos",
      projects: "100+",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#E8A341]" />,
      title: "Controle de Qualidade",
      category: "Fiscalização",
      description: "Inspeções rigorosas de materiais e mão de obra para garantir conformidade com normas técnicas.",
      features: [
        "Auditoria de processos",
        "Controle de materiais",
        "Supervisão técnica",
        "Certificação de qualidade"
      ],
      expertise: "12+ anos",
      projects: "150+",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      icon: <Users className="h-8 w-8 text-[#E8A341]" />,
      title: "Gestão de Equipas",
      category: "Recursos Humanos",
      description: "Gestores de obra e supervisores que garantem execução precisa de cada etapa da construção.",
      features: [
        "Coordenação de equipas",
        "Gestão de cronogramas",
        "Supervisão de segurança",
        "Treinamento especializado"
      ],
      expertise: "8+ anos",
      projects: "300+",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
    },
    {
      icon: <Zap className="h-8 w-8 text-[#E8A341]" />,
      title: "Tecnologia Avançada",
      category: "Inovação",
      description: "Investimento constante em equipamentos e ferramentas modernas para garantir eficiência superior.",
      features: [
        "Equipamentos de ponta",
        "Software especializado",
        "Ferramentas de precisão",
        "Sistemas integrados"
      ],
      expertise: "Sempre atualizado",
      projects: "Todos",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&q=80"
    },
    {
      icon: <Award className="h-8 w-8 text-[#E8A341]" />,
      title: "Excelência Comprovada",
      category: "Qualidade",
      description: "Compromisso com os mais altos padrões de qualidade e segurança, reconhecido no mercado angolano.",
      features: [
        "Certificações técnicas",
        "Padrões internacionais",
        "Garantia de qualidade",
        "Reconhecimento do mercado"
      ],
      expertise: "Referência",
      projects: "100% sucesso",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80"
    }
  ];

  const categories = ["Todos", "Construção", "Automóvel", "Fiscalização", "Recursos Humanos", "Inovação", "Qualidade"];

  const differentials = [
    {
      icon: <Target className="h-8 w-8 text-[#E8A341]" />,
      title: "Soluções Integradas",
      description: "Capacidade única de atuar em engenharia e serviços automóveis, oferecendo conveniência e sinergia."
    },
    {
      icon: <Shield className="h-8 w-8 text-[#E8A341]" />,
      title: "Rigor e Qualidade",
      description: "Compromisso com os mais altos padrões de qualidade e segurança em todos os projetos."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#E8A341]" />,
      title: "Transparência Total",
      description: "Diálogo aberto e honesto, mantendo clientes sempre informados sobre o progresso dos projetos."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-orange-100 text-[#E8A341] hover:bg-orange-100 border-[#E8A341]">
              Nossas Capacidades
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Expertise
              <span className="text-[#E8A341]"> Comprovada </span>
              em Cada Área
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça nossas competências técnicas e especializações que nos tornam 
              referência em Engenharia Civil e Serviços Automóveis em Angola.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-[#E8A341] hover:bg-[#D4941F] text-white" : "hover:bg-orange-50 hover:text-[#E8A341] hover:border-[#E8A341]"}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {capabilities.map((capability, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1 border-t-4 border-t-[#E8A341]">
                  <div className="relative">
                    <img
                      src={capability.image}
                      alt={capability.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-white text-[#E8A341] border-[#E8A341]">
                      {capability.category}
                    </Badge>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {capability.icon}
                        </motion.div>
                        <CardTitle className="ml-2 text-xl">{capability.title}</CardTitle>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>{capability.expertise}</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                        <span>{capability.projects}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600">{capability.description}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-[#E8A341] rounded-full mr-2"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <motion.div 
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full bg-[#E8A341] hover:bg-[#D4941F] text-white" asChild>
                          <Link to="/contato">Consultar</Link>
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button variant="outline" size="sm" className="border-[#E8A341] text-[#E8A341] hover:bg-[#E8A341] hover:text-white">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-600">
              O que nos torna únicos no mercado angolano e a escolha ideal para seus projetos.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {differentials.map((differential, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-[#E8A341]">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {differential.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {differential.title}
                    </h3>
                    <p className="text-gray-600">
                      {differential.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              { number: "15+", label: "Anos de Experiência" },
              { number: "500+", label: "Projetos Concluídos" },
              { number: "100%", label: "Clientes Satisfeitos" },
              { number: "24/7", label: "Suporte Disponível" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <div className="text-4xl font-bold text-[#E8A341] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#E8A341]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para Conhecer Nossa Expertise?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como nossa experiência e 
              competência técnica podem beneficiar seu próximo projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contato">
                    Fale Conosco
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="text-gray-900 border-white hover:bg-white hover:text-[#E8A341]" asChild>
                  <Link to="/servicos">Ver Nossos Serviços</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;