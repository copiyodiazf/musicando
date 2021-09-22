let db = require('../database/models');

let cancionesController = {

    crear:(req, res)=>{
        
     db.Cancion.create(req.body)
      .then(cancion=>{
          return res.status(200).json({
              data: cancion,
              status: 200,
              created: "ok"
          })
      })   
    },

    
    listado: function(req, res){
        db.Cancion.findAll()
        .then(function(canciones){
            res.status(200).json({
                total: canciones.length,
                data: canciones,
                status: 200
            })
        })
    },
    
    detalle: function(req, res){
        db.Cancion.findByPk(req.params.id, {
            
        })
        .then(cancion=>{
            res.status(200).json({
                data: cancion,
                status: 200
        })
        
    })
},
    
    
   editar: async(req,res)=> {
        await db.Cancion.update(req.body, {
            where: {id: req.params.id}
        });
        res.json({success:"cancion modificada"})
    },

    borrar: function(req, res){
        db.Cancion.destroy({
            where:{
                id: req.params.id
            }
        }) 
         .then(response=>{
             return res.json(response)
    })


},

genero: function(req, res){
  db.Cancion.findAll({where:{
          genero_id : req.params.id
      }
  } )
    .then(canciones=>{
       return res.status(200).json(canciones)
            
        }
            
        )
    }

}



module.exports = cancionesController
