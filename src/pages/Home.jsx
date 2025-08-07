import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Zap, BrainCircuit, MessageSquare, Code, Database, Cloud } from 'lucide-react';
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';

const TechCarousel = () => {
  const technologies = [
    { name: "Python", icon: <Code className="w-6 h-6" /> },
    { name: "Node.js", icon: <Code className="w-6 h-6" /> },
    { name: "TensorFlow", icon: <BrainCircuit className="w-6 h-6" /> },
    { name: "OpenAI", icon: <Bot className="w-6 h-6" /> },
    { name: "React", icon: <Code className="w-6 h-6" /> },
    { name: "PostgreSQL", icon: <Database className="w-6 h-6" /> },
    { name: "AWS", icon: <Cloud className="w-6 h-6" /> },
    { name: "Docker", icon: <Zap className="w-6 h-6" /> },
  ];

  const extendedTech = [...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
      <div className="tech-carousel">
        {extendedTech.map((tech, index) => (
          <div key={index} className="flex-shrink-0 w-40 flex flex-col items-center justify-center p-3 mx-3 card-modern">
            {tech.icon}
            <span className="mt-2 text-sm font-medium text-slate-300">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Wild Hub - Automatizamos o futuro do seu negócio com IA</title>
        <meta name="description" content="Especialistas em Inteligência Artificial, desenvolvimento de softwares personalizados e automações para empresas. Transforme seu negócio com IA." />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding-lg relative overflow-hidden">
        <NeuralNetworkBackground className="neural-network-hero" opacity={0.4} />
        <div className="background-grid"></div>
        <div className="hero-glow"></div>
        
        <div className="container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-hero font-bold mb-6 leading-tight font-space text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Automatizamos o futuro do seu negócio com <span className="text-blue-400">Inteligência Artificial</span>
            </motion.h1>

            <motion.p
              className="text-body-lg text-slate-400 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Especialistas em IA, Machine Learning e desenvolvimento de softwares personalizados. 
              Criamos automações inteligentes que transformam processos e impulsionam resultados.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Button size="lg" asChild>
                <Link to="/contato">
                  Solicitar Projeto
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              
              <Button variant="ghost" size="lg" asChild>
                <Link to="/servicos">
                  Nossos Serviços
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Carousel Section */}
      <section className="section-padding bg-slate-950">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
              Tecnologias que Dominamos
            </h2>
          </motion.div>
          <TechCarousel />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding-lg bg-slate-950/70">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-section-title font-bold mb-4 font-space text-white">
              Soluções que <span className="gradient-text">Revolucionam</span>
            </h2>
            <p className="text-body-lg text-slate-400 max-w-3xl mx-auto">
              Desenvolvemos tecnologias de ponta que automatizam processos, 
              otimizam operações e criam experiências excepcionais para seus clientes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Bot className="w-6 h-6 text-blue-400" />,
                title: "Automação WhatsApp",
                description: "Bots inteligentes que atendem seus clientes 24/7 com respostas personalizadas e naturais."
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
                title: "IA com Voz",
                description: "Assistentes virtuais com processamento de voz para vendas e atendimento humanizado."
              },
              {
                icon: <BrainCircuit className="w-6 h-6 text-blue-400" />,
                title: "Machine Learning",
                description: "Algoritmos que aprendem com seus dados para otimizar processos e prever tendências."
              },
              {
                icon: <Zap className="w-6 h-6 text-blue-400" />,
                title: "Sistemas Inteligentes",
                description: "Softwares sob demanda que integram IA para automatizar operações complexas."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="card-modern card-hover"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-card-title font-semibold mb-3 text-white font-space">{feature.title}</h3>
                <p className="text-body text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-lg">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-gradient-to-br from-blue-600/20 to-slate-950 border border-blue-500/20 rounded-2xl p-6 text-center"
          >
            <h2 className="text-section-title font-bold mb-4 font-space text-white">
              Pronto para <span className="gradient-text">transformar</span> seu negócio?
            </h2>
            <p className="text-body-lg text-slate-400 mb-6 max-w-2xl mx-auto">
              Converse com nossa IA especializada e descubra como podemos automatizar 
              e otimizar seus processos com tecnologia de ponta.
            </p>
            <Button size="lg" asChild>
              <Link to="/contato">
                Falar com nossa IA
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;