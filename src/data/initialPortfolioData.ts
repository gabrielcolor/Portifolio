import { PortfolioData } from '../types/portfolio';
import {
  HERO_PORTRAIT,
  CONTACT_PORTRAIT,
  TEMPLE_LAKE_HERO,
  MIMI_LOUNGE_STILL_1,
  MIMI_LOUNGE_STILL_2,
  VIDEO_1_PRINTS,
  ADDITIONAL_PRINTS,
  MAIN_PROJECT_2_PRINTS,
  SAMPLE_CINEMATIC_VIDEOS
} from './cinematicAssets';

export const initialPortfolioData: PortfolioData = {
  editorName: 'DUY ANH NGUYEN',
  editorAlias: 'Joe',
  editorRole: 'Freelance Photographer & Video Editor',
  heroPortraitUrl: HERO_PORTRAIT,
  bio: "Hi, my name is Duy Anh (Joe), and I'm a freelance photographer/videographer based in Saigon, HCMC. I love traveling and creative work because it brings me joy while keeping me productive. For the past few years, I have been working in a different field and always find myself seeking a way to express myself creatively. By the end of the day, I believe it is never too late to try and do what you love.",
  
  education: [
    {
      institution: 'University of Architecture HCMC',
      degree: 'Graphic Design',
      period: '2018 - 2022'
    },
    {
      institution: 'Green Academy Vietnam',
      degree: 'Video Editor',
      period: '2022 - 2023'
    }
  ],

  skills: [
    'Photoshop / Lightroom',
    'DaVinci Resolve',
    'Premiere Pro',
    'Illustrator',
    'Drone / Flycam User'
  ],

  expertise: [
    'Color Grading',
    'Photography',
    'Video Editing',
    'Typography',
    'Story Teller / Visual Identity'
  ],

  mainProject1: {
    id: 'main-1',
    badgeTitle: 'NOME VIDEO PRINCIPAL',
    title: 'Cine Scenic Odyssey · Ancient Heritage',
    videoUrl: SAMPLE_CINEMATIC_VIDEOS.mainProject1,
    posterUrl: TEMPLE_LAKE_HERO,
    description: 'Documentário cinematográfico capturado em 4K anamórfico com tratamento de cor tonalidade cinematográfica e ritmo contemplativo.',
    prints: VIDEO_1_PRINTS
  },

  additionalWork1: {
    id: 'add-1',
    badgeTitle: 'TRABALHO ADICIONAL 01',
    title: 'MIMI LOUNGE · Atmospheric Nightlife',
    videoUrl: SAMPLE_CINEMATIC_VIDEOS.mimiLounge1,
    posterUrl: MIMI_LOUNGE_STILL_1,
    location: 'MIMI LOUNGE, HCMC',
    year: '2025',
    description: "From the composition and lighting to the atmosphere, there's something satisfying about giving each space and moment its characteristics.",
    prints: []
  },

  additionalWork2: {
    id: 'add-2',
    badgeTitle: 'TRABALHO ADICIONAL 02',
    title: 'MIMI LOUNGE · Mixology & Mood',
    videoUrl: SAMPLE_CINEMATIC_VIDEOS.mimiLounge2,
    posterUrl: MIMI_LOUNGE_STILL_2,
    location: 'MIMI LOUNGE, HCMC',
    year: '2025',
    description: "Capturing the rhythm behind the bar counter with deep amber grading and intimate focal lengths.",
    prints: []
  },

  additionalPrints: ADDITIONAL_PRINTS,

  mainProject2: {
    id: 'main-2',
    badgeTitle: 'VIDEO TRABALHO PRINCIPAL 02',
    title: 'Imperial Realm · Colors of the East',
    videoUrl: SAMPLE_CINEMATIC_VIDEOS.mainProject2,
    posterUrl: TEMPLE_LAKE_HERO,
    description: 'Edição de ritmo, sonoplastia imersiva e gradação de cores Kodak Film Stock.',
    prints: MAIN_PROJECT_2_PRINTS
  },

  awards: [
    {
      id: 'aw-1',
      title: 'Melhor Edição & Color Grading',
      festival: 'Indie Motion Film Awards',
      year: '2024',
      category: 'Best Narrative & Rhythm Editing',
      badgeNumber: '1'
    },
    {
      id: 'aw-2',
      title: 'Destaque Cinematografia Comercial',
      festival: 'Saigon Creative Video Festival',
      year: '2025',
      category: 'Commercial & Nightlife Category',
      badgeNumber: '1'
    }
  ],

  contact: {
    phone: '(+84) 909.510.803',
    email: 'duyanh83.work@gmail.com',
    instagram: 'Duyanh.83',
    portraitUrl: CONTACT_PORTRAIT,
    bannerText: 'WORK WITH ME!'
  }
};
