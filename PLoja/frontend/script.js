
async function remover(id) {
    const confirma = confirm('Deseja realmente remover o produto ?')
    if (confirma){ // quer remover
        await fetch(`http://localhost:3333/product/${id}`, {
            method: 'DELETE'
        })
        .then( resposta => {
            alert(`Produto foi removido com sucesso`)
            consulta()
        })
        .catch(erro => {
            alert(`Problema ao remover`)
        })
    }

}
function editar(name, description, quantity){
    document.getElementById("name").value = name
    document.getElementById("description").value = description
    document.getElementById("quantity").value = quantity
}

async function consulta(){
    let produtos = await fetch('http://localhost:3333/products')
        .then(resposta => {
            return resposta.json()
        })
    let conteudo = ""
    produtos.forEach(produto => {
        conteudo += `<tr> <td> ${produto.name} </td> <td> ${produto.description} </td> <td> ${produto.quantity} </td> <td> ${produto.created_at}</td> <td> <i onClick="remover('${produto.id}')" class="bi bi-trash"> </td> <td> <i onClick="editar('${produto.name}', '${produto.description}', ${produto.quantity})" class="bi bi-pencil"/> </td> </tr>`
    })
    // envia os dados para o HTML
    document.getElementById("tabela").innerHTML = conteudo
}

async function cadastra(){
    let name = document.getElementById("name").value
    let description = document.getElementById("description").value
    let quantity = Number(document.getElementById("quantity").value)

    let produto = {name, description, quantity}

    await fetch('http://localhost:3333/product', { // cadastra no BD
        method: 'POST',
        body: JSON.stringify(produto), // converte objeto JSON em string
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(resposta => alert('Inserção realizada com sucesso'))
    .catch(erro => alert('Problema na inserção'))
    // chama a função consulta
    consulta()
    // limpa os campos
    document.getElementById("name").value = ''
    document.getElementById("description").value = ''
    document.getElementById("quantity").value = ''
}