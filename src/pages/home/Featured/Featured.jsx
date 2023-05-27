import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import img1 from '../../../assets/home/featured.jpg'
import Button from '../../../components/Button/Button';
import './Featured.css'

const Featured = () => {
    return (
        <section className='featured-section '>
            <SectionTitle subHeading='Check it out' heading='From our Menu'></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center m-20 font-semibold'>
                <img className='h-[400px] ' src={img1} alt="" />
                <div>
                    <p>May 30, 2023</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tempora at quidem aut laborum dicta delectus modi cum iusto, nihil cumque pariatur ipsam nisi nobis voluptatum ex quam nesciunt accusamus harum fuga expedita error aliquid repudiandae! Fugit dolores provident repudiandae, exercitationem ab ducimus blanditiis deserunt corporis facere voluptate quod asperiores?</p>
                    <Button className='text-left'>Order Now</Button>
                </div>
            </div>
        </section>
    );
};

export default Featured;