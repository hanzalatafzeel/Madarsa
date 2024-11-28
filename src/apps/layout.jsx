import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/* <SidebarTrigger  className="bg-slate-50 mx-0" /> */}
      <main>
        <div>
            <h1>Main Content Goes Here</h1>
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}


