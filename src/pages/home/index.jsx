import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Container from "../../globalComponents/Container";

const Home = () => {
  const {t} = useTranslation()
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <h1>{t('this_is_home_page')}</h1>
      </Container>
    </>
  );
};

export default Home;
