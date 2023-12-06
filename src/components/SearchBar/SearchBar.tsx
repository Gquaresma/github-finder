import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./SearchBar.module.css";
import { UseGlobalContext } from "@/app/context/UserContext";

export default function SearchBar() {
  const [userName, setUser] = useState("");
  const { getUser } = UseGlobalContext();

  const keyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") getUser(userName);
  };

  return (
    <>
      <div className={styles.searchBar}>
        <div className={styles.iconWrapper}>
          <FiSearch size="2rem" color="#007AFB" />
        </div>
        <input
          className={styles.searchInput}
          type="text"
          name="user"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUser(e.target.value)}
          onKeyDown={(e) => keyEvent(e)}
        />

        <button
          className={styles.searchButton}
          onClick={() => getUser(userName)}
        >
          Pesquisar
        </button>
      </div>
    </>
  );
}
