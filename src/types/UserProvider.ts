import { userResProps } from "./UserProps";

export interface UserProviderProps {
  user: userResProps | null;
  searchedUsersList: userResProps[];
  setSearchUsersList: (history: userResProps[]) => void;
  getUser: (username: string) => Promise<void>;
}