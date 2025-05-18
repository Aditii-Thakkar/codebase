import {
  useEffect,
  useState,
  type FunctionComponent,
  type ReactElement,
} from 'react';
import { MOCK_ENERGY_PAYMENT_HISTORY_API } from '../mocks/paymentHistoryAPIMock';
import type { PaymentHistory } from '../types/PaymentHistory';
import styles from './PaymentHistoryPage.module.css';
import { formatDate } from '../utils/commonUtil';

export const PaymentHistoryPage: FunctionComponent = (): ReactElement => {
  const [payments, setPayments] = useState<PaymentHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredSearchData, setFilterSearchData] = useState<PaymentHistory[]>(
    []
  );

  useEffect(() => {
    MOCK_ENERGY_PAYMENT_HISTORY_API().then((data) => {
      setPayments(data);
      setFilterSearchData(data);
      setLoading(false);
    });
  }, []);

  const handleSearchByAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchKeys = event.target.value;
    setSearch(searchKeys);
    const filteredPaymentsByAddress = payments.filter((payment) =>
      payment.address.toLowerCase().includes(search.toLowerCase())
    );
    setFilterSearchData(filteredPaymentsByAddress);
  };

  if (loading) {
    return <div>Loading payment history...</div>;
  }

  return (
    <div className={styles.paymentHistoryContainer}>
      <h1>Payment History</h1>
      <input
        type="text"
        placeholder="🔍 Search by account address"
        value={search}
        onChange={handleSearchByAddress}
        className={styles.searchInput}
      />
      <div className={styles.list}>
        {filteredSearchData.map((payment) => (
          <div key={payment.accountId} className={styles.row}>
            <div>
              <div className={styles.date}>{formatDate(payment.date)}</div>
              <div className={styles.address}>{payment.address}</div>
            </div>
            <div className={styles.amount}>${payment.amount.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
