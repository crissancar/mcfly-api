<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Build en Docker 🐳
```bash
$ make start-mcfly-backend
```
_Y listo💨_

_En caso de no tener instalado el comando make, se puede instalar con:_
```bash
$ sudo apt-get update
```
```bash
$ sudo apt-get install make
```
_o con:_
```bash
$ sudo apt-get install --reinstall make
```

## Limpiar contenedores de Docker 🐳
```bash
$ make clean
```
## Build en Local
_En caso de arrancar la aplicación en local, primero se tendrá que levantar la base de datos con el comando ➡ make start_database_
```bash
$ npm install
```
```bash
$ npm run build
```
```bash
$ make start_database
```
```bash
$ npm run start:dev
```

## Test
_En caso de lanzar los test en local, primero se tendrá que levantar la base de datos con el comando ➡ make start_database_

```bash
# toda la suite de test en Docker
$ make test

# toda la suite de test en Local
$ npm run test

# tests unitarios y de integración
$ npm run test:unit

# test de aceptación
$ npm run test:features
```
