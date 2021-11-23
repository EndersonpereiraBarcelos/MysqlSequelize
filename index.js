(async () => {
    const database = require('./db'); //Passando as config do banco de dados
    const Produto = require('./produto');
 
    //passando feedback do funcionamento
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
    
    //Passando os nomes dos "Produtos da loja"
    const resultadoCreate = await Produto.create({
        nome: 'mouse',
        preco: 10,
        descricao: 'Um mouse USB bonitão'
    })

    /*Esta função findAll permite que a gente passe um
    objeto de opções por parâmetro para restringir os
    resultados da nossa consulta também, como mencionado na documentação oficial */

    const produtos = await Produto.findAll();
    console.log(produtos);
    
    //DELETAR POR ID
    Produto.destroy({ where: { id: 1 }}); 

    //UPDATE
    const produto = await Produto.findByPk(1);
    //console.log(produto);
    produto.nome = "Mouse Top";
 
    const resultadoSave = await produto.save();
    console.log(resultadoSave);
})();