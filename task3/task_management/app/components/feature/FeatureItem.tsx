import { FeatureItemProps } from "@/app/types/FeatureItemProps";

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  subtitle,
  description,
  features,
  imageUrl,
  imagePosition,
}) => {
  return (
    <div className="mt-6 border-t pt-12">
      <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center ${imagePosition === 'left' ? 'md:flex-row-reverse' : ''}`}>
        <div className={imagePosition === 'left' ? 'md:order-last' : ''}>
          <span className="text-gray-400 uppercase text-xs font-medium">
            {subtitle}
          </span>
          <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-200 text-balance">
            {title}
          </p>
          <p className="text-sm mt-4 text-gray-300 text-balance">
            {description}
          </p>
          <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-400">
            {features.map((feature, index) => (
              <div key={index} className="inline-flex items-center gap-2 text-xs text-gray-400">
                {feature.icon}
                <span className="text-gray-400 font-medium text-sm">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full">
          <img
            src={imageUrl}
            alt="Feature"
            className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;