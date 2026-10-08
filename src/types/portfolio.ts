export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface VideoPrint {
  id: string;
  title: string;
  imageUrl: string;
  timecode?: string;
  aspect?: string;
  cameraInfo?: string;
  colorGrade?: string;
  category?: string;
}

export interface ProjectWork {
  id: string;
  badgeTitle: string;
  title: string;
  videoUrl: string;
  posterUrl: string;
  location?: string;
  year?: string;
  description?: string;
  prints: VideoPrint[];
}

export interface AwardItem {
  id: string;
  title: string;
  festival: string;
  year: string;
  category: string;
  badgeNumber: string;
}

export interface PortfolioData {
  editorName: string;
  editorAlias: string;
  editorRole: string;
  heroPortraitUrl: string;
  bio: string;
  education: EducationItem[];
  skills: string[];
  expertise: string[];
  
  mainProject1: ProjectWork;
  additionalWork1: ProjectWork;
  additionalWork2: ProjectWork;
  additionalPrints: VideoPrint[];
  mainProject2: ProjectWork;

  awards: AwardItem[];

  contact: {
    phone: string;
    email: string;
    instagram: string;
    portraitUrl: string;
    bannerText: string;
  };
}
