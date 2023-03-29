import pymongo
import random
import string






# Conectar a la base de datos en MongoDB Atlas
client = pymongo.MongoClient("mongodb+srv://LifeJacket:lifejacket123@cluster0.yrvnibf.mongodb.net/test") #Cluster and password
db = client.LifeJacket #Nombre de base de datos
collectionVendedores = db.Vendedores #Nombre de coleccion
collectionVehiculos = db.Vehiculos
collectionCompras = db.Compras

try:
    # La función list_collection_names() lanzará una excepción si no se puede conectar a la base de datos
    collection_names = db.list_collection_names()
    print("La conexion se ha establecido correctamente.")
except pymongo.errors.ConnectionFailure:
    print("La conexion ha fallado.")



i = 1
nombres = ["Juan", "Pedro", "Maria", "Luisa", "Ana", "Carlos", "Miguel", "Jorge", "Fernanda", "Diego", "Sofia", "Valentina", "Camila", "Andras", "Gabriel", "Lucia", "Lucas", "Isabella", "Manuel", "Sebastian", "Alexandra", "Antonio", 
           "Lorena", "Fabian", "Esteban", "Cristina", "Javier", "Ricardo", "Mariana", 
           "Daniel", "Roberto", "Angela", "Gustavo", "Jose", "Elena", "Pablo", "Gloria", "Julio", "Renata", "Oscar", "Laura", "Josue", "Alejandro", "Clara", "Catalina", "Rafael", "Francisco", "Diana", "Paola", "Andrea"]

apellidos = ['García', 'Martínez', 'Rodríguez', 'Fernández', 'López', 'Sánchez', 'González', 'Pérez', 
             'Gómez','Ruiz', 'Hernández', 'Díaz', 'Moreno', 'Álvarez', 'Romero', 'Jiménez', 
             'Sosa', 'Torres', 'Flores','Ramírez', 'Vargas', 'Benítez', 'Molina', 'Rojas', 
             'Castillo', 'Ortiz', 'Núñez', 'Medina', 'Silva', 'Suárez', 'Paz', 'Cruz', 'Gutiérrez', 
             'León', 'Aguilar', 'Ramos', 'Chávez', 'Valencia', 'Reyes','Gallegos', 'Escobar', 'Miranda', 
             'Morales', 'Herrera', 'Bautista', 'Soto', 'Herrera', 'Barrera','Cortés', 'Salas']

Marca_de_carros = ['Ford Mustang', 'Chevrolet Camaro', 'Dodge Challenger', 'Porsche 911', 'Ferrari 488','Lamborghini Aventador', 
                     'McLaren 720S', 'BMW M3', 'Mercedes-Benz S-Class', 'Audi R8', 'Tesla Model S', 'Toyota Supra', 'Honda Civic Type R', 
                     'Subaru WRX STI', 'Nissan GT-R','Mazda MX-5 Miata', 'Jeep Wrangler', 'Land Rover Range Rover', 'Ford F-150','Chevrolet Silverado', 'Ram 1500', 'GMC Sierra', 'Volkswagen Golf GTI', 'Mini Cooper',
                     'Fiat 500', 'Kia Stinger', 'Hyundai Veloster N', 'Lexus LC 500', 'Acura NSX', 'Lotus Evora']

colores = ['rojo', 'verde', 'azul', 'amarillo', 'naranja', 'morado', 'rosado', 'negro', 'blanco', 'gris','marron', 'turquesa', 'beige', 
           'dorado', 'plateado']

Estado = [ "Habilitado", "Deshabilitado"]
EstadoCompra = [ "Habilitado", "Deshabilitado"]

Combustible = ['Gasolina', 'Gas', 'Electrico'] 

ciudades = ['Bogota', 'Medellin', 'Cali', 'Barranquilla', 'Cartagena', 'Cucuta', 'Ibague','Manizales', 'Pereira', 'Santa Marta']

fechas = ['2023-01-01', '2023-01-06', '2023-02-14', '2023-03-20', '2023-04-01', '2023-04-16', '2023-04-17',
          '2023-05-01', '2023-05-08', '2023-05-29', '2023-06-12', '2023-06-19', '2023-07-01', '2023-07-20',
          '2023-08-07', '2023-08-15', '2023-09-12', '2023-10-09', '2023-10-16', '2023-11-01', '2023-11-06',
          '2023-11-11', '2023-11-13', '2023-12-08', '2023-12-15', '2023-12-24', '2023-12-25', '2024-01-01',
          '2024-01-06', '2024-02-14', '2024-03-18', '2024-03-19', '2024-04-01', '2024-04-08', '2024-04-15',
          '2024-04-22', '2024-05-01', '2024-05-13', '2024-06-03', '2024-06-10', '2024-06-17', '2024-06-24',
          '2024-07-01', '2024-07-20', '2024-08-07', '2024-08-15', '2024-08-19', '2024-09-09', '2024-10-14',
          '2024-10-31', '2024-11-01', '2024-11-04', '2024-11-11']

MetodoDePago = ['Efectivo', 'Intercambio']

print("Entrara al for")
for i in range(100):

    #VENDEDORES
    num_documento = random.randint(1000000000, 9999999999)
    num1= random.randint(0,len(nombres)-1)
    nombre1 = nombres[num1]
    num11 = random.randint(0,len(apellidos)-1)
    apellido = apellidos[num11]
    numeroA = random.randint(100, 999)
    celular = random.randint(3000000000, 9999999999)    
    correo = nombre1+str(numeroA)+"@gmail.com"
    estado = random.choice([True, False])
    
    collectionVendedores.insert_one({
        "ID_Vendedor" : i,
        "num_documento" : num_documento,
        "Name" : nombre1,
        "LastName": apellido,
        "Telefon" : celular,
        "Email" : correo,
        "State" : estado,
    })
    
    #VEHICULOS
    num3 = random.randint(0,len(Marca_de_carros)-1)
    marca = Marca_de_carros[num3]
    num4 = random.randint(0,len(colores)-1)
    colorcarro = colores[num4]
    num5 = random.randint(0,len(Estado)-1)
    estadocarro = Estado[num5]
    num6 = random.randint(0,len(Combustible)-1)
    combustible = Combustible[num6]

    N_placa = random.randint(100, 999)  
    L_placa = ''.join(random.choices(string.ascii_uppercase, k=3))
    placa = str(L_placa) + '-' + str(N_placa) 

    collectionVehiculos.insert_one({
        "Nameplate" : placa,
        "Mark" : marca,
        "colour" : colorcarro,
        "fuel" : combustible,
        "State" : estadocarro,
    })

    #COMPRAS
    num7 = random.randint(0,len(ciudades)-1)
    city = ciudades[num7]
    num8 = random.randint(0,len(fechas)-1)
    date = fechas[num8]
    num9 = random.randint(0,len(MetodoDePago)-1)
    pago = MetodoDePago[num9]
    num10 = random.randint(0,len(EstadoCompra)-1)
    estadocompra = EstadoCompra[num10]
    precio = random.randint(8000000, 50000000)


    collectionCompras.insert_one({
        "ID_Compra": i,
        "City" : city,
        "Date" : date,
        "Payment method" : pago,
        "Purchase price" : precio,
        "State" : estadocompra,
    })

print("Se termino la ejecucion")