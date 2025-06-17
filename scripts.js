document.addEventListener("DOMContentLoaded", function() {
    const dataEmissao = new Date().toLocaleDateString("pt-BR");
    document.getElementById("data-emissao").textContent = dataEmissao;

    const adicionarProdutoBtn = document.getElementById("adicionar-produto");
    const tabelaProdutos = document.getElementById("tabela-produtos").getElementsByTagName("tbody")[0];
    const valorTotalElement = document.getElementById("valor-total");
    const valorIcmsElement = document.getElementById("valor-icms");
    const valorDescontoElement = document.getElementById("valor-desconto");

    let produtos = [];

    // Função para calcular o total da nota fiscal
    function calcularTotais() {
        let total = 0;
        let icms = 0;
        let desconto = 0;

        produtos.forEach(produto => {
            total += produto.quantidade * produto.precoUnitario;
            icms += produto.quantidade * produto.precoUnitario * 0.18; // ICMS 18%
        });

        desconto = total * 0.05; // Exemplo de desconto de 5%

        valorTotalElement.textContent = total.toFixed(2);
        valorIcmsElement.textContent = icms.toFixed(2);
        valorDescontoElement.textContent = desconto.toFixed(2);
    }

    // Função para atualizar a tabela de produtos
    function atualizarTabela() {
        tabelaProdutos.innerHTML = ""; // Limpar tabela antes de adicionar os novos produtos
        produtos.forEach((produto, index) => {
            const row = tabelaProdutos.insertRow();
            row.insertCell(0).textContent = produto.descricao;
            row.insertCell(1).textContent = produto.quantidade;
            row.insertCell(2).textContent = produto.precoUnitario.toFixed(2);
            row.insertCell(3).textContent = (produto.quantidade * produto.precoUnitario).toFixed(2);
            const removeCell = row.insertCell(4);
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remover";
            removeBtn.addEventListener("click", () => {
                produtos.splice(index, 1);
                atualizarTabela();
                calcularTotais();
            });
            removeCell.appendChild(removeBtn);
        });
    }

    // Função para adicionar um produto
    function adicionarProduto() {
        const descricao = prompt("Digite a descrição do produto:");
        const quantidade = parseInt(prompt("Digite a quantidade do produto:"));
        const precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));

        if (descricao && quantidade > 0 && precoUnitario > 0) {
            produtos.push({ descricao, quantidade, precoUnitario });
            atualizarTabela();
            calcularTotais();
        } else {
            alert("Dados inválidos para o produto.");
        }
    }

    adicionarProdutoBtn.addEventListener("click", adicionarProduto);
});
