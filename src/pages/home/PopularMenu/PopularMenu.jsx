import React from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";
import Button from "../../../components/Button/Button";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === "popular")
  return (
    <section>
      <SectionTitle
        subHeading="Check it out"
        heading="From Our Menu"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {
            popular.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
        }
      </div>
      <div className="text-center">
      <Button>View full menu</Button>
      </div>
    </section>
  );
};

export default PopularMenu;
