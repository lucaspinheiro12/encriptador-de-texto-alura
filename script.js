            var encriptar = document.querySelector (".entradatexto");
            var buttonEncriptar = document.querySelector (".botaoc");
            var buttonDescriptar = document.querySelector (".botaode"); 
            var resultado = document.querySelector (".saidatexto");
            var copiar = document.querySelector (".botaoco"); 
            var regex = /^[a-z\s\0-9\,\.\;\:\?\(\)\-\_\/]+$/;
            var imagem = document.querySelector (".imagem-boneco");
            var textoFinal = document.querySelector (".texto-final");
            var nomes = new Map();
                
                nomes.set("e","enter");
                nomes.set("i","imes");
                nomes.set("o","ober");
                nomes.set("a","ai");
                nomes.set("u","ufat");

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

                for(var [key,value] of nomes){
                    mensagem = mensagem.replaceAll(key,value);   
               }                   
                resultado.value = mensagem;

                imagem.style.display = 'none';
                textoFinal.style.display = 'block';
                copiar.style.display = "inline";


            
                limpaTexto();
                
                encriptar.focus();
            }
               
            function decodificarTexto (){
                var mensagem = encriptar.value;
                
                for(var [key,value] of nomes){
                    mensagem = mensagem.replaceAll(value,key);   
               }
                resultado.value = mensagem;

                limpaTexto();
                encriptar.focus();

                imagem.style.display = 'none';
                textoFinal.style.display = 'block';
                copiar.style.display = "inline";
            }

            function copiarTexto(){
                var textoCriptografado = resultado.value
                navigator.clipboard.writeText(textoCriptografado);
                encriptar.focus();

                copiar.style.display = "none";
                imagem.style.display = "block";
                textoFinal.style.display = "none";
            } 
            
            function limpaTexto(){
                var reseta = document.querySelector(".entradatexto").value = ""; 
                encriptar.focus();
                return
                
                
            }

            buttonEncriptar.onclick = letraMaiusculaAcento ;

            buttonDescriptar.onclick = decodificarTexto;
            copiar.onclick = copiarTexto;


         