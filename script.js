function idozito(egyseg,nev) {
	var szoveg="";
	if (egyseg=="mp") 
		{
			szoveg='<input type="number" class="mp" id="'+nev+'" min="0" max="59" value="0" required step="1" size="2">';
		};
	if (egyseg=="p") 
		{
			szoveg='<input type="number" class="p" id="'+nev+'" min="0" max="59" value="0" required step="1" size="2">';
		};
	if (egyseg=="o") 
		{
			szoveg='<input type="number" class="o" id="'+nev+'" min="0" max="23" value="0" required step="1" size="2">';
		};
	return szoveg;
}

function szovegek() {
	var szoveg="";
	var uj="\n";
	var hossz=plug.length;
	var szoveg1='<div id="eszkoz_';
	var szoveg2='" class="plug-s">'+uj;
	var szoveg3="</div>"+uj;
	
	for (x=0; x<hossz; x++)
		{
			szoveg+=szoveg1 + x + szoveg2 + plug[x][1] + uj + '<input type="button" onclick="megnyit('+"'"+plug[x][2]+"'"+','+"'on'"+')" value="Be">' + uj +  '<input type="button" onclick="megnyit('+"'"+plug[x][2]+"'"+','+"'off'"+')" value="Ki">' + uj + "Időzítő: " + idozito("o",plug[x][2]+"_o") + ":" + idozito("p",plug[x][2]+"_p") + ":" + idozito("mp",plug[x][2]+"_mp") + uj + szoveg3;
		};
	//alert(szoveg);
	return szoveg;
}

function plug_s() {
	document.getElementById("plug_s_eszkozok").innerHTML=szovegek();
}

function megnyit(mit,allapot) {
	allapot=allapot.toLowerCase();
	var allapot1="off";
	var allapot2="Ki";
	if ((allapot=="be") || (allapot=="on"))
		{
			allapot1="on";
			allapot2="Be";
		}
		else if ((allapot=="ki") || (allapot=="off"))
		{
			allapot1="off";
			allapot2="Ki";
		}
	var o=mit+"_o";
	var p=mit+"_p";
	var mp=mit+"_mp";
	var ora=document.getElementById(mit+"_o").value;
	var perc=document.getElementById(mit+"_p").value;
	var masodperc=document.getElementById(mp).value;
	//var ora=0;
	//var perc=0;
	//var masodperc=0;
	var ido=((ora*60)+perc)*60+masodperc;
	//var ido=0;
	var hiv='http:/'+'/'+mit+"/relay/0?turn="+allapot1;
	if (ido>0)
		{
			hiv+="&timer="+ido;
		};
	
	//var szoveg='<input type="button" onclick="window.open('+"'"+hiv+"'"+','+"'nyit'"+')" value="'+allapot2+'">';
	//return szoveg;
	window.open(hiv,"nyit");
}