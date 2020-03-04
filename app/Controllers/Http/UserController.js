'use strict'

const Propiedad = use('App/Models/Propiedad')

class UserController {
    async index ({ request, response }) {
        var user = await Propiedad.find(10)
        const propiedades = await user.caracteristicas().fetch()
        //var users = await Database.table('caracteristicas').where('id_caracteristica', 1).select('descripcion')
        response.json(propiedades)
      }
}

module.exports = UserController
