# Propuesta TP DSW

## Grupo
### Integrantes
* 52288 Facundo Gobbo
* 50970 Juan Bouvier

### Repositorios
* [frontend app]([http://hyperlinkToGihubOrGitlab](https://github.com/JotaBame/TP-DSW-2024-Bouvier-Gobbo/tree/main))
 
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
- Permitir al usuario elegir un objetivo de dieta.

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Usuario<br>2. CRUD Alimento<br>3. CRUD Nutriente|
|CRUD dependiente|1. CRUD Receta {depende de} CRUD Alimento <br>2. CRUD Objetivos {depende de} CRUD Usuario|
|Listado<br>+<br>detalle| 1. Listado de alimentos filtrado por nombre, valor nutricional por 100 g => detalle CRUD Alimento<br> 2. Listado de recetas => detalle muestra datos completos de las recetas creadas por el usuario|
|CUU/Epic|1. Registrar alimento. <br>2. Registrar Receta<br>3. Registrar Usuario|


Adicionales para Aprobación
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Usuario<br>2. CRUD Alimento<br>3. CRUD Nutriente<br>4. CRUD Receta<br>5. CRUD Alimento Receta<br>6. CRUD Objetivo<br>7. CRUD Categoria Subscripcion|
|CUU/Epic|1. Registrar alimento. <br>2. Registrar Receta<br>3. Registrar Usuario<br>4. Registrar Subscripcion|


### Alcance Adicional Voluntario

*Nota*: El Alcance Adicional Voluntario es opcional, pero ayuda a que la funcionalidad del sistema esté completa y será considerado en la nota en función de su complejidad y esfuerzo.

|Req|Detalle|
|:-|:-|
|Listados |1. Listado de micronutriente por alimento (exclusivo de membresia) <br>2. Listado de todos los micronutrientes, permite consultar una lista de alimentos que los contenga.<br>3.A final de mes, listado de calorias consumidas por dia y un total a final de mes. Incluye el porcentaje por el cual se excede.|
|CUU/Epic|1. Registrar calorias consumidas por dia de la semana<br>2. Informar sugerencias de dieta|
|Otros|1. Envío de recordatorio de vencimiento de Suscripcion|
