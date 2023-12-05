import React from "react";
import { ApiResponseRepositories } from "@/types/ApiResponse";
import styles from "./RepositoriesList.module.css";
import Link from "next/link";

type RepoProps = {
  data: ApiResponseRepositories;
};

export default function UserDetail({ data }: RepoProps) {
  return (
    <Link href={data.html_url} target="_blank">
      <div className={styles.container}>
        <div className={styles.repoBox}>
          <div className={styles.contentDetails}>
            <p>
              <b id={styles.cardTitle}>{data.name}</b>
            </p>
          </div>
          <div className={styles.contentDetails}>
            <p>
              <b>Descrição</b> {data.description || "-"}
            </p>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.contentDetails}>
              <p>
                <b>Linguagem</b> {data.language || "-"}
              </p>
            </div>

            <div className={styles.contentDetails}>
              <p>
                <b>Criado em </b>{" "}
                {new Date(data.created_at).toLocaleDateString() || "-"}
              </p>
            </div>

            <div className={styles.contentDetails}>
              <p>
                <b>Último push </b>
                {new Date(data.created_at).toLocaleDateString() || "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
