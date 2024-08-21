import React, { useState } from 'react';
import axios from 'axios';

const PaymentPage = ({ bookingDetails, onPaymentSuccess, onPaymentFailure }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState('credit_card');

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const paymentData = {
                bookingId: bookingDetails.id,
                amount: bookingDetails.amount,
                paymentMethod,
            };

            const response = await axios.post('/payments', paymentData);
            setLoading(false);

            if (response.data.success) {
                onPaymentSuccess(response.data);
            } else {
                setError('Payment failed. Please try again.');
                onPaymentFailure();
            }
        } catch (err) {
            setError('An error occurred during payment. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="payment-page">
            <h2>Payment for Session with {bookingDetails.mentorName}</h2>
            <p>Total Amount: ${bookingDetails.amount}</p>

            <form onSubmit={handlePayment} className="payment-form">
                <div className="form-group">
                    <label htmlFor="paymentMethod">Select Payment Method</label>
                    <select
                        id="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required
                    >
                        <option value="credit_card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank_transfer">Bank Transfer</option>
                    </select>
                </div>

                {error && <div className="error-message">{error}</div>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Processing Payment...' : 'Make Payment'}
                </button>
            </form>
        </div>
    );
};

export default PaymentPage;
