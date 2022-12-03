import { 
    getProducts, 
    getSingleProduct, 
    insertProduct, 
    deleteProductById, 
    updateProductById
} from "../model/Product.js";

export const showProducts = (req, res) => {
    getProducts((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
};

export const showProductById = (req, res) => {
    getSingleProduct(req.params.id, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
};
  
export const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
};
  
export const updateProduct = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateProductById(data, id, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
};
  
export const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, result) => {
        if (err) {
        res.send(err);
        } else {
        res.json(result);
        }
    });
};