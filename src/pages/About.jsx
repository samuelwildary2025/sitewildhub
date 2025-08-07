import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Cpu } from 'lucide-react';

const About = () => {
  const teamMembers = [
    { name: 'Alice Johnson', role: 'CEO & IA Strategist', image: 'CEO & IA Strategist' },
    { name: 'Bob Williams', role: 'Lead Software Architect', image: 'Lead Software Architect' },
    { name: 'Charlie Brown', role: 'Machine Learning Specialist', image: 'Machine Learning Specialist' },
    { name: 'Diana Miller', role: 'Automation Expert', image: 'Automation Expert' },
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nós - Wild Hub</title>
        <meta name="description" content="Nossa missão é transformar negócios através da inteligência artificial e automação, com uma cultura de inovação e uma equipe de especialistas." />
      </Helmet>

      <div className="page-container bg-slate-950">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-hero font-bold mb-6 font-space text-white">
              Humanos e IA, <span className="gradient-text">unidos pela inovação</span>
            </h1>
            <p className="text-body-lg text-slate-400 max-w-3xl mx-auto">
              Nosso propósito é claro: fundir a criatividade humana com a precisão da inteligência artificial para criar soluções que redefinem o futuro dos negócios.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 mb-24 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="card-feature">
                <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h2 className="text-card-title font-bold mb-2 font-space text-white">Nossa Missão</h2>
                <p className="text-body text-slate-400">Capacitar empresas com automações inteligentes e softwares personalizados que geram crescimento e eficiência exponenciais.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <div className="card-feature">
                <Eye className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h2 className="text-card-title font-bold mb-2 font-space text-white">Nossa Visão</h2>
                <p className="text-body text-slate-400">Ser a força pioneira na integração de IA no ambiente corporativo, tornando a tecnologia de ponta acessível e transformadora.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
              <div className="card-feature">
                <Cpu className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h2 className="text-card-title font-bold mb-2 font-space text-white">Nossos Valores</h2>
                <p className="text-body text-slate-400">Inovação constante, parceria com clientes, ética em dados e excelência na execução de cada projeto que assumimos.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-20"
          >
            <h2 className="text-section-title font-bold mb-12 font-space text-white">
              Conheça os <span className="gradient-text">Especialistas</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4">
                    <img  
                      class="rounded-full w-full h-full object-cover border-4 border-slate-700"
                      alt={`Foto de ${member.name}`} src="https://images.unsplash.com/photo-1593300614547-0335e95cee65" />
                  </div>
                  <h3 className="text-card-title font-bold text-white">{member.name}</h3>
                  <p className="text-body text-blue-400">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;