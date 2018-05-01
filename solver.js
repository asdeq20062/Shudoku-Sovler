var IsFind=false;
var cells_name=["11","12","13","14","15","16","17","18","19","21","22","23","24","25","26","27","28","29","31","32","33","34","35","36","37","38","39","41","42","43","44","45","46","47","48","49","51","52","53","54","55","56","57","58","59","61","62","63","64","65","66","67","68","69","71","72","73","74","75","76","77","78","79","81","82","83","84","85","86","87","88","89","91","92","93","94","95","96","97","98","99"];

function check(cells_id, vaild_number){
	for(var row=1;row<9;row++){
		if(document.getElementById(cells_id.slice(0,1) + row.toString()).value==vaild_number){
			return false;
		}
	}
	for(var col=1;col<9;col++){
		if(document.getElementById(col.toString() + cells_id.slice(1,2)).value==vaild_number){
			return false;
		}
	}
	for(var c_row=Math.floor((cells_id.slice(1,2)-1)/3)*3+1;c_row<=Math.floor((cells_id.slice(1,2)-1)/3)*3+1+2;c_row++){
		for(c_col=Math.floor((cells_id.slice(0,1)-1)/3)*3+1;c_col<=Math.floor((cells_id.slice(0,1)-1)/3)*3+1+2;c_col++){
			if(document.getElementById(c_col.toString()+c_row.toString()).value==vaild_number){
				return false;
			}
		}
	}
	return true;
}

function Win(){
	blank=0;
	for(var x=1;x<=9;x++){
		check_row=0;
		check_col=0;
		for(var y=1;y<=9;y++){
			check_row=check_row+Number(document.getElementById(x.toString()+y.toString()).value);
			check_col=check_col+Number(document.getElementById(y.toString()+x.toString()).value);
			if(document.getElementById(y.toString()+x.toString()).value==""){
				blank=blank+1;
			}
		}
		if(check_row!=45){
			return false;
		}
		if(check_col!=45){
			return false;
		}
	}
	if(blank>0){
		return false;
	}
	return true;
}

function clear1(){
	for(var x=0;x<=80;x++){
		document.getElementById(cells_name[x]).value="";
	}
}

function try_replace(cells, count){
	if(Win()==true){
		console.log("win");
		return;
	}
	if(count>81 && Win()==false){
		console.log("No Solution");
		return;
	}
	if(document.getElementById(cells).value==""){
		for(var i=1;i<=9;i++){
			if(check(cells,i)==true){
				document.getElementById(cells).value=i;
				console.log("i="+i);
				try_replace(cells_name[count], count+1);
				if(Win()==true){
					return;
				}
				document.getElementById(cells).value="";
			}
		}
	}
	else{
		try_replace(cells_name[count], count+1);
	}
}