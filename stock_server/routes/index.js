var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Symbol = require("../routes/StockSchemaFile");

mongoose
  .connect(
    "mongodb+srv://blondeni1981:1982_Benji@watchlist.brj4n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

  const option = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
}

mongoose.set('useFindAndModify', false);


// constructor
function Stock(pId, pTitle) {
  this.Id = pId;
  this.Title = pTitle;
}


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
res.setHeader(
  "Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
);
next();
});

router.post("/api/symbols", (req, res, next) => {
  const symbol = new Symbol({
    symbol: req.body.symbol
  });
  symbol.save().then(createdSymbol => {
    res.status(201).json({
      message: "Post added successfully",
      symbolId: createdSymbol._id
    });
  });
});

router.get("/api/symbols", (req, res, next) => {
  Symbol.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      symbol: documents
    });
  });
});
// app.delete("/api/symbols/:id", (req, res, next) => {
//   Post.deleteOne({ _id: req.params.id }).then(result => {
//     console.log(result);
//     res.status(200).json({ message: "Post deleted!" });
//   });
// });


module.exports = router;


// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/stocks', function (req, res) {
//   res.status(200).json(dummyData);
//   console.log(dummyData);
// })




