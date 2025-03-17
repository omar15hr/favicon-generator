"use client";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp, Shuffle } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { useState } from "react";

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [isAllIconsOpen, setIsAllIconsOpen] = useState(true);
  const [isMyIconsOpen, setIsMyIconsOpen] = useState(false);

  return (
    <Sidebar className="border-r-0" {...props}>
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
      <SidebarRail />
    </Sidebar>
  );
}
