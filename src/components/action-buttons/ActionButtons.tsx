import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

const ActionButtons = () => {
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerHeight}px`
      );
    }
  }, []);

  return (
    <header ref={headerRef}>
      <DownloadButtons />
    </header>
  );
};

export default ActionButtons;

export const DownloadButtons = () => {
  return (
    <div className="flex items-center justify-end gap-2">
      <Button variant="outline" className="cursor-pointer">Save Favicon</Button>
      <Button variant="outline" className="cursor-pointer">Download SVG</Button>
      <Button variant="outline" className="cursor-pointer">Download PNG</Button>
    </div>
  );
};
