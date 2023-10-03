function generateChessboard() {
    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);
    const chessboard = document.getElementById("chessboard");
    chessboard.innerHTML = "";

    if (rows <= 0 || columns <= 0) {
        alert("Zadejte platný počet řádků a sloupců (větší než 0).");
        return;
    }

    chessboard.style.setProperty('--columns', columns);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const square = document.createElement("div");
            square.className = "square";
            if ((row + col) % 2 === 0) {
                square.classList.add("white");
            } else {
                square.classList.add("black");
            }

            // Přidání editovatelného divu do každého políčka
            const editableDiv = document.createElement("div");
            editableDiv.contentEditable = "true";
            editableDiv.addEventListener("input", validateCell);
            square.appendChild(editableDiv);

            chessboard.appendChild(square);
        }
    }
}

function validateCell(event) {
    const cell = event.target;
    const editedText = cell.innerText;

    const pattern = /^[a-zA-Z0-9\s]*$/;

    if (!pattern.test(editedText)) {
        alert("Buňka obsahuje neplatné znaky. Použijte pouze písmena, číslice a mezery.");
        cell.innerText = ""; 
    }
}

function confirmChanges() {
    alert("Změny byly potvrzeny.");
}

function cancelChanges() {
    const chessboard = document.getElementById("chessboard");
    const editableDivs = chessboard.querySelectorAll("div[contentEditable=true]");

    editableDivs.forEach((editableDiv) => {
        editableDiv.innerText = ""; 
    });

    alert("Změny byly zrušeny.");
}

generateChessboard();
