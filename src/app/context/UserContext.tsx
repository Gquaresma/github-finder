"use client";

import { api } from "@/service/api";
import { ApiResponseData, ApiResponseRepositories } from "@/types/ApiResponse";
import { userResProps } from "@/types/UserProps";
import { UserProviderProps } from "@/types/UserProvider";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const GlobalContext = createContext<UserProviderProps>({} as UserProviderProps);

interface ContextProps {
  children: React.ReactNode;
}

export function UserContextProvider({ children }: ContextProps) {
  const [user, setUser] = useState<userResProps | null>(null);
  const [searchedUsersList, setSearchUsersList] = useState<any[]>(() =>
    JSON.parse(localStorage.getItem("searchedUsers") || "[]")
  );

  const addSearchUser = async (searchedUser: userResProps) => {
    const isUserAlreadyAdded = searchedUsersList.some(
      (user) => user.login === searchedUser.login
    );

    if (!isUserAlreadyAdded) {
      setSearchUsersList((prevSearchUsersList) => {
        const updatedSearchUsersList = [...prevSearchUsersList, searchedUser];

        localStorage.setItem(
          "searchedUsers",
          JSON.stringify(updatedSearchUsersList)
        );

        return updatedSearchUsersList;
      });
    }
  };

  const getRepos = async (
    username: string
  ): Promise<ApiResponseRepositories[]> => {
    const res = await api.get<ApiResponseRepositories[]>(`/${username}/repos`);

    return res.data;
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
      toast.error(`Não foi possível encontrar o usuário ${username}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        searchedUsersList,
        getUser,
        setSearchUsersList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const UseGlobalContext = () => {
  return useContext(GlobalContext);
};

// const addSearchUser = async (searchedUser: userResProps) => {
//   const searchedNames = searchedUsersList.map(
//     (user: userResProps) => user.login
//   );

//   if (!searchedNames.includes(searchedUser.login)) {
//     setSearchUsersList((prevSearchUsersList) => [
//       ...prevSearchUsersList,
//       searchedUser,
//     ]);
//   }

//   setSearchUsersList((updatedSearchUsersList) => {
//     localStorage.setItem(
//       "searchedUsers",
//       JSON.stringify(updatedSearchUsersList)
//     );

//     return updatedSearchUsersList;
//   });
// };
