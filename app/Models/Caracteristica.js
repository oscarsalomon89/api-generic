const Model = use('Model')

class Caracteristica extends Model {
    static get primaryKey () {
        return 'id_caracteristica'
      }

      /*propiedades () {
        return this.belongsToMany('App/Models/Propiedad', 'id_caracteristica', 'id_caracteristica').pivotTable('tbl_caracteristicas_propiedades')
      }*/
  
}

module.exports = Caracteristica