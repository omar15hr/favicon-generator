import { Button } from "@/components/ui/button";

export function DownloadButtons() {
  return (
    <div className="flex items-center justify-end gap-2">
      <Button
        variant="outline"
        className="text-black dark:text-white cursor-pointer"
      >
        Save Favicon
      </Button>
      <Button
        variant="outline"
        className="text-black dark:text-white cursor-pointer"
      >
        Download SVG
      </Button>
      <Button
        variant="outline"
        className="text-black dark:text-white cursor-pointer"
      >
        Download PNG
      </Button>
    </div>
  );
}
