---
sidebar_position: 2
title: 基本命令
---

## 查看帮助

使用 `--help` 参数可以查看命令的帮助信息。

```
conda --help
```

<details>
  <summary>终端输出</summary>
  <p>
```
usage: conda [-h] [-v] [--no-plugins] [-V] COMMAND ...

conda is a tool for managing and deploying applications, environments and packages.

options:
  -h, --help            Show this help message and exit.
  -v, --verbose         Can be used multiple times. Once for detailed output, twice for INFO logging, thrice for DEBUG
                        logging, four times for TRACE logging.
  --no-plugins          Disable all plugins that are not built into conda.
  -V, --version         Show the conda version number and exit.

commands:
  The following built-in and plugins subcommands are available.

  COMMAND
    activate            Activate a conda environment.
    build               Build conda packages from a conda recipe.
    clean               Remove unused packages and caches.
    commands            List all available conda subcommands (including those from plugins). Generally only used by
                        tab-completion.
    compare             Compare packages between conda environments.
    config              Modify configuration values in .condarc.
    content-trust       Signing and verification tools for Conda
    convert             Convert pure Python packages to other platforms (a.k.a., subdirs).
    create              Create a new conda environment from a list of specified packages.
    deactivate          Deactivate the current active conda environment.
    debug               Debug the build or test phases of conda recipes.
    develop             Install a Python package in 'development mode'. Similar to `pip install --editable`.
    doctor              Display a health report for your environment.
    env                 Create and manage conda environments.
    export              Export a given environment
    index               Update package index metadata files.
    info                Display information about current conda install.
    init                Initialize conda for shell interaction.
    inspect             Tools for inspecting conda packages.
    install             Install a list of packages into a specified conda environment.
    list                List installed packages in a conda environment.
    metapackage         Specialty tool for generating conda metapackage.
    notices             Retrieve latest channel notifications.
    pack                See `conda pack --help`.
    package             Create low-level conda packages. (EXPERIMENTAL)
    remove (uninstall)  Remove a list of packages from a specified conda environment.
    rename              Rename an existing environment.
    render              Expand a conda recipe into a platform-specific recipe.
    repo                See `conda repo --help`.
    repoquery           Advanced search for repodata.
    run                 Run an executable in a conda environment.
    search              Search for packages and display associated information using the MatchSpec format.
    server              See `conda server --help`.
    skeleton            Generate boilerplate conda recipes.
    token               See `conda token --help`.
    tos                 A subcommand for viewing, accepting, rejecting, and otherwise interacting with a channel's
                        Terms of Service (ToS). This plugin periodically checks for updated Terms of Service for the
                        active/selected channels. Channels with a Terms of Service will need to be accepted or
                        rejected prior to use. Conda will only allow package installation from channels without a
                        Terms of Service or with an accepted Terms of Service. Attempting to use a channel with a
                        rejected Terms of Service will result in an error.
    update (upgrade)    Update conda packages to the latest compatible version.
```
  </p>
</details>

## 查看信息

使用 `info` 命令可以查看当前 Conda 环境的信息。

```
conda info
```

<details>
  <summary>终端输出</summary>
  <p>
```
     active environment : base
    active env location : /home/milir/anaconda3
            shell level : 1
       user config file : /home/milir/.condarc
 populated config files : /home/milir/anaconda3/.condarc
          conda version : 25.5.1
    conda-build version : 25.5.0
         python version : 3.13.5.final.0
                 solver : libmamba (default)
       virtual packages : __archspec=1=skylake
                          __conda=25.5.1=0
                          __cuda=12.6=0
                          __glibc=2.39=0
                          __linux=6.6.87.2=0
                          __unix=0=0
       base environment : /home/milir/anaconda3  (writable)
      conda av data dir : /home/milir/anaconda3/etc/conda
  conda av metadata url : None
           channel URLs : https://repo.anaconda.com/pkgs/main/linux-64
                          https://repo.anaconda.com/pkgs/main/noarch
                          https://repo.anaconda.com/pkgs/r/linux-64
                          https://repo.anaconda.com/pkgs/r/noarch
          package cache : /home/milir/anaconda3/pkgs
                          /home/milir/.conda/pkgs
       envs directories : /home/milir/anaconda3/envs
                          /home/milir/.conda/envs
               platform : linux-64
             user-agent : conda/25.5.1 requests/2.32.3 CPython/3.13.5 Linux/6.6.87.2-microsoft-standard-WSL2 ubuntu/24.04.2 glibc/2.39 solver/libmamba conda-libmamba-solver/25.4.0 libmambapy/2.0.5 aau/0.7.1 c/. s/. e/.
                UID:GID : 1000:1000
             netrc file : None
           offline mode : False
```
  </p>
</details>

## 退出环境

使用 `deactivate` 命令可以退出当前的 conda 环境。

```
conda deactivate
```

退出环境成功后，终端用户名前的 `(base)` 会消失。

## 创建环境

使用 `create` 命令可以创建新的 conda 环境。

### 创建默认环境

使用 `conda create` 命令加上 `--name` 参数可以创建新的 conda 环境。

```
conda create --name <env_name>
# 创建 demo 环境
conda create --name demo
```

<details>
  <summary>终端输出</summary>
  <p>
  ```
Channels:
 - defaults
Platform: linux-64
Collecting package metadata (repodata.json): done
Solving environment: done

## Package Plan ##

  environment location: /home/milir/anaconda3/envs/demo



Proceed ([y]/n)? y


Downloading and Extracting Packages:

Preparing transaction: done
Verifying transaction: done
Executing transaction: done
#
# To activate this environment, use
#
#     $ conda activate demo
#
# To deactivate an active environment, use
#
#     $ conda deactivate
  ```
  </p>
</details>

### 创建指定环境

使用 `conda create` 命令创建指定 Python 版本的 conda 环境。

```
conda create --name <env_name> python=<version>
# 创建 demo_python38 环境
conda create --name demo_python38 python=3.8
```

<details>
  <summary>终端输出</summary>
  <p>
  ```
Channels:
 - defaults
Platform: linux-64
Collecting package metadata (repodata.json): done
Solving environment: done

## Package Plan ##

  environment location: /home/milir/anaconda3/envs/demo_python38

  added / updated specs:
    - python=3.8


The following packages will be downloaded:

    package                    |            build
    ---------------------------|-----------------
    pip-24.2                   |   py38h06a4308_0         2.2 MB
    python-3.8.20              |       he870216_0        23.8 MB
    setuptools-75.1.0          |   py38h06a4308_0         1.7 MB
    wheel-0.44.0               |   py38h06a4308_0         108 KB
    ------------------------------------------------------------
                                           Total:        27.8 MB

The following NEW packages will be INSTALLED:

  _libgcc_mutex      pkgs/main/linux-64::_libgcc_mutex-0.1-main
  _openmp_mutex      pkgs/main/linux-64::_openmp_mutex-5.1-1_gnu
  ca-certificates    pkgs/main/linux-64::ca-certificates-2025.2.25-h06a4308_0
  ld_impl_linux-64   pkgs/main/linux-64::ld_impl_linux-64-2.40-h12ee557_0
  libffi             pkgs/main/linux-64::libffi-3.4.4-h6a678d5_1
  libgcc-ng          pkgs/main/linux-64::libgcc-ng-11.2.0-h1234567_1
  libgomp            pkgs/main/linux-64::libgomp-11.2.0-h1234567_1
  libstdcxx-ng       pkgs/main/linux-64::libstdcxx-ng-11.2.0-h1234567_1
  libxcb             pkgs/main/linux-64::libxcb-1.17.0-h9b100fa_0
  ncurses            pkgs/main/linux-64::ncurses-6.4-h6a678d5_0
  openssl            pkgs/main/linux-64::openssl-3.0.16-h5eee18b_0
  pip                pkgs/main/linux-64::pip-24.2-py38h06a4308_0
  pthread-stubs      pkgs/main/linux-64::pthread-stubs-0.3-h0ce48e5_1
  python             pkgs/main/linux-64::python-3.8.20-he870216_0
  readline           pkgs/main/linux-64::readline-8.2-h5eee18b_0
  setuptools         pkgs/main/linux-64::setuptools-75.1.0-py38h06a4308_0
  sqlite             pkgs/main/linux-64::sqlite-3.45.3-h5eee18b_0
  tk                 pkgs/main/linux-64::tk-8.6.14-h993c535_1
  wheel              pkgs/main/linux-64::wheel-0.44.0-py38h06a4308_0
  xorg-libx11        pkgs/main/linux-64::xorg-libx11-1.8.12-h9b100fa_1
  xorg-libxau        pkgs/main/linux-64::xorg-libxau-1.0.12-h9b100fa_0
  xorg-libxdmcp      pkgs/main/linux-64::xorg-libxdmcp-1.1.5-h9b100fa_0
  xorg-xorgproto     pkgs/main/linux-64::xorg-xorgproto-2024.1-h5eee18b_1
  xz                 pkgs/main/linux-64::xz-5.6.4-h5eee18b_1
  zlib               pkgs/main/linux-64::zlib-1.2.13-h5eee18b_1


Proceed ([y]/n)? y


Downloading and Extracting Packages:

Preparing transaction: done
Verifying transaction: done
Executing transaction: done
#
# To activate this environment, use
#
#     $ conda activate demo_python38
#
# To deactivate an active environment, use
#
#     $ conda deactivate
  ```
  </p>
</details>

## 激活环境

使用 `activate` 命令可以激活 conda 环境。

```
conda activate <env_name>
# 激活 demo 环境
conda activate demo
```

激活环境成功后，终端用户名前会出现 `(demo)` 信息。

## 查看环境

使用 `env list` 命令可以查看所有 conda 环境。

```
conda env list
```

<details>
  <summary>终端输出</summary>
  <p>
  ```
# conda environments:
#
base                 * /home/milir/anaconda3
demo                   /home/milir/anaconda3/envs/demo
  ```
  </p>
</details>

## 编辑环境

### 安装 python 库

使用 `conda install` 命令可以在当前激活的 conda 环境安装 python 库。

```
conda install <package_name>
# 安装 jupyterlab
conda install jupyterlab
```

<details>
  <summary>终端输出</summary>
  <p>
  ```
Channels:
 - defaults
Platform: linux-64
Collecting package metadata (repodata.json): done
Solving environment: done

## Package Plan ##

  environment location: /home/milir/anaconda3

  added / updated specs:
    - jupyterlab


The following packages will be downloaded:

    package                    |            build
    ---------------------------|-----------------
    certifi-2025.6.15          |  py313h06a4308_0         155 KB
    ------------------------------------------------------------
                                           Total:         155 KB

The following packages will be UPDATED:

  certifi                         2025.4.26-py313h06a4308_0 --> 2025.6.15-py313h06a4308_0

Proceed ([y]/n)? y

Downloading and Extracting Packages:

Preparing transaction: done
Verifying transaction: done
Executing transaction: done
  ```
  </p>
</details>

## 删除环境

使用 `env remove` 命令可以删除 conda 环境。

```
conda env remove --name <env_name>
# 删除 demo_python38 环境
conda env remove --name demo_python38
```

<details>
  <summary>终端输出</summary>
  <p>
  ```
Remove all packages in environment /home/milir/anaconda3/envs/demo_python38:


## Package Plan ##

  environment location: /home/milir/anaconda3/envs/demo_python38


The following packages will be REMOVED:

  _libgcc_mutex-0.1-main
  _openmp_mutex-5.1-1_gnu
  ca-certificates-2025.2.25-h06a4308_0
  ld_impl_linux-64-2.40-h12ee557_0
  libffi-3.4.4-h6a678d5_1
  libgcc-ng-11.2.0-h1234567_1
  libgomp-11.2.0-h1234567_1
  libstdcxx-ng-11.2.0-h1234567_1
  libxcb-1.17.0-h9b100fa_0
  ncurses-6.4-h6a678d5_0
  openssl-3.0.16-h5eee18b_0
  pip-24.2-py38h06a4308_0
  pthread-stubs-0.3-h0ce48e5_1
  python-3.8.20-he870216_0
  readline-8.2-h5eee18b_0
  setuptools-75.1.0-py38h06a4308_0
  sqlite-3.45.3-h5eee18b_0
  tk-8.6.14-h993c535_1
  wheel-0.44.0-py38h06a4308_0
  xorg-libx11-1.8.12-h9b100fa_1
  xorg-libxau-1.0.12-h9b100fa_0
  xorg-libxdmcp-1.1.5-h9b100fa_0
  xorg-xorgproto-2024.1-h5eee18b_1
  xz-5.6.4-h5eee18b_1
  zlib-1.2.13-h5eee18b_1


Proceed ([y]/n)? y


Downloading and Extracting Packages:

Preparing transaction: done
Verifying transaction: done
Executing transaction: done
Everything found within the environment (/home/milir/anaconda3/envs/demo_python38), including any conda environment configurations and any non-conda files, will be deleted. Do you wish to continue?
 (y/[n])? y
  ```
  </p>
</details>
