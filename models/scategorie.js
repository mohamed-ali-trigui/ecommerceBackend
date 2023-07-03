const mongoose =require("mongoose")
const Categorie =require("./categorie.js");// pour clé étrangére
const scategorieSchema=mongoose.Schema({
nomscategorie:{ type: String, required: true },
imagescat :{ type: String, required: false },
categorieID: {type:mongoose.Schema.Types.ObjectId,
ref:Categorie} //cle etrangére . On travail sur sous catégorie
})
module.exports=mongoose.model('scategorie',scategorieSchema)