# Docker

Docker is an open-source platform designed to automate the deployment, scaling, and management of applications using containerization. Containers allow developers to package an application along with its dependencies, libraries, and configuration files into a single, lightweight, and portable unit. This ensures that the application runs consistently across different environments, such as development, testing, and production.

### Key Concepts 
**1. Container:**
- A lightweight, standalone, and executable package that includes everything needed to run an application (code, runtime, libraries, environment variables, and config files).
- Containers are isolated from each other and from the host system, ensuring consistency and security.

**2. Image:**
- A read-only template used to create containers. It contains the application code, runtime, libraries, and dependencies.
- Images are built from a Dockerfile, which defines the steps to create the image.

**3. Dockerfile:**
- A text file that contains instructions for building a Docker image.
  
```Dockerfile title="Dockerfile"
FROM ubuntu:20.04
RUN apt-get update && apt-get install -y python3
COPY . /app
WORKDIR /app
CMD ["python3", "app.py"]
```

**4. Docker Engine:**
- The core component of Docker that runs on the host machine and manages containers.
- It consists of:
    - Docker Daemon: A background service that manages Docker objects (images, containers, networks, and volumes).
    - Docker CLI: A command-line tool used to interact with the Docker Daemon.

**5. Docker Hub:**
- A cloud-based registry service where you can find, share, and store Docker images.
- Example: You can pull pre-built images like `nginx`, `postgres`, or `ubuntu` from Docker Hub.

### Why Use Docker?

**Consistency:**
Applications run the same way in development, testing, and production environments. This eliminates the "works on my machine" problem and ensures consistent behavior across different stages of the software lifecycle.

**Isolation:**
Containers are isolated from each other and the host system. This reduces conflicts between dependencies and improves security by limiting the impact of vulnerabilities.

**Portability:**
Containers can run on any system that supports Docker, regardless of the underlying infrastructure (e.g., physical servers, virtual machines, cloud platforms). This enables easy deployment and portability across different environments.

**Efficiency:**
Containers share the host OS kernel, making them lightweight and fast compared to virtual machines (VMs). This results in faster startup times, reduced resource consumption, and improved performance.

**Scalability:**
Docker makes it easy to scale applications horizontally by running multiple containers. This allows you to quickly and easily add or remove resources to meet demand.


### Example Workflow: Node.js Application

**Create a Dockerfile:**
```dockerfile title="Dockerfile"
FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
ENTRYPOINT ["node", "index.js"]
```

**Build the Image:**

```bash
docker build -t my-node-app .
```

**Run the Container:**
```bash
docker run -d -p 3000:3000 my-node-app
```

**Check Running Containers:**
```bash
docker ps
```

**Stop and Remove the Container:**
```bash
docker stop <container_id>
docker rm <container_id>
```

:::info
- The `-it` option in Docker commands is a combination of two flags: `-i` and `-t` These flags are used to make the container interactive and attach a terminal to it, allowing you to interact with the container's shell or process in real time. 
    - `docker run -it ubuntu`
- To execute a command inside a running Docker container. 
    - `docker exec [OPTIONS] <container_name_or_id> <command>`
- The `-d` flag in the command `docker-compose up -d` stands for detached mode.
  - Without `-d`, the logs of all the containers will be printed to your terminal, and you won't be able to use the terminal for other commands until you stop the containers (e.g., by pressing Ctrl+C).
  - With `-d`, the containers run in the background, and you can continue using the terminal for other tasks.
:::

### Common Docker Commands

| Command                                | Description                                      |
|----------------------------------------|--------------------------------------------------|
| `docker build -t <image_name> .`       | Build an image from a Dockerfile.               |
| `docker run <image_name>`              | Create and start a container from an image.     |
| `docker ps`                            | List running containers.                        |
| `docker ps -a`                         | List all containers (including stopped ones).   |
| `docker stop <container_id>`           | Stop a running container.                       |
| `docker rm <container_id>`             | Remove a container.                             |
| `docker images`                        | List all images.                                |
| `docker rmi <image_id>`                | Remove an image.                                |
| `docker pull <image_name>`             | Download an image from a registry.              |
| `docker push <image_name>`             | Upload an image to a registry.                  |
| `docker exec -it <container_id> <command>` | Run a command in a running container.       |
| `docker stop $(docker ps -q)`          | Stop all running container                      |

### Docker Compose
Docker Compose is a tool for defining and running multi-container Docker applications. It allows you to configure and manage multiple containers, networks, and volumes using a single docker-compose.yml file. Docker Compose simplifies the process of running complex applications that consist of multiple services (e.g., a web server, database, and cache) by automating the setup and orchestration of these services.

**Example `docker-compose.yml` File**
```yml title="docker-compose.yml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
    depends_on:
      - db
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```

### Common Docker Compose Commands

| Command                                  | Description                                        |
|------------------------------------------|----------------------------------------------------|
| `docker-compose up`                      | Start all services defined in `docker-compose.yml`.|
| `docker-compose up -d`                   | Start services in detached mode (background).     |
| `docker-compose down`                    | Stop and remove all containers, networks, and volumes. |
| `docker-compose ps`                      | List running containers.                          |
| `docker-compose logs`                    | View logs for all services.                       |
| `docker-compose logs <service>`          | View logs for a specific service.                 |
| `docker-compose build`                   | Build or rebuild services.                        |
| `docker-compose restart`                 | Restart all services.                             |
| `docker-compose stop`                    | Stop all services without removing them.          |
| `docker-compose start`                   | Start stopped services.                           |
| `docker-compose exec <service> <command>`| Run a command in a running service.               |
| `docker-compose scale <service>=<num>`   | Scale a service to multiple instances.            |

### Port mapping
Port mapping in Docker is the process of mapping a port on the host machine to a port inside a container. This allows external systems to communicate with services running inside the container. Port mapping is essential when you want to expose a service (e.g., a web server or database) running in a container to the outside world.

**How Port Mapping Works**
- Containers run in an isolated network environment by default.
- To make a service inside a container accessible from outside, you need to map a port on the host machine to the container's port.

**The general syntax for port mapping is:**
```bash
-p <host_port>:<container_port>
```
**Example:**
```
docker run -d -p 8080:80 --name my_nginx nginx
```

### Environment variables
**1. Using -e Flag with docker run:**
```bash
docker run -e <KEY>=<VALUE> <image_name>
```

Example:
```bash
docker run -d -e DB_HOST=localhost -e DB_USER=admin -e DB_PASS=secret my_app
```

**2. Using an Environment File**\
Create an environment file (e.g., `.env`):
```
DB_HOST=localhost
DB_USER=admin
DB_PASS=secret
```
Pass the file to the container:

```bash
docker run -d --env-file .env my_app
```

**3. Using docker-compose**
```yaml title="docker-compose.yml"
version: '3'
services:
  app:
    image: my_app
    environment:
      - DB_HOST=localhost
      - DB_USER=admin
      - DB_PASS=secret
```
Start the container:
```bash
docker-compose up -d
```

### Run multiple containers:
You can manually run multiple containers using the docker run command for each service.\
**1. Using docker run for Each Container:**
- Create and start the first container
    - docker run -d --name container1 nginx
- Create and start the second container
    - docker run -d --name container2 nginx
  
**2. Using Docker Compose:**
- Create a docker-compose.yml File:
```yaml title="docker-compose.yml"
version: '3'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: example
```
- **Run the Containers:**
```bash
docker-compose up -d
```
- **Stop the Containers:**
```bash
docker-compose down
```

### Docker Networking
- Docker networking enables communication between Docker containers, the host system, and external networks. Docker provides several networking options to suit different use cases, such as connecting containers, exposing services to the outside world, and isolating networks for security.\
- The default Docker network is the bridge network, which is automatically created when you install Docker. It is the default network driver used for containers unless you specify a different network.

**Types of Docker Networks**

**1. Bridge Network:**
- The default network driver for containers.
- Containers on the same bridge network can communicate with each other using IP addresses.
- Isolated from the host network by default.
- Ideal for single-host container communication.
```bash
docker network create my_bridge_network
docker run -d --name container1 --network my_bridge_network nginx
docker run -d --name container2 --network my_bridge_network nginx
```

**2. Host Network:**
- Containers share the host's network stack directly.
- No network isolation between the container and the host.
- Useful for performance-critical applications where network isolation is not required.
```
docker run -d --name my_container --network host nginx
```

**3. None Network:**
- Disables all networking for the container.
- The container has no network interfaces.
```
docker run -d --name my_container --network none nginx
```
### Docker Networking Commands

| Command                                      | Description                                      |
|----------------------------------------------|--------------------------------------------------|
| `docker network ls`                          | List all Docker networks.                        |
| `docker network inspect <network_name_or_id>`| Inspect details of a specific network.           |
| `docker network create my_network`           | Create a custom Docker network.                  |
| `docker network connect my_network my_container` | Connect a container to a network.            |
| `docker network disconnect my_network my_container` | Disconnect a container from a network.    |
| `docker network rm my_network`               | Remove a Docker network.                         |
| `docker network inspect bridge`              | Info about default brigde network                |
| `docker network create -d bridge my-network` | creates a new custom bridge network              |

### Volume Mounting
Docker volume mounting allows you to persist data generated by and used by Docker containers. Volumes are the preferred mechanism for persisting data in Docker, as they are managed by Docker and provide better performance and flexibility compared to bind mounts.

**Types of Docker Volume Mounting**

**Named Volumes:**
- Managed by Docker and stored in a directory on the host filesystem.
- Easier to manage and back up than bind mounts.

**Bind Mounts:**
- Directly map a file or directory on the host to a file or directory in the container.
- Useful for development or when you need specific host files available in the container.

**Anonymous Volumes:**
- Created by Docker when you don't specify a name for the volume.
- Typically used for temporary data.

### Commands for Docker Volume Mounting

| Command                                      | Description                                      |
|----------------------------------------------|--------------------------------------------------|
| `docker volume ls`                           | List all Docker volumes.                         |
| `docker volume inspect my_volume`            | Inspect details of a specific volume.            |
| `docker volume rm my_volume`                 | Remove a specific Docker volume.                 |
| `docker volume prune`                        | Remove all unused Docker volumes.                |


**Mounting Volumes in Containers**

**Named Volume**\
Mount a named volume to a container:

```bash
docker run -d --name my_container -v my_volume:/app/data nginx
```
- This mounts the my_volume volume to the /app/data directory in the container.

**Bind Mount**\
Mount a host directory to a container:

```bash
docker run -d --name my_container -v /host/path:/container/path nginx
```
- This mounts the /host/path directory on the host to the /container/path directory in the container.
  
**Anonymous Volume**\
Create an anonymous volume:

```bash
docker run -d --name my_container -v /container/path nginx
```
- Docker creates an anonymous volume and mounts it to /container/path.

