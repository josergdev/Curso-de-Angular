export interface Message {
  name: string;
  message: string;
  date: Date;
  uid?: string;
}

export interface MessageId extends Message {
  id: string;
}
