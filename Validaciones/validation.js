use('LifeJacket');

db.CollectionCompras("Compras", {
  validator : {
    $jsonSchema:{
      bsonType: "object",
         title: "Validacion Compras",
         required: [ "ID_Compra", "City", "Date", "Payment method", "Purchase price", "State" ],
         properties : {
          ID_Compra:{
            bsonType: "int"
          },
          City:{
            bsonType: "string"
          },
          Date:{
            bsonType: "string",
            minimun: 2020,
            maximun: 2025
          },
          Paymentmethod:{
            bsonType: "string"
          },
          Purchaseprice:{
            bsonType : "int",
            minimun: 8000000,
            maximun: 50000000
          },
          State:{
            bsonType : "string"
          }
        }
    }
  }
})


db.CollectionVendedores("Vendedores", {
  validator : {
    $jsonSchema:{
      bsonType: "object",
         title: "Validacion Vendedores",
         required: [ "ID_Vendedor", "num_documento", "Name", "LastName", "Telefon", "Email", "State" ],
         properties : {
          ID_Vendedor:{
            bsonType: "int"
          },
          num_documento:{
            bsonType: "bigint"
          },
          Name:{
            bsonType: "string"
          },
          LastName:{
            bsonType: "string"
          },
          Telefon:{
            bsonType : "int"
          },
          Email:{
            bsonType: "string"
          },
          State:{
            bsonType : "boolean"
          }
         }
    }
  }
})


db.CollectionVehiculos("Vehiculos", {
  validator : {
    $jsonSchema:{
      bsonType: "object",
         title: "Validacion Vehiculos",
         required: [ "Nameplate", "Mark", "colour", "fuel", "State" ],
         properties : {
          Nameplate:{
            bsonType: "string"
          },
          Mark:{
            bsonType: "string"
          },
          colour:{
            bsonType: "string"
          },
          fuel:{
            bsonType: "string"
          },
          State:{
            bsonType : "string"
          }
         }
    }
  }
})