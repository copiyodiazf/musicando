module.exports = function(sequelize, dataTypes){
    let alias = "Album";
 
    let cols ={
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:{
            type: dataTypes.STRING(45)
 
        },
        duracion:{
            type: dataTypes.INTEGER(11)
 
        }
 
 
  }
 
     let config = {
         tableName :"albumes",
         timestamps : false
     }
    
     const Album = sequelize.define (alias, cols, config);

     Album.associate = function (models){
        Album.hasMany(models.Cancion, {
            as:"canciones",
            foreignKey: "album_id"
        })
    }
 
     return Album
 }