
var request;
if(window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'example.json');
request.onreadystatechange = function() {
    if((request.readyState===4) && (request.status===200)) {
        var items = JSON.parse(request.responseText);
        var items = items.address;
        console.log(items);
    }
}
request.send();

var dataURL = 'example.json';
var app = new Vue({
  el: '#app',
  data: {
    input: '',
    userData: []
},
methods: {
  myinput: function() {
     var delivery__list = document.querySelector('.delivery__list');
     if(document.querySelector('.delivery__item')) {
          delivery__list.style.display = "flex";
     }
 },
 clear: function() {
    document.querySelector('.delivery__input-value').value = "";
    document.querySelector('.delivery__list').style.display = "none";
 },
 element_click: function(e) {
     var this_price = e.target.attributes['data-price'].value;
     document.querySelector('.delivery__price-value').innerText = this_price;
     document.querySelector('.delivery__price-value2').innerText = this_price * 7;
     document.querySelector('.delivery__input-value').value = e.target.attributes['data-name'].value;
     document.querySelector('.delivery__to-value').innerText = e.target.attributes['data-name'].value;
 }
}
})

document.addEventListener('click',function(){
    document.querySelector('.delivery__list').style.display = "none";
});
