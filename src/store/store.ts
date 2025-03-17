import { Icons } from "@/lib/icons";
import { IconProps } from "@/types";
import { create } from "zustand";

type IconStore = {
  icon: IconProps;
  setIcon: (icon: IconProps) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  svgElement: SVGSVGElement | null;
  setSVGElement: (svg: SVGSVGElement | null) => void;
  lastIcons: IconProps[];
  setLastIcons: (icons: IconProps[]) => void;
  importedIcons: Icons;
  setImportedIcons: (icons: Icons) => void;
}

const DEFAULT_ICON: IconProps = {
	id: crypto.randomUUID(),
	primaryBgColor: "#7692bc",
	secondaryBgColor: "#0c1118",
	radialGlare: false,
	bgColorType: "RadialGradient",
	angle: 0,
	radius: 32,
	strokeWidth: 2,
	strokeColor: "#ffffff",
	noiseTexture: false,
	noiseOpacity: 0,
	iconName: "Bike",
	iconSize: 400,
	color: "#ffffff",
	xOffset: 0,
	yOffset: 0,
};

export const iconStore = create<IconStore>((set) => ({
  icon: DEFAULT_ICON,
  setIcon: (icon) => set({ icon }),
  undo: () => { },
  redo: () => { },
  canUndo: false,
  canRedo: false,
  svgElement: null,
  setSVGElement: (svg) => set({ svgElement: svg }),
  lastIcons: [],
  setLastIcons: (icons) => set({ lastIcons: icons }),
  importedIcons: ({} as Icons),
  setImportedIcons: (icons) => set({ importedIcons: icons }),
}))