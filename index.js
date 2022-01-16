const express = require("express");
const cors = require("cors");
const stripe = require("./services/stripe");
const handleError = require("./middleware/handleError");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/plans", async (req, res, next) => {
  try {
    const response = await stripe.prices.list({
      limit: 10,
      expand: ["data.product"],
    });

    res.send(response.data);
  } catch (error) {
    handleError(error, req, res, next);
  }
});

app.post("/create-checkout-session", async (req, res, next) => {
  try {
    const { priceId, quantity } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.send({
      url: session.url,
    });
  } catch (error) {
    handleError(error, req, res, next);
  }
});

app.get("/payment", async (req, res, next) => {
  try {
    // create customer
    // const customer = await stripe.customers.create({
    //   description: "Test create new customer",
    // });

    // rethreive products plans
    const subscription = await stripe.subscriptions.retrieve();

    res.send({
      message: "create success",
      // customer,
      subscription,
    });
  } catch (error) {
    handleError(error, req, res, next);
  }
});

app.listen(5001, () => console.log("server 5001 🚀"));
