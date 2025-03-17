"use client";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp, Shuffle } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { useState, useMemo, useRef, Fragment } from "react";
import { generateIconsGrid, isLucideIcon } from "@/lib/icons";
import { iconStore } from "@/store/store";
import { useVirtualizer } from '@tanstack/react-virtual';

const ITEMS_PER_ROW = 4;

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [isAllIconsOpen, setIsAllIconsOpen] = useState(true);
  const [isMyIconsOpen, setIsMyIconsOpen] = useState(false);

  const icons = iconStore(state => state.icon);
  const setIcon = iconStore(state => state.setIcon);

  const parentRef = useRef<HTMLDivElement>(null);
  const [iconSearch, setIconSearch] = useState('');
  const filteredIcons = Object.entries(icons).filter(([key]) => key.toLowerCase().includes(iconSearch.toLowerCase()));
  const { open } = useSidebar();

  console.log(icons);
  
  const rows = useMemo( () => generateIconsGrid({
    columns: ITEMS_PER_ROW,
    items: filteredIcons
  }),
  [filteredIcons]);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 85,
    enabled: open && isAllIconsOpen,
    overscan: 5,
  });

  const items = rowVirtualizer.getVirtualItems();

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
                {items.map((row) => (
                    <div
                      key={row.key}
                      ref={rowVirtualizer.measureElement}
                      className="grid grid-cols-[repeat(4,1fr)] gap-2"
                    >
                      {rows[row.index].map(([iconName, IconComponent]) => {
                        if (!IconComponent) return null;

                        return (
                          <Fragment key={iconName}>
                            <Button
                              variant="outline"
                              onClick={() => {
                                if (!isLucideIcon(iconName)) return;
                                setIcon({ ...icons, iconName });
                              }}
                              className="rounded-md [&_svg]:size-6 aspect-square w-full h-auto"
                            >
                              <IconComponent />
                            </Button>
                          </Fragment>
                        );
                      })}
                    </div>
                  ))}
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
