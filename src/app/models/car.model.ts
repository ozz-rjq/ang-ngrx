export interface Car {
  id: number;
  name: string;
  model: string;
  description: string;
  createdAt: string;
  isSold: boolean;
}

export interface Cars {
  cars: Car[];
}
