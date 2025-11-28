import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'
import Link from "next/link"

export function VerificationCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="flex items-start gap-6">
        {/* Mail illustration */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
            <Mail className="w-10 h-10 text-muted-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-foreground mb-2">
            Your account is not yet verified. To do so, please click on the confirmation link that we
            have sent you by email.
          </p>
          <p className="text-foreground mb-2">
            Only after verifying your user account can you publish job advertisements.
          </p>
          {/* <p className="text-muted-foreground">
            <Link href="#" className="text-primary hover:underline">
              Click here
            </Link>
            , to resend the confirmation email.
          </p> */}

          <Button 
            className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            <Mail className="w-4 h-4 mr-2" />
            Resend
          </Button>
        </div>
      </div>
    </div>
  )
}
