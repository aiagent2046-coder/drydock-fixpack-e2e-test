import Stripe from "stripe";

const stripe = new Stripe("sk_live_000000000000000000000000");

export async function POST(req: Request) {
  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: "price_123", quantity: 1 }],
    mode: "payment",
  });
  return Response.json({ url: session.url });
}
