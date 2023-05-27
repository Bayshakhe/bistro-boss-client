import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";
import Button from "../../../components/Button/Button";

const PopularMenu = () => {
    const [menus, setMenus] = useState([])
    console.log(menus)
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popular = data.filter(a => a.category === "popular")
            setMenus(popular)
        })
    },[])
  return (
    <section>
      <SectionTitle
        subHeading="Check it out"
        heading="From Our Menu"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {
            menus.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
        }
      </div>
      <div className="text-center">
      <Button>View full menu</Button>
      </div>
    </section>
  );
};

export default PopularMenu;
