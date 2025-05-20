import { Helmet } from "react-helmet-async";
import Container from "../../globalComponents/Container";
import Banner from "./components/Banner";
import FeaturedProducts from "./components/featuredProducts";
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
        <FeaturedProducts />
      </Container>
    </>
  );
};

export default Home;
