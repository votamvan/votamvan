function calcTip() {
	var subtotalElem = document.getElementById('subtotal');
	var tipElem = document.getElementById('tip');
	var totalElem = document.getElementById('total');
    var subtotal = parseFloat(subtotalElem.value);
    var tip = parseFloat(tipElem.value);
    if ((Math.sign(subtotal) == -1) || (Math.sign(subtotal) == -1)){
        alert("Wrong input");
        return;
    }
	var total = subtotal + subtotal*tip/100;
    totalElem.innerHTML = '$' + total;
}