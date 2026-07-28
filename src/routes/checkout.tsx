import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { CreditCard, Smartphone, Building2, Lock, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

function CheckoutPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "" });
  const [processing, setProcessing] = useState(false);

  const orderDetails = {
    serviceType: "CNC Machine Repair",
    technician: "Ravi K.",
    date: "Tomorrow, 10:00 AM",
    machine: "CNC X200",
    serviceFee: 2500,
    travelCharge: 300,
    taxes: 430,
    escrowFee: 200,
  };

  const total = orderDetails.serviceFee + orderDetails.travelCharge + orderDetails.taxes + orderDetails.escrowFee;

  const handlePayment = async () => {
    setProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      navigate({ to: "/booking" });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <h1 className="text-4xl font-semibold mb-8">Complete Payment</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Summary */}
            <div className="surface-card p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 p-4 bg-secondary/30 rounded-lg mb-4">
                <div className="flex justify-between">
                  <span>{orderDetails.serviceType}</span>
                  <span className="font-semibold">₹{orderDetails.serviceFee}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Technician: {orderDetails.technician}</span>
                  <span>Schedule: {orderDetails.date}</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="surface-card p-6">
              <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {[
                  { id: "upi", icon: Smartphone, label: "UPI", desc: "Google Pay, PhonePe" },
                  { id: "card", icon: CreditCard, label: "Card", desc: "Debit/Credit Card" },
                  { id: "netbanking", icon: Building2, label: "Net Banking", desc: "All major banks" },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`p-4 rounded-lg border-2 transition-colors text-center ${
                      paymentMethod === method.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <method.icon className="size-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold text-sm">{method.label}</div>
                    <div className="text-xs text-muted-foreground">{method.desc}</div>
                  </button>
                ))}
              </div>

              {/* UPI Payment */}
              {paymentMethod === "upi" && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">UPI ID</label>
                    <input
                      type="text"
                      placeholder="yourname@upi"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 py-2 border border-border rounded-lg hover:bg-secondary text-sm font-semibold">
                      Google Pay
                    </button>
                    <button className="flex-1 py-2 border border-border rounded-lg hover:bg-secondary text-sm font-semibold">
                      PhonePe
                    </button>
                    <button className="flex-1 py-2 border border-border rounded-lg hover:bg-secondary text-sm font-semibold">
                      BHIM
                    </button>
                  </div>
                </div>
              )}

              {/* Card Payment */}
              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background font-mono"
                      maxLength="19"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                        maxLength="3"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Net Banking */}
              {paymentMethod === "netbanking" && (
                <div>
                  <label className="text-sm font-medium mb-3 block">Select Your Bank</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["HDFC Bank", "ICICI Bank", "SBI", "Axis Bank", "Kotak", "IndusInd"].map((bank) => (
                      <button
                        key={bank}
                        className="p-3 border border-border rounded-lg hover:bg-secondary text-sm font-semibold"
                      >
                        {bank}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Escrow Payment Info */}
            <div className="surface-card p-6 bg-blue-500/5 border border-blue-500/30">
              <h3 className="font-semibold flex items-center gap-2 mb-3">
                <Lock className="size-5" /> Secure Escrow Payment
              </h3>
              <p className="text-sm text-muted-foreground">
                Your payment is held securely in escrow until the repair is completed and verified. This protects both you and the technician.
              </p>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="surface-card p-6 sticky top-32">
              <h2 className="text-xl font-semibold mb-4">Payment Breakdown</h2>
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                {[
                  { label: "Service Fee", amount: orderDetails.serviceFee },
                  { label: "Travel Charge", amount: orderDetails.travelCharge },
                  { label: "Taxes & GST", amount: orderDetails.taxes },
                  { label: "Escrow Fee", amount: orderDetails.escrowFee },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold">₹{item.amount}</span>
                  </div>
                ))}
              </div>

              <div className="text-2xl font-bold text-primary mb-6">Total: ₹{total}</div>

              <button
                onClick={handlePayment}
                disabled={processing}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  processing
                    ? "bg-secondary text-muted-foreground"
                    : "bg-[image:var(--gradient-accent)] text-primary-foreground hover:shadow-[var(--shadow-glow)]"
                }`}
              >
                {processing ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Check className="size-5" /> Pay ₹{total}
                  </>
                )}
              </button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                By clicking Pay, you agree to our terms and conditions
              </p>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-border space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <Lock className="size-4 text-green-600" />
                  <span>SSL Encrypted Payment</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Check className="size-4 text-green-600" />
                  <span>100% Safe & Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
