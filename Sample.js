$("button").click(function(){
    var productName= $("#name").val();
    var quantity= $("#quantity").val();
    var amount= $("#amount").val();
    var netAmount=quantity*amount;
    var tax= netAmount *0.18;
    var grossAmount= netAmount + tax;
    //console.log(quantity + " " + amount + " " + " " + netAmount +" " + tax + " " + grossAmount);
    $("tbody").append("<tr></tr>");
    $("tr").last().append("<td>"+productName+"</td>");
    $("tr").last().append("<td>"+quantity+"</td>");
    $("tr").last().append("<td>"+amount+"</td>");
    $("tr").last().append("<td>"+netAmount+"</td>");
    $("tr").last().append("<td>"+tax+"</td>");
    $("tr").last().append("<td class='gross'>"+grossAmount+"</td>");
    var sum= 0;
    var cls= $(".gross");
    for (var i = 0; i < cls.length; i++){
        if(cls[i].className == "gross"){
            sum += isNaN(cls[i].innerHTML) ? 0 : parseInt(cls[i].innerHTML);
        }
    }
    $("#total").html(sum);
    //console.log(total);
    //console.log(grossAmount);
    //console.log(newTotal);
    //var nt= newTotal.toString();
    //console.log(nt);
    //$("#total").html(newTotal);
    var myRows= []; // empty array for rows
    var headers= $("th"); // contains all table headers
    var $rows= $("tbody tr").each(function(index){
    cells= $(this).find("td"); // finds the decendants of the selected element and constructs a jQuery object
    myRows[index]= {}; // empty object for myRows
    cells.each(function(cellIndex){
        myRows[index][$(headers[cellIndex]).html()]=$(this).html(); //.html() is used to get contents of the selected element
    });
});

var myObj= {};
myObj.myRows= myRows;
console.log(JSON.stringify(myObj));
var form= document.querySelector("#form1");
form.reset();
});


