import mongoose from "mongoose";
const Uri = "mongodb+srv://esusjadrian:bcuAxIzP4wunGQUx@pixelcrafters.fvpzuah.mongodb.net/PixelCrafters?retryWrites=true&w=majority";

mongoose.connect(Uri)
.then(db => console.log('conectado a mongo'))
.catch(err => console.log(err));