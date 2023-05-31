import React, { useState } from "react";
import shopImg from "../../assets/shop/banner2.jpg";
import Cover from "../../shared/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import ShopTab from "./ShopTab";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const inititalIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(inititalIndex);
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  //   console.log(salads)
  return (
    <div>
      <Cover img={shopImg} title={"our Shop"}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <ShopTab items={salads}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={pizza}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={soup}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={dessert}></ShopTab>
        </TabPanel>
        <TabPanel>
          <ShopTab items={drinks}></ShopTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
