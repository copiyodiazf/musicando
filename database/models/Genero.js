module.exports = function(sequelize, dataTypes){
    let alias = "Genero";
 
    let cols ={
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: dataTypes.STRING(45)
 
        }
 
 
  }
 
     let config = {
         tableName : "generos",
         timestamps : false
     }
    
     const Genero = sequelize.define (alias, cols, config);

     Genero.associate = function (models){
         Genero.hasMany(models.Cancion, {
             as: "canciones",
             foreignKey: "genero_id"
         })
     }
 
     return Genero
 }