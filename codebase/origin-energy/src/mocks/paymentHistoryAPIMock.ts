import { type PaymentHistory } from "../types/PaymentHistory";


const paymentsHistory: PaymentHistory[] = [
    {
        accountId: "A-0001",
        address: "1 Greville Ct, Thomastown, 3076, Victoria",
        date:"2025-04-01",
        amount: 30,
    },
    {
        accountId: "A-0002",
        address: "74 Taltarni Rd, Yawong Hills, 3478, Victoria",
        date:"2025-04-08",
        amount:40,
    },
    {
        accountId: "A-0003",
        address: "44 William Road, Cresswell Downs, 0862, Northern Territory",
        date:"2025-03-25",
        amount: 50,
    },
    {
        accountId: "A-0004",
        address: "87 Carolina Park Road, Forresters Beach, 2260, New South Wales",
        date:"2025-04-05",
        amount:60,
    },
    {
        accountId: "A-0005",
        address: "12 Sunset Blvd, Redcliffe, 4020, Queensland",
        date:"2025-03-30",
        amount:80,
    },
    {
        accountId: "A-0006",
        address: "3 Ocean View Dr, Torquay, 3228, Victoria",
        date:"2025-04-06",
        amount:40,
    },
    {
        accountId: "A-0007",
        address: "150 Greenway Cres, Mawson Lakes, 5095, South Australia",
         date:"2025-04-13",
        amount:100,
    },
    {
        accountId: "A-0008",
        address: "150 Greenway Cres, Mawson Lakes, 5095, South Australia",
        date:"2025-04-04",
        amount:120,
    },
    {
        accountId: "A-0009",
        address: "150 Greenway Cres, Mawson Lakes, 5095, South Australia",
        date:"2025-04-11",
        amount:90,
    }
];

export function MOCK_ENERGY_PAYMENT_HISTORY_API(): Promise<PaymentHistory[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(paymentsHistory);
        }, 1000); // simulate a 1 second delay for the API call
    });
}