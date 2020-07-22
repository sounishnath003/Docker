# Session Overview

### Session Topic: Introduction to Docker

This live session will help you to cover all the basic concepts of Docker. This session will start off with topics such as What is Docker?, What are Containers?, Why do we need **Docker?**

*Docker Engine, Docker Images, Docker Architecture.*
And then we will learn how to install docker and then finally we will run some basic Docker commands that are necessary to know when working with Docker.
Once you are done learning all these concepts you will have an adequate idea about what Docker is and you can then move one to other more advanced Docker Concepts.

# About Me

### Hey 👋🏽, I'm [Sounish!](https://sounishnath.netlify.app/) 

<br/>

<a href="https://twitter.com/sounish1">
  <img align="left" alt="Sounish | Nath " width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />
</a>
<a href="https://www.linkedin.com/in/sounish-nath-897b30186/">
  <img align="left" alt="Sounish's LinkdeIN" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
</a>

<a href="https://www.instagram.com/sounish003/">
  <img align="left" alt="Sounish's Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />
</a>
<br />
<br />
I'm Sounish Nath, student developer, specialized in **Web Development and Flutter**, new learning about *Cloud Computing with DevOps Engineering*
I've been in the technical content side for the last 1 year and has taught numerous classes with respect to DevOps.

# Deep Dive Into [Docker Container](https://www.docker.com/)
`Containerization reduces wasted resources because each container only holds the application and related binaries or libraries. By allowing more containers in the environment without the need for more servers, containerization increases scalability anywhere from 10 to 100 times that of traditional VM environments`

## What is Container?
Docker is a set of platform as a service products that uses OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single operating system kernel and therefore use fewer resources than virtual machines. Similar like VM's.

## Why To Use Docker?
Docker acts as a lightweight virtualization platform that lets you have the benefit of OS level virtualization without the overhead of running multiple, parallel OSes. It lets you drop ready-to-run "containers" into ANY hardware environment that supports Docker instances. It makes application deployment and scaling tons easier.


## Containers V/S VM?
`Depending upon critetias`
<br/>

### Operating System
Containers onlu the bare minimum parts of your OS, required to run any softwares.
VM s need copy of all.

### Architecture

### Isolation
Isolation provided a container as of complete VM. but not everything.
VM are sepatared networking configuration.

### Efficency
Container is more Efficent.
<br/>
But VM is less Efficent as comparent.

### Portability
Container has a master strock in this field.
<br/>
But VM's are little bit less.

### Scalability
Container best for scalability, than VM's.

# Why Do Need Containers?
1. **Microservices**
2. Consistent **Development + deployment.**

*`docker create container in which it put our working efficent code, providing security also`*

- Simple
- Fast
- Easy Collaboration
- Build for developers for Developers
- Docker Community


# Docker Installation
*[Download](https://www.docker.com/get-started)*  `Linux - Windows - MAC`


# Docker Environment
- Docker Engine
- Docker Object
- Docker Volumns
- Docker Networks
- Docker Registry/HUB
- 

<br />

# Docker Engine
Docker engine its a technology for creation and management of docker files. A CLI docker process
*3 Major Parts*
- Docker CLI
- Docker API
- Docker Container

# Docker Object
- Docker Images
    - To  create a container. Set of intructer used to create docker container. blueprint of docker container.
- Docker Container


# Docker Common Commands

1. `docker --version`
<br />

2. `docker images`
<br />

3. `docker pull ubuntu` // create a ubuntu os container [73.9 MB Only instead 3.9GB]
<br />

4. `docker run -it -d ubuntu` [-it = interactive, -d = running background]
<br />

5. `docker ps` [All running container]
<br />

6. `docker stop #{ID}` [automatically assigned]
<br />

7. `docker rm -f #{ID/name}` [removes ID/name]
<br />

*docker kill [also best suited]*

8. `docker exec -it #{ID} bash ` [Enter into container, in BASH mode]
<br />

9. `docker rmi` [ removes image, but kill the container that running]
<br />

10. `docker history` [ all history of commands executed ]
<br />


