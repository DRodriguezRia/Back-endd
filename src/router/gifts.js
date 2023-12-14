import { Router } from "express";

const enrouter = Router();

enrouter.get('/', (req, res) => {
    res.json({mensaje: "Prueba desde GET"})
})

enrouter.post('/', (req, res) => {
    res.json({mensaje: "Prueba desde POST"})
})

enrouter.put('/', (req, res) => {
    res.json({mensaje: "Prueba desde PUT"})
})

enrouter.delete('/', (req, res) => {
    res.json({mensaje: "Prueba desde DELETE"})
})

export default enrouter;