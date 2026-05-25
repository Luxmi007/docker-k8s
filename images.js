/*
++++++++++++++++ DOCKER IMAGES++++++++++++++++++++++
Docker images are the building blocks of Docker containers. They are read-only templates that contain the instructions for creating a Docker container.
Docker images are created using a Dockerfile, which is a text file that contains a series of instructions for building the image. 
The Dockerfile specifies the base image to use, the commands to run, and any additional files or dependencies that need to be included in the image.

Docker images can be stored in a Docker registry, such as Docker Hub, which allows users to share and distribute their images with others. 
Users can pull images from the registry to create containers on their local machine or push their own images to the registry for others to use.

Docker images are versioned and can be tagged with specific versions or labels, making it easy to manage and deploy different versions of an application. 
When a container is created from an image, it runs as an isolated instance of that image, allowing multiple containers to run simultaneously without interfering with each other.

Overall, Docker images play a crucial role in the Docker ecosystem, providing a standardized way to package and distribute applications in a containerized environment.     

// COMMANDS RELATED TO DOCKER IMAGES:

1. docker images: This command is used to list all the Docker images available on the local machine. It displays the repository name, tag, image ID,
   creation date, and size of each image.

2. docker pull: This command is used to pull a Docker image from a registry, such as Docker Hub, to the local machine. You can specify the image name and 
   tag to pull a specific version of the image.

3. docker build: This command is used to build a Docker image from a Dockerfile. You can specify the path to the Dockerfile and the context for the build, 
   which is the directory containing the files needed for the build.

4. docker tag: This command is used to tag a Docker image with a specific name and tag. This is useful for versioning and organizing images in a registry.

5. docker push: This command is used to push a Docker image from the local machine to a registry, such as Docker Hub. You can specify the image name 
   and tag to push a specific version of the image.

6. docker rmi: This command is used to remove a Docker image from the local machine. You can specify the image name or ID to remove a specific image.

7. docker history: This command is used to view the history of a Docker image, showing the layers that make up the image and the commands that were used to create each layer.


// DOCKER IMAGE LAYERS:
Docker images are built in layers, where each layer represents a set of changes made to the image. 
When a Dockerfile is executed, each instruction creates a new layer on top of the previous layers. 
This layered architecture allows for efficient storage and sharing of images, as common layers can be reused across multiple images. 
When an image is pulled from a registry, only the layers that are not already present on the local machine need to be downloaded, 
which can significantly reduce the time and bandwidth required to pull an image.  

// DOCKER TAGS:
Docker tags are used to identify specific versions of a Docker image. A tag is a label that is attached to an image, allowing users to easily reference
and manage different versions of the same image. 
Tags are typically used to indicate the version of an application or the environment in which the image is intended to be used. 
For example, a web application might have different tags for development, staging, and production environments, allowing users to easily deploy
the appropriate version of the image based on their needs. 
Tags can also be used to indicate specific features or configurations of an image, such as a tag for a specific database version or a tag for an image 
that includes additional tools or dependencies.      
*/