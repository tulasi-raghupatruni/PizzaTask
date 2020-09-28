export interface Orders {
    customerName: string;
    itemsOrdered: number;
    totalAmount: number;
    orderStatus: string;
    id?:number;
    disableStatus:boolean;
    description: string;
    profile: any;
    address: any;
    items: string;
  }