import React from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import MenuItem from "../../components/MenuItem/MenuItem";
import Button from "../../components/Button/Button";
import Cover from "../../shared/cover/Cover";

const MenuCategory = ({ items, title, img, subHeading, heading }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      {subHeading && (
        <SectionTitle subHeading={subHeading} heading={heading}></SectionTitle>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {items.map((menu) => (
          <MenuItem key={menu._id} menu={menu}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Button>ORDER YOUR FAVOURITE FOOD</Button>
      </div>
    </div>
  );
};

export default MenuCategory;
