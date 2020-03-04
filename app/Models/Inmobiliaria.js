const Model = use('Model')

class Inmobiliaria extends Model {

    static get primaryKey () {
        return 'id_inmobiliaria'
      }

      static get hidden () {
        return ['contrasenia']
      }
  
    propiedades () {
      return this.hasMany('App/Models/Propiedad', 'id_inmobiliaria', 'id_inmobiliaria')
    }
  
  }

  module.exports = Inmobiliaria