const express = require("express");
const { Router } = express;
const router = Router();
const { Products } = require("../api/api_array_products");
let products = new Products();
const { isAdmin } = require("../midwares/auth");

//Template for new products
/*
{
    "code": "Codigo16",
    "dateTime": "16/01/2022 16:00:00",
    "name": "Producto 16",
    "description": "Descripcion Producto 16",
    "price": 1600,
    "imgURL": "https://via.placeholder.com/100",
    "stock": 160
}
*/

router.get("/", (req, res) => {
    let ans = products.getProducts();
    res.status(ans.status).json(ans.content);
});

router.get("/:id", (req,res) => {
    let ans = products.getProductById(req.params.id);
    res.status(ans.status).json(ans.content);
});

router.post("/", isAdmin, (req,res) => {
    let ans = products.addNewProduct(req.body);
    res.status(ans.status).json(ans.content);
});

router.put("/:id", isAdmin, (req,res) => {
    let ans = products.updateProduct(req.params.id, req.body);
    res.status(ans.status).json(ans.content);
});

router.delete("/:id", isAdmin, (req,res) => {
        let ans = products.delProductById(req.params.id);
        res.status(ans.status).json(ans.content);
});

module.exports.routerProducts = router;