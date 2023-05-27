function copiarTexto() {
    const textToCopy = "16988509762";
    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log("Texto copiado com sucesso: " + textToCopy);
        alert("Pix copiado")
    }, error => {
        console.error("Erro ao copiar texto: " + error);
    });      
}
function voltar() {
    window.history.back();
}