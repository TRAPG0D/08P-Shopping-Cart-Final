var names = [];
var total = 0;
$('.newItem').click(function() {
    var name = $(".itemName").val();

    names.push(name);
    $(".pro").append("<li>" + name + "</li>");
    var number = names.length;

    $(".number").text(number);
});
var prices = [];
$('.newItem').click(function() {
    var price = $(".itemPrice").val();
    price = parseInt(price);
    prices.push(price);
    $(".pri").append("<li>" + price + "</li>");
    var numbe = price.length;
    total = total + price;
    $(".total").text(total);
});
$('.purchase').click(function() {
    alert("bruh bruhhhhhhh bruhhhhhhhhhhhhhhhhhhhhhh");
});