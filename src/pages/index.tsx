import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <div>
      <h1>Home Page!</h1>
      <br />
      <h2>Hello!</h2>
    </div>
  );
};

IndexPage.displayName = "Home Page Title";

export default IndexPage;
