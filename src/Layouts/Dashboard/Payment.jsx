import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk)

const Payment = () => {
    return (
        <div className='w-full'>
            <SectionTitle subHeading={'Please Process'} heading={'Payment'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;