const personas= [
    new Persona('Facundo', 'Cogan'),
    new Persona('Cristian', 'Gomez'),
];

function mostrarPersonas(){
    console.log("Mostrar personas...");
    let texto='';
    for(let Persona of personas){
        console.log(Persona);
        texto+=`<li>${Persona.nombre} ${Persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML=texto;
}

function agregarPersona(){
    const forma=document.forms['forma'];
    const nombre=forma['nombre'];
    const apellido=forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona=new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else
        console.log("No hay información que agregar");
    
}