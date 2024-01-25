export interface RequestPassword {
  amount: number;
  simplePassword: string;
}

export interface RequestInfo {
  simplePassword: string;
  bankName: string;
  accountNumber: string;
}
export interface PaymentItem {
  amount: number;
  contents: string;
  contentsType: string;
  historyId: number;
  transactionTime: string;
  type: string;
}
