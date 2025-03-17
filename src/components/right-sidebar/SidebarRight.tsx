import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { useState } from "react";
import { BackgroundProps } from "./BackgroundProps";
import { IconsProps } from "./IconsProps";
import { Help } from "./Help";

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [isAllIconsOpen, setIsAllIconsOpen] = useState(true);
  const [isMyIconsOpen, setIsMyIconsOpen] = useState(false);

  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden lg:flex top-0 h-svh border-l"
      {...props}
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible onOpenChange={setIsMyIconsOpen}>
                <CollapsibleTrigger className="w-full">
                  <div className="w-full bg-[#242427] flex gap-2 items-center p-2 rounded-md justify-center">
                    <span>Background Props</span>
                    {isMyIconsOpen ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <BackgroundProps />
                </CollapsibleContent>
              </Collapsible>
              <Collapsible onOpenChange={setIsAllIconsOpen}>
                <CollapsibleTrigger className="w-full">
                  <div className="w-full bg-[#242427] flex gap-2 items-center p-2 rounded-md justify-center">
                    <span>Icon Props</span>
                    {isAllIconsOpen ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                 <IconsProps />
                </CollapsibleContent>
              </Collapsible>
              <Collapsible onOpenChange={setIsAllIconsOpen}>
                <CollapsibleTrigger className="w-full">
                  <div className="w-full bg-[#242427] flex gap-2 items-center p-2 rounded-md justify-center">
                    <span>Help</span>
                    {isAllIconsOpen ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Help />
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
