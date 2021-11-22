(async () => {

    const database = require('./db');
    const Nomes = require('./funcionarios');
    await database.sync();

    const ListaFuncionarios = await Nomes.create({
        nome:'enderson',
        sobrenome:'barcelos',
        setorTrabalho:'back-end',
        numeroId:'4444'

    })

    console.log(ListaFuncionarios);

    const Lista = await Nomes.findALL();
    console.log(Lista);

})();
