import mongoose from "mongoose";
import {mongodb} from './keys'

mongoose.connect(mongodb.URI)
.then(db => console.log('conectado a mongo'))
.catch(err => console.log(err));