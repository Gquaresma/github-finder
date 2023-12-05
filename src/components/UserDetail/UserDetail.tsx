"use client";

import React from "react";
import { UseGlobalContext } from "@/app/context/UserContext";
import { MdLocationPin } from "react-icons/md";
import { VscRepo } from "react-icons/vsc";
import styles from "./UserDetail.module.css";
import RepositoriesList from "../RepositoriesList/RepositoriesList";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidLogInCircle } from "react-icons/bi";
import { SlUserFollowing } from "react-icons/sl";
import { PiIdentificationBadgeLight } from "react-icons/pi";

export default function UserDetail() {
  const { user } = UseGlobalContext();

  return (
    <div className={styles.container}>
      {/* <h2>Repositórios</h2> */}
      <div className={styles.userCard}>
        <div className={styles.userCardAvatar}>
          <img src={user?.avatar_url} alt={user?.login} />
        </div>
        <div className={styles.userCardInfo}>
          <h2>
            <b>
              <FaUserAlt size=".8rem" /> Nome
            </b>{" "}
            {user?.name}{" "}
          </h2>
          <h2>
            <b>
              <BiSolidLogInCircle /> Login
            </b>{" "}
            {user?.login}
          </h2>
          <h2>
            <b>
              {" "}
              <PiIdentificationBadgeLight />
              ID do usuário
            </b>{" "}
            {user?.id}
          </h2>
          <h2>
            <b>
              <SlUserFollowing /> Seguidores
            </b>{" "}
            {user?.followers}
          </h2>
          <h2>
            <b>
              {" "}
              <VscRepo /> Repositórios públicos
            </b>{" "}
            {user?.public_repos}
          </h2>

          <h2>
            <b>
              {" "}
              <MdLocationPin /> Localização{" "}
            </b>{" "}
            {user?.location ? user?.location : "Localização não disponível"}
          </h2>
        </div>
      </div>

      <div className={styles.repositoriesContainer}>
        {user?.repos_list ? (
          <div className={styles.detailContainer}>
            {user?.repos_list.map((repo, i) => {
              return <RepositoriesList key={i} data={repo} />;
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
