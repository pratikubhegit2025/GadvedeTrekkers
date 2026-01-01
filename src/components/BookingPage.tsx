import { useState } from 'react';
import { Calendar, MapPin, Plus, Minus, ChevronLeft } from 'lucide-react';

interface BookingPageProps {
  trek: {
    id: string;
    name: string;
    location: string;
    duration: string;
    images: string[];
    price: number;
    selectedDate?: string;
  };
  onBack?: () => void;
  onProceedToPayment: (bookingData: BookingData) => void;
}

export interface BookingData {
  leadTrekker: {
    fullName: string;
    contactNumber: string;
    whatsappNumber: string;
    email: string;
    city: string;
  };
  travelDate: string;
  quantity: number;
  participants: {
    fullName: string;
    contactNumber: string;
  }[];
  totalAmount: number;
}

export function BookingPage({ trek, onBack, onProceedToPayment }: BookingPageProps) {
  const [quantity, setQuantity] = useState(1);
  const currentImageIndex = 0;
  const [isWhatsAppSame, setIsWhatsAppSame] = useState(true);
  
  const [leadTrekker, setLeadTrekker] = useState({
    fullName: '',
    contactNumber: '',
    whatsappNumber: '',
    email: '',
    city: '',
  });

  const [travelDate, setTravelDate] = useState(trek.selectedDate || '');
  
  const [participants, setParticipants] = useState<{ fullName: string; contactNumber: string }[]>([]);

  // Update participants array when quantity changes
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    
    const participantCount = newQuantity - 1; // Excluding lead trekker
    if (participantCount > participants.length) {
      // Add more participants
      const newParticipants = [...participants];
      for (let i = participants.length; i < participantCount; i++) {
        newParticipants.push({ fullName: '', contactNumber: '' });
      }
      setParticipants(newParticipants);
    } else {
      // Remove excess participants
      setParticipants(participants.slice(0, participantCount));
    }
  };

  const updateParticipant = (index: number, field: 'fullName' | 'contactNumber', value: string) => {
    const updated = [...participants];
    updated[index][field] = value;
    setParticipants(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const bookingData: BookingData = {
      leadTrekker: {
        ...leadTrekker,
        whatsappNumber: isWhatsAppSame ? leadTrekker.contactNumber : leadTrekker.whatsappNumber,
      },
      travelDate,
      quantity,
      participants,
      totalAmount: trek.price * quantity,
    };

    onProceedToPayment(bookingData);
  };

  const totalAmount = trek.price * quantity;

  return (
    <div className="min-h-screen bg-[#fdfaf7] py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-[#2d5f3f] transition-colors"
          >
            <ChevronLeft className="size-5" />
            <span>Back to Trek Details</span>
          </button>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h1 className="mb-6 text-gray-900">Complete Your Booking</h1>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Trek Summary */}
                <div className="bg-[#f3f3f5] rounded-lg p-4">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={trek.images[currentImageIndex]}
                        alt={trek.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-gray-900">{trek.name}</h3>
                      <div className="flex flex-col gap-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="size-4" />
                          <span>{trek.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="size-4" />
                          <span>{trek.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lead Trekker Details */}
                <div>
                  <h2 className="mb-4 text-gray-900">Lead Trekker Details</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={leadTrekker.fullName}
                        onChange={(e) => setLeadTrekker({ ...leadTrekker, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f] focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={leadTrekker.contactNumber}
                        onChange={(e) => setLeadTrekker({ ...leadTrekker, contactNumber: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f] focus:border-transparent"
                        placeholder="+91 "
                        pattern="[0-9]{10}"
                      />
                    </div>
                  </div>

                  {/* WhatsApp Number Logic */}
                  <div className="mt-4">
                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isWhatsAppSame}
                        onChange={(e) => setIsWhatsAppSame(e.target.checked)}
                        className="size-4 rounded border-gray-300 text-[#2d5f3f] focus:ring-[#2d5f3f]"
                      />
                      <span>Is this your WhatsApp number?</span>
                    </label>
                  </div>

                  {!isWhatsAppSame && (
                    <div className="mt-4">
                      <label className="block text-sm text-gray-700 mb-2">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required={!isWhatsAppSame}
                        value={leadTrekker.whatsappNumber}
                        onChange={(e) => setLeadTrekker({ ...leadTrekker, whatsappNumber: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f] focus:border-transparent"
                        placeholder="+91 "
                        pattern="[0-9]{10}"
                      />
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Email ID <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={leadTrekker.email}
                        onChange={(e) => setLeadTrekker({ ...leadTrekker, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={leadTrekker.city}
                        onChange={(e) => setLeadTrekker({ ...leadTrekker, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f] focus:border-transparent"
                        placeholder="Pune, Mumbai, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* Travel Date & Quantity */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Travel Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Number of Participants <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(quantity - 1)}
                        className="size-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-[#2d5f3f] hover:text-[#2d5f3f] transition-colors"
                        disabled={quantity <= 1}
                      >
                        <Minus className="size-4" />
                      </button>
                      <span className="text-lg text-gray-900 min-w-[3rem] text-center">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(quantity + 1)}
                        className="size-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-[#2d5f3f] hover:text-[#2d5f3f] transition-colors"
                      >
                        <Plus className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional Participants */}
                {participants.length > 0 && (
                  <div>
                    <h2 className="mb-4 text-gray-900">Additional Participant Details</h2>
                    <div className="space-y-4">
                      {participants.map((participant, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg">
                          <h3 className="mb-3 text-gray-900 text-base">Participant {index + 2}</h3>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm text-gray-700 mb-2">
                                Full Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                required
                                value={participant.fullName}
                                onChange={(e) => updateParticipant(index, 'fullName', e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f] focus:border-transparent"
                                placeholder="Enter full name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-700 mb-2">
                                Contact Number <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="tel"
                                required
                                value={participant.contactNumber}
                                onChange={(e) => updateParticipant(index, 'contactNumber', e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2d5f3f] focus:border-transparent"
                                placeholder="+91 "
                                pattern="[0-9]{10}"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Submit Button - Mobile */}
                <button
                  type="submit"
                  className="w-full lg:hidden rounded-lg bg-gradient-to-r from-[#2d5f3f] to-[#1e4428] px-6 py-4 text-white hover:shadow-lg hover:shadow-[#2d5f3f]/30 transition-all"
                >
                  Proceed to Payment - ₹{totalAmount.toLocaleString()}
                </button>
              </form>
            </div>
          </div>

          {/* Right: Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h2 className="mb-4 text-gray-900">Booking Summary</h2>
              
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Trek</span>
                  <span className="text-gray-900">{trek.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Date</span>
                  <span className="text-gray-900">{travelDate || 'Not selected'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Participants</span>
                  <span className="text-gray-900">{quantity}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700">Price per person</span>
                  <span className="text-gray-900">₹{trek.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Quantity</span>
                  <span className="text-gray-900">× {quantity}</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline mb-6 pt-6 border-t border-gray-200">
                <span className="text-gray-900">Total Amount</span>
                <span className="text-2xl text-gray-900">₹{totalAmount.toLocaleString()}</span>
              </div>

              <button
                onClick={handleSubmit}
                className="hidden lg:block w-full rounded-lg bg-gradient-to-r from-[#2d5f3f] to-[#1e4428] px-6 py-4 text-white hover:shadow-lg hover:shadow-[#2d5f3f]/30 transition-all"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
