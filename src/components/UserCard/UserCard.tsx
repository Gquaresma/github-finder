import React from "react";
import { UserResProps } from "@/types/UserProps";
import { MdLocationPin } from "react-icons/md";
import sytles from "./UserCard.module.css";

export default function UserCard({
  avatar_url,
  name,
  login,
  location,
}: UserResProps) {
  return (
    <div className={sytles.userCard}>
      <div className={sytles.userCardAvatar}>
        <img src={avatar_url} alt={login} />
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
