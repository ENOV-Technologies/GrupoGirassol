import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Wrench, 
  Paintbrush, 
  ClipboardCheck, 
  Settings, 
  // Zap,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  Shield,
  // Car,
  // Hammer,
  MapPin
} from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const Services = () => {
  const services = [
    {
      icon: <Building2 className="h-8 w-8 text-[#E8A341]" />,
      title: "Construção Civil",
      description: "Projetos residenciais, comerciais e industriais com tecnologia de ponta e equipe qualificada para entregar obras com rapidez e precisão.",
      features: [
        "Projetos Residenciais de luxo",
        "Complexos de condomínios multifamiliares",
        "Escritórios modernos e espaços comerciais",
        "Edifícios industriais especializados"
      ],
      category: "Engenharia e Construção"
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-[#E8A341]" />,
      title: "Fiscalização e Gestão de Obras",
      description: "Atuamos como parceiro independente, assegurando que projetos sejam executados conforme especificações, prazos e orçamentos.",
      features: [
        "Controlo de qualidade rigoroso",
        "Gestão de prazos e custos",
        "Relatórios de progresso detalhados",
        "Comunicação eficiente entre partes"
      ],
      category: "Engenharia e Construção"
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#E8A341]" />,
      title: "Obras de Infraestrutura",
      description: "Construção de infraestruturas essenciais que facilitam o desenvolvimento de áreas urbanas e rurais em Angola.",
      features: [
        "Construção de estradas e pontes",
        "Redes de drenagem e saneamento",
        "Sistemas de abastecimento de água",
        "Tratamento de esgoto para comunidades"
      ],
      category: "Engenharia e Construção"
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#E8A341]" />,
      title: "Mecânica e Eletrônica Auto",
      description: "Oficina mecânica de confiança com diagnóstico avançado e tecnologia de ponta para todos os modelos e marcas.",
      features: [
        "Diagnóstico avançado com tecnologia moderna",
        "Reparações de motor e transmissão",
        "Gestão de ECUs e sistemas ABS",
        "Manutenção preventiva completa"
      ],
      category: "Serviços Automóveis"
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-[#E8A341]" />,
      title: "Bate-Chapa e Pintura",
      description: "Restauração completa da beleza e estrutura de veículos, devolvendo-os ao estado original com arte e precisão.",
      features: [
        "Reparação completa de carrocaria",
        "Pintura profissional com cabines modernas",
        "Polimento de faróis e detalhes",
        "Soldadura precisa para integridade do chassis"
      ],
      category: "Serviços Automóveis"
    },
    {
      icon: <Settings className="h-8 w-8 text-[#E8A341]" />,
      title: "Serviços Especiais Automotivos",
      description: "Serviços especializados para garantir segurança, conforto e performance ideal do seu veículo.",
      features: [
        "Alinhamento e balanceamento de precisão",
        "Reparação de sistemas de ar condicionado",
        "Diagnóstico e manutenção de fugas",
        "Recargas de gás e reparação de componentes"
      ],
      category: "Serviços Automóveis"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-[#E8A341]" />,
      title: "Excelência e Rigor",
      description: "Compromisso com os mais altos padrões de qualidade e segurança em cada projeto."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#E8A341]" />,
      title: "Inovação",
      description: "Busca constante por novas tecnologias, métodos e soluções que aumentem nossa eficiência."
    },
    {
      icon: <Shield className="h-8 w-8 text-[#E8A341]" />,
      title: "Integridade e Transparência",
      description: "Atuamos com honestidade e clareza em todas as nossas relações comerciais."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Análise e Diagnóstico",
      description: "Avaliação detalhada das necessidades do projeto ou veículo com nossa equipe especializada."
    },
    {
      step: "02",
      title: "Proposta Técnica",
      description: "Desenvolvimento de solução personalizada com cronograma detalhado e orçamento transparente."
    },
    {
      step: "03",
      title: "Execução com Qualidade",
      description: "Implementação do projeto com acompanhamento rigoroso e controle de qualidade constante."
    },
    {
      step: "04",
      title: "Entrega e Suporte",
      description: "Finalização com garantia de qualidade e suporte contínuo para assegurar satisfação total."
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
              Nossos Serviços
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Soluções
              <span className="text-[#E8A341]"> Integradas </span><br/>
              de Alta Qualidade
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atuamos em Engenharia e Construção Civil e Serviços Automóveis, 
              oferecendo soluções completas com tecnologia de ponta e equipe especializada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 h-full hover:-translate-y-1 border-t-4 border-t-[#E8A341]">
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-orange-100 text-[#E8A341] border-[#E8A341]">
                      {service.category}
                    </Badge>
                    <div className="flex items-center mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {service.icon}
                      </motion.div>
                      <CardTitle className="ml-3 text-xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-[#E8A341] mr-2" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full bg-[#E8A341] hover:bg-[#D4941F] text-white" asChild>
                        <Link to="/contato">Solicitar Orçamento</Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600">
              Os princípios que guiam nossa atuação e garantem a excelência dos nossos serviços.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-[#E8A341]">
                  <CardContent className="p-6">
                    <motion.div 
                      className="flex justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600">
              Nosso processo estruturado garante qualidade e transparência em cada etapa.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {process.map((item, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <div className="relative mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-[#E8A341] rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </motion.div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-orange-200 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
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
              Pronto para Começar seu Projeto?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como o Grupo Girassol pode 
              ser seu parceiro de confiança para soluções de alta qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contato">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="text-gray-800 border-white hover:bg-white hover:text-[#E8A341]" asChild>
                  <Link to="/sobre">Conheça Nossa História</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;