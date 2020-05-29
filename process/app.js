"use strict"

console.log(process.env.OS);

//saco toda la info del proceso
//console.log(process);
console.log('-------------');
//version de node
console.log(process.version);

console.log(process.memoryUsage());

//tiempo ejecuccion del script
console.log(process.uptime());

process.exit(0);

console.log("este codigo no se ejecuta");