/**
 * Created by adrian on 09/01/2017.
 */

// Objeto cliente

function Cliente(dni,nombre,telefono,email){

    this.dni=dni;
    this.nom=nombre;
    this.telf=telefono;
    this.email=email;

}

Cliente.prototype.toHTMLRow=function() {

    return "<td>"+this.dni+"</td>"+"<td>"+this.nom+"</td>"+"<td>"+this.telf+"</td><td>"+this.email+"</td>";

}

// Objeto miembro que hereda de cliente

function Miembro (dni,nombre,telefono,email,fecha_alta){
    Cliente.call(this,dni,nombre,telefono,email);
    this.fecha=fecha_alta;

}
Miembro.prototype=Object.create(Cliente.prototype);
Miembro.prototype.constructor=Miembro;


Miembro.prototype.toHTMLRow = function(){

    return "<td>"+this.dni+"</td>"+"<td>"+this.nombre+"</td><td>"+this.email+"</td><td>"+this.fecha+"</td>";

}

// Objeto no miembro que hereda de cliente

function NoMiembro (dni,nombre,telefono,email,fecha_alta){
    Cliente.call(this,dni,nombre,telefono,email);

}
NoMiembro.prototype=Object.create(Cliente.prototype);
NoMiembro.prototype.constructor=NoMiembro;


Miembro.prototype.toHTMLRow = function(){

    return "<td>"+this.dni+"</td>"+"<td>"+this.nombre+"</td><td>"+this.email+"</td>";

}

// Objeto Factura

function Factura(nombre,fecha,estado,importe){

    this.nom=nombre;
    this.fecha=fecha;
    this.estado=estado;
    this.importe=importe;

}

Factura.prototype.toHTMLRow=function() {

    return "<td>"+this.nom+"</td>"+"<td>"+this.fecha+"</td>"+"<td>"+this.estado+"</td><td>"+this.importe+"</td>";

}

// Objeto factura por servicio que hereda de factura

function PorServicio (nombre,fecha,estado,importe){
    Factura.call(this,nombre,fecha,estado,importe);


}
PorServicio.prototype=Object.create(Factura.prototype);
PorServicio.prototype.constructor=PorServicio;


PorServicio.prototype.toHTMLRow = function(){

    return "<td>"+this.nombre+"</td>"+"<td>"+this.fecha+"</td><td>"+this.estado+"</td><td>"+this.importe+"</td>";

}

// Objeto factura por couta anual que hereda de Factura

function CuotaAnual (nombre,fecha,estado,importe){
    Factura.call(this,nombre,fecha,estado,importe);


}
CuotaAnual.prototype=Object.create(Factura.prototype);
CuotaAnual.prototype.constructor=CuotaAnual;


CuotaAnual.prototype.toHTMLRow = function(){

    return "<td>"+this.nombre+"</td>"+"<td>"+this.fecha+"</td><td>"+this.estado+"</td><td>"+this.importe+"</td>";

}

// Objeto Multa

function Multa(nombre,importe,fecha_multa,descripcion,alegaciones){

    this.nom=nombre;
    this.importe=importe;
    this.fecha=fecha_multa;
    this.descripcion=descripcion;
    this.alegaciones=alegaciones;


}

Multa.prototype.toHTMLRow=function() {

    return "<td>"+this.nom+"</td>"+"<td>"+this.importe+"</td>"+"<td>"+this.fecha+"</td><td>"+this.descripcion+"</td><td>"+this.alegaciones+"</td>";

}


// Objeto abogado

function Abogado(dni,nombre,sueldo){

    this.dni=dni;
    this.nom=nombre;
    this.sueldo=sueldo;

}

Abogado.prototype.toHTMLRow=function() {

    return "<td>"+this.dni+"</td>"+"<td>"+this.nom+"</td>"+"<td>"+this.sueldo+"</td>";

}

// Objeto Reclamacion

function Reclamacion(nombre,estado,fecha_apertura,fecha_cierre,descripcion){

    this.nom=nombre;
    this.estado=estado;
    this.fechaA=fecha_apertura;
    this.fechaC=fecha_cierre;
    this.descripcion=descripcion;


}

Reclamacion.prototype.toHTMLRow=function() {

    return "<td>"+this.nom+"</td>"+"<td>"+this.estadp+"</td>"+"<td>"+this.fechaA+"</td><td>"+this.fechaC+"</td><td>"+this.descripcion+"</td>";

}

oGestion=new Gestion();



