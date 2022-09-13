// Buscar o meu arquivo que conecta com banco de dados
import {connection, statusConnection} from './database/connection';
import {resetarBanco, getStatusApp} from './database/aplicativo';

function acessarSistema(){
  connection({ip: "192.168.54.18", name: "MySQL"})

}

//acessarSistema();

//statusConnection();

getStatusApp();

resetarBanco();