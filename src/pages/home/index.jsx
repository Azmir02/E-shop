import { Helmet } from "react-helmet-async";
import Container from "../../globalComponents/Container";
import Banner from "./components/Banner";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <Banner />
      </Container>
    </>
  );
};

export default Home;
