import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "../components/header/Header";

export default function Layout() {
  return (
    <div className="flex flex-col w-full text-white h-screen">
      <Header />
      <main className="grid grid-cols-[auto,1fr,auto] overflow-hidden w-full justify-center">
        <SidebarProvider className="gap-2">

        </SidebarProvider>
      </main>
    </div>
  )
}