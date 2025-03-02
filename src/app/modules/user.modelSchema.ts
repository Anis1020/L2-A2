import { model, Schema } from "mongoose";
import { TUsers } from "./user/user.interface";

const userSchema = new Schema<TUsers>({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  isActive: { type: Boolean, required: true, default: true },
  hobbies: {
    type: String,
    required: true,
    enum: [
      "Reading",
      "Gaming",
      "Cooking",
      "Traveling",
      "Photography",
      "Painting",
      "Music",
      "Hiking",
      "Cycling",
      "Swimming",
    ],
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: [
    {
      productName: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  isDeleted: { type: Boolean, required: true, default: false },
});

//create model
export const UserModel = model<TUsers>("User", userSchema);
