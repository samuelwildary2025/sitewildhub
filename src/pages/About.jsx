import React from 'react'
import { Users, Target, Award } from 'lucide-react'

const About = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a WildHub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma equipe apaixonada por tecnologia e inovação, dedicada a criar 
            soluções digitais que transformam negócios e conectam pessoas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Nossa Equipe</h3>
            <p className="text-gray-600">
              Profissionais experientes e criativos trabalhando juntos para entregar os melhores resultados.
            </p>
          </div>
          <div className="text-center p-6">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Nossa Missão</h3>
            <p className="text-gray-600">
              Democratizar o acesso a tecnologias modernas e ajudar empresas a crescerem no mundo digital.
            </p>
          </div>
          <div className="text-center p-6">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Nossa Visão</h3>
            <p className="text-gray-600">
              Ser referência em desenvolvimento web, criando soluções inovadoras e sustentáveis.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Nossa História</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            A WildHub nasceu da paixão por criar experiências digitais excepcionais. 
            Desde nossa fundação, temos ajudado empresas de todos os tamanhos a estabelecerem 
            sua presença online com soluções personalizadas e inovadoras. Nossa abordagem 
            combina design moderno, tecnologia de ponta e estratégia digital para entregar 
            resultados que superam expectativas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About