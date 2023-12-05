"use client";

import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { UserProps, UserResProps } from "@/types/UserProps";
import { api } from "@/service/api";
import styles from "./Home.module.css";
import UserCard from "../UserCard/UserCard";

export default function HomeComponent() {
  const [user, setUser] = useState<UserResProps | null>(null);

  const loadUser = async (userName: string) => {
    try {
      const response = await api.get<UserProps>(`${userName}`);

      const { avatar_url, name, login, location } = response.data;

      const userData = {
        avatar_url,
        name,
        login,
        location,
      };

      setUser(userData);
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

      {user && <UserCard {...user} />}
    </main>
  );
}
