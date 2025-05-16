import { useState, type FunctionComponent, type ReactElement } from 'react';
import styles from './PaymentForm.module.css';

type CardDetails = {
  cardNumber: string;
  expiry: string;
  cvv: string;
  amount: number;
};

export const PaymentForm: FunctionComponent = (): ReactElement => {
  const [isPaying, setIsPaying] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState<CardDetails>({
    cardNumber: '',
    expiry: '',
    cvv: '',
    amount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'amount' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPaying(true);
    try {
      console.log('Submitted payment data:', {
        formData,
      });

      await new Promise((res) => setTimeout(res, 1000));

      setPaymentSuccess(true);
    } catch (err) {
      console.log('Payment failed.');
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <form className={styles.paymentContainer} onSubmit={handleSubmit}>
      {!paymentSuccess ? (
        <>
          <h2>Make a Payment</h2>
          <label htmlFor="amount">How much would you like to pay?</label>
          <input
            type="number"
            placeholder="Amount"
            id="amount"
            name="amount"
            className={styles.input}
            onChange={handleChange}
            required
          />
          <label htmlFor="cardNumber">How would you like to pay</label>
          <input
            id="cardNumber"
            type="text"
            placeholder="Card Number"
            name="cardNumber"
            className={styles.input}
            onChange={handleChange}
            pattern="\d{13,19}"
            required
          />
          <div className={styles.cardExpiryContainer}>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              pattern="^(0[1-9]|1[0-2])\/\d{2}$"
              maxLength={5}
              className={`${styles.input} ${styles.cardExpiryInput}`}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              className={`${styles.input} ${styles.cardExpiryInput}`}
              onChange={handleChange}
              required
            />
          </div>
          <button className={styles.payBtn} type="submit">
            {isPaying ? 'Paying...' : 'Pay'}
          </button>
        </>
      ) : (
        <div>Payment Successful</div>
      )}
    </form>
  );
};
