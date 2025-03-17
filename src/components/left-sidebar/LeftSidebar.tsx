import { ChevronDown, ChevronUp, Shuffle } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

export function LeftSidebar() {
  const [isAllIconsOpen, setIsAllIconsOpen] = useState(true);
  const [isMyIconsOpen, setIsMyIconsOpen] = useState(false);

  return (
    <SidebarProvider>
      <Sidebar side="left" variant="floating">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <div className="flex items-center gap-2">
                  <Input placeholder="Search icons" />
                  <Button
                    variant={"outline"}
                    className="cursor-pointer border bg-primary"
                  >
                    <Shuffle />
                  </Button>
                </div>
                <Collapsible onOpenChange={setIsMyIconsOpen}>
                  <CollapsibleTrigger className="w-full">
                    <Button variant={"secondary"} className="w-full">
                      <span>My Icons</span>
                      {isMyIconsOpen ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    Yes. Free to use for personal and commercial projects. No
                    attribution required.
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible onOpenChange={setIsAllIconsOpen}>
                  <CollapsibleTrigger className="w-full">
                    <Button variant={"outline"} className="w-full">
                      <span>All Icons</span>
                      {isAllIconsOpen ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    Yes. Free to use for personal and commercial projects. No
                    attribution required.
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarTrigger className="mt-1 text-white" />
    </SidebarProvider>
  );
}
