const express = require("express");
const { Router } = express;
const router = Router();
const { Carts } = require("../api/api_array_carts");
const carts = new Carts();

// Genera carrito vacío
router.post("/", (req,res) => {
    let ans = carts.createCartId();
    res.status(ans.status).json(ans.content);
});

// Agrega productos al carrito
router.post("/:id/productos", (req,res) => {
    let ans = carts.addProductToCart(req.params.id, req.body.productId, req.body.quantity);
    res.status(ans.status).json(ans.content);
});

// Obtiene los productos de un carrito
router.get("/:id/productos", (req,res) => {
    let ans = carts.getCartProducts(req.params.id);
    res.status(ans.status).json(ans.content);
});

// Borra un producto de un carrito
router.delete("/:id/productos/:id_prod", (req,res) => {
    let ans = carts.delProductFromCart(req.params.id, req.params.id_prod);
    res.status(ans.status).json(ans.content);
});

// Borra un carrito y su contenido
router.delete("/:id", (req,res) => {
        let ans = carts.delCart(req.params.id);
        res.status(ans.status).json(ans.content);
});

module.exports.routerCarts = router;