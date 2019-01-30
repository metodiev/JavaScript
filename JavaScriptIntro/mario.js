class SuperMario{

    constructor(x ,y){
        this.x = x;
        this.y = y;
    }



    keyevents(){
        // window.addEventListener("keydown", function (event) {
        //     if (event.defaultPrevented) {
        //       return; // Do nothing if the event was already processed
        //     }
          //alert("Load key events");
          alert(event.key);
            switch (event.key) {
              case event.keyCode = 65:
                alert("ArrowDown");
                break;
              case "ArrowUp":
              alert("ArrowUp");
                break;
              case "ArrowLeft":
              alert("ArrowLeft");
                break;
              case "ArrowRight":
              alert("ArrowRight");
                break;
              default:
                return; // Quit when this doesn't handle the key event.
            }      
    }

    createMarioObject(){
        var marioObj = "o";
        return marioObj;
    }
    

    reDrawBoard(x,y) {
		var i
		for (i = 0; i < 100; i++) {
		//	console.log("\n");
		}
		
        var p;
        var j;
        var whiteSpaces= " ";
        var mario = "0";
		for ( p = 0; p <= x; p++) {
			console.log();
			for (j = 0; j <= y; j++) {
                //console.log(" ");
                document.write('&nbsp;');
                whiteSpaces+='&nbsp;';
				if ( p == x && j == y) {
                    console.log(this.createMarioObject());
                    document.write(this.createMarioObject());
                    mario+=this.createMarioObject();
                }
            }
        }

        // document.write(whiteSpaces);
        // document.write(mario);

    }
    
}

var x = 0;
var y =0;

function main() {
     var mario = new SuperMario(0,0);
    // mario.keyevents();
   
    localStorage.setItem("x1", x);
    localStorage.setItem("y1", x);

    var x1 = localStorage.getItem("x1");
    var y1 = localStorage.getItem("y1");

     document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.ctrlKey && evt.keyCode == 90) {
            alert("Ctrl-Z");
        }
        switch (event.keyCode) {
            case 83:
            y--;
            console.log(x1);
            console.log(y1);
            mario.reDrawBoard(x1,y1);
             // alert("ArrowDown");
              break;
            case 87:
            y++;
            console.log(x1);
            console.log(y1);
            mario.reDrawBoard(x1,y1);
            //alert("ArrowUp");
              break;
            case 65:
            x--;
            console.log(x1);
            console.log(y1);
            mario.reDrawBoard(x1,y1);
            //alert("ArrowLeft");
              break;
            case 68:
            x++;
            console.log(x1);
            console.log(y1);
            mario.reDrawBoard(x1,y1);
            //alert("ArrowRight");
              break;
            default:
              return; // Quit when this doesn't handle the key event.
          }
         
    };
    localStorage.setItem("x1", x);
    localStorage.setItem("y1", y);

    setTimeout(function(){ main(); }, 1000);
    setTimeout(function(){ window.location.reload(); }, 4000);
    
  
    // if(window.event.keyCode == 83 ||
    //     window.event.keyCode == 87 ||
    //     window.event.keyCode == 65||
    //     window.event.keyCode == 68 )
    // {
    //     main();
    // }

    
}

function callMain(mario){

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.ctrlKey && evt.keyCode == 90) {
            alert("Ctrl-Z");
        }
        switch (event.keyCode) {
            case 83:
            y--;
            console.log(x);
            console.log(y);
            mario.reDrawBoard(x,y);
             // alert("ArrowDown");
              break;
            case 87:
            y++;
            console.log(x);
            console.log(y);
            mario.reDrawBoard(x,y);
            //alert("ArrowUp");
              break;
            case 65:
            x--;
            console.log(x);
            console.log(y);
            mario.reDrawBoard(x,y);
            //alert("ArrowLeft");
              break;
            case 68:
            x++;
            console.log(x);
            console.log(y);
            mario.reDrawBoard(x,y);
            //alert("ArrowRight");
              break;
            default:
              return; // Quit when this doesn't handle the key event.
          }
         
    };
    main();

   
}