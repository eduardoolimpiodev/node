//console.log(process.argv);

// no console - node ex08_process.js --producao teste outro param

function temParam(param) {
    return process.argv.indexOf(param) !== -1
}

if(temParam('--producao')) {
    console.log('Atenção total')
} else {
    console.log('Tranquilo!')
}

// no console - node ex08_process.js --producao 