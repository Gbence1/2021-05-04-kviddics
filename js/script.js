let kvaffInput = document.querySelector(".kvaff");
let cikeszInput = document.querySelector(".cikesz");

kvaffInput.addEventListener("input", sum);
cikeszInput.addEventListener("input", sum);

function sum() {
    let kvaffValue = parseInt(kvaffInput.value);
    let cikeszValue = parseInt(cikeszInput.value);

    let kvaff = kvaffValue * 10;
    let cikesz = cikeszValue * 150;

    if (kvaffValue < 0) {
        window.alert("Az érték nem lehet negatív!");
        kvaffInput.value = 0;
        kvaff = 0;
        // window.alert("Az érték nem lehet negatív!");
        // ^^^ ha ne látszódjon a nem engedélyezett érték
    }

    if (cikeszValue < 0) {
        window.alert("Az érték nem lehet negatív!");
        cikeszInput.value = 0;
        cikesz = 0;
    }

    if (cikeszValue > 1) {
        window.alert("Az aranycikeszt csak egyszer lehet elkapni!");
        cikeszInput.value = 1;
        cikesz = 150;
    }

    if (isNaN(kvaffValue)) {
        kvaff = 0;
    }

    if (isNaN(cikeszValue)) {
        cikesz = 0;
    }

    let sum = kvaff + cikesz;
    document.querySelector(".sum").innerHTML = sum;
}
