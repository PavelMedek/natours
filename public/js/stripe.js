/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51LYsFfBlaylmmm8cym70PtOeWDWjOM7jjaYWoTgwrEVvm1m0cWwPAcMK9E4t2y71EyEr4I613UyZnrqRYa8Dlpfe009pH7B3p5'
);
export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
