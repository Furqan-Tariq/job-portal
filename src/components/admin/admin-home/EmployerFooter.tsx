import Image from "next/image"
import Link from "next/link"

export function EmployerFooter() {
  return (
    <footer className="bg-background-darker text-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Applicant Section */}
          <div>
            <h3 className="font-semibold text-sm uppercase mb-4 tracking-wider">
              Applicant
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Search Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Discover companies
                </Link>
              </li>
            </ul>
          </div>

          {/* Employer Section */}
          <div>
            <h3 className="font-semibold text-sm uppercase mb-4 tracking-wider">
              Employer
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Post a job ad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Products & Prices
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  My Employer Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  For Employers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="font-semibold text-sm uppercase mb-4 tracking-wider">
              About Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Cookie settings
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Imprint
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700">
          <div className="mb-4 md:mb-0">
            <svg className="h-8" viewBox="0 0 200 40" fill="white">
              <text x="10" y="30" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold">
                joblocal
              </text>
              <circle cx="5" cy="20" r="8" fill="white" />
            </svg>
          </div>
          <p className="text-sm text-gray-400">
            Powered by joblocal – 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
