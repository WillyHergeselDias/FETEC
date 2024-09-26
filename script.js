document.addEventListener('DOMContentLoaded', function () {
    // Cada constante armazena o elemento correspondente
    const instructions = document.getElementById('instructions');
    const part1 = document.getElementById('part1');
    const part2 = document.getElementById('part2');
    const result = document.getElementById('result');
    const temperamentDetails = document.getElementById('temperament-details');

    // remover css hidden para tornar o elemento visível em instrucions
    instructions.classList.remove('hidden');

    // evento ao usuário clicar no botão, as instruções são ocultadas e a primeira parte do conteúdo é exibida.
    document.getElementById('start-part1').addEventListener('click', function () {
        instructions.classList.add('hidden');
        part1.classList.remove('hidden');
    });
    
    // ao clicar no elemento 'submit-part1', a primeira parte do conteúdo é ocultada, e a segunda parte é exibida.
    document.getElementById('submit-part1').addEventListener('click', function () {
        part1.classList.add('hidden');
        part2.classList.remove('hidden');
    });
    // segunda parte do teste é exibida
    document.getElementById('submit-part2').addEventListener('click', function () {
        part2.classList.add('hidden');
        result.classList.remove('hidden');
        showResult();
    });
    // teste finalizado
    document.getElementById('finish-test').addEventListener('click', function () {
        alert('Teste finalizado.');
        location.reload();
    });

    function showResult() {
        // Contadores para as respostas da Parte 1 e Parte 2
        let countA1 = 0, countB1 = 0;
        let countA2 = 0, countB2 = 0;

        // Verifica as respostas da Primeira Parte
        for (let i = 1; i <= 19; i++) {
            let answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer && answer.value === 'A') {
                countA1++;
            } else if (answer && answer.value === 'B') {
                countB1++;
            }
        }

        // Verifica as respostas da Segunda Parte
        for (let i = 20; i <= 32; i++) {
            let answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer && answer.value === 'A') {
                countA2++;
            } else if (answer && answer.value === 'B') {
                countB2++;
            }
        }

        // Determina o temperamento
        let temperament = '';

        if (countA1 > countB1 && countA2 > countB2) {
            temperament = "Sanguíneo";
        } else if (countA1 > countB1 && countB2 > countA2) {
            temperament = "Colérico";
        } else if (countB1 > countA1 && countA2 > countB2) {
            temperament = "Fleumático";
        } else if (countB1 > countA1 && countB2 > countA2) {
            temperament = "Melancólico";
        }

        // Exibe o resultado
        switch (temperament) {
            case 'Sanguíneo':
                temperamentDetails.innerHTML = '<p style="color: red; font-size: 75px;">Voce é Sanguíneo.</p> <p style="font-size:60px;">Quente e Úmido</p> <p>Extrovertido e envolvente, voltado para os relacionamentos interpessoais, é comunicativo, dinâmico e otimista, suas emoções são intensas, mas as impressões são passageiras, o que faz com que mude de humor com bastante frequência e as expressões dessa mudança são muito intensas (quando está triste, está muito triste; quando feliz, muito feliz; quando com raiva, com muita raiva, etc), não se apega ao passado e vive muito o presente, o que pode fazer com que busque prazeres instantâneos e momentâneos, por isso, precisa tomar cuidado com a superficialidade, carismático, não falta assunto, faz amizades facilmente.</p>';
                break;
            case 'Colérico':
                temperamentDetails.innerHTML = '<p style="color: orange; font-size: 75px;">Você é Colérico.</p> <p style="font-size:60px;">Quente e Seco</p> <p>Muito prático, voltado para a execução e realização, sua extroversão não é para relacionamentos, mas para a ação, enérgico e determinado, com facilidade enorme para atingir metas e perseguir objetivos, não se preocupa com o que pensam dele, o que importa é o que ele sabe sobre si, Cheio de opiniões e não tem medo de expô-las, considerado gênio forte, as impressões são duradouras nele e, por isso, as lembranças fazem com que ele reviva as emoções, tendo dificuldade em relevar, gosta das coisas do seu jeito, por isso precisa cuidar para não ser controlador.</p>';
                break;
            case 'Melancólico':
                temperamentDetails.innerHTML = '<p style="color: lightblue; font-size: 75px;">Você é Melancólico.</p> <p style="font-size:60px;">Frio e Seco</p> <p>Introvertido, reflexivo e profundo, muito cauteloso em suas ações e planejado, é emocionalmente sensível, sendo afetado pelas circunstâncias por um longo período, gosta de estabilidade, previsibilidade, ordem e compromisso, a lealdade é um de seus pontos mais fortes, além do forte senso de dever e propósito, leva a vida com seriedade e possui valores e princípios muito fortes, não gosta de mudanças não planejadas e, quando acontecem, costuma sofrer até que assimile a mudança, é idealista e perfeccionista, que são qualidades que devem ser observadas, pois em excesso, causam medo de agir, que leva à procrastinação ou à desistência.</p>';
                break;
            case 'Fleumático':
                temperamentDetails.innerHTML = '<p style="color: darkblue; font-size: 75px;";>Você é Fleumático.</p> <p style="font-size:60px;">Frio e Úmido</p> <p>Introvertido, diplomático e de fácil convivência, pode não apreciar mudanças abruptas, mas consegue se adaptar facilmente a diferentes cenários com muita facilidade, possui grande estabilidade emocional, dificilmente atingindo picos de humor muito distintos em um único dia, transmite serenidade em seu jeito de ser, ainda que não se sinta assim por dentro, as impressões também são passageiras nele, mas não significa que sua memória seja curta, a fácil adaptação deve ser observada para que não se torne em estagnação e inércia.</p>';
                break;
            default:
                temperamentDetails.innerHTML = '<p style="font-size: 75px;">Temperamento não identificado.</p>';
                break;
        }
    }
});
