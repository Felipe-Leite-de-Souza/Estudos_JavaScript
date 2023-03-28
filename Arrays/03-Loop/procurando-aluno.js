const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const listaDeALunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeALunosEMedias[0].includes(aluno)) {
        console.log(`O aluno ${aluno} está cadastrado.`)
        
        //const alunos = listaDeALunosEMedias[0];
        //const medias = listaDeALunosEMedias[1];

        const [alunos, medias] = listaDeALunosEMedias;

        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];
        console.log(`O aluno ${aluno} tem a nota média de ${mediaDoAluno}.`);
    } else {
        console.log("Aluno não encontrado!")
    }
}

exibeNomeENota("João");
exibeNomeENota("Juliana");
exibeNomeENota("Pedro");