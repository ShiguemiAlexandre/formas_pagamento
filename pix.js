function copiarTexto() {
    const textToCopy = "b5291e6f-6801-460e-9940-9fb737b0b384";
    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log("Texto copiado com sucesso: " + textToCopy);
    }, error => {
        console.error("Erro ao copiar texto: " + error);
    });      
}
function voltar() {
    window.history.back();
}