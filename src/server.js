/*import express from 'express';*/
const express = require("express");
/*import { enrouterGifts } from "./router/gifts.js";*/

const server = express();
const port = 3000;

servidor.set('port', port);

// server.use("/gifts/", enrouterGifts);

server.get('/', (req, res) => {
    res.json({mesagge: "Works!"})
})

server.listen(port, ()=> {
    console.log(`Listening on port: ${port}`);
});