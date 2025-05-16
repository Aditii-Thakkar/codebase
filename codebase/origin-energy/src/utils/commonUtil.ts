import styles from '../components/AccountCard.module.css'

export const getBalanceAttributes = (balance: number) => {
    if (balance > 0) return { className: styles.balancePositive, type: 'CR' };
    if (balance < 0) return { className: styles.balanceNegative, type: 'DR' };
    return { className: styles.balanceZero, type: '' };
  };