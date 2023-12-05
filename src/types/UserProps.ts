import { ApiResponseData, ApiResponseRepositories } from "./ApiResponse";

export type userResProps = {
  avatar_url: ApiResponseData["avatar_url"];
  name: ApiResponseData["name"];
  login: ApiResponseData["login"];
  location: ApiResponseData["location"];
  repos_list: ApiResponseRepositories[];
  id: ApiResponseData["id"];
  followers: ApiResponseData["followers"];
  public_repos: ApiResponseData["public_repos"];
};

export type repositoriesList = {};
