"use client";

import React from "react";
import { UseGlobalContext } from "@/app/context/UserContext";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Home.module.css";
import UserCard from "../UserCard/UserCard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function HomeComponent() {
  const { user } = UseGlobalContext();

  return (
    <main className={styles.container}>
      <ToastContainer />
      <SearchBar />
      {user && <UserCard {...user} />}
    </main>
  );
}
