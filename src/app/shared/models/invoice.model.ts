export interface Invoice {
  id?: string;
  orderNo?: string;
  status?: string;
  date?: string;
  currency?: string;
  vat?: number;
  buyer?: {
    name: string;
    address: string;
  };
  seller?: {
    name: string;
    address: string;
  };
  item?: InvoiceItem[];
}

export interface InvoiceItem {
  name: string;
  unit: number;
  price: number;
  id? ;
}
