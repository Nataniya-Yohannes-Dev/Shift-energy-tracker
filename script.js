function saveShift() {
    let hours = document.getElementById("hours").value;
    let energy = document.getElementById("energy").value;
    let late = document.getElementById("late").value;

    let list = document.getElementById("list");
    let item = document.createElement("li");

    item.textContent = `Shift: ${hours} | Energy: ${energy} | Late: ${late}`;
    list.appendChild(item);
}
