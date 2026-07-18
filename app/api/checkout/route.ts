import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req: Request) {
  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: "price_123", quantity: 1 }],
    mode: "payment",
  });
  return Response.json({ url: session.url });
}
