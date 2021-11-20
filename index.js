(async () => {

    const database = require('./db');
    const Produto = require('./produto');
    await database.sync();

    const novoProduto = await Produto.create({
        nome:'teclado redragom',
        preco: 300,
        descricao: 'teclado Bacana'

    })

    console.log(novoProduto);

    const produtos = await Produto.findALL();
    console.log(produtos)

    Produto.descricao = 'fiz uma alteracao';
    await produtos.save();

    await produtos.destroy();





})();