import {
  useEffect,
  useState,
  type ChangeEvent,
  type FunctionComponent,
  type ReactElement,
} from 'react';
import type { Account, DueCharge } from '../types/AccountList';
import { MOCK_ENERGY_ACCOUNTS_API } from '../mocks/energyAccountsAPIMock';
import { MOCK_DUE_CHARGES_API } from '../mocks/dueChargesAPIMock';
import { AccountCard } from './AccountCard';

export const AccountListPage: FunctionComponent = (): ReactElement => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [dueCharges, setDueCharges] = useState<DueCharge[]>([]);
  const [filterredData, setFilteredData] = useState<Account[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      const [accoutnsData, dueChargesData] = await Promise.all([
        MOCK_ENERGY_ACCOUNTS_API(),
        MOCK_DUE_CHARGES_API(),
      ]);
      setAccounts(accoutnsData);
      setDueCharges(dueChargesData);
      setFilteredData(accoutnsData);
    }
    loadData();
  }, []);

  const getAccountBalance = (accountId: string): number => {
    return dueCharges
      .filter((d) => d.accountId === accountId)
      .reduce((sum, charge) => sum + charge.amount, 0);
  };

  const handleMakePayment = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleEnergyTypeFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    const filterType = event.target.value.toUpperCase();
    const filterByType = accounts.filter((item) => item.type === filterType);
    setFilteredData(filterByType);
  };

  const EnergyTypeFilter = () => {
    return (
      <div>
        <label htmlFor="energy-filter">Filter with energy type</label>
        <select
          id="energy-filter"
          defaultValue="all"
          onChange={handleEnergyTypeFilter}
        >
          <option value="all">All</option>
          <option value="gas">Gas</option>
          <option value="electricity">Electricity</option>
        </select>
      </div>
    );
  };

  return (
    <>
      <h1>Accounts List</h1>
      {EnergyTypeFilter()}
      {filterredData.map((account) => {
        const balance = getAccountBalance(account.id);
        return (
          <AccountCard
            account={account}
            balance={balance}
            handleMakePayment={handleMakePayment}
          />
        );
      })}
    </>
  );
};
