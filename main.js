const express = require ("express");
const app = express();
const { routerProducts } = require ("./routes/products");
const { routerCarts } = require ("./routes/carts");
const serverPort = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/productos", routerProducts);
app.use("/api/carrito", routerCarts);
app.use((req, res) => {
    res.json({
    error: {
        error: -2,
        descripcion: `Ruta ${req.originalUrl} y metodo ${req.method} no implementados`
    }})});
app.listen(serverPort, () => {
    console.log(`Servidor activo y escuchando en puerto ${serverPort}`);
}).on("error", error => console.log(error.message));
