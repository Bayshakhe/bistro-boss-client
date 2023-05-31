import React from 'react';
import FoodCard from '../../components/FoodCard/FoodCard';

const ShopTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
          {items.map((item) => <FoodCard key={item._id} item={item}></FoodCard>)}
          </div>
    );
};

export default ShopTab;