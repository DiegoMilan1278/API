const VehiculosRouter = require('./VehiculosRouter')
const ComprasRouter = require('./ComprasRouter')
const VendedoresRouter = require('./VendedoresRouter')


function routerApi(){
    app.use('/Vehiculos', VehiculosRouter)
    app.use('/Compras', ComprasRouter)
    app.use('/Vendedores', VendedoresRouter)
}

module.exports = routerApi