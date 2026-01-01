import { Mountain } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a3a52] text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Mountain />
          <span>Gadvede Trekkers</span>
        </div>
        <p className="text-sm text-white/70">
          © 2024 Gadvede Trekkers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
