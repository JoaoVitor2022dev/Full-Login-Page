(function( window , document ) { 
    'use strict '
 
       // pegando os valores html e colocando no script 
        
var $visor = document.querySelector('[data-js="visor"]');  
var $button_numbers = document.querySelectorAll('[data-js="button-number"]'); 
var $button_ce = document.querySelector('[data-js="button-ce"]'); 
var $button_operations = document.querySelectorAll('[data-js="button-operation"]'); 
var $button_equal = document.querySelector('[data-js="button-equal"]');  


console.log($button_numbers)
    //  os eventos dos valores da calculadora 
   


Array.prototype.forEach.call( $button_numbers , function (button) {
    button.addEventListener( 'click' , handleClickNumber, false ); 
})

Array.prototype.forEach.call( $button_operations,  function (button) { 
    button.addEventListener('click' , handleClickOperation , false);
}); 


$button_ce.addEventListener('click' ,  handleClickNCe , false); 
$button_equal.addEventListener( 'click' , handleClickEqual ,false ); 


    // as fucionalidade dos eventos 
 
function handleClickNumber (event) {
  $visor.value += this.value; 
}


function handleClickOperation(event){
   remove_last_item_if_it_is_an_operator(); 
     $visor.value += this.value; 
}


function handleClickNCe ( event) { 
 $visor.value = 0; 
}


function islastitemOperation() {
    var operation = ['+' , '-', 'x' , '/']; 
    var lastItem = $visor.value.split('').pop(); 
    return operation.some( function(operator) {
        return operator === lastItem; 
    }); 
}


function  remove_last_item_if_it_is_an_operator(){
    if(islastitemOperation()){
        $visor.value = $visor.value.slice(0 ,-1 ); 
    }
}

function handleClickEqual () {
    remove_last_item_if_it_is_an_operator(); 
}

} ) ( window , document ); 
