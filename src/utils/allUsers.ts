import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../types/UserType";

const url = "https://jsonplaceholder.typicode.com/users";

export const getAllUsers = createAsyncThunk<User[]>("user/getAllUsers", async () => {
  const response = await fetch(url);
  const data: User[] = await response.json();
  return data;
});