// Função para abrir a janela com conteúdo dinâmico (Questão 3)
function abrirJanela(titulo, subtitulo, imagem, preco) {

    const janela = document.getElementById("janCuida");

    janela.innerHTML = `
        <h3>${titulo}</h3>
        <h4>${subtitulo}</h4>
        <img src="${imagem}" width="150"><br><br>
        <p><span class="preco">R$ ${preco.toFixed(2)}</span></p>
        <button onclick="fecharJanela()">Fechar</button>
    `;

    janela.style.display = "block";
}

// Função para fechar a janela
function fecharJanela() {
    document.getElementById("janCuida").style.display = "none";
}

// ==========================
// VETOR DE PRODUTOS (Questão 3)
// ==========================
const produtos = [
    {
        marca: "Pedigree",
        sabor: "Carne",
        caracteristica: "10kg",
        imagem: "../Imagens/RaçãoPedigree90.jpg",
        preco: 100
    },   
    {
        marca: "Purina Alpo",
        sabor: "Carne e Frango",
        caracteristica: "10kg",
        imagem: "../Imagens/RaçãoAipo90.jpg",
        preco: 130
    },
    {
        marca: "GranPlus",
        sabor: "Carne e Frango",
        caracteristica: "10kg",
        imagem: "../Imagens/RaçãoGranPlus90.jpg",
        preco: 120
    },
    {
        marca: "JAMBO",
        sabor: "N/A",
        caracteristica: "Osso Silicone",
        imagem: "../Imagens/BrinquedoJambo90.jpg",
        preco: 25
    }
];

// FUNÇÃO PARA MOSTRAR PRODUTO

function mostrarProduto(index) {

    const p = produtos[index];

    // Marca
    document.getElementById("NomeDes").innerHTML = `
        <strong>${p.marca}</strong>
    `;

    // Imagem
    document.getElementById("ImgDes").innerHTML = `
        <img src="${p.imagem}" width="120">
    `;

    // Características + preço
    document.getElementById("PesPrcDes").innerHTML = `
        Sabor: ${p.sabor}<br>
        ${p.caracteristica}<br><br>
        Preço: R$ <span class="preco">${p.preco.toFixed(2)}</span>
    `;
}
// ==========================
// VETOR DE PRODUTOS (Questão 4)
// ==========================
function validarCPF() {

    let cpf = document.getElementById("cpf").value;

    // a) MENOS DE 11 DÍGITOS
    if (cpf.length != 11) {
        alert("CPF tem de ter 11 dígitos!");
        return;
    }

    // b) CARACTERES INVÁLIDOS
    for (let i = 0; i < cpf.length; i++) {
        if (cpf[i] < '0' || cpf[i] > '9') {
            alert("Insira apenas os dígitos, caracter '" + cpf[i] + "' inválido!");
            return;
        }
    }

    // c) DÍGITOS VERIFICADORES

    let identCPF = parseInt(cpf.substring(0, 9));

    function calculaDV(num) {
        let resto = 0, soma = 0;

        for (let i = 2; i < 11; i++) {
            soma += (num % 10) * i;
            num = parseInt(num / 10);
        }

        resto = soma % 11;
        return (resto > 1) ? (11 - resto) : 0;
    }

    let dv1 = calculaDV(identCPF);
    let dv2 = calculaDV(identCPF * 10 + dv1);

    let dvInformado1 = parseInt(cpf[9]);
    let dvInformado2 = parseInt(cpf[10]);

    if (dv1 != dvInformado1 || dv2 != dvInformado2) {
        alert("Dígitos verificadores inválidos!");
        return;
    }

    // CPF válido → não mostra nada
}
// ==========================
// VETOR DE PRODUTOS (Questão 5)
// ==========================

// PREÇOS DOS PRODUTOS
const precos = [
    100, // Pedigree
    130, // Purina Alpo
    120, // GranPlus
    25   // Osso Silicone
];

// FUNÇÃO DO BOTÃO "+"
function adicionarProduto() {

    let combo = document.getElementById("produtos");
    let lista = document.getElementById("lista");
    let valor = document.getElementById("valor");

    // pega índice selecionado
    let index = combo.selectedIndex;

    // nenhum produto selecionado
    if (index <= 0) {
        alert("Nenhum Produto selecionado!");
        return;
    }

    // texto do produto
    let texto = combo.options[index].text;

    // adiciona no textarea
    lista.value += texto + "\n";

    // soma valor
    let total = parseFloat(valor.value);
    total += precos[index - 1]; // -1 porque a primeira opção é "----"

    valor.value = total;

    // volta para padrão
    combo.selectedIndex = 0;
}