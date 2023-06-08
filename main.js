var count = 0;
var addBtn = document.getElementById('addBtn');
var minusBtn = document.getElementById('minusBtn');
var countText = document.getElementById('countText');
function AddCount() {
    count++;
    ValueCount();
}
function MinusCount() {
    count--;
    ValueCount();
}
function ValueCount() {
    countText === null || countText === void 0 ? void 0 : countText.innerText = count.toString();
}
addBtn.onclick = function () {
    AddCount();
};
minusBtn.onclick = function () {
    MinusCount();
};
ValueCount();
