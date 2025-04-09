# Propuesta TP DSW

## Grupo
### Integrantes
* 52288 Facundo Gobbo
* 50970 Juan Bouvier

### Repositorios
* [frontend app](http://hyperlinkToGihubOrGitlab)
* [backend app](http://hyperlinkToGihubOrGitlab)
*Nota*: si utiliza un monorepo indicar un solo link con fullstack app.

## Bizz Fitness 
### Descripción
Permite a los usuarios armar y mantener el seguimiento sobre sus dietas. Se podra crear recetas y consultar el valor nutricional de alimentos. Los usuarios tambien podran compartir sus recetas online.

Tambien permitira a los usuarios realizar un seguimiento de sus dietas, asignar comidas para las distintas horas del dia y ayudará a establecer los objetivos de peso.


### Modelo
![Imagen de WhatsApp 2025-04-09 a las 19 53 25_9577f074](https://github.com/user-attachments/assets/970f2414-5015-4031-abbc-fb6e1427e6ab)


## Alcance Funcional 
- Permitir que los usuarios ingresen el tipo y cantidad de alimento al sistema para poder calcular y devolver las cantidades de calorias por alimento-cantidad y por el total de los alimentos
- Registrar los datos del usuario para establecer los objetivos de la dieta. 
- Registrar los datos del alimento y su valor nutricional. Debe ser posbile distinguir en base a marca.
- Crear recetas y publicarlas online.
- Los usuarios podran pagar una membresia para acceder a ciertas funciones.
  
### Alcance Mínimo
- Permitir que los usuarios ingresen el tipo y cantidad de alimento al sistema para poder calcular y devolver las cantidades de calorias por alimento-cantidad y por el total de los alimentos
- 
- Permitir al usuario elegir un objetivo de dieta.

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Usuario<br>2. CRUD Alimento<br>3. CRUD Nutriente|
|CRUD dependiente|1. CRUD Receta {depende de} CRUD Alimento <br>2. CRUD Dieta {depende de} CRUD Usuario|
|Listado<br>+<br>detalle| 1. Listado de alimentos filtrado por nombre, valor nutricional por 100 g => detalle CRUD Alimento<br> 2. Listado de recetas => detalle muestra datos completos de las recetas creadas por el usuario|
|CUU/Epic|1. Registrar alimento. <br>2. Registrar Receta|


Adicionales para Aprobación
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Usuario<br>2. CRUD Alimento<br>3. CRUD Nutriente<br>4. CRUD Receta<br>5. CRUD Alimento Receta<br>6. CRUD Objetivo<br>7. CRUD Categoria Subscripcion|
|CUU/Epic|1. Reservar una habitación para la estadía<br>2. Realizar el check-in de una reserva<br>3. Realizar el check-out y facturación de estadía y servicios|


### Alcance Adicional Voluntario

*Nota*: El Alcance Adicional Voluntario es opcional, pero ayuda a que la funcionalidad del sistema esté completa y será considerado en la nota en función de su complejidad y esfuerzo.

|Req|Detalle|
|:-|:-|
|Listados |1. Estadía del día filtrado por fecha muestra, cliente, habitaciones y estado <br>2. Reservas filtradas por cliente muestra datos del cliente y de cada reserve fechas, estado cantidad de habitaciones y huespedes|
|CUU/Epic|1. Consumir servicios<br>2. Cancelación de reserva|
|Otros|1. Envío de recordatorio de reserva por email|
