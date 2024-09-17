import { User } from "./UserType";

export type InitialState = {
  users: [] | User[];
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
  filter: 'name' | 'username' | 'email' | 'phone';
  search: string;
};