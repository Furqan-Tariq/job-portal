"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { X, Plus, Info } from "lucide-react"

export function ApplicationProcessCard() {
  const [showSecondEmail, setShowSecondEmail] = useState(false)

  return (
    <Card>
      <CardContent className="p-6">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          {/* Left Description Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-foreground mb-3">APPLICATION PROCESS</h3>
            <div className="text-sm text-muted-foreground">
              <p>Specify how candidates can apply for this job.</p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Type of application */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Label className="text-base font-semibold">
                  Type of application <span className="text-destructive">*</span>
                </Label>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Select the process you want to use.</p>
              <RadioGroup defaultValue="express" className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="express" id="express" className="border-[#FDB913] text-[#FDB913]" />
                  <Label htmlFor="express" className="font-normal cursor-pointer">
                    Express application
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="standard" className="border-[#FDB913] text-[#FDB913]" />
                  <Label htmlFor="standard" className="font-normal cursor-pointer">
                    Standard application
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="own" id="own" className="border-[#FDB913] text-[#FDB913]" />
                  <Label htmlFor="own" className="font-normal cursor-pointer">
                    Own application system
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Email for applications */}
            <div className="space-y-3">
              <Label htmlFor="email" className="text-base font-semibold">
                E-mail for applications <span className="text-destructive">*</span>
              </Label>
              <div className="flex items-center gap-2">
                <Input id="email" type="email" defaultValue="furqandj.ft@gmail.com" className="text-base" required />
                <Button type="button" variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                  <X className="h-4 w-4 mr-1" />
                  Remove email
                </Button>
              </div>

              {showSecondEmail && <Input type="email" placeholder="Enter your email address" className="text-base" />}

              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-[#FDB913] hover:text-[#FDB913] hover:bg-[#FDB913]/10"
                onClick={() => setShowSecondEmail(!showSecondEmail)}
              >
                <Plus className="h-4 w-4 mr-1" />
                Add email
              </Button>

              <p className="text-sm text-muted-foreground">
                Enter an email address to which applications should be forwarded to this job advertisement.
              </p>
            </div>

            {/* Express Application features */}
            <div className="space-y-3">
              <Label className="text-base font-normal">
                Which of the following Express Application features do you want to enable?
              </Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="cv"
                    defaultChecked
                    className="border-[#FDB913] data-[state=checked]:bg-[#FDB913] data-[state=checked]:border-[#FDB913]"
                  />
                  <Label htmlFor="cv" className="font-normal cursor-pointer">
                    Curriculum vitae required
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="cover"
                    defaultChecked
                    className="border-[#FDB913] data-[state=checked]:bg-[#FDB913] data-[state=checked]:border-[#FDB913]"
                  />
                  <Label htmlFor="cover" className="font-normal cursor-pointer">
                    Cover letter required
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="questions"
                    defaultChecked
                    className="border-[#FDB913] data-[state=checked]:bg-[#FDB913] data-[state=checked]:border-[#FDB913]"
                  />
                  <Label htmlFor="questions" className="font-normal cursor-pointer">
                    Skill Questions Required
                  </Label>
                </div>
              </div>
            </div>

            {/* Qualification questions */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Qualification questions</Label>
              <Input placeholder="Enter qualification question" className="text-base" />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="mandatory"
                  className="border-[#FDB913] data-[state=checked]:bg-[#FDB913] data-[state=checked]:border-[#FDB913]"
                />
                <Label htmlFor="mandatory" className="font-normal cursor-pointer">
                  Mandatory question.
                </Label>
              </div>
              <Button type="button" className="bg-[#FDB913] hover:bg-[#FDB913]/90 text-black font-semibold">
                Add a question
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
