import type { PremiumTrek } from "../types/trek";

interface Props {
  trek: PremiumTrek;
}

export function PremiumTrekCard({ trek }: Props) {
  return (
    <div className="bg-white rounded-xl shadow">
      <img
        src={trek.images[0]}
        alt={trek.name}
        className="h-48 w-full object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="font-semibold">{trek.name}</h3>
        <p className="text-sm text-gray-500">{trek.location}</p>
      </div>
    </div>
  );
}
