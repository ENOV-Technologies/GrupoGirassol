import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              <div className="w-40 h-auto rounded-lg flex items-center justify-center">
                  <img
                      src={'/Girassol.svg'}
                      alt={'Girassol logo'}/>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Comprometidos com a excelência e inovação, oferecemos soluções completas 
              para o crescimento sustentável do seu negócio.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-[#E8A341] transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: 'Início', href: '/' },
                { name: 'Sobre Nós', href: '/sobre' },
                { name: 'Serviços', href: '/servicos' },
                // { name: 'Produtos', href: '/produtos' },
                  { name: 'Contato', href: '/contato' },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-[#E8A341] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#E8A341]" />
                <span className="text-gray-300"><span className={'text-[#E8A341]'}>Geral:</span> (+244) 945 537 787</span>
              </div>
                <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-[#E8A341]" />
                    <span className="text-gray-300">(+244) 945 537 677 <br/>(+244) 945 536 877</span>
                </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#E8A341]" />
                <span className="text-gray-300">geral@grupogirassol.co.ao</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-[#E8A341]" />
                <span className="text-gray-300">
                  Centralidade Kilamba,<br />Edificio Z2, Apt 33<br/>
                  Luanda Angola
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            ©{new Date().getFullYear()} Grupogirassol. Todos os direitos reservados. <br/>
              <span className={'text-sm'}>Designed and Developed by <a href={"https://autisync.com/"} className={'text-white hover:text-[#E8A341]'}>Autisync </a>
</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;