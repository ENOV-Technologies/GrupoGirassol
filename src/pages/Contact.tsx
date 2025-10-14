import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { sendContactEmails, type ContactFormData } from '@/lib/emailService';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageSquare,
    Users,
    Building,
    Loader2,
    CheckCircle,
    AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const Contact = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Nome é obrigatório';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'E-mail é obrigatório';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'E-mail inválido';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Descrição do projeto é obrigatória';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Descrição deve ter pelo menos 10 caracteres';
        }

        if (formData.phone && !/^[\+]?[0-9\s\-\(\)]{9,}$/.test(formData.phone)) {
            newErrors.phone = 'Formato de telefone inválido';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            service: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            toast({
                title: "Erro no formulário",
                description: "Por favor, corrija os erros antes de enviar.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            await sendContactEmails(formData);
            
            toast({
                title: "✅ Mensagem enviada com sucesso!",
                description: (
                    <div className="space-y-2">
                        <p>Obrigado pelo seu interesse, {formData.name}!</p>
                        <p>• Você receberá um e-mail de confirmação em breve</p>
                        <p>• Nossa equipe entrará em contato em até 24 horas</p>
                        <p>• Verifique sua caixa de spam se não receber o e-mail</p>
                    </div>
                ),
                variant: "default",
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                message: ''
            });
            
        } catch (error) {
            console.error('Form submission error:', error);
            toast({
                title: "❌ Erro ao enviar mensagem",
                description: (
                    <div className="space-y-2">
                        <p>Não foi possível enviar sua mensagem no momento.</p>
                        <p>• Verifique sua conexão com a internet</p>
                        <p>• Tente novamente em alguns minutos</p>
                        <p>• Ou entre em contato diretamente: geral@grupogirassol.co.ao</p>
                    </div>
                ),
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <Phone className="h-6 w-6 text-[#E8A341]" />,
            title: "Telefone",
            details: [
                "(+244) 945-537-787",
                "(+244) 945-537-677",
                "(+244) 945-536-877"
            ]
        },
        {
            icon: <Mail className="h-6 w-6 text-[#E8A341]" />,
            title: "E-mail",
            details: [
                "geral@grupogirassol.co.ao",
                "comercial@grupogirassol.co.ao"
            ]
        },
        {
            icon: <MapPin className="h-6 w-6 text-[#E8A341]" />,
            title: "Endereço",
            details: [
                "Centralidade Kilamba, Edificio Z2, Apt 33",
                "Luanda Angola"

            ]
        },
        {
            icon: <Clock className="h-6 w-6 text-[#E8A341]" />,
            title: "Horário de Atendimento",
            details: [
                "Segunda a Sexta: 7h às 17h",
                "Sábado: 7h às 12h"
            ]
        }
    ];

    const services = [
        "Construção Civil",
        "Projetos Residenciais",
        "Projetos Comerciais e Industriais",
        "Fiscalização e Gestão de Obras",
        "Obras de Infraestrutura",
        "Mecânica e Eletrônica Automotiva",
        "Bate-Chapa e Pintura",
        "Serviços Especiais Automotivos",
        "Outros"
    ];

    const stats = [
        {
            icon: <MessageSquare className="h-8 w-8 text-[#E8A341]" />,
            number: "< 24h",
            label: "Tempo de Resposta"
        },
        {
            icon: <Users className="h-8 w-8 text-[#E8A341]" />,
            number: "100+",
            label: "Projetos Realizados"
        },
        {
            icon: <Building className="h-8 w-8 text-[#E8A341]" />,
            number: "15+",
            label: "Anos de Experiência"
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
                            Entre em Contato
                        </Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Vamos
                            <span className="text-[#E8A341]"> Construir </span>
                            Juntos seu Projeto
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Estamos prontos para ser seu parceiro de confiança. Entre em contato
                            conosco e descubra como podemos transformar suas ideias em realidade.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form and Info */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border-t-4 border-t-[#E8A341]">
                                <CardHeader>
                                    <CardTitle className="text-2xl flex items-center gap-2">
                                        <Mail className="h-6 w-6 text-[#E8A341]" />
                                        Solicite seu Orçamento
                                    </CardTitle>
                                    <p className="text-gray-600">
                                        Preencha o formulário abaixo e nossa equipe entrará em contato
                                        para apresentar a melhor solução para seu projeto.
                                    </p>
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                            <div className="text-sm text-blue-800">
                                                <p className="font-medium mb-1">Após enviar o formulário:</p>
                                                <ul className="space-y-1 text-blue-700">
                                                    <li>• Você receberá um e-mail de confirmação</li>
                                                    <li>• Nossa equipe responderá em até 24 horas</li>
                                                    <li>• Agendaremos uma reunião se necessário</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <Label htmlFor="name">Nome Completo *</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Seu nome completo"
                                                    className={`focus:border-[#E8A341] focus:ring-[#E8A341] ${errors.name ? 'border-red-500' : ''}`}
                                                    disabled={isSubmitting}
                                                />
                                                {errors.name && (
                                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                        <AlertCircle className="h-4 w-4" />
                                                        {errors.name}
                                                    </p>
                                                )}
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                                viewport={{ once: true }}
                                            >
                                                <Label htmlFor="email">E-mail *</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="seu@email.com"
                                                    className={`focus:border-[#E8A341] focus:ring-[#E8A341] ${errors.email ? 'border-red-500' : ''}`}
                                                    disabled={isSubmitting}
                                                />
                                                {errors.email && (
                                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                        <AlertCircle className="h-4 w-4" />
                                                        {errors.email}
                                                    </p>
                                                )}
                                            </motion.div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                                viewport={{ once: true }}
                                            >
                                                <Label htmlFor="phone">Telefone</Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="+244 XXX XXX XXX"
                                                    className={`focus:border-[#E8A341] focus:ring-[#E8A341] ${errors.phone ? 'border-red-500' : ''}`}
                                                    disabled={isSubmitting}
                                                />
                                                {errors.phone && (
                                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                        <AlertCircle className="h-4 w-4" />
                                                        {errors.phone}
                                                    </p>
                                                )}
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                                viewport={{ once: true }}
                                            >
                                                <Label htmlFor="company">Empresa</Label>
                                                <Input
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    placeholder="Nome da sua empresa"
                                                    className="focus:border-[#E8A341] focus:ring-[#E8A341]"
                                                    disabled={isSubmitting}
                                                />
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            <Label htmlFor="service">Serviço de Interesse</Label>
                                            <Select onValueChange={handleSelectChange} disabled={isSubmitting}>
                                                <SelectTrigger className="focus:border-[#E8A341] focus:ring-[#E8A341]">
                                                    <SelectValue placeholder="Selecione um serviço" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {services.map((service, index) => (
                                                        <SelectItem key={index} value={service}>
                                                            {service}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 }}
                                            viewport={{ once: true }}
                                        >
                                            <Label htmlFor="message">Descrição do Projeto *</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Conte-nos mais sobre seu projeto, localização, prazos e necessidades específicas..."
                                                rows={5}
                                                className={`focus:border-[#E8A341] focus:ring-[#E8A341] ${errors.message ? 'border-red-500' : ''}`}
                                                disabled={isSubmitting}
                                            />
                                            {errors.message && (
                                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                    <AlertCircle className="h-4 w-4" />
                                                    {errors.message}
                                                </p>
                                            )}
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        >
                                            <Button 
                                                type="submit" 
                                                size="lg" 
                                                className="w-full bg-[#E8A341] hover:bg-[#D4941F] text-white disabled:opacity-50"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Enviando E-mails...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="mr-2 h-4 w-4" />
                                                        Solicitar Orçamento
                                                    </>
                                                )}
                                            </Button>
                                        </motion.div>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Informações de Contato
                                </h2>
                                <motion.div
                                    className="space-y-6"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {contactInfo.map((info, index) => (
                                        <motion.div key={index} variants={itemVariants}>
                                            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                                <CardContent className="p-6">
                                                    <div className="flex items-start">
                                                        <motion.div
                                                            className="flex-shrink-0"
                                                            whileHover={{ scale: 1.1 }}
                                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                        >
                                                            {info.icon}
                                                        </motion.div>
                                                        <div className="ml-4">
                                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                                {info.title}
                                                            </h3>
                                                            {info.details.map((detail, idx) => (
                                                                <p key={idx} className="text-gray-600">
                                                                    {detail}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Stats */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Nossa Experiência
                                </h3>
                                <motion.div
                                    className="grid grid-cols-1 gap-4"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            >
                                                {stat.icon}
                                            </motion.div>
                                            <div className="ml-4">
                                                <div className="text-2xl font-bold text-[#E8A341]">
                                                    {stat.number}
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Nossa Localização
                        </h2>
                        <p className="text-xl text-gray-600">
                            Visite-nos em Luanda e conheça nossas instalações.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center py-20">
                            <div className="text-center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <MapPin className="h-16 w-16 text-[#E8A341] mx-auto mb-4" />
                                </motion.div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Grupo Girassol, Lda
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Luanda, Angola
                                </p>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button variant="outline" className="border-[#E8A341] text-[#E8A341] hover:bg-[#E8A341] hover:text-white">
                                        Ver Localização
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Perguntas Frequentes
                        </h2>
                        <p className="text-xl text-gray-600">
                            Respostas para as dúvidas mais comuns sobre nossos serviços.
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                question: "Qual é o prazo médio para execução de uma obra?",
                                answer: "O prazo varia conforme a complexidade e tamanho do projeto. Obras residenciais geralmente levam de 6 a 18 meses, enquanto projetos comerciais podem variar de 12 a 36 meses."
                            },
                            {
                                question: "Vocês oferecem garantia nos serviços prestados?",
                                answer: "Sim, oferecemos garantia em todos os nossos serviços. Para construção civil, a garantia é de 5 anos para estrutura e 1 ano para acabamentos. Para serviços automóveis, oferecemos garantia de 6 meses."
                            },
                            {
                                question: "Como funciona o processo de orçamento?",
                                answer: "Após o primeiro contato, agendamos uma visita técnica para avaliar o projeto. Em seguida, elaboramos um orçamento detalhado que é apresentado em até 7 dias úteis."
                            },
                            {
                                question: "Vocês trabalham com financiamento de obras?",
                                answer: "Trabalhamos com diversas modalidades de pagamento e podemos orientar sobre opções de financiamento disponíveis no mercado angolano."
                            }
                        ].map((faq, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-[#E8A341]">
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {faq.question}
                                        </h3>
                                        <p className="text-gray-600">
                                            {faq.answer}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;