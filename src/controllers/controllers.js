import { Mongoose } from 'mongoose';
import { ProductSchema } from '../models/models';

let Product = Mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {
  let newProduct = new Product(req.body);

  newProduct.save((err, Product) => {
    if (err) {
      res.send(err);
    }
    res.json(Product);
  });
};

export const getProducts = (req, res) => {
  Product.find({}, (err, Product) => {
    if (err) {
      res.send(err);
    }
    res.json(Product);
  });
};

export const getProductWithID = (req, res) => {
  Product.findById(req.params.ProductID, (err, Product) => {
    if (err) {
      res.send(err);
    }
    res.json(Product);
  });
};

export const updateProduct = (req, res) => {
  Product.findOneAndUpdate(
    { _id: req.params.ProductID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, Product) => {
      if (err) {
        res.send(err);
      }
      res.json(Product);
    }
  );
};

export const deleteProduct = (req, res) => {
  Product.remove({ _id: req.params.ProductID }, (err, Product) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted Product' });
  });
};
