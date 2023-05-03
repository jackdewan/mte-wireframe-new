import { HeroIconType } from "../util/types";

export interface FeatureItemProps {
  title: string;
  Icon: HeroIconType | React.FunctionComponent;
}

export const FeatureItem = ({ title, Icon }: FeatureItemProps) => {
  return (
    <div className="flex justify-center flex-col items-center py-10 text-gray-600">
      <div className="mb-5 border-4 border-gray-400 rounded-full">
        <Icon className="h-20 w-20 lg:h-24 lg:w-24 p-4 text-gray-500" />
      </div>
      <div className="text-2xl">{title}</div>
    </div>
  );
};
