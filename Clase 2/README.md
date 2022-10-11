# Clase 2
![Diap1](./img/Diap1.png)
![Diap2](./img/Diap2.png)
![Diap3](./img/Diap3.png)
![Diap4](./img/Diap4.png)
![Diap5](./img/Diap5.png)
![Diap6](./img/Diap6.png)
![Diap7](./img/Diap7.png)

### Ejercicio:
Correr Comandos:

`docker network create --driver bridge mysql-net`

`docker run --name db --network mysql-net -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql`

`docker run --name phpmyadmin --network mysql-net -e PMA_HOST=db -e MYSQL_ROOT_PASSWORD=password -e PMA_PORT=3306 -d -p 8080:80 phpmyadmin/phpmyadmin`

![Diap8](../img/Agradecimiento.png)
