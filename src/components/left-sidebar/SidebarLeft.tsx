"use client";

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
import IconList from "./IconList";
import { useIconStore } from "@/store/store";


export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [isAllIconsOpen, setIsAllIconsOpen] = useState(false);
  const [isMyIconsOpen, setIsMyIconsOpen] = useState(false);
  const [iconSearch] = useState("");
  const setIcon = useIconStore((state) => state.setIcon);

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Search icons"
                />
                <Button
                  variant={"outline"}
                  className="cursor-pointer border bg-primary"
                >
                  <Shuffle />
                </Button>
              </div>
              <Collapsible onOpenChange={setIsMyIconsOpen}>
                <CollapsibleTrigger className="w-full">
                  <div className="w-full bg-[#242427] flex gap-2 items-center p-2 rounded-md justify-center">
                    <span>My Icons</span>
                    {isMyIconsOpen ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  Yes. Free to use for personal and commercial projects. No
                  attribution required.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible onOpenChange={setIsAllIconsOpen}>
                <CollapsibleTrigger className="w-full">
                  <div className="w-full bg-[#242427] flex gap-2 items-center p-2 rounded-md justify-center">
                    <span>All Icons</span>
                    {isAllIconsOpen ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="text-center p-2">
                  <IconList iconSearch={iconSearch} setIcon={setIcon} />
                  </div>
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
