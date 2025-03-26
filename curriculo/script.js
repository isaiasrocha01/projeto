alert('Olá! Para fazer a impressão selecione a Escala 72');

document.getElementById("titulo-educacao").addEventListener("click", function() {
    const educacaoContainer = document.getElementById("educacao-container");
    if (educacaoContainer.style.display === "none" || educacaoContainer.style.display === "") {
        educacaoContainer.style.display = "block";
    } else {
        educacaoContainer.style.display = "none";
    }
});

document.getElementById("titulo-Sobre").addEventListener("click", function() {
    const sobreContainer = document.getElementById("SobreMim-container");
    if (sobreContainer.style.display === "none" || sobreContainer.style.display === "") {
        sobreContainer.style.display = "block";
    } else {
        sobreContainer.style.display = "none";
    }
});

document.getElementById("titulo-Experiência").addEventListener("click", function() {
    const experienciaContainer = document.getElementById("ExperiênciaProfissional-container");
    if (experienciaContainer.style.display === "none" || experienciaContainer.style.display === "") {
        experienciaContainer.style.display = "block";
    } else {
        experienciaContainer.style.display = "none";
    }
});

document.getElementById("titulo-Habilidades").addEventListener("click", function() {
    const habilidadesContainer = document.getElementById("Habilidades-container");
    if (habilidadesContainer.style.display === "none" || habilidadesContainer.style.display === "") {
        habilidadesContainer.style.display = "block";
    } else {
        habilidadesContainer.style.display = "none";
    }
});

document.getElementById("titulo-CursosAdicionais").addEventListener("click", function() {
    const cursosContainer = document.getElementById("CursosAdicionais");
    if (cursosContainer.style.display === "none" || cursosContainer.style.display === "") {
        cursosContainer.style.display = "block";
    } else {
        cursosContainer.style.display = "none";
    }
});

document.getElementById("titulo-HistoricoAcademico").addEventListener("click", function() {
    const historicoAcademicoContainer = document.getElementById("HistoricoAcademico-container");
    if (historicoAcademicoContainer.style.display === "none" || historicoAcademicoContainer.style.display === "") {
        historicoAcademicoContainer.style.display = "block";
    } else {
        historicoAcademicoContainer.style.display = "none";
    }
});