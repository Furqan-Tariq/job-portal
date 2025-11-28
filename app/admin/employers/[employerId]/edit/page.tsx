import { EmployerSidebar } from "@/components/admin/admin-home/EmployerSidebar"
import { EmployerHeader } from "@/components/admin/admin-home/EmployerHeader"
import { EmployerFooter } from "@/components/admin/admin-home/EmployerFooter"
import { EditEmployerForm } from "@/components/admin/edit-employer/EditEmployerForm"

type PageProps = {
  params: { employerId: string }
}

export default function AdminEditEmployerPage({ params }: PageProps) {
  const { employerId } = params

  return (
    <div className="min-h-screen flex bg-muted">
      {/* Sidebar */}
      <EmployerSidebar />

      <div className="flex flex-1 flex-col">
        {/* Header */}
        <EmployerHeader />

        {/* Main content */}
        <main className="flex-1">
          <EditEmployerForm employerId={employerId} />
        </main>

        {/* Footer */}
        <EmployerFooter />
      </div>
    </div>
  )
}
