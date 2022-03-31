var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var Customers = require("../db/models/customers");

/* GET customers listing. */
router.get("/", (req, res, next) => {
  Customers.find({}, (err, result) => {
    if (err) {
      console.debug("Hey Look! Error", err);
      res.json(err);
    } else {
      // console.log(res);
      res.json(result);
    }
  });
});


/*
// Create new customer
router.post("/", (req, res, next) => {
  console.debug(req.body);
  const data = req.body;
  const newCustomer = new Customer({
    name: data.name,
    address: data.address,
    dob: data.dob,
    email: data.email,
    phone: data.phone
  });
  
  newCustomer.save((err, newInstance) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.json(newInstance);
    }
  });
});
*/

// Create new customer
router.post('/', (req,res) => {
  console.debug(req.body);
  const data = req.body;
  const customer1 = new Customers({
    phone: data.phone,
    item: data.item,
    ing: data.ing,
    price: data.price,
    adress: data.adress,
    status: data.status,
    qty: data.qty
  });
  customer1.save((err, newInstance) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.json(newInstance);
    }
  });
});


router.delete("/:id", (req, res, next) => {
  const id = req.params["id"];
  console.log("Delete this id", id);
  console.log("Product ID to delete", id);
  Customers.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});


router.put("/", async (req, res, next) => {
  console.debug(req.body);
  const data = req.body;
  const id = data._id;
  delete data._id;
  console.debug(data);

  Customers.findByIdAndUpdate(id, data, (err, doc) =>{
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});


module.exports = router;