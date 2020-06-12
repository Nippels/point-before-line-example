
let barr = [] // Anzeige gegeben
let arr = []; // Zwischenterm und Anzeige eingefügt
let zwischenergebnis = "" // Ausgabe
let steuerWert;           //sagt dem Rechner wo er zuerst rechnen soll
let t0, t1, t2, t3;    //speichert positionen der Operatoren 
 

//parsePunktvorStrich() parst die Position der jeweils ersten Rechenart. Wenn  //keine vorhanden gibt die Funktion indexOf -1 aus.
 
function parsePunktvorStrich(){ 
  t0 = arr.indexOf("*");  //Multpicker
  t1 = arr.indexOf("/");  //Divpicker
  t2 = arr.indexOf("+");  //Pluspicker
  t3 = arr.indexOf("-");  //Subspicker
//  console.log("Positionen: "+"*."+t0 , "/."+t1,"+."+ t2,"-."+ t3)
}
// priorisator()
// teilt die Positionen der Rechenoperationen in Punkt und Strich auf
// und sucht nach der jeweils ersten Operation mit niedrigsten wert.
// Strich wird erst ausgegeben, wenn kein Punkt mehr vorhanden.
// Falls eine Rechenart nicht vorhanden ist wird als Position die  
// in Javascript maximal höchste Zahl ausgeben. 
function priorisator(){
 let maxN = Number.MAX_VALUE;
 let mul = maxN;
 let div = maxN;
 let plu = maxN;
 let min = maxN;
  if(t0==-1){}else{ mul = (t0) }
  if(t1==-1){}else{ div = (t1) }
  if(t2==-1){}else{ plu = (t2) }
  if(t3==-1){}else{ min = (t3) } 
  
  let first = Math.min(mul, div);
  let second =Math.min(plu, min);
  
  if(first==maxN){
//  console.log("Strich is first at index:"+second)
    steuerwert = second;
  }else{
//  console.log("Punkt is first at index:"+first)
    steuerwert = first;
  }
  
}
 

 