function frecventa(str){
    let frecvente = {};
    for (var i = 0; i<=str.length-1;i++){
        if (str[i] in frecvente){
            frecvente[str[i]] ++;
        }
        else{
            frecvente[str[i]] = 1;
        }
}
return frecvente;
}

function sorteaza_frecventa(frecvente){
    let caractere = [];
    for (let ch in frecvente){
        caractere.push([frecvente[ch],ch]);
    }
    caractere.sort(function compare(kv1, kv2) {
        return kv1[0] - kv2[0]
    })
    return caractere;
}

function construieste_graf(caractere){
    while(caractere.length>1){
        let ultimele_ch = caractere.slice(0,2);
        let restul_ch = caractere.slice(2,caractere.length);
        let suma_ch = caractere[0][0] + caractere[1][0];
        caractere = restul_ch;
        let rezultat = [suma_ch, ultimele_ch];
        caractere.push(rezultat);
        caractere.sort(function compare(v1, v2) {
            return v1[0]- v2[0]
        })
  
}
    return caractere[0];
}

function simplifica_graf(graf)
{ 
    let p = graf[1];
    if (typeof p === 'string'){
        return p;
}
    else
{
        return (Array(simplifica_graf(p[0]),simplifica_graf(p[1])));
}

}

 let coduri = {}; 
function asociaza_cod(nod,pat){
   
    pat = pat || "";
    if(typeof(nod) == typeof("")){
        coduri[nod] = pat;
        
    }
    else{
        asociaza_cod(nod[0],pat+"0");
        asociaza_cod(nod[1],pat+"1"); 
    }

    return coduri;
}

function codareHuffman(str){
    let cuv_de_cod = []
    for (var key in str) {
        cuv_de_cod.push([ key, str[key] ])
    }
    cuv_de_cod.sort(function compare(v1, v2) {
        return v1[0].localeCompare(v2[0]);
    })
    
    /*let output="";
    for(let i=0; i<cuv_de_cod.length;i++) {
         output=output+cuv_de_cod[i][1];
    }*/
    return cuv_de_cod;
    
}
function codare_Huffman(){
//let image='aaaaaaaaaaaaaannnnnngggbb'; //consideram imaginea formata din culorile alb,negru,galben si albastru
let image=document.querySelector('#input').value ? document.querySelector('#input').value : "";
let f1=frecventa(image);     // obtinem frecventele culorilor
let f2=sorteaza_frecventa(f1); //sortam descrescator frecventele
let graf=construieste_graf(f2); //construim graful
let graf2=simplifica_graf(graf); //aplicarea algoritmului
let cuv_de_cod=asociaza_cod(graf2); // asocierea codurilor pe fiecare muchie
let output=codareHuffman(cuv_de_cod);
for(let i=0; i<output.length;i++){
output[i]=output[i].join("-------")
}
document.getElementById("output").textContent=output.join("\n");
}




