import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    CheckCircle,
    // Users,
    Target,
    Award,
    // TrendingUp,
    Wrench,
    Building2,
    Shield,
    Lightbulb
} from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

function Home() {
  const features = [
    {
      icon: <Building2 className="h-8 w-8 text-[#E8A341]" />,
      title: "Engenharia e Construção Civil",
      description: "Projetos residenciais, comerciais e industriais com excelência técnica e qualidade garantida."
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#E8A341]" />,
      title: "Serviços Automóveis",
      description: "Oficina mecânica completa com diagnóstico avançado, bate-chapa e pintura profissional."
    },
    {
      icon: <Award className="h-8 w-8 text-[#E8A341]" />,
      title: "Excelência e Rigor",
      description: "Compromisso com os mais altos padrões de qualidade e segurança em cada projeto."
    },
    {
      icon: <Target className="h-8 w-8 text-[#E8A341]" />,
      title: "Inovação Constante",
      description: "Busca por novas tecnologias e métodos que aumentem nossa eficiência e resultados."
    }
  ];

  const services = [
    "Construção Civil e Infraestrutura",
    "Mecânica e Eletrônica Automotiva",
    "Bate-Chapa e Pintura",
    "Fiscalização e Gestão de Obras"
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

    return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="mb-4 bg-orange-100 text-[#E8A341] hover:bg-orange-100 border-[#E8A341]">
                  Excelência Angolana
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Grupo
                <span className="text-[#E8A341]"> Girassol </span>
                - Construindo o Futuro
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Empresa Angolana multifacetada atuando em Engenharia e Construção Civil
                e Serviços Automóveis. Somos parceiros de confiança, oferecendo soluções 
                de alta qualidade com profissionalismo e transparência.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" asChild className="bg-[#E8A341] hover:bg-[#D4941F] text-white">
                    <Link to="/servicos">
                      Nossos Serviços
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" asChild className="border-[#E8A341] text-[#E8A341] hover:bg-[#E8A341] hover:text-white">
                    <Link to="/sobre">Conheça Nossa História</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80"
                alt="Construção e Engenharia"
                className="rounded-2xl shadow-2xl"
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-[#E8A341]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Referência</p>
                    <p className="text-sm text-gray-600">em Angola</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Por que Escolher o Grupo Girassol?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos vasta experiência com tecnologias modernas para entregar 
              soluções excepcionais que superam as expectativas dos nossos clientes.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-[#E8A341]">
                  <CardContent className="p-6">
                    <motion.div 
                      className="flex justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Nossos Principais Serviços
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Atuamos em dois setores estratégicos e complementares para a 
                economia angolana, oferecendo serviços de alta qualidade e confiabilidade.
              </p>
              
              <div className="space-y-4 mb-8">
                {services.map((service, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-[#E8A341] mr-3" />
                    <span className="text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="bg-[#E8A341] hover:bg-[#D4941F] text-white">
                  <Link to="/servicos">
                    Ver Todos os Serviços
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/16593777/pexels-photo-16593777.jpeg"
                alt="Serviços Automóveis e Construção"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
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
              Pronto para Ser Nosso Parceiro?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como o Grupo Girassol pode 
              contribuir para o sucesso do seu projeto com qualidade e transparência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contato">Fale Conosco</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="text-gray-800 border-white hover:bg-white hover:text-[#E8A341]" asChild>
                  <Link to="/servicos">Nossos Serviços</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;