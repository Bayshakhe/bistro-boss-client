import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import MenuCategory from "./MenuCategory";
import useMenu from "../../hooks/useMenu";

const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category ===  "soup");
  const salad = menu.filter((item) => item.category ===  "salad");
  const pizza = menu.filter((item) => item.category ===  "pizza");
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={'our menu'}></Cover>
      <MenuCategory items={offered} subHeading="Don't Miss" heading="today's offer"></MenuCategory>
      <MenuCategory img={dessertImg} title={'dessert'} items={dessert} ></MenuCategory>
      <MenuCategory img={pizzaImg} title={'pizza'} items={pizza} ></MenuCategory>
      <MenuCategory img={saladImg} title={'salad'} items={salad} ></MenuCategory>
      <MenuCategory img={soupImg} title={'soup'} items={soup} ></MenuCategory>
    </>
  );
};

export default OurMenu;
