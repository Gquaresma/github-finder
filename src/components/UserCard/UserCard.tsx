import React from "react";
import { userResProps } from "@/types/UserProps";
import { MdLocationPin } from "react-icons/md";
import { BiSolidLogInCircle } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
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
        <Link href={`/user-detail/${encodeURIComponent(login)}`}>
          <img src={avatar_url} alt={login} />
        </Link>
      </div>
      <div className={sytles.userCardInfo}>
        <h2>
          <b>
            <FaUserAlt size=".8rem" /> Nome
          </b>{" "}
          {name}{" "}
        </h2>
        <h2>
          <b>
            <BiSolidLogInCircle /> Login
          </b>{" "}
          {login}
        </h2>
        <h2>
          <b>
            {" "}
            <MdLocationPin /> Localização{" "}
          </b>{" "}
          {location ? location : "Localização não disponível"}
        </h2>
      </div>
    </div>
  );
}
