var linkovi = document.getElementsByClassName('link');
for(let i=0;i<linkovi.length;i++){
    linkovi[i].addEventListener("click",function(){
        switch(linkovi[i].textContent){
            case 'a-ha - Take On Me':
                var ram=document.getElementById('okvir');
                ram.innerHTML='<h3>a-ha - Take On Me</h3><audio controls autoplay><source src="audio/a-ha - Take On Me.mp3" type="audio/mpeg"> Your browser does not support the audio tag.</audio>'
            break;
            case 'ABBA - Dancing Queen':
                var ram=document.getElementById('okvir');
                ram.innerHTML='<h3>ABBA - Dancing Queen</h3><audio controls autoplay><source src="audio/ABBA - Dancing Queen.mp3" type="audio/mpeg"> Your browser does not support the audio tag.</audio>';
            break;

            case 'Arctic Monkeys - Do I Wanna Know':
                var ram=document.getElementById('okvir');
                ram.innerHTML='<h3>Arctic Monkeys - Do I Wanna Know</h3><audio controls autoplay><source src="audio/Arctic Monkeys - Do I Wanna Know.mp3" type="audio/mpeg"> Your browser does not support the audio tag.</audio>';
            break;
            case 'Avicii - The Nights':
                var ram=document.getElementById('okvir');
                ram.innerHTML='<h3>Avicii - The Nights</h3><audio controls autoplay><source src="audio/Avicii - The Nights.mp3" type="audio/mpeg"> Your browser does not support the audio tag.</audio>';
            break;
            case "Bobby McFerrin - Don't Worry Be Happy":
                var ram=document.getElementById('okvir');
                ram.innerHTML='<h3>Bobby McFerrin - Dont Worry Be Happy</h3><audio controls autoplay><source src="audio/Bobby McFerrin - Dont Worry Be Happy.mp3" type="audio/mpeg"> Your browser does not support the audio tag.</audio>';
            break;
            case 'Bruno Mars - Locked Out Of Heaven':
                var ram=document.getElementById('okvir');
                ram.innerHTML='<h3>Bruno Mars - Locked Out Of Heaven</h3><audio controls autoplay><source src="audio/Bruno Mars - Locked Out Of Heaven.mp3" type="audio/mpeg"> Your browser does not support the audio tag.</audio>';
            break;
            case "Elvis Presley - Can't Help Falling In Love":
                var ram=document.getElementById('okvir');
                ram.innerHTML='<h3>Elvis Presley - Cant Help Falling In Love</h3><audio controls autoplay><source src="audio/Elvis Presley - Cant Help Falling In Love.mp3" type="audio/mpeg"> Your browser does not support the audio tag.</audio>';
            break;
            case 'Frank Sinatra - Fly Me To The Moon':
                var ram=document.getElementById('okvir');
                ram.innerHTML='<h3>Frank Sinatra - Fly Me To The Moon</h3><audio controls autoplay><source src="audio/Frank Sinatra - Fly Me To The Moon.mp3" type="audio/mpeg"> Your browser does not support the audio tag.</audio>';
            break;
            case 'Grover Washington Jr. - Just The Two Of Us':
                var ram=document.getElementById('okvir');
                ram.innerHTML='<h3>Grover Washington Jr - Just The Two Of Us</h3><audio controls autoplay><source src="audio/Grover Washington Jr - Just The Two Of Us.mp3" type="audio/mpeg"> Your browser does not support the audio tag.</audio>';
            break;
            case 'Katy Perry - Last Friday Night':
                var ram=document.getElementById('okvir');
                ram.innerHTML='<h3>Katy Perry - Last Friday Night</h3><audio controls autoplay><source src="audio/Katy Perry - Last Friday Night.mp3" type="audio/mpeg"> Your browser does not support the audio tag.</audio> ';
            break;
            case 'Michael Jackson - Billie Jean':
                var ram=document.getElementById('okvir');
                ram.innerHTML='<h3>Michael Jackson - Billie Jean</h3><audio controls autoplay><source src="audio/Michael Jackson - Billie Jean.mp3" type="audio/mpeg"> Your browser does not support the audio tag.</audio> ';
            break;
            case 'OneRepublic - Counting Stars':
                var ram=document.getElementById('okvir');
                ram.innerHTML='<h3>OneRepublic - Counting Stars</h3><audio controls autoplay><source src="audio/OneRepublic - Counting Stars.mp3" type="audio/mpeg"> Your browser does not support the audio tag.</audio> ';
            break;
            case 'Sam Smith - Stay With Me':
                var ram=document.getElementById('okvir');
                ram.innerHTML='<h3>Sam Smith - Stay With Me</h3><audio controls autoplay><source src="audio/Sam Smith - Stay With Me.mp3" type="audio/mpeg"> Your browser does not support the audio tag.</audio> ';
            break;
            case "Shawn Mendes - There's Nothing To Holding Me Back":
                var ram=document.getElementById('okvir');
                ram.innerHTML="<h3>Shawn Mendes - There's Nothing To Holding Me Back</h3><audio controls autoplay><source src='audio/Shawn Mendes - Theres Nothing Holding Me Back.mp3' type='audio/mpeg'> Your browser does not support the audio tag.</audio> ";
            break;
            case 'Whitney Houston - I Wanna Dance With Somebody':
                var ram=document.getElementById('okvir');
                ram.innerHTML='<h3>Whitney Houston - I Wanna Dance With Somebody</h3><audio controls autoplay><source src="audio/Whitney Houston - I Wanna Dance With Somebody.mp3" type="audio/mpeg"> Your browser does not support the audio tag.</audio> ';
            break;
        
        }})
}

