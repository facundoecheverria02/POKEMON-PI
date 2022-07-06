export function validarErrores(input){

    let errores = {};

    if(!input.name){
        errores.name = "El campo nombre no puede estar vacío";
    } else if(!/[a-zA-Z]/.test(input.name)){
        errores.name = "El campo nombre debe contener solo letras";
    }
   
    if(!input.image){
        errores.image = "El campo imagen no puede estar vacío"
    }
    
    if(!input.hp){
        errores.hp = "El campo hp no puede estar vacío"
    }else if(!/[0-9]/.test(input.hp)){
        errores.hp = "El campo hp debe ser un numero"
    }else if(input.hp.toString().length > 2){
        errores.hp = "El campo hp debe contener máximo de 3 cifras"
    }
    
    if(!input.attack){
        errores.attack = "El campo attack no puede estar vacío"
    }else if(!/[0-9]/.test(input.attack)){
        errores.attack = "El campo attack debe ser un numero"
    }else if(input.attack.toString().length > 2){
        errores.attack = "El campo attack debe contener máximo de 3 cifras"
    }
    
    if(!input.defense){
        errores.defense = "El campo defense no puede estar vacío"
    }else if(!/[0-9]/.test(input.defense)){
        errores.defense = "El campo defense debe ser un numero"
    }else if(input.defense.toString().length > 2){
        errores.defense = "El campo defense debe contener máximo de 3 cifras"
    }
    
    if(!input.speed){
        errores.speed = "El campo speed no puede estar vacío"
    }else if(!/[0-9]/.test(input.speed)){
        errores.speed= "El campo speed debe ser un numero"
    }else if(input.speed.toString().length > 2){
        errores.speed = "El campo speed debe contener máximo de 3 cifras"
    }
    
    if(!input.height){
        errores.height = "El campo height no puede estar vacío"
    }else if(!/[0-9]/.test(input.height)){
        errores.height= "El campo height debe ser un numero"
    }else if(input.height.toString().length > 2 ){
        errores.height = "El campo height debe contener máximo de 3 cifras"
    }
    
    if(!input.weight){
        errores.weight = "El campo weight no puede estar vacío"
    }else if(!/[0-9]/.test(input.weight)){
        errores.weight= "El campo weight debe ser un numero"
    }else if(input.hp.toString().length > 2){
        errores.weight = "El campo weight debe contener máximo de 3 cifras"
    }
    
    if(input.types.length ===0){
        errores.types = "Debe seleccionar al menos un tipo"
    }else if(input.types.length <3){
        errores.types = "No puede seleccionar mas de dos tipos"
    }
    return errores;
}


