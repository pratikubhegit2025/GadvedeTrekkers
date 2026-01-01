import type { PremiumTrek } from "../types/trek";
import { useNavigate } from "react-router-dom";

interface Props {
  trek: PremiumTrek;
}

export function PremiumTrekCard({ trek }: Props) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img
        src={trek.images[0]}
        alt={trek.name}
        className="h-48 w-full object-cover rounded-t-xl"
      />

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-900">{trek.name}</h3>
        <p className="text-sm text-gray-500">{trek.location}</p>

        <button
          onClick={() => navigate(`/book/${trek.id}`)}
          className="mt-3 w-full bg-[#2d5f3f] text-white px-4 py-2 rounded-lg hover:bg-[#244d33]"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
