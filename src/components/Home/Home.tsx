"use client";

import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { UserProps } from "@/types/UserProps";
import { api } from "@/service/api";
import styles from "./Home.module.css";

export default function HomeComponent() {
  // const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    try {
      const response = await api.get<UserProps>(`${userName}`);

      const data = JSON.stringify(response.data);

      console.log(response);
    } catch (error) {
      window.alert("Usuário não encontrado");
    }
  };

  return (
    <main className={styles.container}>
      <header>
        <h1>GitHub Finder</h1>
      </header>

      <SearchBar loadUser={loadUser} />
    </main>
  );
}
