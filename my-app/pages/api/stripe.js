import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body.cartItems)
    try {
      
      const params = {
          submit_type: 'pay',
          mode: 'payment',
          payment_method_types: ['card'],
          billing_address_collection: 'auto',
          shiping_options: [
            { shiping_rate: 'shr_1L1RhNGNoyDrtgaVgv6Mrs8d'},
            { shiping_rate: 'shr_1L1RieGNoyDrtgaV0bXEH1Ng'},
          ],
        line_items: req.body.cartItems.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = image.replace('image-', 'https://cdn.sanity.io/images/w2p9g31g/production/').replace('-webp', '.webp')
          console.log('IMage', newImage)
          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                images: [newImage],
                unit_amount: item.price * 100,
              },
              adjustible_quantity: {
                enabled: true,
                minimum: 1,
              },
              quantity: item.quantity
            }
          }
        }),
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      };
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
