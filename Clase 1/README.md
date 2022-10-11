# Clase 1
![Diap1](./img/Diap1.png)
![Diap2](./img/Diap2.png)
![Diap3](./img/Diap3.png)
![Diap4](./img/Diap4.png)
![Diap5](./img/Diap5.png)
![Diap6](./img/Diap6.png)

### Comandos:
Crear un Dockerfile con este contenido:
```
FROM httpd:2.4 
COPY ./public-html/ /usr/local/apache2/htdocs/
```
Correr Comandos:
```
docker build -t my-apache2 .
docker run -dit --name my-running-app -p 8080:80 my-apache2
```

![Diap7](../img/Agradecimiento.png)
