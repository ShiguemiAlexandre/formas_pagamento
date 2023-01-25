function copiarTexto() {
    const textToCopy = "Pix aleatorio";
    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log("Texto copiado com sucesso: " + textToCopy);
    }, error => {
        console.error("Erro ao copiar texto: " + error);
    });      
}
function voltar() {
    window.history.back();
}