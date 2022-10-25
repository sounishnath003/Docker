#/bin/bash
clear
docker-compose down
docker-compose up --build --scale api=3
