import { Collapsible } from "@radix-ui/react-collapsible";
import { Sidebar, SidebarContent } from "../ui/sidebar";
import { HandleBackground } from "./HandleBackground";

export function RightSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <Collapsible>
          <HandleBackground />
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  )
}