/* Main application */
import Config from "./config"; // configuration file
import { Log } from "qomponents/server/log"; // logging class; it should be passed to all qomponents
import { WebServer } from "qomponents/server/webserver";
import { UserQontroller } from "qomponents/server/qontrollers/user";
import { ItemsQontroller } from "qomponents/server/qontrollers/items";
import { RoutesInterface } from "qomponents/interfaces/Routes";

// create logging system
const log = new Log(Config.ENV.LOG.FOLDER, Config.ENV.LOG.FILE);
// create API routes
const routes: RoutesInterface[] = [
  { path: "/user", qontroller: new UserQontroller("/user") },
  { path: "/items", qontroller: new ItemsQontroller("/items") },
];
// start webserver
const ws = new WebServer(Config, log, routes);
