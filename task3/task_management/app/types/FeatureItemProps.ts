export interface FeatureItemProps {
    title: string;
    subtitle: string;
    description: string;
    features: {
      icon: React.ReactNode;
      text: string;
    }[];
    imageUrl: string;
    imagePosition: 'left' | 'right';
  }