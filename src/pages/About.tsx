import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Target, Award, History, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-[#E8A341]" />,
      title: "Missão",
      description: "Fornecer soluções inovadoras e de alta qualidade que impulsionem o crescimento sustentável dos nossos clientes."
    },
    {
      icon: <Award className="h-8 w-8 text-[#E8A341]" />,
      title: "Visão",
      description: "Ser reconhecida como líder em excelência e inovação, transformando ideias em realidade de forma sustentável."
    },
    {
      icon: <Users className="h-8 w-8 text-[#E8A341]" />,
      title: "Valores",
      description: "Integridade, inovação, excelência, sustentabilidade e compromisso com nossos clientes e comunidade."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Fundação",
      description: "Início das atividades com foco em consultoria empresarial."
    },
    {
      year: "2021",
      title: "Expansão",
      description: "Ampliação dos serviços para desenvolvimento de produtos."
    },
    {
      year: "2022",
      title: "Crescimento",
      description: "Mais de 200 projetos concluídos com sucesso."
    },
    {
      year: "2023",
      title: "Inovação",
      description: "Lançamento de soluções digitais avançadas."
    },
    {
      year: "2024",
      title: "Consolidação",
      description: "Reconhecimento como referência no mercado."
    }
  ];

  const team = [
    {
      name: "Ana Silva",
      role: "CEO & Fundadora",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ana",
      description: "15 anos de experiência em gestão empresarial e inovação."
    },
    {
      name: "Carlos Santos",
      role: "CTO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos",
      description: "Especialista em tecnologia e desenvolvimento de produtos."
    },
    {
      name: "Maria Oliveira",
      role: "Diretora de Marketing",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
      description: "Expert em estratégias de marketing digital e branding."
    },
    {
      name: "João Costa",
      role: "Diretor de Operações",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=joao",
      description: "Responsável pela excelência operacional e qualidade."
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
              Nossa História
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {/*Sobre o*/}
              <span className="text-[#E8A341]"> GrupoGirassol</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma empresa comprometida com a excelência, inovação e o crescimento 
              sustentável dos nossos clientes e da sociedade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
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
              Nossos Pilares
            </h2>
            <p className="text-xl text-gray-600">
              Os valores que nos guiam em cada projeto e decisão.
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
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-[#E8A341]">
                  <CardContent className="p-8">
                    <motion.div 
                      className="flex justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {value.icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
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
              Nossa Jornada
            </h2>
            <p className="text-xl text-gray-600">
              Marcos importantes da nossa trajetória de crescimento.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-2">
                          <History className="h-5 w-5 text-[#E8A341] mr-2" />
                          <Badge variant="outline" className="text-[#E8A341] border-[#E8A341]">
                            {item.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-4 h-4 bg-[#E8A341] rounded-full border-4 border-white shadow-lg"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    ></motion.div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
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
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600">
              Profissionais experientes e apaixonados pelo que fazem.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#E8A341] font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
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
              Quer Fazer Parte da Nossa História?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como podemos trabalhar 
              juntos para alcançar seus objetivos.
            </p>
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
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;