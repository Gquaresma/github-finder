"use client";

import React from "react";
import { UseGlobalContext } from "@/app/context/UserContext";
import UserCard from "../UserCard/UserCard";
import styles from "./HistorySearch.module.css";

export default function HistorySearch() {
  const { searchedUsersList } = UseGlobalContext();

  return (
    <div>
      <h1 className={styles.title}>Histórico de pesquisa</h1>
      <div className={styles.container}>
        {searchedUsersList.map((user, i) => {
          return <UserCard key={i} {...user} />;
        })}
      </div>
    </div>
  );
}
