import Cake from "../models/cake";
import Doughnut from "../models/doughnut";
import CupCake from "../models/cupCake";

export const cakeOrder = async (req, res) => {
  try {
    // console.log(req.body);
    const {
      name,
      contact,
      writingoncake,
      shape,
      flavour,
      size,
      delivery,
      extras,
      price,
    } = req.body;
    //
    if (!name) return res.status(400).send("Name is required");
    if (!contact || contact.length < 10) {
      return res
        .status(400)
        .send("Phone number is required and should be min 10 digits");
    }
    if (!flavour) return res.status(400).send("Flavour is required");
    if (!size) return res.status(400).send("Pound size is required");
    //cake order
    const cake = new Cake({
      name,
      contact,
      writingoncake,
      shape,
      flavour,
      size,
      delivery,
      extras,
      price,
    }).save();
    console.log("ordered cake", cake);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error.Try again");
  }
};

export const doughnutOrder = async (req, res) => {
  try {
    const { name, contact, quantity, delivery, price } = req.body;
    //
    if (!name) return res.status(400).send("Name is required");
    if (!contact || contact.length < 10) {
      return res
        .status(400)
        .send("Phone number is required and should be min 10 digits");
    }
    if (!quantity) return res.status(400).send("order is required");
    //
    const doughnut = new Doughnut({
      name,
      contact,
      quantity,
      delivery,
      price,
    }).save();
    console.log("ordered doughnut", doughnut);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error.Try again");
  }
};

export const cupCakeOrder = async (req, res) => {
  try {
    const { name, contact, flavour, numberOfOrders, delivery, price } =
      req.body;
    //
    if (!name) return res.status(400).send("Name is required");
    if (!contact || contact.length < 10) {
      return res
        .status(400)
        .send("Phone number is required and should be min 10 digits");
    }
    if (!flavour) return res.status(400).send("flavour is required");
    if (!numberOfOrders)
      return res.status(400).send("Specify number of orders");
    //
    const cupCake = new CupCake({
      name,
      contact,
      flavour,
      numberOfOrders,
      delivery,
      price,
    }).save();
    console.log("ordered cupcake", cupCake);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error.Try again");
  }
};

export const getOrders = async (req, res) => {
  try {
    const allcake = await Cake.find().sort({ _id: -1 }).exec();
    const allcupcake = await CupCake.find().sort({ _id: -1 }).exec();
    const alldoughnut = await Doughnut.find().sort({ _id: -1 }).exec();
    res.json({ allcake, allcupcake, alldoughnut });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error.Try again");
  }
};

export const removecake = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const cake = await Cake.findByIdAndDelete(id).exec();
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error.Try again");
  }
};
export const removecupcake = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const cupcake = await CupCake.findByIdAndDelete(id).exec();
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error.Try again");
  }
};
export const removedoughnut = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const doughnut = await Doughnut.findByIdAndDelete(id).exec();
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error.Try again");
  }
};
