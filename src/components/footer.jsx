// import { ChevronRight, Globe } from "lucide-react";

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 max-w-2xl mx-auto">
          Combine automation and human support today
        </h1>
        <div className="flex gap-4 justify-center">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Start free trial
            {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
          </button>
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            View demo
            {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
          </button>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Column 1 */}
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold mb-4">Pricing</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Use Cases</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Engage
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Convert
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company Size</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Mid-Market / Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Small Business
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Early Stage
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Financial Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Education
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Healthcare
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-4">Features</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Business Messenger
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Customizable bots
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Automated answers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Product Tours
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Outbound Messages
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Inbox
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Help Center Articles
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Apps + Integrations
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Customer data
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Live Chat
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Mobile Apps
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Mobile Carousels
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Series
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Transactional Messaging
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Surveys
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Switch
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                SMS
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Watch a Demo
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Glossary
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Academy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Webinars
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Product Changes
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                App Store
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Docs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Developers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Status
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Security
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Books and Guides
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Support ROI Calculator
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Community Forum
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Newsroom
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                App Partner Program
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Service Partner Program
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Language Selector and Legal */}
      <div className="border-t pt-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              {/* <Globe className="h-5 w-5" /> */}
              <span className="font-medium">Choose your language</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                English (United States)
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                German
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Spanish
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                French
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Portuguese (Brazil)
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Status
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Security
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Do not share my personal information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
