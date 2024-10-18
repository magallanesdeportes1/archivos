/* http://loseasi.blogspot.com/
 CREADO POR: Vku. NO BORRAR LOS CREDITOS
SLIDESHOW DE ENTRADAS */

showRandomImg = true;
cellspacing = 5;
borderColor = "";
bgTD = "";
aBold = true;
numposts = 1;
rss_page = "/feeds/posts/default?start-index=";
rssb_page = "&alt=json-in-script&callback=slidepostvku";
home_info = "<a href='http://goo.gl/fb/8vzt6' target='_blank'><img src='http://2.bp.blogspot.com/_lMNoba63Ric/TUoIgRbfNQI/AAAAAAAAALI/SW1xBJs4SEM/s00/informacion.gif'/></a><a href='#' onclick='stop_autochange(); return false'><img src='"+img_stop+"'/></a><a href='#' onclick='restart_autochange(); return false'><img src='"+img_play+"'/></a>";
div_easytabs1 = "<div class='menuvku'><span class='menuvku-rig'>";
div_easytabs2 = "</span><ul>";
div_easytabs3 = "</ul>";
div_easytabs4 = "</div>";
li_easytabs1 = "<li><a href='#' onmouseover='easytabs(&quot;1&quot;, &quot;1&quot;);' onfocus='easytabs(&quot;1&quot;, &quot;1&quot;);' onclick='return false;'  title='' id='tablink1'>1</a></li>";
li_easytabs2 = "<li><a href='#' onmouseover='easytabs(&quot;1&quot;, &quot;2&quot;);' onfocus='easytabs(&quot;1&quot;, &quot;2&quot;);' onclick='return false;'  title='' id='tablink2'>2</a></li>";
li_easytabs3 = "<li><a href='#' onmouseover='easytabs(&quot;1&quot;, &quot;3&quot;);' onfocus='easytabs(&quot;1&quot;, &quot;3&quot;);' onclick='return false;'  title='' id='tablink3'>3</a></li>";
li_easytabs4 = "<li><a href='#' onmouseover='easytabs(&quot;1&quot;, &quot;4&quot;);' onfocus='easytabs(&quot;1&quot;, &quot;4&quot;);' onclick='return false;'  title='' id='tablink4'>4</a></li>";
li_easytabs5 = "<li><a href='#' onmouseover='easytabs(&quot;1&quot;, &quot;5&quot;);' onfocus='easytabs(&quot;1&quot;, &quot;5&quot;);' onclick='return false;'  title='' id='tablink5'>5</a></li>";
li_easytabs6 = "<li><a href='#' onmouseover='easytabs(&quot;1&quot;, &quot;6&quot;);' onfocus='easytabs(&quot;1&quot;, &quot;6&quot;);' onclick='return false;'  title='' id='tablink6'>6</a></li>";
li_easytabs7 = "<li><a href='#' onmouseover='easytabs(&quot;1&quot;, &quot;7&quot;);' onfocus='easytabs(&quot;1&quot;, &quot;7&quot;);' onclick='return false;'  title='' id='tablink7'>7</a></li>";
li_easytabs8 = "<li><a href='#' onmouseover='easytabs(&quot;1&quot;, &quot;8&quot;);' onfocus='easytabs(&quot;1&quot;, &quot;8&quot;);' onclick='return false;'  title='' id='tablink8'>8</a></li>";
li_easytabs9 = "<li><a href='#' onmouseover='easytabs(&quot;1&quot;, &quot;9&quot;);' onfocus='easytabs(&quot;1&quot;, &quot;9&quot;);' onclick='return false;'  title='' id='tablink9'>9</a></li>";
li_easytabs10 = "<li><a href='#' onmouseover='easytabs(&quot;1&quot;, &quot;10&quot;);' onfocus='easytabs(&quot;1&quot;, &quot;10&quot;);' onclick='return false;'  title='' id='tablink10'>10</a></li>";

var tablink_idname = new Array("tablink")

var tabcontent_idname = new Array("tabcontent") 

var loadtabs = new Array("1")  

var autochangemenu = 1;

var stoponhover = 0;

function easytabs(menunr, active) {if (menunr == autochangemenu){currenttab=active;}if ((menunr == autochangemenu)&&(stoponhover==1)) {stop_autochange()} else if ((menunr == autochangemenu)&&(stoponhover==0))  {counter=0;}menunr = menunr-1;for (i=1; i <= tabcount[menunr]; i++){document.getElementById(tablink_idname[menunr]+i).className='tab'+i;document.getElementById(tabcontent_idname[menunr]+i).style.display = 'none';}document.getElementById(tablink_idname[menunr]+active).className='tab'+active+' tabactive';document.getElementById(tabcontent_idname[menunr]+active).style.display = 'block';}var timer; counter=0; var totaltabs=tabcount[autochangemenu-1];var currenttab=loadtabs[autochangemenu-1];function start_autochange(){counter=counter+1;timer=setTimeout("start_autochange()",1000);if (counter == changespeed+1) {currenttab++;if (currenttab>totaltabs) {currenttab=1}easytabs(autochangemenu,currenttab);restart_autochange();}}function restart_autochange(){clearTimeout(timer);counter=0;start_autochange();}function stop_autochange(){clearTimeout(timer);counter=0;}

window.onload=function(){
var menucount=loadtabs.length; var a = 0; var b = 1; do {easytabs(b, loadtabs[a]);  a++; b++;}while (b<=menucount);
if (autochangemenu!=0){start_autochange();}
}
function removeHtmlTag(strx,chop){
	var s = strx.split("<");
	for(var i=0;i<s.length;i++){
		if(s[i].indexOf(">")!=-1){
			s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
		}
	}
	s =  s.join("");
	s = s.substring(0,chop-1);
	return s;
}

function slidepostvku(json) {
	document.write('<table width="100%" border=0 cellspacing="'+cellspacing+'" bgcolor="'+borderColor+'" align="center">');
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();

  	for (var i = 0; i < numposts; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("entradas" in entry) {
      		var postcontent = entry.entradas.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	cmtext = (showPostComent) ? '<i><font  style="color:'+ccolor+'; font-size:'+cfntsize+'px;">('+pcm+' '+text+')</font></i>' : '';

	cltext = (showPostContinuar) ? '<font  style="color:'+clcolor+'; font-size:'+clfntsize+'px;">'+clltext+'</font>' : '';

	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = (showPostDate) ? '<i><font style="color:'+bcolor+'; font-size:'+bfntsize+'px;">  '+day+ ' ' + m + ' ' + y + '</font></i>' : "";

posttitle = (aBold) ? "<b>"+posttitle+"</b>" : posttitle;

	var td = '<td valign="top" style="background:'+bgTD+'"><a href="'+posturl+'"><img style="float:left;margin-right:0px;border:0" src="'+img[i]+'" width="'+imgwidth+'" height="'+imgheight+'"/></a><a href="'+posturl+'" style="color:'+acolor+'; font-size:'+fntsize+'px;">'+posttitle+'</a><div style="color:'+entradasColor+'; margin-top:2px; border-top:0px '+borderColor+' solid; font-size:'+entradasFontsize+'px;">'+removeHtmlTag(postcontent,entradasPost)+'...</div> '+cmtext+ daystr +'<a href="'+posturl+'" style="text-decoration:none;float:right;margin-right:10px;margin-top:10px;//margin-top:0px">'+cltext+'</a></td>';

	document.write(td);
	
	j++;
}
document.write('</tr></table>');
}