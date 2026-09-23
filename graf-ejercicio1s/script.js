/* ==========================================
   ELEMENTOS DEL DOM
========================================== */

const image = document.getElementById("image");

const verySmallBtn = document.getElementById("verySmallBtn");
const smallBtn = document.getElementById("smallBtn");
const mediumBtn = document.getElementById("mediumBtn");
const largeBtn = document.getElementById("largeBtn");
const veryLargeBtn = document.getElementById("veryLargeBtn");

const sizeLabel = document.getElementById("sizeLabel");

const currentDate = document.getElementById("currentDate");
const currentYear = document.getElementById("currentYear");


/* ==========================================
   TAMAÑOS
========================================== */

const sizes = {

    verySmall: {
        width: "100px",
        height: "100px",
        name: "Muy Pequeño"
    },

    small: {
        width: "150px",
        height: "150px",
        name: "Pequeño"
    },

    medium: {
        width: "300px",
        height: "300px",
        name: "Mediano"
    },

    large: {
        width: "450px",
        height: "450px",
        name: "Grande"
    },

    veryLarge: {
        width: "600px",
        height: "600px",
        name: "Muy Grande"
    }

};


/* ==========================================
   FUNCIÓN PARA CAMBIAR TAMAÑO
========================================== */

function changeImageSize(size, button) {

    image.style.width = sizes[size].width;
    image.style.height = sizes[size].height;

    sizeLabel.textContent = sizes[size].name;


    // Quitar estado activo de todos los botones
    document
        .querySelectorAll(".size-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });


    // Activar el botón seleccionado
    button.classList.add("active");
}


/* ==========================================
   EVENTOS DE LOS BOTONES
========================================== */

verySmallBtn.addEventListener("click", function () {

    changeImageSize(
        "verySmall",
        this
    );

});


smallBtn.addEventListener("click", function () {

    changeImageSize(
        "small",
        this
    );

});


mediumBtn.addEventListener("click", function () {

    changeImageSize(
        "medium",
        this
    );

});


largeBtn.addEventListener("click", function () {

    changeImageSize(
        "large",
        this
    );

});


veryLargeBtn.addEventListener("click", function () {

    changeImageSize(
        "veryLarge",
        this
    );

});


/* ==========================================
   FECHA ACTUAL
========================================== */

function updateDate() {

    const today = new Date();

    const options = {
        day: "2-digit",
        month: "long",
        year: "numeric"
    };


    const formattedDate =
        today.toLocaleDateString(
            "es-MX",
            options
        );


    currentDate.textContent =
        formattedDate;


    currentYear.textContent =
        today.getFullYear();
}


/* ==========================================
   INICIALIZACIÓN
========================================== */

updateDate();