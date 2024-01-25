export interface RequestPassword {
  amount: number;
  simplePassword: string;
}

export interface RequestInfo {
  simplePassword: string;
  bankName: string;
  accountNumber: string;
}
