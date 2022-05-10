            var encriptar = document.querySelector (".entradatexto");
            var buttonEncriptar = document.querySelector (".botaoc");
            var buttonDescriptar = document.querySelector (".botaode"); 
            var resultado = document.querySelector (".saidatexto");
            var copiar = document.querySelector (".botaoco"); 
            var regex = /^[a-z\s\0-9\,\.\;\:\?\(\)\-\_\/]+$/;
            var imagem = document.querySelector (".imagem-boneco");
            var textoFinal = document.querySelector (".texto-final");
            encriptar.focus();

            copiar.style.display = "none";
            imagem.style.display = "block";
            textoFinal.style.display = "none";

            function letraMaiusculaAcento (){
                var mensagem = encriptar.value
                if(regex.test(mensagem)){
                texto1()
                }   else{
                    alert("Escreva uma mensagem, somente com letras minusculas e sem acento.");
                    limpaTexto()
                    encriptar.focus()
                    }
            }
    
            function texto1(){       
                   
                var mensagem = encriptar.value;
                
                var novaMensagem1 = mensagem.replaceAll("e", "enter");
                novaMensagem2 = novaMensagem1.replaceAll("i", "imes");
                novaMensagem3 = novaMensagem2.replaceAll("a", "ai");
                novaMensagem4 = novaMensagem3.replaceAll("o","ober");
                novaMensagem5 = novaMensagem4.replaceAll("u", "ufat");        
                        
                resultado.value = novaMensagem5;

                imagem.style.display = 'none';
            textoFinal.style.display = 'block';
            copiar.style.display = "inline";


            
                limpaTexto();
                
                encriptar.focus();
            }
               
            function decodificarTexto (){

                var mensagem = encriptar.value;

                var novaMensagem1 = mensagem.replaceAll("enter","e");
                novaMensagem2 = novaMensagem1.replaceAll("imes", "i");
                novaMensagem3 = novaMensagem2.replaceAll("ai", "a");
                novaMensagem4 = novaMensagem3.replaceAll("ober","o");
                novaMensagem5 = novaMensagem4.replaceAll("ufat", "u");        
                        
                resultado.value = novaMensagem5;

                limpaTexto();
                encriptar.focus();
            }

            function copiarTexto(){
                var textoCriptografado = resultado.value
                navigator.clipboard.writeText(textoCriptografado);
                encriptar.focus();
            } 
            
            function limpaTexto(){
                var reseta = document.querySelector(".entradatexto").value = ""; 
                encriptar.focus();
                return
                
                
            }

            buttonEncriptar.onclick = letraMaiusculaAcento ;

            buttonDescriptar.onclick = decodificarTexto;
            copiar.onclick = copiarTexto;


         