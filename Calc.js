let carr = []; // Rechenkopf

function terminator(){
  
  carr = []
  carr.push(arr[steuerwert-1]); 
  carr.push(arr[steuerwert]);
  carr.push(arr[steuerwert+1]);
    
    if(carr[1] == "*"){
    zwischenergebnis = parseInt(carr[0]) * parseInt(carr[2]);
 
  }
    if(carr[1] == "/"){
    zwischenergebnis = parseInt(carr[0]) / parseInt(carr[2]);         
 
  }
    if(carr[1] == "+"){
    zwischenergebnis = parseInt(carr[0]) + parseInt(carr[2]);    
 
  }
    if(carr[1] == "-"){
    zwischenergebnis = parseInt(carr[0]) - parseInt(carr[2]);
 
  }
   
}

function derWiederzusammenfüger(){
    arr.splice(steuerwert-1,3,zwischenergebnis);
}