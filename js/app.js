function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    
    let preco = quantidade.value * valorUnitario;
    
    
    //calcular o preço, o subtotal
    //adicionar no carrinho
    //atualizar o valor total
}

function limpar() {

}