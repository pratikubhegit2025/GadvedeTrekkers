import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";
import { downloadTicketPDF } from "../Utils/downloadTicketPDF";

interface BookingState {
  trek: { name: string };
  travelDate: string;
  leadTrekker: { fullName: string };
  quantity: number;
}

export function BookingSuccess() {
  const { state } = useLocation() as { state: BookingState | null };
  const [bookingId] = useState<string>(() => "GVT-" + Math.floor(100000 + Math.random() * 900000));

  if (!state) return <div>No booking data found</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdfaf7] p-6">
      {/* TICKET */}
      <div
        id="ticket"
        className="bg-[#f3e7c9] border-4 border-[#b89b5e] p-6 rounded-xl font-serif max-w-md w-full"
      >
        <h1 className="text-center text-xl mb-4 tracking-wide">
          TREK ENTRY PASS
        </h1>

        <p>
          <strong>Trek:</strong> {state.trek.name}
        </p>
        <p>
          <strong>Date:</strong> {state.travelDate}
        </p>
        <p>
          <strong>Name:</strong> {state.leadTrekker.fullName}
        </p>
        <p>
          <strong>Participants:</strong> {state.quantity}
        </p>
        <p>
          <strong>Booking ID:</strong> {bookingId}
        </p>

        <div className="mt-4 flex justify-center">
          <QRCode value={bookingId} size={100} />
        </div>
      </div>

      {/* DOWNLOAD */}
      <button
        onClick={() => downloadTicketPDF("Gadvede-Trek-Ticket.pdf")}
        className="mt-6 bg-[#2d5f3f] text-white px-6 py-3 rounded-lg hover:bg-[#244d33]"
      >
        Download Ticket PDF
      </button>
    </div>
  );
}
