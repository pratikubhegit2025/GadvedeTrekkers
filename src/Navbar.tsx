import { useState } from "react";
import {
  Mountain,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTreks, setShowTreks] = useState(false);
  const [showTours, setShowTours] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2 text-[#2d5f3f] font-medium">
          <Mountain className="size-7" />
          Gadvede Trekkers
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {/* Treks */}
          <div
            className="relative"
            onMouseEnter={() => setShowTreks(true)}
            onMouseLeave={() => setShowTreks(false)}
          >
            <button className="flex items-center gap-1">
              Treks <ChevronDown size={14} />
            </button>

            {showTreks && (
              <Dropdown>
                <DropdownItem>Sahyadri Treks</DropdownItem>
                <DropdownItem>Himalayan Treks</DropdownItem>
              </Dropdown>
            )}
          </div>

          {/* Tours */}
          <div
            className="relative"
            onMouseEnter={() => setShowTours(true)}
            onMouseLeave={() => setShowTours(false)}
          >
            <button className="flex items-center gap-1">
              Tours <ChevronDown size={14} />
            </button>

            {showTours && (
              <Dropdown>
                <DropdownItem>Backpacking</DropdownItem>
                <DropdownItem>Group Tours</DropdownItem>
              </Dropdown>
            )}
          </div>

          <a href="#rentals">Rentals</a>
          <a href="#faq">FAQ</a>

          <button className="bg-[#2d5f3f] text-white px-4 py-2 rounded-lg">
            Book Now
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="px-4 py-4 space-y-3 text-sm">
            <div className="font-medium">Treks</div>
            <div className="pl-3 text-gray-600">Sahyadri Treks</div>
            <div className="pl-3 text-gray-600">Himalayan Treks</div>

            <div className="font-medium pt-2">Tours</div>
            <div className="pl-3 text-gray-600">Backpacking</div>
            <div className="pl-3 text-gray-600">Group Tours</div>

            <a href="#rentals" className="block pt-2">
              Rentals
            </a>
            <a href="#faq" className="block">
              FAQ
            </a>

            <button className="mt-4 w-full bg-[#2d5f3f] text-white py-2 rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

/* -----------------------------
   Helpers
------------------------------ */

function Dropdown({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
      {children}
    </div>
  );
}

function DropdownItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
      {children}
    </div>
  );
}
