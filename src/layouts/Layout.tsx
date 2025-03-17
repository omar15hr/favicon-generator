import ActionButtons from "@/components/action-buttons/ActionButtons";
import { SidebarLeft } from "@/components/left-sidebar/SidebarLeft";
import { SidebarRight } from "@/components/right-sidebar/SidebarRight";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function Layout() {
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        <div className="self-center">
          <ActionButtons />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50" />
        </div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
}
