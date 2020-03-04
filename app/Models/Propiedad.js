const Model = use('Model')

class Propiedad extends Model {
    static get table () {
        return 'propiedades'
    }

    static get primaryKey () {
        return 'id_propiedad'
      }

  inmobiliaria () {
    return this.belongsTo('App/Models/Inmobiliaria')
  }

  caracteristicas () {
    return this.belongsToMany('App/Models/Caracteristica',
                                     'id_propiedad', 'id_caracteristica', 
                                    'id_propiedad', 'id_caracteristica').pivotTable('tbl_caracteristicas_propiedades')
  }
}

module.exports = Propiedad