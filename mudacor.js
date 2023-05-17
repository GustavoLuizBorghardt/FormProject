let sel = document.querySelectorAll(".sel");
let mudar_cor = document.querySelector("#mudar_cor");
let body = document.body;

mudar_cor.onclick = () => {
    if (sel[0].selected) {
        body.style.background = "";
    }

    else if (sel[1].selected) {
        body.style.background = "green";
    }

    else if (sel[2].selected) {
        body.style.background = "blue";
    }

    else if (sel[3].selected) {
        body.style.background = "yellow";

    }else if (sel[4].selected) {
        body.style.background = "orange";
    }
}