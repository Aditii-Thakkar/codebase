import { Routes, Route } from 'react-router';
import './App.css';
import { AccountListPage } from './components/AccountListPage';
import { HistoryPage } from './components/HistoryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AccountListPage />}></Route>
      <Route path="history" element={<HistoryPage />}></Route>
    </Routes>
  );
}

export default App;
