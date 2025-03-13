alert('Olá! Para fazer a impressão selecione a Escala 58');
alert('Olá! Para fazer a impressão selecione a Escala 58');
document.getElementById("titulo-educacao").addEventListener("click", function() {
    const educacaoContainer = document.getElementById("educacao-container");
    if (educacaoContainer.style.display === "none" || educacaoContainer.style.display === "") {
        educacaoContainer.style.display = "block";
    } else {
        educacaoContainer.style.display = "none";
    }
});
