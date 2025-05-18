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

### To start the project, you will need a recent version of node.js.

From there, run:

```
npm install
npm run dev
```

### You can add comments where and how you'd expand given more time

- Polished UI: I would improve the UI across all pages—particularly enhancing the consistency and responsiveness of the filter controls, account list, search input, and payment history layout. Adding more accessible markup and improving the visual hierarchy would also elevate usability.
- Debounce for Search: I’d introduce a debounce mechanism to the address search input. This would reduce unnecessary re-renders and improve performance, especially as the dataset grows or if we move filtering to an API in the future.
- Unit Testing: I would add unit tests for key utility functions like formatDate and getBalanceAttributes. This would ensure these helpers behave consistently under various edge cases and make the codebase more robust and maintainable.
- Form Validation Enhancements (optional suggestion): For the payment form, I’d enhance validation using a schema-based approach (e.g., with Zod or Yup), making the validation logic more declarative and testable.
