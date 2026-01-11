import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";

import { HomePage } from "./components/HomePage";
import { BookingPage } from "./components/BookingPage";
import { BookingSuccess } from "./Pages/bookingSuccess";
import { premiumTreks } from "./data/treks";

/* ------------------------------
   Booking Wrapper
--------------------------------*/
function BookingWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  const trek = premiumTreks.find((t) => t.id === id);

  if (!trek) return <div className="p-6">Trek not found</div>;

  return (
    <BookingPage
      trek={trek}
      onProceedToPayment={(bookingData) => {
        navigate("/booking-success", {
          state: {
            ...bookingData,
            trek,
          },
        });
      }}
    />
  );
}

/* ------------------------------
   App
--------------------------------*/
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookingWrapper />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}
