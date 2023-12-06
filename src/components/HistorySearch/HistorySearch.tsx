"use client";

import React, {useEffect} from "react";
import { UseGlobalContext } from "@/app/context/UserContext";
import UserCard from "../UserCard/UserCard";
import styles from "./HistorySearch.module.css";

export default function HistorySearch() {
  const { searchedUsersList, setSearchUsersList } = UseGlobalContext();

  useEffect(() => {
    const searchedUsers = localStorage.getItem("searchedUsers");
    if (searchedUsers) {
      setSearchUsersList(JSON.parse(searchedUsers));
    }
  }, [])

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
