import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bell } from "lucide-react"

export function JobAlertBanner() {
  return (
    <Card className="border-2 border-[#FDB714]/30 bg-[#FFF9E6] p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Bell className="h-5 w-5 text-[#FDB714]" />
          <span className="text-sm font-medium">Activate job alert now!</span>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="border-[#FDB714] text-[#FDB714] hover:bg-[#FDB714] hover:text-white bg-transparent"
        >
          Activate
        </Button>
      </div>
    </Card>
  )
}
