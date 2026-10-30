mudrost = ["Bolje vrabac u ruci, nego golub na grani.","Ko voli da laže, i    samom sebi veruje.","Ako dugo zive skupa, zivotinje se zavole, a ljudi zamrze.","Ako zelis da uvredis svog protivnika, hvali ga na sav glas zbog osobina koje mu nedostaju.","Covek koji je previse dobar za svet, cesto nije dobar za svoju porodicu."]
const ispis = document.getElementById("umotvorine")
ispis.innerText = mudrost[0]
i=0
setInterval(function () {
    i++
    if(i>4){
        i=0
    }
    ispis.innerText=mudrost[i]
}, 10000)