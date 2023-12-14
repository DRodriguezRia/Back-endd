import mongoose from 'mongoose';


mongoose.connect(
    process.env.MONGODBATLAS
).then ((date) => console.log('Camino Feliz'))
.catch((err) => console.log('Error'));