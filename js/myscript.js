$(document).ready(function() {


$('#fizzbuzz').on("click", function() {

for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
    	document.write("FizzBuzz");

    else
    	document.write(i);
	}
});

});