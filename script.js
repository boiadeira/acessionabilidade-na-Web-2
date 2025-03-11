document.addEventListener('DOMContentLoaded', function(){
const aumetaFonteBotao=document.getElementById('aumentar-fonte');

let tamanhoAtualFonte=1;
aumetaFonteBotao.addEventListener('click', function(){
 tamanhoAtualFonte += 0.1;
 document.body.style.fontSize=`${tamanhoAtualFonte}rem`
})
})