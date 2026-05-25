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

Overall, Docker networks play a crucial role in enabling communication and connectivity between containers, making it easier to build and deploy 
complex applications in a containerized environment.   

// TYPES OF NETWORK:
1. Bridge n/w: It is the default network type and provides a private internal network for containers on the same host. However, containers on different hosts 
    cannot communicate with each other using the bridge network.  

2. Host n/w: It allows containers to share the host's network stack, providing direct access to the host's network interfaces.

3. Overlay n/w: It enables communication between containers running on different hosts, allowing them to communicate as if they were on the same network.   
    Technologies like VXLAN or IPsec are used to creage virtual n/ws that span across multiple hosts, allowing containers to communicate securely and efficiently.

4. Container n/w interfaces (CNI): It is a specification that defines how container runtimes interact with network plugins to create and manage container networks. 
    CNI provides a standardized way to configure and manage container networking, allowing different network plugins to be used with different container runtimes. 
    CNI plugins can be used to create custom network configurations, such as connecting containers to specific subnets or applying network policies. 
    CNI is widely used in Kubernetes and other container orchestration platforms to manage container networking at scale. 
    
// ++++++++++++++++++++++ USE CASES OF DOCKER NETWORK +++++++++++++++++++++
1. Microservices Architecture: Docker networks are commonly used in microservices architectures to enable communication between different services running in separate containers. 
    Each service can be deployed in its own container, and Docker networks can be used to connect these containers together, allowing them to communicate securely and efficiently.

2. Multi-Container Applications: Docker networks are essential for multi-container applications, where multiple containers need to communicate with each other to function properly. 
    For example, a web application may consist of a frontend container, a backend container, and a database container, all of which need to communicate with each other using Docker networks.

3. Testing and Development: Docker networks are useful for testing and development purposes, allowing developers to create isolated environments for testing their applications. 
    Developers can create custom Docker networks to simulate different network configurations and test how their applications behave under various conditions.

4. Distributed Systems: Docker networks are crucial for distributed systems, where containers running on different hosts need to communicate with each other. 
    Docker networks can be used to create overlay networks that span across multiple hosts, enabling seamless communication between distributed applications.       

// ++++++++++++++++++++++ DOCKER NETWORK COMMANDS +++++++++++++++++++++

1. docker network create: This command is used to create a new Docker network. You can specify the network type (bridge, host, overlay) and other options such as subnet and gateway.

2. docker network connect: This command is used to connect a container to a Docker network. You can specify the container name or ID and the network name.

3. docker network disconnect: This command is used to disconnect a container from a Docker network. You can specify the container name or ID and the network name.

4. docker network inspect: This command is used to inspect a Docker network and view its configuration and connected containers. You can specify the network name or ID.

5. docker network ls: This command is used to list all Docker networks on the host machine, along with their names, IDs, and driver types.

6. docker network rm: This command is used to remove a Docker network. You can specify the network name or ID.

7. docker network -f drive=bridge : This command is used to filter Docker networks based on their driver type. In this case, it will list all networks that use the bridge driver.  

8. docker network ls --format "{{.ID}}: {{DRIVER}}: to find all n/w id and their driver type.


// DOCKER DNS: 
1. DNS stands for Domain Name System, which is a system that translates human-readable domain names into IP addresses.
2. DNS is how domain names are translated into IP addresses.
3. DNS allows us to use our web browsers to access websites using domain names instead of IP addresses.
4. Docker provides a built-in DNS server that allows containers to resolve the names of other containers on the same network. 
   This means that containers can communicate with each other using their container names instead of IP addresses, making it easier to manage 
   and connect containers in a Docker network.   

5. Containers uses DNS to communicate.


*/