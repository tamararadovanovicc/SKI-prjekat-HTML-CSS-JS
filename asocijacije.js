var kocka=document.getElementsByClassName("kockica");
var konacno=document.getElementsByClassName("resenja");
var flagA=false;
var brA=0;
var flagB=false;
var brB=0;
var flagC=false;
var brC=0;
var flagD=false;
var brD=0;
var flagKraj=false;
var brK=0;

for(let i=0;i<kocka.length;i++){
    kocka[i].addEventListener("click",function(){
        switch(kocka[i].textContent){
            case 'A1':
                kocka[i].textContent="čežnja";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagA=true;
                brA++;
            break;
            case 'A2':
                kocka[i].textContent="muzika";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagA=true;
                brA++;
            break;
            case 'A3':
                kocka[i].textContent="zvezda padalica";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagA=true;
                brA++;
            break;
            case 'A4':
                kocka[i].textContent="spisak";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagA=true;
                brA++;
            break;
            case 'B1':
                kocka[i].textContent="paket";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagB=true;
                brB++;
            break;
            case 'B2':
                kocka[i].textContent="dar";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagB=true;
                brB++;
            break;
            case 'B3':
                kocka[i].textContent="od srca";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagB=true;
                brB++;
            break;
            case 'B4':
                kocka[i].textContent="ukrasni papir";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagB=true;
                brB++;
            break;
            case 'C1':
                kocka[i].textContent="drvo";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagC=true;
                brC++;
            break;
            case 'C2':
                kocka[i].textContent="zima";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagC=true;
                brC++;
            break;
            case 'C3':
                kocka[i].textContent="ukras";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagC=true;
                brC++;
            break;
            case 'C4':
                kocka[i].textContent="zvezda";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagC=true;
                brC++;
            break;
            case 'D1':
                kocka[i].textContent="kolačići";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagD=true;
                brD++;
            break;
            case 'D2':
                kocka[i].textContent="mleko";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagD=true;
                brD++;
            break;
            case 'D3':
                kocka[i].textContent="irvasi";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagD=true;
                brD++;
            break;
            case 'D4':
                kocka[i].textContent="sanke";
                kocka[i].style.background="rgb(221, 170, 245)";
                flagD=true;
                brD++;
            break;
        }
    })
}



function provera(id,div){
    let pom=document.getElementById(id).value.toLowerCase();
    switch(id){
        case 'resA':
        if(pom=="zelja" && flagA==true){
            flagKraj=true;
                document.getElementById(div).style.background="pink";
                document.getElementById(div).innerHTML='<p>ŽELJA</p>';
                if(brA!=4){
                    document.getElementById('a1').textContent="čežnja";
                    document.getElementById('a1').style.background="rgb(221, 170, 245)";
                    document.getElementById('a2').textContent="muzika";
                    document.getElementById('a2').style.background="rgb(221, 170, 245)";
                    document.getElementById('a3').textContent="zvezda padalica";
                    document.getElementById('a3').style.background="rgb(221, 170, 245)";
                    document.getElementById('a4').textContent="spisak";
                    document.getElementById('a4').style.background="rgb(221, 170, 245)";
                }
                brK++;
            
        };
        case 'resB':
            if(pom=="poklon" && flagB==true){
                flagKraj=true;
                    document.getElementById(div).style.background="pink";
                    document.getElementById(div).innerHTML='<p>POKLON</p>';
                    if(brB!=4){
                        document.getElementById('b1').textContent="papir";
                        document.getElementById('b1').style.background="rgb(221, 170, 245)";
                        document.getElementById('b2').textContent="dar";
                        document.getElementById('b2').style.background="rgb(221, 170, 245)";
                        document.getElementById('b3').textContent="od srca";
                        document.getElementById('b3').style.background="rgb(221, 170, 245)";
                        document.getElementById('b4').textContent="ukrasni papir";
                        document.getElementById('b4').style.background="rgb(221, 170, 245)";
                    }
                    brK++;
                
            };
        case 'resC':
            if(pom=="jelka" && flagC==true){
                flagKraj=true;
                    document.getElementById(div).style.background="pink";
                    document.getElementById(div).innerHTML='<p>JELKA</p>';
                    if(brC!=4){
                        document.getElementById('c1').textContent="drvo";
                        document.getElementById('c1').style.background="rgb(221, 170, 245)";
                        document.getElementById('c2').textContent="zima";
                        document.getElementById('c2').style.background="rgb(221, 170, 245)";
                        document.getElementById('c3').textContent="ukras";
                        document.getElementById('c3').style.background="rgb(221, 170, 245)";
                        document.getElementById('c4').textContent="zvezda";
                        document.getElementById('c4').style.background="rgb(221, 170, 245)";
                    };
                    brK++;
                
            };
        case 'resD':
            if(pom=="deda mraz" && flagD==true){
                flagKraj=true;
                    document.getElementById(div).style.background="pink";
                    document.getElementById(div).innerHTML='<p>DEDA MRAZ</p>';
                    if(brD!=4){
                        document.getElementById('d1').textContent="kolačići";
                        document.getElementById('d1').style.background="rgb(221, 170, 245)";
                        document.getElementById('d2').textContent="mleko";
                        document.getElementById('d2').style.background="rgb(221, 170, 245)";
                        document.getElementById('d3').textContent="irvasi";
                        document.getElementById('d3').style.background="rgb(221, 170, 245)";
                        document.getElementById('d4').textContent="sanke";
                        document.getElementById('d4').style.background="rgb(221, 170, 245)";
                    };
                    brK++;
                
            };
            case 'resK':
                if(pom=="nova godina" && flagKraj==true){
                        document.getElementById(div).style.background="rgb(221, 170, 245)";
                        document.getElementById(div).innerHTML='<p>NOVA GODINA</p>';
                        if(brK!=4){
                            document.getElementById('resenjeA').textContent="ŽELJA";
                            document.getElementById('resenjeA').style.background="rgb(221, 170, 245)";
                            document.getElementById('resenjeB').textContent="POKLON";
                            document.getElementById('resenjeB').style.background="rgb(221, 170, 245)";
                            document.getElementById('resenjeC').textContent="JELKA";
                            document.getElementById('resenjeC').style.background="rgb(221, 170, 245)";
                            document.getElementById('resenjeD').textContent="DEDA MRAZ";
                            document.getElementById('resenjeD').style.background="rgb(221, 170, 245)";
                        };
                        if(brA!=4){
                            document.getElementById('a1').textContent="čežnja";
                            document.getElementById('a1').style.background="rgb(221, 170, 245)";
                            document.getElementById('a2').textContent="muzika";
                            document.getElementById('a2').style.background="rgb(221, 170, 245)";
                            document.getElementById('a3').textContent="zvezda padalica";
                            document.getElementById('a3').style.background="rgb(221, 170, 245)";
                            document.getElementById('a4').textContent="spisak";
                            document.getElementById('a4').style.background="rgb(221, 170, 245)";
                        };
                        if(brB!=4){
                            document.getElementById('b1').textContent="papir";
                            document.getElementById('b1').style.background="rgb(221, 170, 245)";
                            document.getElementById('b2').textContent="dar";
                            document.getElementById('b2').style.background="rgb(221, 170, 245)";
                            document.getElementById('b3').textContent="od srca";
                            document.getElementById('b3').style.background="rgb(221, 170, 245)";
                            document.getElementById('b4').textContent="ukrasni papir";
                            document.getElementById('b4').style.background="rgb(221, 170, 245)";
                        };
                        if(brC!=4){
                            document.getElementById('c1').textContent="drvo";
                            document.getElementById('c1').style.background="rgb(221, 170, 245)";
                            document.getElementById('c2').textContent="zima";
                            document.getElementById('c2').style.background="rgb(221, 170, 245)";
                            document.getElementById('c3').textContent="ukras";
                            document.getElementById('c3').style.background="rgb(221, 170, 245)";
                            document.getElementById('c4').textContent="zvezda";
                            document.getElementById('c4').style.background="rgb(221, 170, 245)";
                        };
                        if(brD!=4){
                            document.getElementById('d1').textContent="kolačići";
                            document.getElementById('d1').style.background="rgb(221, 170, 245)";
                            document.getElementById('d2').textContent="mleko";
                            document.getElementById('d2').style.background="rgb(221, 170, 245)";
                            document.getElementById('d3').textContent="irvasi";
                            document.getElementById('d3').style.background="rgb(221, 170, 245)";
                            document.getElementById('d4').textContent="sanke";
                            document.getElementById('d4').style.background="rgb(221, 170, 245)";
                        };
                        var niz=document.getElementsByClassName('sl');
                        for(i=0;i<niz.length;i++){
                            if(i%2==0)
                            {niz[i].src="slike/vatromet1.png";}
                            else{niz[i].src="slike/vatromet2.png"};

                        }

                };
    }
}