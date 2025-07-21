function Expnado() {
    const ButtonTxT = document.getElementById("ButtonTxT");
    const ButtonArrow = document.getElementById("Arrow");

    const Desc = document.getElementById("ExpandDesc");

    const HoverCard = document.getElementById("HoverCard");
    const InnerCard = document.getElementById("InnerCard");

    HoverCard.classList.toggle("Expanded");
    InnerCard.classList.toggle("Expanded");
    ButtonArrow.classList.toggle("Expanded");
    Desc.classList.toggle("Expanded");

    if (ButtonArrow.classList.contains("Expanded")) {
        ButtonTxT.innerText = "Collapse";
    } else {
        ButtonTxT.innerText = "Expand";
    }
}
