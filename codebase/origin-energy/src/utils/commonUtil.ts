import styles from '../components/AccountCard.module.css'

export const getBalanceAttributes = (balance: number) => {
    if (balance > 0) return { className: styles.balancePositive, type: 'CR' };
    if (balance < 0) return { className: styles.balanceNegative, type: 'DR' };
    return { className: styles.balanceZero, type: '' };
  };

  /**
 * Formats a date string or Date object to "Month Day, Year" (e.g., April 1, 2025).
 * @param date - The date to format. Accepts a string (e.g., "2025-04-01") or Date.
 * @returns A formatted date string like "April 1, 2025".
 */
export const formatDate = (date: string | Date): string => {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  if (isNaN(parsedDate.getTime())) {
    console.warn("Invalid date provided to formatDate:", date);
    return "";
  }

 return parsedDate.toLocaleDateString('en-AU', {
    timeZone: 'Australia/Sydney',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
