const { application } = require('express');
var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/product-helpers')
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function (req, res, next) {

  productHelpers.getAllProducts().then((products) => {
    console.log(products);
    res.render("user/view-products", { admin: true, products })
  })

});

router.post('/submit', (req, res) =>
  MongoClient.connect("mongodb://localhost:27017", (err, client) => { if (err) console.log("error"); else console.log("connected"); }))


module.exports = router;
