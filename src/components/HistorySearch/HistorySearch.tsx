"use client";

import React, {useState, useEffect} from "react";
import { UseGlobalContext } from "@/app/context/UserContext";
import UserCard from "../UserCard/UserCard";
import styles from "./HistorySearch.module.css";

export default function HistorySearch() {
  const { searchedUsersList, setSearchUsersList } = UseGlobalContext();

  useEffect(() => {
    const searchedUsers = localStorage.getItem("searchedUsers");
    if (searchedUsers) {
      console.log('SETOU AQUI ->>>> ', searchedUsers)
      setSearchUsersList(JSON.parse(searchedUsers));
    }
  }, [setSearchUsersList])

  return (
    
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {searchedUsersList.map((user, i) => {
          return <UserCard key={i} {...user} />;
        })}
      </div>
    </div>
  );
}
