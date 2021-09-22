module.exports = function(sequelize, dataTypes){
   let alias = "Cancion";

   let cols ={
       id:{
           type: dataTypes.INTEGER(11),
           primaryKey: true,
           autoIncrement: true
       },
       titulo:{
           type: dataTypes.STRING(45)

       },
       duracion:{
           type: dataTypes.INTEGER(11)

       },
      
       generoId: {
        type: dataTypes.STRING,
        field: 'genero_id'
      },

      albumId: {
        type: dataTypes.STRING,
        field: 'album_id'
      },

      artistaId: {
        type: dataTypes.STRING,
        field: 'artista_id'
      }



 }

    let config = {
        tableName : 'canciones',
        timestamps : false
    }
   
    const Cancion = sequelize.define (alias, cols, config);

    Cancion.associate = function (models){
        Cancion.belongsTo(models.Artista, {
            as: "artistas",
            foreignKey: "artista_id"
        })
    }

    Cancion.associate = function (models){
        Cancion.belongsTo(models.Album, {
            as: "albumes",
            foreignKey: "album_id"
        })
    }

    Cancion.associate = function (models){
        Cancion.belongsTo(models.Genero, {
            as: "generos",
            foreignKey: "genero_id"
        })
    }

    return Cancion
}