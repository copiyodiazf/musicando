module.exports = function(sequelize, dataTypes){
    let alias = "Artista";
 
    let cols ={
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:{
            type: dataTypes.STRING(45)
 
        },
        apellido:{
            type: dataTypes.STRING(45)
 
        }
 
 
  }
 
     let config = {
         tableName : 'artistas',
         timestamps : false
     }
    
     const Artista = sequelize.define (alias, cols, config);

    Artista.associate = function (models){
        Artista.hasMany(models.Cancion, {
            as: "canciones",
            foreignKey: "artista_id"
        })
    }
 
     return Artista
 }