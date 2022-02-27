const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
    try {
       // try = igual tentar vamos tentar executar o codigo abaixo
        const data = await fetch(BASE_URL);
    // Await aguardando resposta BASE_URL
    const json = await data.json();
    // Await aguardando transforma data para json com o metodo json()
    // OBS: lembrando que os dados de um banco sempre serão retornado com string por isso temos que transforma-los em json
    return json.webpurl;
    }
    catch (e) {
        // Caso ocorra um erro usaremos catch = pegar para  pegar o erro (e) e retornar a mensagem do erro no console abaixo
        console.log(e.message);
    }
};

const loadImg = async () => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();


/* CORREÇÃO PROF

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);

*/