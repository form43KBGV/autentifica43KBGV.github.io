export class CtrlSaludo{
  calculaSaludo(nombre){
    const nombreSinEspacios = nombre ? nombre.trim(): "";
    if(!nombreSinEspacios){
      throw new Error("Falta proporcionar el nombre.");
    }
    return `Hola ${nombreSinEspacios}.`;
  }
}
