import React from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import img1 from "../../../assets/menu/salad-bg.jpg";
import img2 from "../../../assets/menu/pizza-bg.jpg";
import img3 from "../../../assets/menu/soup-bg.jpg";
import Button from "../../../components/Button/Button";

const ChefRecommend = () => {
  return (
    <section>
      <SectionTitle
        subHeading="Should Try"
        heading="Chef Recommends"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div className="bg-base-200 rounded-none">
          <img src={img1} alt="Menu" />
          <div className="card-body p-3 items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <Button>Add to cart</Button>
          </div>
        </div>
        <div className="bg-base-200 rounded-none">
          <img src={img2} alt="Menu" />
          <div className="card-body p-3 items-center text-center">
            <h2 className="card-title">Cassunut Pizza</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <Button>Add to cart</Button>
          </div>
        </div>
        <div className="bg-base-200 rounded-none">
          <img src={img3} alt="Menu" />
          <div className="card-body p-3 items-center text-center">
            <h2 className="card-title">Mallayan Soup</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommend;
