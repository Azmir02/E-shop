import React from "react";
import { Helmet } from "react-helmet";
import Container from "../../globalComponents/Container";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <h1>This is Home page</h1>
      </Container>
    </>
  );
};

export default Home;
