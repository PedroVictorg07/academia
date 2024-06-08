class Pessoa {
    // Construtor da classe Pessoa
    constructor(nome, dataNascimento, cpf) {
        this.nome = nome; // Atributo para armazenar o nome da pessoa
        this.dataNascimento = dataNascimento; // Atributo para armazenar a data de nascimento da pessoa
        this.cpf = cpf; // Atributo para armazenar o CPF da pessoa
        this.idade = this.calcularIdade(dataNascimento); // Atributo para armazenar a idade da pessoa, calculada com base na data de nascimento
    }

    validarCPF(cpf){

    }

    calcularIdade(dataNascimento){

    }
}

class Aluno extends Pessoa{

    constructor(nome, dataNascimento, cpf, idade, genero, telefone){
    super(nome, dataNascimento, cpf, idade)
        this.genero = genero; //Atributo para receber o gênero da pessoa
        this.telefone = telefone; //Atributo para receber o telefone
    }

    calcularIdade(dataNascimento){
        let hoje = new Date(); // Obtém a data atual
        let nascimento = new Date(dataNascimento); // Converte a data de nascimento para um objeto Date
        // Verifica se a data de nascimento é válida
        if (isNaN(nascimento.getTime())) {
            return -1; // Retorna -1 se a data de nascimento for inválida
        }
        let idade = hoje.getFullYear() - nascimento.getFullYear(); // Calcula a diferença entre os anos
        let mes = hoje.getMonth() - nascimento.getMonth(); // Calcula a diferença entre os meses
        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) { // Verifica se ainda não fez aniversário neste ano
            idade--; // Se ainda não fez aniversário, subtrai 1 da idade
        }
        return idade; // Retorna a idade calculada
    }
    
        
    validarCpf(cpf){
        cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos do CPF
        if (cpf.length !== 11 || cpf.match(/(\d)\1{10}/)) return false; // Verifica se o CPF possui 11 dígitos e se não é uma sequência repetida
        let soma = 0;
        for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i); // Calcula a soma dos dígitos do CPF
        let resto = 11 - (soma % 11); // Calcula o primeiro dígito verificador
        if (resto === 10 || resto === 11) resto = 0; // Se o resto for 10 ou 11, o dígito verificador é 0
        if (resto !== parseInt(cpf.charAt(9))) return false; // Verifica se o primeiro dígito verificador é válido
        soma = 0;
        for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i); // Calcula novamente a soma dos dígitos do CPF
        resto = 11 - (soma % 11); // Calcula o segundo dígito verificador
        if (resto === 10 || resto === 11) resto = 0; // Se o resto for 10 ou 11, o dígito verificador é 0
        if (resto !== parseInt(cpf.charAt(10))) return false; // Verifica se o segundo dígito verificador é válido
        return true; // Retorna verdadeiro 

    }        
}

function CadastroAluno(){
    let nome = document.getElementById("Nome").value;
    let dataNascimento = document.getElementById("DataNascimento").value;
    let cpf = document.getElementById("CPF").value;
    let genero = document.getElementById("genero").value;
    let telefone = document.getElementById("Telefone").value;

    if(nome === '' || dataNascimento === '' || cpf === '' || genero === '' || telefone === ''){
        alert("Preencha todos os campos")
    } else {
        let aluno = new Aluno(nome, dataNascimento, cpf, genero, telefone);
        if (!aluno.validarCPF(cpf)) { // Verifica se o CPF fornecido é inválido
            alert("CPF inválido"); // Exibe um alerta se o CPF não for válido
            return; // Retorna para encerrar a função
        }
        if (professor.idade <= 12 || professor.idade >= 120) { // Verifica se a idade está dentro do intervalo aceitável
            alert("Você deve está na idade adequada (entre 12 e 120)"); // Exibe um alerta se a idade não estiver dentro do intervalo aceitável
            return; // Retorna para encerrar a função
        }
        alert("Parabéns, Você foi contratado para fazer parte da nossa equipe"); // Exibe a idade calculada
    }
}