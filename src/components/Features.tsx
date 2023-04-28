import { FeatureItem, FeatureItemProps } from "./FeatureItem";

export interface FeaturesProps {
  data: FeatureItemProps[];
}

export const Features = ({ data }: FeaturesProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
      {data.map((item) => (
        <div key={item.title} className="flex justify-center items-center">
          <FeatureItem data={item} />
        </div>
      ))}
    </div>
  );
};
