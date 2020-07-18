# PoC-Docker
-Mongo image

-> cd PoC-Docker/DBServer

-> _**image**_ | sudo docker build -t **geekflare_mongodb** .

-> _**contaniner**_ | sudo docker run -it -v /data/db:/mongodata -p 27017:27017 --name **geekflare_mongodb** -d mongo



-Apache image


-> cd PoC-Docker/Presentation

-> _**image**_ | sudo docker build -t **httdp:latest**  .

-> _**contaniner**_ | sudo docker run -dit --name my-running-app -p 8080:80 **httdp:latest**

-> localhost:8080/index.html


-Node image


-> cd PoC-Docker/Logic

-> _**image**_ |  sudo docker build -t **node:nodejs** .

-> _**contaniner**_ | sudo docker run -dit --name my-running-logic -p 3000:3000 -d **node:nodejs**

-> localhost:3000
