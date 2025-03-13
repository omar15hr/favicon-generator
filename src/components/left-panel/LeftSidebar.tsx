import { Shuffle } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Sidebar, SidebarContent, SidebarHeader, useSidebar } from "../ui/sidebar";
import { Collapsible } from "./Collapsible";
import { useState } from "react";

export function LeftSidebar() {
  const { open } = useSidebar();
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(true);

  return (
    <Sidebar
      side="left"
      className="border-gray-800 h-full"
      style={{ paddingTop: "calc(var(--header-height) + 0.5rem)" }}
      variant="floating"
    >
      <SidebarHeader className="flex flex-row gap-2">
        <Input type="search" placeholder="Search icons" />

        <Button variant="outline">
          <Shuffle />
        </Button>
      </SidebarHeader>

      <SidebarContent className="h-full overflow-hidden">
        
        <div className="flex-1">
          <Collapsible
            trigger="All Icons"
            onCollapsibleChange={(isOpen) => {
              setIsCollapsibleOpen(isOpen);
            }}
            defaultOpen
            className="h-full"
          >
            <div className="h-full py-4 overflow-y-auto contain-strict">
              <div style={{ }} className="w-full relative flex flex-col gap-2">
                <div>
                  
                </div>
              </div>
            </div>
          </Collapsible>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
