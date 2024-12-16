// Script pour filtrer les témoignages
document.addEventListener("DOMContentLoaded", function () {
    // Récupérer tous les éléments de témoignages
    const testimonials = document.querySelectorAll(".testimonial");
    const dropdownLinks = document.querySelectorAll(".dropdown-content a");
    const urlParams = new URLSearchParams(window.location.search);
    const selectedFormation = urlParams.get("formation");

    // Fonction pour afficher les témoignages selon la formation
    function filterTestimonials(formation) {
        testimonials.forEach((testimonial) => {
            if (formation === null || testimonial.dataset.formation === formation) {
                testimonial.style.display = "block";
            } else {
                testimonial.style.display = "none";
            }
        });
    }

    // Filtrer les témoignages selon la formation passée dans l'URL
    filterTestimonials(selectedFormation);

    // Ajouter un événement sur chaque lien du menu déroulant
    dropdownLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Empêcher la navigation
            const formation = link.href.split("?formation=")[1]; // Extraire la formation depuis le lien
            filterTestimonials(formation);
            // Mettre à jour l'URL sans recharger la page
            window.history.pushState({}, "", `?formation=${formation}`);
        });
    });
});
