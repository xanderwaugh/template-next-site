import { GetServerSideProps, NextPage } from "next";
import { useSession, signIn } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

const IndexPage: NextPage = () => {
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
          login here
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Home Page!</h1>
      <br />
      <h2>Hello {session.user?.name}!</h2>
    </div>
  );
};

IndexPage.displayName = "Home Page Title";

export default IndexPage;
