# PoC-Docker
-Mongo image
-> sudo docker pull mongo

-Apache image
-> docker build -t my-apache2 .
-> docker run -dit --name my-running-app -p 8080:80 my-apache2

-Node image
-> docker build -t <<your_dockerhub_username>>/<<image_name>> .
