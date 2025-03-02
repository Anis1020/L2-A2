export type TUsers = {
  userId: string;
  userName: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies:
    | "Reading"
    | "Gaming"
    | "Cooking"
    | "Traveling"
    | "Photography"
    | "Painting"
    | "Music"
    | "Hiking"
    | "Cycling"
    | "Swimming";
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders: {
    productName: string;
    price: number;
    quantity: number;
  };
  isDeleted: boolean;
};
