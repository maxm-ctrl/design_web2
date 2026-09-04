let n1 = number(prompt("digite um número: "));
let n2 = number(prompt("digite outro número: "));
let op;
do{
   op = prompt("escolha um opção:\n");
   msg = msg + "1 - somar\n";
   msg = msg + "2 - subtrair\n";
   msg = msg + "3 - multiplicar\n";
   msg = msg + "4 - dividir\n";
   msg = msg + "5 - sair\n";
   op = prompt(msg);
   switch(op){
       case "1":
           alert(`${n1 + n2}`);
           break;
       case "2":
           alert(`${n1 - n2}`);
           break;
       case "3":
           alert(`${n1 * n2}`);
           break;
       case "4":
           alert(`${n1 / n2}`);
           break;
       case "5":
           alert("Até logo!");
           break;
       default:
           alert("opção inválida!");
   }
} while(op !== "5");