import { Request, Response } from "express";
import { userServices } from "./user.services";
import { userSchemaZod } from "./user.zod.validation";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body.usersData;
    // Validate request body with Zod
    // const validatedData = userSchemaZod.parse(userData);
    //have to call services
    const result = await userServices.createUserIntoDB(userData);
    res.status(200).json({
      success: true,
      message: "user has been created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(200).json({
      success: false,
      message: "something went wrong",
      error: error.message,
    });
  }
};
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: "here is all users",
      data: result,
    });
  } catch (error: any) {
    res.status(200).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const result = await userServices.getSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: "get a user",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteAUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await userServices.getSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: "delete a user",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  deleteAUser,
};
