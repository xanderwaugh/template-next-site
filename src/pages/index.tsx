import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useSession, signIn, signOut } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

const IndexPage: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session, status } = useSession();

  if (status === "loading" || status === "unauthenticated" || !session) {
    return (
      <div>
        <h1>Home Page!</h1>
        <br />
        <h2>You are not logged in!</h2>
        <button
          onClick={() => {
            signIn();
          }}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Home Page!</h1>
      <br />
      <h2>Hello {session.user?.name}!</h2>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

IndexPage.displayName = "Home Page Title";

export default IndexPage;
