import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AccountListPage } from './components/AccountListPage';
import { PaymentHistoryPage } from './components/PaymentHistoryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AccountListPage />}></Route>
      <Route path="history" element={<PaymentHistoryPage />}></Route>
    </Routes>
  );
}

export default App;
