export type Account = {
    id : string;
    type: "ELECTRICITY" | "GAS",
    address: string;
    meterNumber? : string;
    volume?: number;
}

export type DueCharge = {
    id: string;
    accountId: string; 
    date: string;
    amount: number
}

export type AccountWithAmount = Account & Pick<DueCharge, 'amount'>;