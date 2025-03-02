import { UserModel } from "../user.modelSchema";

const createUserIntoDB = async (userData: string) => {
  const result = await UserModel.create(userData);
  return result;
};
const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};
const getSingleUserFromDB = async (_id: string) => {
  const result = await UserModel.findOne({ _id });
  console.log(result);
  return result;
};
const deleteSingleUserFromDB = async (_id: string) => {
  const result = await UserModel.deleteOne({ _id });
  return result;
};
export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  deleteSingleUserFromDB,
};
