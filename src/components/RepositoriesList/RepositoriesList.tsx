import React from "react";
import { ApiResponseRepositories } from "@/types/ApiResponse";
import styles from "./RepositoriesList.module.css";

type RepoProps = {
  data: ApiResponseRepositories;
};

export default function UserDetail({ data }: RepoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.repoBox} >
        <div className={styles.contentContainer}>
          <p>
            <b>
              Nome do repositório:
                <a href={data.html_url} target="_blank">
                  {data.name}
                </a>
            </b>
          </p>
        </div>

        <div className={styles.contentContainer}>
          <p>
            <b>Descrição:</b> {data.description}
          </p>
        </div>

        <div className={styles.contentContainer}>
          <p>
            <b>Linguagem:</b> {data.language}
          </p>
        </div>

        <div className={styles.contentContainer}>
          <p>
            <b>Criado em: </b> {new Date(data.created_at).toLocaleDateString()}
          </p>
        </div>

        <div className={styles.contentContainer}>
          <p>
            <b>Último push: </b>
            {new Date(data.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
