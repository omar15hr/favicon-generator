import { SVGProps } from "react";
import { IconName } from "./lib/icons";

export type BgColorType = 'LinearGradient' | 'RadialGradient' | 'Solid';

export interface IconProps extends SVGProps<SVGSVGElement> {
  id: string;
  primaryBgColor: string;
  secondaryBgColor: string;
  bgColorType: BgColorType;
  radialGlare: boolean;
  angle?: number;
  radius?: number;
  strokeWidth: number;
  strokeColor: string;
  noiseTexture: boolean;
  noiseOpacity?: number;
  iconName: IconName;
  color: string;
  iconSize?: number;
  xOffset?: number;
  yOffset?: number;
}