function display(){

let gegeben =  join(barr," ")
let gefunden =  join(carr," ")
let weiter =  join(arr," ") 
  textSize(20) 
  geg = text("given: "+gegeben,25,25)
  gef = text("current equation: "+gefunden,25,125)
  gem = text("interim result: "+zwischenergebnis,25,175)
  con = text("current solution: "+weiter,25,75)
  textSize(12)
  ggf = text("comparison of end result with eval(): "+eval(gegeben),25,190)
  
}

function button(){
  submit = createButton("eval")
  submit.position(22,200)
  submit.mousePressed(bla)
}

function bla(){
  if(arr.length>3){
//  klammerVerarbeiter()
  parsePunktvorStrich()
  priorisator()
  terminator()
  derWiederzusammenfüger()
   // klammerAuflösen()
  }else{barr=[];carr=[];zwischenergebnis="";arr=[];  zufallsFormelgenerator()
       }
}