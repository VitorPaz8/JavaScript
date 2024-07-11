    //fazendo o registro do usuario

    //função para perguntas
    function pergunta(frase){
        variavel = prompt(frase);
        return variavel;
    }

    var nome = pergunta(" Olá, qual o seu nome?");

    var idade = pergunta(nome + ", quantos anos você tem?");

    if(idade > 18){
        var cidade = pergunta("Então seu nome é " + nome +" e você tem " + idade + " anos, deixa eu te perguntar, você é da onde?");
        var começar = pergunta("Ok, " + nome + " você gostaria de se registrar na nossa loja de " + cidade + "? (Sim/Não)")
        
        começar = começar.toLowerCase();

        if(começar == "sim" || começar == "ss" || começar == 's'){
            var cpf = pergunta("Ok " + nome + ", vamos começar, insira o seu CPF:");
            var telefone = pergunta("Certo " + nome + ", agora o seu numero de telefone:");
            var senha = pergunta("Beleza, agora o ultimo passo " + nome + ", insira uma senha forte: (numeros, carecteres, e letras)");
            alert("Parabeenss " + nome + "!!!  Agora já podemos clonar seus dados e vende-los para pessoas interessadas aeeeeee!!!! (brincadeira jamais fariamos isso hehehe)");
        }
        else{
            alert(nome + "... já sabemos demais sobre você, podemos e vamos te fazer de laranja hehehe (brincadeira)")
        }
        
    }else{
        alert("Então " + nome +", você é menor de idade, não podemos prosseguir com essa conversa, até mais!!");
    }