## 🚀 Solution Approach

This project is a React-based frontend application that simulates an energy account management UI with mock backend data. It fulfills the key requirements of displaying energy accounts, handling payments, and showing payment history — using modern React practices and a component-based architecture.

---

### 🔧 Tech Stack

- **React 19** (via Vite)
- **TypeScript**
- **React Router v7** (for routing)
- **CSS Modules** (for scoped styling)
- **Mock APIs** using in-memory data with `setTimeout`

---

### 🧩 Feature Breakdown

#### 1. Energy Accounts Page (`/`)

- Fetches energy accounts from `MOCK_ENERGY_ACCOUNTS_API`.
- Fetches due charges from `MOCK_DUE_CHARGES_API`.
- Aggregates balances per account.
- Displays:
  - Account type (Electricity/Gas)
  - Account ID and address
  - Computed balance with:
    - Green color for positive (CR)
    - Red for negative (DR)
    - Gray for zero
  - “Make a Payment” button (opens modal)

#### 2. Payment Modal (UI-only)

- Triggered by "Make a Payment" button.
- Displays:
  - Credit card fields (mocked)
  - Account balance
  - Pay button
- Simulates submission and shows a “Payment Successful” confirmation.

#### 3. Payment History Page (`/history`)

- Displays a list of mock payment records from `MOCK_ENERGY_PAYMENT_HISTORY_API`.
- Each entry includes:
  - Payment date
  - Account address
  - Amount
- Includes a **search bar** to filter by address (case-insensitive).
- Displays fallback message if no match is found.

#### 4. Routing

- Configured using `react-router-dom@7`
- Routes:
  - `/` → Account list
  - `/history` → Payment history

---

### 🧪 Mock API Strategy

All data is simulated via `Promise` with `setTimeout`.

```ts
MOCK_ENERGY_ACCOUNTS_API(): Promise<Account[]>
MOCK_DUE_CHARGES_API(): Promise<DueCharge[]>
MOCK_ENERGY_PAYMENT_HISTORY_API():Promise<Payment[]>
```
