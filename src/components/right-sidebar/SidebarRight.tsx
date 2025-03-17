import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { useState } from "react";

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
                  <Button variant={"secondary"} className="w-full">
                    <span>Background Props</span>
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
                    <span>Icon Props</span>
                    {isAllIconsOpen ? <ChevronUp /> : <ChevronDown />}
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
                    <span>Help</span>
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
  );
}
