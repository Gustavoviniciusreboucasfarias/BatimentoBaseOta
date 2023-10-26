var originalOtaStatus = document.getElementById("ota-status").innerHTML;
        var uploadInProgress = false;

        // Referências para os elementos do modal
        var modalContainer = document.getElementById("modal-container");

        // Função para exibir o nome dos arquivos selecionados nos botões
        function displaySelectedFileNames() {
            var fileInput = document.querySelector('input[type="file"]');
            var label = fileInput.parentElement;
            var fileName = "";
            for (var i = 0; i < fileInput.files.length; i++) {
                fileName += fileInput.files[i].name;
                if (i < fileInput.files.length - 1) {
                    fileName += ", ";
                }
            }
            label.textContent = "Arquivos: " + fileName;
        }

        // Função para simular o download
        function downloadFile() {
            // Simule o download do arquivo aqui
            alert("Download do arquivo iniciado.");
            // Redirecione para a página de download real ou realize a ação desejada.
        }

        // Função para abrir o modal de confirmação
        function openModal() {
            modalContainer.style.display = "block";
        }

        // Função para fechar o modal de confirmação
        function closeModal() {
            modalContainer.style.display = "none";
        }

        // Função para criar o conteúdo do arquivo
        function criarConteudoArquivo() {
            // Aqui você pode gerar o conteúdo do arquivo, por exemplo, um texto simples.
            var conteudo = "Output Baixado  .";

            return conteudo;
        }

        // Função para iniciar o download
        function iniciarDownload() {
            var conteudo = criarConteudoArquivo();

            // Crie um objeto Blob com o conteúdo do arquivo.
            var blob = new Blob([conteudo], { type: "text/plain" });

            // Crie um objeto URL para o Blob.
            var url = window.URL.createObjectURL(blob);

            // Crie um elemento de link para iniciar o download.
            var link = document.createElement("a");
            link.href = url;
            link.download = "output.csv"; // Nome do arquivo que será baixado.

            // Simule um clique no link para iniciar o download.
            link.click();

            // Libere o objeto URL após o download.
            window.URL.revokeObjectURL(url);
        }
        
    // Função para recarregar a página
    function reloadPage() {
        location.reload();
    }
    
    // Atualize o evento de clique do botão de cancelar
    document.getElementById("cancel-btn").addEventListener("click", reloadPage);

        // Adicione um evento de alteração ao botão de arquivo para exibir os nomes dos arquivos selecionados
        var fileInput = document.querySelector('input[type="file"]');
        fileInput.addEventListener("change", displaySelectedFileNames);

        // Adicione um evento de envio ao formulário para simular o upload
        document.getElementById("upload-form").addEventListener("submit", function (e) {
            e.preventDefault();

            if (!uploadInProgress && fileInput.files.length > 0) {
                uploadInProgress = true;
                // Simulação de upload (substitua por sua lógica real de upload)
                var cancelBtn = document.getElementById("cancel-btn");
                var uploadComplete = document.getElementById("upload-complete");
                var downloadBtn = document.getElementById("download-btn");

                // Ocultar os botões de escolher arquivos
                fileInput.style.display = "none";

                // Esconder o status inicial
                document.getElementById("ota-status").style.display = "none";
                document.getElementById("target-status").style.display = "none";

                // Exibir o status final após o tempo de simulação
                setTimeout(function () {
                    var imgOta = document.querySelector('#ota-status img');
                    imgOta.src = "/img/img-ota-target.png"; // Altere a imagem se necessário
                    document.getElementById("ota-status").innerHTML = 'Status OTA: Upload finalizado!';
                    uploadComplete.style.display = "block";

                    // Mostrar o botão de cancelar e o botão de download
                    cancelBtn.style.display = "inline";
                    downloadBtn.style.display = "inline";

                    // Configurar o link para o download do arquivo
                    downloadBtn.href = ""; // Substitua pela URL correta do script no servidor

                    // Adicionar evento de clique para download
                    downloadBtn.addEventListener("click", downloadFile);
                }, 2000); // Simulação de 2 segundos para o upload (substitua pela sua lógica de upload real)
            }
        });