

function calcuclarRecargo (total, porcentaje){
   let recargo = total * (porcentaje/100);
   return recargo;
}
function calcuclarDescuento (total, porcentaje){
    let descuento = total * (porcentaje/100);
    return descuento;
}
let salir;
do{
    let eleccion = prompt('-Presiona "0" para salir\n -Presiona "1" para colocar el monto de la compra');
    if (eleccion == '0'){
        salir = true;
        break;
    }else if(eleccion == '1'){
        salir = false;
    }else{
        alert('Ingrese s o p');
        salir = true;
    }

    let montoFinal = parseFloat(prompt('Ingrese el monto total de su compra'));
    let modoPago = prompt ('Modo de pago\n1-Efectivo\n2-Debito\n3-Credito');
    if(modoPago == '1'){
        let descuentoEfectivo = montoFinal - calcuclarDescuento (montoFinal,30)  ;
        alert('Por pagar el total de $'+ montoFinal + ' en efectivo, tuviste un descuento del 30%, tu monto final es de $' + descuentoEfectivo);
    }
    else if(modoPago == '2'){
        let descuentoDebito = montoFinal - calcuclarDescuento (montoFinal,10) ;
        alert('Por pagar el total de $'+ montoFinal + ' con 1debito, tuviste un descuento del 10%, tu monto final es de $' + descuentoDebito);
        
    }
    else if(modoPago == '3'){
        let cuotas = prompt ('Modo de pago\n-3\n-6\n-12');
        if (cuotas == '3'){
            let recargoCredito = calcuclarRecargo(montoFinal,30) + montoFinal;
        alert('Por pagar el total de $'+ montoFinal + ' con credito, tu compra tuvo un recargo, el total final es de: $' + recargoCredito);}
        
        }
        else if (cuotas == '6'){
            let recargoCredito = calcuclarRecargo(montoFinal,60) +montoFinal;
        alert('Por pagar el total de $'+ montoFinal + ' con credito, tu compra tuvo un recargo, el total final es de: $' +recargoCredito);
        
        } 
        else if(cuotas == '12'){
        let recargoCredito = calcuclarRecargo(montoFinal,90) + montoFinal;
        alert('Por pagar el total de $'+ montoFinal + ' con credito, tu compra tuvo un recargo, el total final es de: $' +recargoCredito);
      
        } 
        else {
            alert ('La opcion elegida no es valida');
            
        }
    return false; 
 
}while(salir == true)
    
   /*switch(modoPago){
    case '1':
        let descuentoEfectivo = montoFinal - calcuclarDescuento (montoFinal,30)  ;
        alert('Por pagar el total de $'+ montoFinal + ' en efectivo, tuviste un descuento del 30%, tu monto final es de $' + descuentoEfectivo);
        break;
    case '2':
        let descuentoDebito = montoFinal - calcuclarDescuento (montoFinal,10) ;
        alert('Por pagar el total de $'+ montoFinal + ' con 1debito, tuviste un descuento del 10%, tu monto final es de $' + descuentoDebito);
        break;
    case '3':
        let cuotas = prompt ('Modo de pago\n-3\n-6\n-12');
        if (cuotas == '3'){
            let recargoCredito = calcuclarRecargo(montoFinal,30) + montoFinal;
        alert('Por pagar el total de $'+ montoFinal + ' con credito, tu compra tuvo un recargo, el total final es de: $' + recargoCredito);
        } else if (cuotas == '6'){
            let recargoCredito = calcuclarRecargo(montoFinal,60) +montoFinal;
        alert('Por pagar el total de $'+ montoFinal + ' con credito, tu compra tuvo un recargo, el total final es de: $' +recargoCredito);
        } else if(cuotas == '12'){
        let recargoCredito = calcuclarRecargo(montoFinal,90) + montoFinal;
        alert('Por pagar el total de $'+ montoFinal + ' con credito, tu compra tuvo un recargo, el total final es de: $' +recargoCredito);
        } else {
            alert ('La opcion elegida no es valida')
        }  
        break;
    }*/