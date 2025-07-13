---
sidebar_position: 1
title: 基本命令
---

## 查看帮助

使用 `--help` 参数可以查看命令的帮助信息。

```
docker --help
```

<details>
  <summary>终端输出</summary>
  <p>
```
Usage:  docker [OPTIONS] COMMAND

A self-sufficient runtime for containers

Common Commands:
  run         Create and run a new container from an image
  exec        Execute a command in a running container
  ps          List containers
  build       Build an image from a Dockerfile
  bake        Build from a file
  pull        Download an image from a registry
  push        Upload an image to a registry
  images      List images
  login       Authenticate to a registry
  logout      Log out from a registry
  search      Search Docker Hub for images
  version     Show the Docker version information
  info        Display system-wide information

Management Commands:
  builder     Manage builds
  buildx*     Docker Buildx
  checkpoint  Manage checkpoints
  compose*    Docker Compose
  container   Manage containers
  context     Manage contexts
  image       Manage images
  manifest    Manage Docker image manifests and manifest lists
  model*      Docker Model Runner (EXPERIMENTAL)
  network     Manage networks
  plugin      Manage plugins
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes

Swarm Commands:
  config      Manage Swarm configs
  node        Manage Swarm nodes
  secret      Manage Swarm secrets
  service     Manage Swarm services
  stack       Manage Swarm stacks
  swarm       Manage Swarm

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  import      Import the contents from a tarball to create a filesystem image
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes

Global Options:
      --config string      Location of client config files (default "/home/milir/.docker")
  -c, --context string     Name of the context to use to connect to the daemon (overrides DOCKER_HOST
                           env var and default context set with "docker context use")
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket to connect to
  -l, --log-level string   Set the logging level ("debug", "info", "warn", "error", "fatal") (default
                           "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default "/home/milir/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default "/home/milir/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default "/home/milir/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Run 'docker COMMAND --help' for more information on a command.

For more help on how to use Docker, head to https://docs.docker.com/go/guides/
```
  </p>
</details>

## 查看信息

使用 `info` 命令可以查看当前 Docker 的信息。

```
docker info
```

<details>
  <summary>终端输出</summary>
  <p>
```
Client: Docker Engine - Community
 Version:    28.3.2
 Context:    default
 Debug Mode: false
 Plugins:
  buildx: Docker Buildx (Docker Inc.)
    Version:  v0.25.0
    Path:     /usr/libexec/docker/cli-plugins/docker-buildx
  compose: Docker Compose (Docker Inc.)
    Version:  v2.38.2
    Path:     /usr/libexec/docker/cli-plugins/docker-compose
  model: Docker Model Runner (EXPERIMENTAL) (Docker Inc.)
    Version:  v0.1.33
    Path:     /usr/libexec/docker/cli-plugins/docker-model

Server:
 Containers: 0
  Running: 0
  Paused: 0
  Stopped: 0
 Images: 0
 Server Version: 28.3.2
 Storage Driver: overlay2
  Backing Filesystem: extfs
  Supports d_type: true
  Using metacopy: false
  Native Overlay Diff: true
  userxattr: false
 Logging Driver: json-file
 Cgroup Driver: systemd
 Cgroup Version: 2
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local splunk syslog
 CDI spec directories:
  /etc/cdi
  /var/run/cdi
 Swarm: inactive
 Runtimes: runc io.containerd.runc.v2
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 05044ec0a9a75232cad458027ca83437aae3f4da
 runc version: v1.2.5-0-g59923ef
 init version: de40ad0
 Security Options:
  seccomp
   Profile: builtin
  cgroupns
 Kernel Version: 6.6.87.2-microsoft-standard-WSL2
 Operating System: Ubuntu 24.04.2 LTS
 OSType: linux
 Architecture: x86_64
 CPUs: 16
 Total Memory: 15.54GiB
 Name: Windows
 ID: ef629f6f-9c8c-4df0-b23c-a056a394ec85
 Docker Root Dir: /var/lib/docker
 Debug Mode: false
 Experimental: false
 Insecure Registries:
  ::1/128
  127.0.0.0/8
 Live Restore Enabled: false
```
  </p>
</details>

## 拉取镜像

使用 `pull` 命令可以拉取 Docker 镜像。

```
docker pull <image_name>
# 拉取 hello-world 镜像
docker pull hello-world
```

<details>
  <summary>终端输出</summary>
  <p>
```
Using default tag: latest
latest: Pulling from library/hello-world
c9c5fd25a1bd: Pull complete
Digest: sha256:0b6a027b5cf322f09f6706c754e086a232ec1ddba835c8a15c6cb74ef0d43c29
Status: Downloaded newer image for hello-world:latest
docker.io/library/hello-world:latest
```
  </p>
</details>

## 运行容器

使用 `run` 命令可以运行 Docker 容器。

```
docker run <image_name>
# 运行 hello-world 容器
docker run hello-world
```

<details>
  <summary>终端输出</summary>
  <p>
```
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:

1.  The Docker client contacted the Docker daemon.
2.  The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
3.  The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
4.  The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
$ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
https://hub.docker.com/

For more examples and ideas, visit:
https://docs.docker.com/get-started/
```
  </p>
</details>