var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var btn = document.getElementById('add');
var ans = document.getElementById('ans');
var add = function (s1, s2) {
    return s1 + s2;
};
btn.addEventListener('click', function () {
    console.log(add(+num1.value, +num2.value));
    ans.innerText = add(+num1.value, +num2.value).toString();
});
