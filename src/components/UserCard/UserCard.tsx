import React from "react";
import { userResProps } from "@/types/UserProps";
import { MdLocationPin } from "react-icons/md";
import sytles from "./UserCard.module.css";
import Link from "next/link";

export default function UserCard({
  avatar_url,
  name,
  login,
  location,
}: userResProps) {
  return (
    <div className={sytles.userCard}>
      <div className={sytles.userCardAvatar}>
        <Link href="/user-detail/">
          <img src={avatar_url} alt={login} />
        </Link>
      </div>
      <div className={sytles.userCardInfo}>
        <h2>
          <b>Nome:</b> {name}{" "}
        </h2>
        <h2>
          <b>Login:</b> {login}
        </h2>
        <h2>
          {" "}
          <MdLocationPin /> {location ? location : "Localização não disponível"}
        </h2>
      </div>
    </div>
  );
}
