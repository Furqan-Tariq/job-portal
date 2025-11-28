import { EmployerSidebar } from "@/components/admin/admin-home/EmployerSidebar"
import { EmployerHeader } from "@/components/admin/admin-home/EmployerHeader"
import { EmployerFooter } from "@/components/admin/admin-home/EmployerFooter"
import { AllEmployersPageShell } from "@/components/admin/all-employers/AllEmployersPageShell"

export default function AdminAllEmployersPage() {
  return (
    <div className="min-h-screen flex bg-muted">
      {/* Sidebar */}
      <EmployerSidebar />

      <div className="flex flex-1 flex-col">
        {/* Header */}
        <EmployerHeader />

        {/* Main content */}
        <main className="flex-1">
          <AllEmployersPageShell />
        </main>

        {/* Footer */}
        <EmployerFooter />
      </div>
    </div>
  )
}
