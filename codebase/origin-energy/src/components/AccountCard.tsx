import { type FunctionComponent, type ReactElement } from 'react';
import { type Account } from '../types/AccountList';
import styles from './AccountCard.module.css';
import { getBalanceAttributes } from '../utils/commonUtil';

type AccountCardProps = {
  account: Account;
  balance: number;
  handleMakePayment: () => void;
};

export const AccountCard: FunctionComponent<AccountCardProps> = ({
  account,
  balance,
  handleMakePayment,
}: AccountCardProps): ReactElement => {
  const { className: balanceClass, type: balanceType } =
    getBalanceAttributes(balance);

  return (
    <div className={styles.accountCardContainer}>
      <div className={styles.icon}>Icon</div>
      <div className={styles.accountHeader}>
        <div className={styles.accountInfo}>
          <div className={styles.eneryType}>{account.type.toLowerCase()}</div>
          <div>{account.id}</div>
          <div className={styles.address}>{account.address}</div>
        </div>
        <div className={styles.accountBalanceContainer}>
          <span>Account Balance</span>
          <span className={balanceClass}>
            ${balance} {balanceType}
          </span>
        </div>
        <button onClick={handleMakePayment} className={styles.makePaymentBtn}>
          Make a Payment
        </button>
      </div>
    </div>
  );
};
