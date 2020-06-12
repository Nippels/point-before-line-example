 //Ich bin drin! na das ging ja einfach!.. naja noch nicht ganz

let arrarr = ["12","*","(","(","8","+","4",")","/","3",")","+","2","-","10","/","2"];


function klammerVerarbeiter(){
  let egk1, lok1,  u1 
  let markUp1;
  let markUp2;
  
  egk1 = arrarr.indexOf(")") //sucht erste geschlossene Klammer
  markUp1 = arrarr.splice(egk1+1,arrarr.length-egk1)//schneidet
  lok1 = arrarr.lastIndexOf("(") //sucht letzte offene Klammer
  markUp2 = arrarr.splice(lok1,egk1)//schneidet


     console.log(arrarr, markUp1, markUp2)
}
 
// function klammerAuflösen(){
 
//   arrarr.push(zwischenergebnis) 
 
// }