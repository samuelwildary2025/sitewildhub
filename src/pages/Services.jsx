import React from 'react'
import { Globe, Smartphone, ShoppingCart, Search, Palette, Code2 } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: 'Sites Institucionais',
      description: 'Websites profissionais que representam sua marca com elegância e funcionalidade.',
      features: ['Design Responsivo', 'SEO Otimizado', 'CMS Personalizado', 'Integração com Redes Sociais']
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-blue-600" />,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com sistema de pagamento e gestão de produtos.',
      features: ['Carrinho de Compras', 'Gateway de Pagamento', 'Gestão de Estoque', 'Painel Administrativo']
    },
    {
      icon: <Smartphone className="h-12 w-12 text-blue-600" />,
      title: 'Aplicações Web',
      description: 'Sistemas web personalizados para otimizar processos do seu negócio.',
      features: ['Interface Intuitiva', 'Banco de Dados', 'APIs Integradas', 'Dashboard Analytics']
    },
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: 'SEO & Marketing',
      description: 'Estratégias para melhorar sua visibilidade online e atrair mais clientes.',
      features: ['Otimização On-page', 'Google Analytics', 'Palavras-chave', 'Relatórios Mensais']
    },
    {
      icon: <Palette className="h-12 w-12 text-blue-600" />,
      title: 'Design UI/UX',
      description: 'Interfaces modernas e experiências de usuário que convertem visitantes em clientes.',
      features: ['Prototipagem', 'Design System', 'Testes de Usabilidade', 'Design Responsivo']
    },
    {
      icon: <Code2 className="h-12 w-12 text-blue-600" />,
      title: 'Consultoria Técnica',
      description: 'Orientação especializada para escolher as melhores tecnologias para seu projeto.',
      features: ['Análise Técnica', 'Arquitetura de Software', 'Code Review', 'Treinamento de Equipe']
    }
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em desenvolvimento web, desde a concepção 
            até a implementação e manutenção do seu projeto digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Precisa de algo personalizado?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Entre em contato conosco para discutir suas necessidades específicas.
          </p>
          <a href="/contact" className="btn-primary">
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services