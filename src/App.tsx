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
import { TrekDetailPage } from "./components/TrekDetailPage";

import { premiumTreks } from "./data/treks";
import { trekDetails } from "./data/trekDetails";

/* --------------------------------
   Trek Detail Wrapper (SEO Page)
---------------------------------- */
function TrekDetailWrapper() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const trek = trekDetails.find((t) => t.slug === slug);

  if (!trek) {
    return <div className="p-6">Trek not found</div>;
  }

  return (
    <TrekDetailPage
      trek={trek}
      onBookNow={() => navigate(`/book/${trek.id}`)}
    />
  );
}

/* --------------------------------
   Booking Wrapper
---------------------------------- */
function BookingWrapper() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const trek = premiumTreks.find((t) => t.id === id);

  if (!trek) {
    return <div className="p-6">Trek not found</div>;
  }

  return (
    <BookingPage
      trek={trek}
      onProceedToPayment={(bookingData) =>
        navigate("/booking-success", {
          state: {
            ...bookingData,
            trek,
          },
        })
      }
    />
  );
}

/* --------------------------------
   App
---------------------------------- */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Trek Detail Page */}
        <Route path="/trek/:slug" element={<TrekDetailWrapper />} />

        {/* Booking Flow */}
        <Route path="/book/:id" element={<BookingWrapper />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}
