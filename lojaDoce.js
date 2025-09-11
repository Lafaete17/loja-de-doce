import readline from "readline-sync";


console.log("🍭Bem Vindo ao Sistema de Controle de Doces");

let estoque = parseInt(readline.question("informe a quantidade de doces do estoque"));

while(true){
    console.log("\n1 - Chegada de doces(entrada)");

    console.log(" 2 - Saida de doces(venda)");

    let operacao = parseInt(readline.question("Digite o tipo de operação: "));

    if(operacao !==1 && operacao !==2){
        console.log("🚨operação inválida tente novamente");
        continue;
    }

    let quantidade = parseInt(readline.question("Informe a quantidade de doce: "));

    if(isNaN(quantidade) || quantidade <= 0){
        console.log("Quantidade inválida tente novamente");
        continue;
    }

    if(operacao ===1){
        estoque += quantidade;
    }else{
        if(quantidade > estoque){
            console.log("Estoque insuficiente");
        }else{
            estoque -= quantidade;
        }
    }

    console.log(`Estoque Atualizado: ${estoque}doces`);

    let continuar = readline.question("Deseja continuar: ((s/n)?").toLocaleLowerCase();

    if(continuar !=="s"){
        console.log("\n✅Sistema encerrado")
        break;
    }
}





