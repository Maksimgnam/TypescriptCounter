let count: number = 0;


const addBtn = document.getElementById('addBtn');
const minusBtn = document.getElementById('minusBtn')
const countText = document.getElementById('countText');


function AddCount(): void {
    count++;
    ValueCount()

}
function MinusCount(): void {
    count--;
    ValueCount()

}
function ValueCount(): void {
    countText?.innerText = count.toString();

}

addBtn.onclick = () => {
    AddCount()
}
minusBtn.onclick = () => {
    MinusCount()
}
ValueCount()


