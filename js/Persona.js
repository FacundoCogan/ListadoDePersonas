class Persona{
    constructor(nombre, apellido){
        this._nombre=nombre;
        this._apellido=apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(n){
        this._nombre=n;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(a){
        this._apellido=a;
    }
}