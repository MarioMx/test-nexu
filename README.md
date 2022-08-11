To install the node modules run:
npm install

To install the nodemoon global run:
npm install -g nodemon

To eject Endpoints in postman
import from postman file /postmanCollection/testNexu.postman_collection.json

To start project:
nodemon app

El proyecto esta creado en node js con una base de datos no sql en mongoDB

tuve una complicacion ya que en donde vivo gubo un mantenimiento en el suministro electrico y se me fue varias veces la luz mientras estaba realizando el desarrollo de la prueba.

realmente se me hizo un poco sencilla con la experiencia que ya e tenido pero como en los ultimos meses estoy como teach lead frontend tuve que recordar y retomar un poco sobre lo que ya tenia aprendido.

//Brands
GET /brands LISTO
List all brands
GET /brands
Example
GET http://localhost:3000/brands

POST /brands LISTO
Add new brands
POST /brands JSON ({"name": "Toyota"})
Example
POST http://localhost:3000/brands JSON ({"name": "Toyota"})

/Models
GET /brands/:id/models LISTO
List all Models of the brand
GET /brands/:id/models
Example
GET http://localhost:3000/brands/1/models

POST /brands/:id/models LISTO
Add new model of the brands
POST /brands/:id/models JSON {"name": "Prius", "average_price": 406400}
Example
POST http://localhost:3000/brands/1/models JSON {"name": "Prius", "average_price": 406400}

PUT /models/:id
Update average price of model
POST /models/:id JSON {"average_price": 406400}
Example
POST http://localhost:3000/models/1 JSON {"average_price": 406400}

GET /models?greater=&lower= LISTO
Get All Models where Average Price between than greater and lower
POST /models?greater=&lower=
Example
POST http://localhost:3000/models?greater=100000&lower=150000
