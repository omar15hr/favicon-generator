import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

const Header = () => {
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

export default Header;

export const DownloadButtons = () => {
  return (
    <div className="flex items-center justify-end gap-2">
      <Button variant="outline">Save Favicon</Button>
      <Button variant="outline">Download SVG</Button>
      <Button variant="outline">Download PNG</Button>
    </div>
  );
};
