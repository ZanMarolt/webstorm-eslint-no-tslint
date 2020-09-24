# Webstorm & Eslint not working without tslint

[Tslint](https://palantir.github.io/tslint/) is deprecated so we removed it.

After removing the package we are facing this error in the webstorm IDE:
![Webstorm ESlint error](https://i.imgur.com/Nj5xt64.png)  

We have tried to setup ESlint automatically or manually, to no avail.  
![WebStorm preferences](https://i.imgur.com/gKXVbL5.png)

You can however start the eslint command from the command line:
```bash
APP=app1 npm run eslint:fix
```

It should return couple of errors:  
![ESLint errors](https://i.imgur.com/PE7RPbZ.png)

## Project setup

Navigate from project root to `code/js/frontend` and run:
```bash
npm install
```

since this is a multi app project you can start each of the app by specyfing it through `APP` ENV variable:
```bash
APP=app1 npm run start
```

I have deliberetly added some ESlint errors in the app1 (`GreetingComponent`) so you can se the IDE not picking them up.

Webstorm version: `2020.2.2`
