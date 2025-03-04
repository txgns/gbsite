
import React from 'react';
import { Bot, Cpu, Zap, CircuitBoard } from 'lucide-react';

export type Project = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  achievements: string[];
  icon: React.ReactNode;
  link?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Hastur',
    category: 'Combate',
    date: 'Projeto em Andamento',
    image: '',
    description: 'Beetle Vertical Spinner - um robô de combate projetado para competições, com um disco vertical giratório de alta rotação capaz de causar danos significativos aos oponentes. Sua estrutura compacta e resistente permite movimentos ágeis na arena, enquanto seu sistema de arma gera forças destrutivas através da energia cinética.',
    achievements: [
      'Semifinalista na Liga Robótica Brasil 2023',
      'Vencedor da categoria Melhor Design de Arma 2022',
      'Participação em 5 competições nacionais'
    ],
    icon: <Bot size={20} />,
    link: '/project/1',
  },
  {
    id: 2,
    title: 'Cavaleiros da Gambiarra Micro',
    category: 'Hockey',
    date: 'Projeto em Andamento',
    image: '',
    description: 'Time de Hockey Micro desenvolvido para competições de robótica esportiva. Constituído por três robôs autônomos que trabalham em conjunto para marcar gols e defender sua meta. Utiliza sistemas avançados de visão computacional e algoritmos de coordenação para estratégias de jogo em tempo real.',
    achievements: [
      'Campeão Regional Sudeste 2023',
      'Melhor Estratégia de Defesa na RoboCup Brasil',
      'Reconhecimento por Inovação em Sistemas Cooperativos'
    ],
    icon: <Bot size={20} />,
    link: '/project/2',
  },
  {
    id: 3,
    title: 'Conceito',
    category: 'Sumô Mini',
    date: 'Projeto em Andamento',
    image: '',
    description: 'Mini Sumo de 500g projetado para competições de sumô robótico. Equipado com sensores infravermelhos de alta precisão para detecção de bordas e adversários, além de motores de torque elevado que garantem tração e empuxo superiores. Sua programação permite rápida tomada de decisões e execução de movimentos táticos.',
    achievements: [
      'Primeiro lugar na categoria Mini Sumo - RoboCore 2023',
      'Terceiro lugar no Torneio Nacional de Robótica',
      'Recorde de vitória mais rápida: 1.2 segundos'
    ],
    icon: <Bot size={20} />,
    link: '/project/3',
  },
  {
    id: 4,
    title: 'Mitsu',
    category: 'Sumô Lego',
    date: 'Projeto em Andamento',
    image: '',
    description: 'Sumo lego Pro de 1kg construído com peças LEGO e eletrônica personalizada. Utiliza sensores ultrassônicos e de luz para identificar o oponente e as bordas do dohyo. Sua estrutura modular permite rápida adaptação de estratégias entre combates, enquanto o sistema de tração distribuída maximiza o controle durante as disputas.',
    achievements: [
      'Bicampeão da Winter Challenge - Categoria LEGO',
      'Melhor Construção LEGO no Campeonato Brasileiro de Robótica',
      'Participação na LEGO League International'
    ],
    icon: <Bot size={20} />,
    link: '/project/4',
  },
];
