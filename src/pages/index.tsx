import { NextPage } from "next";
import { useSession, signIn } from "next-auth/react";
import { Button } from "@chakra-ui/react";

const IndexPage: NextPage = () => {
  const { data: session, status } = useSession();

  if (
    status === "loading" ||
    status === "unauthenticated" ||
    !session
  ) {
    return (
      <div>
        <h1>Home Page!</h1>
        <br />
        <h2>You are not logged in!</h2>
        <Button
          variant={"solid"}
          colorScheme={"linkedin"}
          onClick={() => {
            signIn();
          }}
        >
          login here
        </Button>
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
