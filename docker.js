/*  ONLY ADMIN CAN USE THE DOCKER ON THIS MACHINE TO DO THAT
           run this command:- SUDO -S 

  docker is a virtualisation s/w OR tool that makes development and deployment of the apps easier; 
  it does that by making all the necessary pakages with necessary dependencies into containers.
*/
// it is easily shared and distributed over the n/w
// it standardises process of running any service on any local dev env.
// Easy to run diff. versions of same app without any conflicts
/* 
      VIRTUAL machine v/s DOCKER
  Docker virtualises application layer :- It contains app layer and services and apps installed on that layer. It uses kernel of the host machine.

  Virtual machines contains app layer and its own kernel so it virtualises the complete OS.

     docker images are in MBs ; VMs images in GB
     container takes secs to start ; VMs takes minutes
     compatible with linux ; with all OS
     
  Docker image: immutable template that defines how a container will be realized
                executable artifact file.
                includes source code as well as complete env. conmfigration.
               
                Docker images are versioned

  Docker Container: it is a lightweight, standalone, executable package of software that includes everything needed to run an application: 
  code, runtime, system tools, system libraries and settings.   
              a running instance of image ; that's when the env is created .
Docker containers are based on the concept of containerization, which is a technology for pakagiging and isolationg apps and their dependencies 
from the underlying host system.

  MULTIPLE CONTAINERS CAN BE RUN FROM A SINGLE IMAGE 
  
  Docker Registeries: A storage distribution system for docker images.
         Docker hub is one of the biggest docker registry to find and share docker images

  * USING A specific version is best practice in most cases


         docker run imageName:tag :- this will directly run the container of that image(pehle it will try to find whethher the 
         image is locally available or not; agar available nhi hogi toh it will directly fetch that image from DOCKER hub and that container will 
         run on our machine)

         ## DOCKER RUN COMMAND: docker run-d imagename:tag ##
      
  PORT BINDING : to connect the port of our machine to the docker images
        ## DOCKER RUN COMMAND: docker run -d -p imagename:tag ##


        START and STOP Commands
       # docker stop imageId/name (to stop the container)
       # docker start imageId/name (to start the container)
       # docker run --name any relevant name -d -p 90:90 imageName:tag (to make a container with  a specified name)

MAKING A DOCKER IMAGE LOCALLY
    
        FROM :- build this image FROM the specified image
             e.g : FROM node:version

        COPY:- copies files or directories from <src> and adds them to the filesystem of the 
               conatainer at the <path>     

         RUN :- will execute any command in a shell inside the container env.
             e.g: RUN npm i
             
  RUN is executed in CONTAINER, COPY is executed on the host      
    
         CMD :- instruction that is to be executed when a docker container starts
         There can only be ONE "CMD" instruction in a dockerfile

  # BUILD docker file ##
             docker build -t imageName:tag .


         */        
