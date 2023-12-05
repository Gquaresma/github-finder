import { userResProps } from "./UserProps";

export interface UserProviderProps {
  user: userResProps | null;
  searchedUsersList: userResProps[];
  getUser: (username: string) => Promise<void>;
}