import { Shuffle } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Sidebar, SidebarHeader } from "../ui/sidebar";

export function LeftSidebar() {
  return (
    <Sidebar
      side="left"
      className="border-gray-800 h-full"
      style={{ paddingTop: "calc(var(--header-height) + 0.5rem)" }}
      variant="floating"
    >
      <SidebarHeader className="flex flex-row gap-2">
        <Input type="search" placeholder="Search icons" />

        <Button variant="outline" >
          <Shuffle />
        </Button>
        
      </SidebarHeader>
    </Sidebar>
  );
}
