var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

// Connection to MongoDB
const dbURI = "mongodb+srv://<username>:<password>@stockscluster.nee1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.set('useFindAndModify', false);

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);






/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// for this version, we will keep data on server in an array
heroArray = [];

//constructor
function Stock(pId, pName) {
  this.id= pId;
  this.name = pName;
  }

  // pre-populate with some data
heroArray.push( new Stock (11, 'Dr Nice') );
heroArray.push( new Stock (12, 'Narco') );
heroArray.push( new Stock (13, 'Bombasto') );
heroArray.push( new Stock (14, 'Celeritas') );
heroArray.push( new Stock (15, 'Magneta') );
heroArray.push( new Stock (16, 'RubberMan') );
heroArray.push( new Stock (17, 'Dynama') );
heroArray.push( new Stock (18, 'Dr Kurt') );
heroArray.push( new Stock (19, 'Magma') );
heroArray.push( new Stock (20, 'Tornado') );


router.get('/stocks', function(req, res) {
  res.status(200).json(heroArray);
    console.log(heroArray);
});

router.get('/stocks/:id', function(req, res) {
  let found = false;
    for(var i=0; i < heroArray.length; i++)
    {
      if( heroArray[i].id == req.params.id)
      {
        console.log(heroArray[i]);
        found = true
        res.status(200).json(heroArray[i]);
      }
    }
    if(found === false){
      res.status(500).send("no such hero");
      }

  });



  router.put('/stocks/:id', function(req, res) {
    var changedHero = req.body; 
   for(var i=0; i < heroArray.length; i++)
   {
     if( heroArray[i].id == req.params.id)
     {
       heroArray[i].name = changedHero.name;
       console.log(heroArray[i]);
       found = true
       res.status(200).json(heroArray[i]);
     }
   }
   if(found === false){
     res.status(500).send(err);
   }
 });



// delete is used to delete existing object
router.delete('/stocks/:id', function(req, res) {
  for(var i=0; i < heroArray.length; i++)
  {
    if( heroArray[i].id == req.params.id)
    {
      heroArray.splice(i,1);
      found = true
      res.status(200).json('deleted hero');
    }
  }
  if(found === false){
    res.status(500).send(err);
  }
});



// router.post("/stocks", function(req, res) {

//    // sort by id (need to create a new, unique id)
//    heroArray.sort(function(a, b) {
//     return (a.id) - (b.id);
//    });
//    var newID = (heroArray[heroArray.length-1].id) +1;
//    var newHero = new Hero(newID, req.body.name);  // need to fix !!!!!
//    heroArray.push(newHero);
//    res.status(200).json(newHero);  // returns the new hero which the observable 
//   // uses to update the client side array so the display looks correct.
// });


module.exports = router;
