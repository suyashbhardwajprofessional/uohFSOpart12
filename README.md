# uohFSOpart12


$ docker -v
Docker version 25.0.3, build 4debf41

docker container run --rm CONTAINER-NAME ls						remove/delete container after execution
container run -it --name NEW_IMAGE_NAME FROM_IMAGE COMMAND 		run a container from specified image with specified new name & command
docker container ls -a 											list of all the containers	
docker container ls | docker ps									list of all the currently running containers
docker start CONTAINER-ID-OR-CONTAINER-NAME 					start an already exited container
docker start -i CONTAINER-ID-OR-CONTAINER-NAME 					start an already exited container (interactive mode)
docker kill CONTAINER-ID-OR-CONTAINER-NAME 						stop a running container forcefully
script 															record commands you type into a log
commit CONTAINER-ID-OR-CONTAINER-NAME NEW-IMAGE-NAME 			create a new image with changes you've made
docker image ls 												list of all the images
docker container rm CONTAINER-ID-OR-CONTAINER-NAME 				remove/delete a container
docker container cp PATH CONTAINER-NAME:PATH 					copy file from machine to a container
docker run --help
docker build -t New_IMAGE_NAME DOCKERFILE_PATH	 				build an image based on dockerfile
docker image rm IMAGE_NAME 										remove an image
docker image --help
docker run -it IMAGE_NAME COMMAND								run an image in interactive mode with bash command
docker run -p HOST-PORT:APPLICATION-PORT 						run an image with a specified port in host machine mapped to a port in container
docker compose up 												build & run an application
docker compose up -d											build & run an application (in detached mode)
docker compose -f DOCKER-COMPOSE-FILE-NAME up 					run an image built from the specified docker-compose file
