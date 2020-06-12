//dieses Programm stellt bei jeder Initialisierung einen Zufallsterm.
//Der sollte sich durch drücken des Eval Buttons durchrechnen lassen.
//Zum vergleich wird das Ergebnis nochmal mit eval() unten gezeigt.
//In der konsole wird ein anderer Term angezeigt, der die Funktionalität
//des Klammerparser dokumentiert. Der muss noch in dem ganzen eingebettet
//werden. Ein Zufallstermgenerator mit Klammern wäre noch nötig.

function setup(){
  createCanvas(displayWidth,250)
  klammerVerarbeiter()
  zufallsFormelgenerator()
  button(); 

}


function draw(){
  background(220)
  display();
}


