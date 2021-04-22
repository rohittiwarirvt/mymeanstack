/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(
  'pk_test_51IihbSSGHLKQ0at0t9vupE6vproiyeNOFO9bmHsUWG5dmyS9ozQgm24Xe4kYMPoknjGPnRlCmUFSgdBPMTWZcTrp00Hj8CjQCR'
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios({
      method: 'GET',
      url: `/api/v1/bookings/checkout-session/${tourId}`
    });
    console.log(session);
    // 2) Create checkout from  +  charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
