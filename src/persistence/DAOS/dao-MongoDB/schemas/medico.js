import mongoose, { Schema, model } from 'mongoose';
// import { categoryCollection } from './category';

export const medicosCollectionName = 'medicos';

const medicosSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
//   category: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: categoryCollection,
// }
},
{timestamps: true},

)

export const MedicosModel = mongoose.model(
  medicosCollectionName,
  medicosSchema
);