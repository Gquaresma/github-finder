"use client";

import { api } from "@/service/api";
import { ApiResponseData, ApiResponseRepositories } from "@/types/ApiResponse";
import { userResProps } from "@/types/UserProps";
import { UserProviderProps } from "@/types/UserProvider";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext<UserProviderProps>({} as UserProviderProps);

interface ContextProps {
  children: React.ReactNode;
}

export function UserContextProvider({ children }: ContextProps) {
  const [user, setUser] = useState<userResProps | null>(null);
  const [searchedUsersList, setSearchUsersList] = useState<any>([]);

  const addSearchUser = (searchedUser: userResProps) => {
    const searchedNames = searchedUsersList.map(
      (user: userResProps) => user.name
    );

    if (!searchedNames.includes(searchedUser.name)) {
      setSearchUsersList([...searchedUsersList, searchedUser]);
    }
  };

  const getRepos = async (
    username: string
  ): Promise<ApiResponseRepositories[]> => {
    const res: ApiResponseRepositories[] = await api.get(`/${username}/repos`);

    return res;
  };

  const getUser = async (username: string) => {
    try {
      const { data } = await api.get<ApiResponseData>(`/${username}`);

      const repos = await getRepos(data.login);

      const userData: userResProps = {
        avatar_url: data.avatar_url,
        name: data.name,
        login: data.login,
        location: data.location,
        repos_list: repos,
        id: data.id,
        followers: data.followers,
        public_repos: data.public_repos,
      };

      setUser(userData);
      addSearchUser(userData);
    } catch (error) {
      window.alert("Usuário não encontrado");
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        searchedUsersList,
        getUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const UseGlobalContext = () => {
  return useContext(GlobalContext);
};
