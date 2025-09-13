import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Smartphone, Globe, Zap } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: 'Desenvolvimento Web',
      description: 'Criamos sites e aplicações web modernas usando as mais recentes tecnologias.'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: 'Design Responsivo',
      description: 'Todos os nossos projetos são otimizados para funcionar perfeitamente em qualquer dispositivo.'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'SEO Otimizado',
      description: 'Implementamos as melhores práticas de SEO para garantir visibilidade online.'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Performance',
      description: 'Focamos em velocidade e performance para proporcionar a melhor experiência do usuário.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transformamos suas <span className="text-blue-600">ideias</span> em
              <span className="text-blue-600"> realidade digital</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Desenvolvimento web moderno com foco em performance, usabilidade e resultados. 
              Criamos experiências digitais que fazem a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Começar Projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Ver Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a WildHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combinamos criatividade, tecnologia e estratégia para entregar soluções que superam expectativas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e vamos transformar sua visão em realidade.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Falar Conosco
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home