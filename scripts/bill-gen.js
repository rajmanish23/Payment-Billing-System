// adds an empty input for next bill item

function addBillItem() {
    document.getElementById("innerBillDetails").innerHTML += `
        <div id="innerBillElementNew">
        <label for="itemId">Item Code </label>
        <input type="number" id="itemId" name="itemId">
        <label for="itemName">Item </label>
        <input type="text" id="itemName" name="itemName">
        <label for="itemPrice"> Price </label>
        <input type="number" id="itemPrice" name="itemPrice">
        <label for="itemQty">Quantity </label>
        <input type="number" id="itemQty" name="itemQty">
        </div>
        <br>
        `;
    // return false;
}
    
