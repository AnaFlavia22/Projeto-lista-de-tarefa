"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Buscar o meu arquivo que conecta com banco de dados
const connection_1 = require("./database/connection");
const aplicativo_1 = require("./database/aplicativo");
function acessarSistema() {
    (0, connection_1.connection)({ ip: "192.168.54.18", name: "MySQL" });
}
//acessarSistema();
//statusConnection();
(0, aplicativo_1.getStatusApp)();
(0, aplicativo_1.resetarBanco)();
