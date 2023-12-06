import UserDetail from "@/components/UserDetail/UserDetail";

export default function Page({ params }: { params: { login: string } }) {
  return <UserDetail login={params.login} />;
}
