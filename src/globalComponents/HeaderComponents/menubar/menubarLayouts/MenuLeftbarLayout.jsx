import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AllCategoryMenu from "../AllCategories";
import ProductsMenu from "../Productsmenu";

const MenuLeftbarLayout = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center gap-x-5">
        <AllCategoryMenu />
        <ProductsMenu />
        <Link
          to="/blog"
          className="font-montserrat font-bold text-base text-white"
        >
          {t("Blog")}
        </Link>
        <Link
          to="/contact"
          className="font-montserrat font-bold text-base text-white"
        >
          {t("Contact")}
        </Link>
      </div>
    </>
  );
};

export default MenuLeftbarLayout;
