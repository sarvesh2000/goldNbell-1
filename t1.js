console.log("JS is In");
$("#add").click(function(){
    var productName= $("#name").val();
    var quantity= $("#quantity").val();
    var amount= $("#amount").val();
    var netAmount=quantity*amount;
    var tax= netAmount *0.18;
    var grossAmount= netAmount + tax;
    $("tbody").append("<tr></tr>");
    $("tr").last().append("<td>"+productName+"</td>");
    $("tr").last().append("<td>"+quantity+"</td>");
    $("tr").last().append("<td>"+amount+"</td>");
    $("tr").last().append("<td>"+netAmount+"</td>");
    $("tr").last().append("<td>"+tax+"</td>");
    $("tr").last().append("<td>"+grossAmount+"</td>");
    
var form= document.querySelector("#form1");
form.reset();
});
