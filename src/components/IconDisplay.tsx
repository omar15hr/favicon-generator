// components/IconDisplay.tsx
import { useIconStore } from "@/store/store";
import Icon from "@/components/IconComponent";

export function IconDisplay() {
  const { icon, setSVGElement } = useIconStore();

  return (
    <div
      className="flex items-center justify-center h-full w-full"
      style={{
        backgroundColor: icon.primaryBgColor,
        background:
          icon.bgColorType === "RadialGradient"
            ? `radial-gradient(circle, ${icon.primaryBgColor}, ${icon.secondaryBgColor})`
            : icon.primaryBgColor,
      }}
    >
      <Icon
        name={icon.iconName}
        color={icon.color}
        size={icon.iconSize}
        strokeWidth={icon.strokeWidth}
        ref={(svg) => setSVGElement(svg)}
      />
    </div>
  );
}