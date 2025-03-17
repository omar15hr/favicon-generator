import { memo } from "react";
import { Button } from "@/components/ui/button.tsx";
import { icons, isLucideIcon } from '@/lib/icons.ts';
import { IconProps } from "@/types";


type Props = {
  iconSearch: string;
  setIcon: (icon: IconProps) => void;
}

const IconList = ({ iconSearch, setIcon }: Props) => {
  return Object.entries(icons)
    .filter(([key]) => key.toLowerCase().includes(iconSearch.toLowerCase()))
    .map(([key, IconComponent]) => (
      <Button
        key={key}
        variant="outline"
        onClick={() => {
          if (!isLucideIcon(key)) return;
          setIcon({
            ...setIcon,
            iconName: key,
            id: crypto.randomUUID(),
            primaryBgColor: "",
            secondaryBgColor: "",
            bgColorType: "RadialGradient",
            radialGlare: false,
            strokeWidth: 0,
            strokeColor: "",
            noiseTexture: false,
            color: ""
          });
        }}
        className="rounded-md aspect-square w-10 h-10 [&_svg]:size-6 m-1"
      >
        <IconComponent />
      </Button>
    ));
};

export default memo(IconList, (prevProps, props) => prevProps.iconSearch === props.iconSearch);