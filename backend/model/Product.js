import pool from "../config/database.js";

export const getProducts = (res) => {
    pool.query("SELECT * FROM product", (err, result) => {
        if(err){
            console.log(err)
            res(err, null)
        }else{
            res(null, result)
        }
    })
}

export const getSingleProduct = (id, res) => {
    pool.query("SELECT * FROM product WHERE id = ?",[id], (err, result) => {
        if(err){
            console.log(err)
            res(err, null)
        }else{
            res(null, result[0])
        }
    })
}

export const insertProduct = (data, res) => {
    pool.query("INSERT INTO product SET ?",[data], (err, result) => {
        if(err){
            console.log(err)
            res(err, null)
        }else{
            res(null, result[0])
        }
    })
}

export const deleteProductById = (id, res) => {
    pool.query("DELETE FROM product WHERE id = ?",[id], (err, result) => {
        if(err){
            console.log(err)
            res(err, null)
        }else{
            res(null, result[0])
        }
    })
}

export const updateProductById = (data, id, res) => {
    pool.query("UPDATE product set name = ?, price = ? WHERE id = ?",
    [data.name, data.price, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res(err, null);
      } else {
        res(null, result);
      }
    })
}