let Saldo = prompt('Insira seu saldo inicial');
const ValorProduto = 50

Saldo = parseInt(Saldo)

if (Saldo > 50) {
    alert(`A compra foi realizada com sucesso! Seu saldo atual é de ${Saldo - ValorProduto}`)
}
else if (Saldo < 50) {
    alert('Saldo insuficiente')
}
else {
    alert('A compra foi relizada com sucesso!')
}