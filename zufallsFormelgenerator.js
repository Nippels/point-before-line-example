// testen dauert dir zu lang? zu faul zum tippen? kein Problem mit dem
// Zufalls-Formelgenerator!


  function zufallsFormelgenerator(){
 
  let multobene = ["+","-","*","/"]; 
  let  n; 
  let  r; 
  let  fu = random(2, 8) // min, max länge der möglichen Terme
for (i=0;i<fu;i++){
   n = Math.round(random(1,100));  // min, max mögliche Zahlen im Term.
   r = random(multobene); // p5 random funktion is very geil, oder? ;)
  arr.push(n)
  arr.push(r)
  barr.push(n)
  barr.push(r)

}
   
  
  arr.pop();  // löscht letztes Element welches Rechenzeichen ist
  barr.pop()
  arr.splice(0,0,"(")
  arr.push(")")
  barr.splice(0,0,"(")
  barr.push(")")
  
}

 