/*   ++++++++++++++ DOCKER CONTAINERS ++++++++++++++
containerization is a lightweight alternative to full machine virtualization that involves encapsulating an application in a container with 
its own operating environment.  
container are required for efficient and consistent app deployment and management, ensuring portablity, scalability and security across different environments.

CONTAINER IMAGE: A container image is a lightweight, standalone, executable package that includes everything needed to run a piece of software, including the code, runtime, 
system tools, libraries, and settings. Container images are used to create and run containers, which are instances of the image that can be executed on a container runtime. 
Container images are typically built using a Dockerfile, which is a text file that contains instructions for building the image. Once built, container images can be stored in 
a container registry and shared with others, making it easy to deploy applications across different environments.  

CONTAINER IMAGE IS THE RUNNING INSTANCE OF THE APPLICATION.


MYSQL IMAGE: docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag


*/