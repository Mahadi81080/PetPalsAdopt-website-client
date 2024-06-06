import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ maxDonationAmount, petName, image }) => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [donationAmount, setDonationAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const donation = donationAmount;
  useEffect(() => {
    if (donation > 0) {
      axiosSecure.post("/create-payment-intent", { donation }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, donation]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setError(error.message);
    } else {
      console.log("donation amount", donationAmount);
      console.log("payment methode", paymentMethod);
      setError("");
    }
    // Confirm card payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("Payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        // now save the payment information in the database
        const payment = {
          email: user.email,
          userPhoto: user.photoURL,
          userName: user.displayName,
          price: donation,
          transactionId: paymentIntent.id,
          date: new Date(),
          petName: petName,
          image: image,
          maxDonationAmount: maxDonationAmount,
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("Payment save", res.data);
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Payment was successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="pb-5 space-y-2">
        <p className="text-sm font-medium leading-snug">Donation Amount *</p>
        <input
          type="number"
          name="donationAmount"
          className="border w-full rounded-md p-2"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          required
        />
      </div>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="bg-blue-300 px-3 py-1 rounded-md my-4"
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {transactionId && (
        <p className="text-green-500">Your transaction id : {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
