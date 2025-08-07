import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/50 border-t border-blue-500/10 mt-12 z-10">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <BrainCircuit className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-space text-white">Wild Hub</span>
            </Link>
            <p className="text-slate-400 max-w-md">
              Transformando negócios com inteligência artificial, automação e softwares personalizados.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white mb-4 font-space">Navegação</p>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-slate-400 hover:text-blue-400 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="text-slate-400 hover:text-blue-400 transition-colors">Serviços</Link></li>
              <li><Link to="/casos-de-sucesso" className="text-slate-400 hover:text-blue-400 transition-colors">Resultados</Link></li>
              <li><Link to="/contato" className="text-slate-400 hover:text-blue-400 transition-colors">Contato</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-4 font-space">Legal</p>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Termos de Serviço</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>&copy; {currentYear} Wild Hub. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;