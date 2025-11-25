"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export type CompanyInformationData = {
  enterprise: string
  logoFile: File | null
}

type CompanyInformationCardProps = {
  value?: CompanyInformationData
  onChange: (value: CompanyInformationData) => void
}

export function CompanyInformationCard({
  value,
  onChange,
}: CompanyInformationCardProps) {
  const [enterprise, setEnterprise] = useState(value?.enterprise ?? "")
  const [logoFile, setLogoFile] = useState<File | null>(value?.logoFile ?? null)

  useEffect(() => {
    onChange({ enterprise, logoFile })
  }, [enterprise, logoFile, onChange])

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null
    setLogoFile(file)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          {/* Left Description Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              COMPANY INFORMATION
            </h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                Complete the details of your company. These are used for your employer profile.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-2 space-y-5">
            {/* Enterprise */}
            <div className="space-y-2">
              <Label htmlFor="enterprise" className="text-base font-semibold">
                Enterprise
              </Label>
              <Input
                id="enterprise"
                placeholder="Enter the name of the company"
                className="text-base"
                value={enterprise}
                onChange={(e) => setEnterprise(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">Name of Employer</p>
            </div>

            {/* Logo */}
            <div className="space-y-2">
              <Label className="text-base font-semibold">Logo</Label>

              <div className="flex items-center gap-4">
                <Input
                  id="company-logo-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />

                <Button
                  type="button"
                  variant="secondary"
                  className="bg-[#444547] hover:bg-[#444547]/90 text-white"
                  onClick={() =>
                    document.getElementById("company-logo-input")?.click()
                  }
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload
                </Button>

                {logoFile && (
                  <p className="text-sm text-muted-foreground truncate max-w-xs">
                    {logoFile.name}
                  </p>
                )}
              </div>

              <p className="text-sm text-muted-foreground">
                Add a logo of the company.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
