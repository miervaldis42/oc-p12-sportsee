# SportSee - Server

This repo contains all the source code to **_run the micro API of the analytics for SportSee dashboard_**.

## Table of Content

- [📔 Description](#-description)
- [⌨️ Server - Without Docker](#-server---without-docker)
- [🐋 Server - With Docker](#-server---with-docker)
  - [🗒️ Prerequisites](#-prerequisites)
  - [🛠️ Build & Start the Server](#-build--start-the-server)
  - [🖥️ VSCode](#-vscode)
- [🔀 Endpoints](#-endpoints)
  - [📜 List](#-list)
  - [🗨️ Query Examples](#-query-examples)

## 📔 Description

To start this project, you are free to **_use Docker or not_**.

This documentation presents several methods to launch the project.

[🔼 Back to the Top](#table-of-content)

## ⌨️ Server - Without Docker

You will need [NodeJS (**minimum version 12.18**)](https://nodejs.org/en/).

To **start the server**, follow the steps below :

1. Fork the repository
2. Clone it on your computer
3. Use `npm i` or `yarn i` command to install the dependencies
4. Use `npm run dev` or `yarn dev` command to run the micro API / server.

🎉 **_Congrats ! The server is up and running !_**

[🔼 Back to the Top](#table-of-content)

## 🐋 Server - With Docker

### 🗒️ Prerequisites

[Docker Desktop](https://www.docker.com/products/docker-desktop) will be needed to start the server with Docker.

### 🛠️ Build & Start the Server

- The `docker image build --no-cache -t micro-api .` command will allow you to build your image.
- The `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn` command will allow you to create your Docker container and run your image on port 3000.
- The `docker container stop micro-api` command will allow you to stop your micro-api.
- The `docker container rm micro-api` command will allow you to delete your micro-api container.

### 🖥️ VSCode

Finally, if you have VsCode, you can easily launch your project in a docker environment.

1. Install [Remote Development extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
2. Click on the `Reopen in Container` button which will appear at the bottom right corner of the VSCode window
3. Once in the container, run the `npm run dev` or `yarn dev` command.

🎉 **_Congrats ! The server is up and running with 🐳 !_**

[🔼 Back to the Top](#table-of-content)

## 🔀 Endpoints

### 📜 List

This project includes four endpoints that you will be able to use:

| Endpoints                                               | Description                                                                                                                                                                                                        |
| :------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `http://localhost:3000/user/${userId}`                  | _Retrieves **information about a given user**.<br> It includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc...)._ |
| `http://localhost:3000/user/${userId}/activity`         | _Retrieves a **user's activity day by day** with kilograms and calories._                                                                                                                                          |
| `http://localhost:3000/user/${userId}/average-sessions` | _Retrieves the **average sessions of a user per day**. <br>The week starts on Monday._                                                                                                                             |
| `http://localhost:3000/user/${userId}/performance`      | _Retrieves a **user's performance** (energy, endurance, etc...)._                                                                                                                                                  |

### 🗨️ Query Examples

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.

[🔼 Back to the Top](#table-of-content)
