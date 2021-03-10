const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Category.findAll({
    // be sure to include its associated Products
    attribute: ["product_name", "price", "stock","category_name"],
    include: [
      {
        model: Product,
        attribute: ["product_name", "price", "stock"],
      },
    ],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    attribute: ["product_name", "price", "stock","category_name"],
    where: {
      id: req.params.id,
    },
    // be sure to include its associated Products
    include: [
      {
        model: Product,
        attribute: ["product_name", "price", "stock"],
      },
    ],
  });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id`
  Category.update(
    {
      where: {
        id: req.params.id,
      },
    },
    {
      category_name: req.body.category_name
    }
  ).then(dbCategoryData => {
    if(!dbCategoryData){
      res.status(404).json({message: 'No post found with this id:'});    
      return;  
    }
    res.json(dbCategoryData);
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
    {
      where:{
        id: req.params.id
      }
    })
    .then(dbCategoryData => {
      if(!dbCategoryData){
        res.status(404).json({message: 'No post found with this id'});
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
