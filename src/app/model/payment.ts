export interface Payment {
    id: number;
    provider: string;
    type: string;
    amount: number;
}