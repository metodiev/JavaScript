function myFunc() {
     
    try
    {
        var  piNumbers = [1,2,3,4] ;

        for (var i = 0; i < 41; i++)
        {
           console.log(piNumbers[i]);
          if(i > piNumbers.length){throw RangeError;}
        }
    }
    catch (err)
    {
        console.log(err);
        
    }
}


function tryFinallyMethod ()
{
    var a =5 ;
    var b  = 2;
    try {
        console.log("Try 1");
        try {
            var a1 = 5;
            var b1 = 2;
            console.log("Try 2");
            return a1+b1;
        }
        catch (err)
        {
            console.log ("Catch 1");
        }
        finally {
            console.log("Finally 1");
        }
   
    return a +b;
}
finally {
    console.log("Finally");
    return a + b + 10000;
}  
}

function  stackOverflowException( sum)
{
try  {
    return stackOverflowException(sum)+1;
}
catch (err)
{
    var stack = new Error().stack;
    console.log("exception stack is : \n" + stack);
}
return sum ;
}
function tryCatchFinally () {
    try {
        var sum = 100;
        console.log("Try this block");
    }catch (err)
    {
        console.log("This exception is not going to be executed");
     }finally {
         console.log ("The finally method is alway executed, doesnt matter of the situation");
     }
    
}

function UncheckedException()
{
    var a = 0;
    var b = 100;
    try {
        // Keep incrementing the shorts untill an exception is thrown
        while(true)
        {
            b++;
            try{
                a++;
                var  p  = Math.min(parseFloat(a),20);
                
            }
            catch (err)
            {
                var stack = new Error().stack;
                console.log("The stack trace is: \n " + stack);
                
            }
        }
    
    
    }
    catch(err){
        console.log(a);
        console.log(b);        
    }
}

//TOODO CREATE METHOD TO READ FILES!!!