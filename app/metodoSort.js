let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdernarPorPreco.addEventListener('click', ordernarLivrosPorPreco)
let ordenado = false

function ordernarLivrosPorPreco(){
    if(ordenado == false){
        let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
        exibirLivros(livrosOrdenados)
        ordenado = true
    }else if (ordenado == true){
        let livrosOrdenados = livros.sort((a, b) => b.preco - a.preco)
        exibirLivros(livrosOrdenados)
        ordenado = false
    }
}