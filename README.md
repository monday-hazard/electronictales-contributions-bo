# electronictales-contributions-bo

## How to install the project

1. Clone the project on your local device :

```bash
git clone https://github.com/monday-hazard/electronictales-contributions-bo.git
```

You may need to install SSH keys locally, see GitHub or Gitlab docs for this.

2. Install dependencies

A custom script allows you to install `node_modules` for both server and client sides of the project.

```bash
npm run dep
```

3. Connect to your database

Create `default.json` with your database logins (secret key etc)

4. Test the connection

In a terminal in the current project, run :

```bash
npm run server
```

You're good if it says that the mangoose got the couleuvre. Otherwise, check if your Internect connection uses a proxy, or if you made an error in your `default.json`

## How to run the project

In a terminal in the current project...

- to run the client and the server concurrently, run :

```bash
npm run dev
```

- to run the server only, run:

```bash
npm run server
```

- to run the client only, run:

```bash
npm run client
```

## Authentication

For the authentication middleware, add in your local `default.json` a secret token as following :

```json
{ "jwtToken": "value-of-your-secret-token" }
```
