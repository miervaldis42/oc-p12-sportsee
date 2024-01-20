# OpenClassrooms - Project 12

This project is the 12th project of OpenClassrooms JavaScript - React Developer Program.\
The objective is to create a React project populated with graphs created with a 3rd-party library.

## Table of Contents

- [🧑‍💻 Stack](#-stack)
- [🚀 Project](#-project)
  - [📋 Breakdown](#-breakdown)
  - [🎛️ Commands](#-commands)

[🔼 Back to the Table of Contents](#table-of-contents)

## 🧑‍💻 Stack

Here is the stack used in the project :

- 🌅 **_Front-end_**
  - [React](https://react.dev/)
- 🌇 **_Back-end_**
  - [Node.js](https://nodejs.org/en)

[🔼 Back to the Table of Contents](#table-of-contents)

## 🚀 Project

### 📋 Breakdown

The project is made up of :

- 🌅 Front-end : [Client](./client/README.md)
  - _For the time being, only contain the **Profile**, **400** & **500** pages_
- 🌇 Back-end : [Server](./server/README.md)
  - _For the time being, only contain **2 users**: 12 & 18_

The `package.json` file at the **root of the project** is mainly there to manage both parts of the app from the root.

Some **[fake user data were added](client/src/data/fake-data.js)** to the client-end in dev mode.

### User Data

Here is a list of the [mocked users](client/src/data/fake-data.js) :

| User Id | Name            | Data | URL                                |
| :-----: | :-------------- | :--: | :--------------------------------- |
|    1    | Thierry Henri   |  No  | `http://localhost:4242/profile/1`  |
|   12    | Karl Dovineau   | Yes  | `http://localhost:4242/profile/12` |
|   18    | Cecilia Ratorez | Yes  | `http://localhost:4242/profile/18` |

Here is a list of the [real users](server/app/data.js) :

| User Id | Name            | Data | URL                                |
| :-----: | :-------------- | :--: | :--------------------------------- |
|   12    | Karl Dovineau   | Yes  | `http://localhost:3333/profile/12` |
|   18    | Cecilia Ratorez | Yes  | `http://localhost:3333/profile/18` |

### 🎛️ Commands

To start the website, do the following :

1. Open a terminal
2. Place yourself in the project folder with `cd ./oc-p12-sportsee`
3. To **start the project**, either run :

- `npm run dev` : _to start the front-end & back-end in **dev mode** (at `localhost/4242`) with the **mocked data**_
- `npm start` : _to start the front-end & back-end (at `localhost/3333`) with the **real data**_
- or `npm run demo` : _to start the back-end, the front-end with the mocked data and another version of the front-end with the real data_

**_🎉 Now, the project is up and running !_**

> 🗒️ **_Notes_**
>
> _All listed commands install the overall project dependencies (root project, client & server)._

[🔼 Back to the Table of Contents](#table-of-contents)
