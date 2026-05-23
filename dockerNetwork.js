/*   ++++++++++++++ DOCKER NETWORK ++++++++++++++
IT CONNECTS CONTAINERS TO OTHER CONTAINERS AND CONNECT CONTAINERS TO HOST MACHINE.
Docker network is a virtual network that allows containers to communicate with each other and with the outside world. 
It provides a way to isolate and manage the communication between containers, ensuring that they can interact securely and efficiently. 
Docker networks can be created, managed, and deleted using Docker commands, and they can be customized to meet specific requirements for different
applications and environments. 
Docker networks can be used to connect containers running on the same host or across multiple hosts, enabling seamless communication between distributed applications.
Docker networks can be classified into three types: bridge, host, and overlay. 
The bridge network is the default network type and provides a private internal network for containers on the same host. 
The host network allows containers to share the host's network stack, providing direct access to the host's network interfaces. 
The overlay network enables communication between containers running on different hosts, allowing them to communicate as if they were on the same network.

Docker networks can be created using the "docker network create" command, and containers can be connected to a network using the "docker network connect" command. 
Docker networks can also be inspected using the "docker network inspect" command, which provides detailed information about the network configuration and connected containers.

Overall, Docker networks play a crucial role in enabling communication and connectivity between containers, making it easier to build and deploy complex applications in a containerized environment.           

*/