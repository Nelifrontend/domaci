    var red = [];
    localStorage.clickcount = 0;
         
    function locstormake(){
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
            var b = localStorage.clickcount;
            } 
        var vrsta = document.getElementById("vrsta").value;
        var tip = document.getElementById("tip").value;
        var komada = document.getElementById("komada").value;
        var cena = document.getElementById("cena").value;
        var mnozenje = parseFloat(komada).toFixed(2) * parseFloat(cena).toFixed(2);
        var ukupnacena = mnozenje.toFixed(2);
        red.push(b,vrsta,tip,komada,cena,ukupnacena);
        alert(red);
        document.getElementById("forma").reset();
    }
 
    function locstormake2(){
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
            var b = localStorage.clickcount;
            } 
        var vrsta = document.getElementById("vrsta2").value;
        var tip = document.getElementById("tip2").value;
        var komada = document.getElementById("komada2").value;
        var cena = document.getElementById("cena2").value;
        var mnozenje = parseFloat(komada).toFixed(2) * parseFloat(cena).toFixed(2);
        var ukupnacena = mnozenje.toFixed(2);
        red.push(b,vrsta,tip,komada,cena,ukupnacena);
        alert(red);
        document.getElementById("forma").reset();
    }

    function locstormake3(){
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
            var b = localStorage.clickcount;
            } 
        var vrsta = document.getElementById("vrsta3").value;
        var tip = document.getElementById("tip3").value;
        var komada = document.getElementById("komada3").value;
        var cena = document.getElementById("cena3").value;
        var mnozenje = parseFloat(komada).toFixed(2) * parseFloat(cena).toFixed(2);
        var ukupnacena = mnozenje.toFixed(2);
        red.push(b,vrsta,tip,komada,cena,ukupnacena);
        alert(red);
        document.getElementById("forma").reset();
    }

    function locstormake4(){
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
            var b = localStorage.clickcount;
            } 
        var vrsta = document.getElementById("vrsta4").value;
        var tip = document.getElementById("tip4").value;
        var komada = document.getElementById("komada4").value;
        var cena = document.getElementById("cena4").value;
        var mnozenje = parseFloat(komada).toFixed(2) * parseFloat(cena).toFixed(2);
        var ukupnacena = mnozenje.toFixed(2);
        red.push(b,vrsta,tip,komada,cena,ukupnacena);
        alert(red);
        document.getElementById("forma").reset();
    }

    function funkcija(){
        var vrstar = document.getElementById("tip").value;
        document.getElementById("ukupno").value = (document.getElementById("cena").value * document.getElementById("komada").value).toFixed(2);
        if(vrstar=="100r"){
            document.getElementById("cena").value ="1.2";
        }else if (vrstar=="120r"){
            document.getElementById("cena").value ="1.3";
        }else if (vrstar=="1k"){
            document.getElementById("cena").value ="1.4";
        }else if (vrstar=="10k"){
            document.getElementById("cena").value ="1.5";
        }else if (vrstar=="100k"){
            document.getElementById("cena").value ="1.6";
        }else{
            document.getElementById("cena").value ="";
        }
    }
        
    function funkcija2(){
        var vrstar = document.getElementById("tip2").value;
        document.getElementById("ukupno2").value = (document.getElementById("cena2").value * document.getElementById("komada2").value).toFixed(2);
        if(vrstar=="100uF"){
            document.getElementById("cena2").value ="50";
        }else if (vrstar=="220uF"){
            document.getElementById("cena2").value ="80";
        }else if (vrstar=="470uF"){
            document.getElementById("cena2").value ="100";
        }else if (vrstar=="1000uF"){
            document.getElementById("cena2").value ="120";
        }else if (vrstar=="2200uF"){
            document.getElementById("cena2").value ="160";
        }else{
            document.getElementById("cena2").value ="";
        }
    }
    
    function funkcija3(){
        var vrstar = document.getElementById("tip3").value;
        document.getElementById("ukupno3").value = (document.getElementById("cena3").value * document.getElementById("komada3").value).toFixed(2);
        if(vrstar=="1N4007"){
            document.getElementById("cena3").value ="5";
        }else if (vrstar=="1N5404"){
            document.getElementById("cena3").value ="10";
        }else if (vrstar=="1N5408"){
            document.getElementById("cena3").value ="12";
        }else if (vrstar=="25F120M"){
            document.getElementById("cena3").value ="240";
        }else if (vrstar=="40HFR100M"){
            document.getElementById("cena3").value ="450";
        }else{
            document.getElementById("cena3").value ="";
        }
    }
                    
    function funkcija4(){
        var vrstar = document.getElementById("tip4").value;
        document.getElementById("ukupno4").value = (document.getElementById("cena4").value * document.getElementById("komada4").value).toFixed(2);
        if(vrstar=="2N2222A"){
            document.getElementById("cena4").value ="3";
        }else if (vrstar=="2N3439"){
            document.getElementById("cena4").value ="55";
        }else if (vrstar=="BC547"){
            document.getElementById("cena4").value ="195";
        }else if (vrstar=="2SA1943"){
            document.getElementById("cena4").value ="220";
        }else if (vrstar=="2SC5200"){
            document.getElementById("cena4").value ="416";
        }else{
            document.getElementById("cena4").value ="";
        }
    }
                    
    function send(){
        red.toString();
        localStorage.setItem("red", red );  
    }                    
