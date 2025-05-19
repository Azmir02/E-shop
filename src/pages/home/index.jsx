import { Helmet } from "react-helmet-async";
import Container from "../../globalComponents/Container";
import Banner from "./components/Banner";
import SupportSection from "./components/support";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <Banner />
        <SupportSection />
      </Container>
    </>
  );
};

export default Home;
