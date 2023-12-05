"use client";

import React from "react";
import { UseGlobalContext } from "@/app/context/UserContext";
import { MdLocationPin } from "react-icons/md";
import styles from "./UserDetail.module.css";
import RepositoriesList from "../RepositoriesList/RepositoriesList";

export default function UserDetail() {
  const { user } = UseGlobalContext();

  return (
    <div className={styles.container}>
      <div className={styles.userCard}>
        <div className={styles.userCardAvatar}>
          <img src={user?.avatar_url} alt={user?.login} />
        </div>
        <div className={styles.userCardInfo}>
          <h2>
            <b>Nome:</b> {user?.name}{" "}
          </h2>
          <h2>
            <b>Login:</b> {user?.login}
          </h2>
          <h2>
            <b>ID do usuário:</b> {user?.id}
          </h2>
          <h2>
            <b>Seguidores:</b> {user?.followers}
          </h2>
          <h2>
            <b>Repositórios públicos:</b> {user?.public_repos}
          </h2>

          <h2>
            {" "}
            <MdLocationPin />{" "}
            {user?.location ? user?.location : "Localização não disponível"}
          </h2>
        </div>
      </div>

      <div className={styles.repositoriesContainer} >
        {!!user?.repos_list ? (
          <div>
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
