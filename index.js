document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll(".tabs input[type='radio']");
    const contentItems = document.querySelectorAll(".content-item");

    radios.forEach(radio => {
        radio.addEventListener("change", function () {
            const selectedTab = this.id;

            contentItems.forEach(item => {
                if (item.getAttribute("data-tab") === selectedTab) {
                    item.style.display = "flex";
                    item.classList.add("flex-center"); // Agrega la clase flex-center
                } else {
                    item.style.display = "none";
                    item.classList.remove("flex-center"); // Elimina la clase flex-center de los demás
                }
            });
        });
    });

    document.querySelector(".tabs input[type='radio']:checked").dispatchEvent(new Event("change"));
});
