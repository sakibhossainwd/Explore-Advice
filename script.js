const loadRandomAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => displayAdvice(data.slip))
}

const displayAdvice = randomAdvice => {
    // console.log(advice);
    const randomadviceContainer = document.getElementById('random-advice');
    randomadviceContainer.innerHTML =`
        <p>Advice: ${randomAdvice.id}</p>
        <h3>${randomAdvice.advice}</h3>
    `
}

loadRandomAdvice();

const loadAdviceId = (adviceId) => {
    const url = `https://api.adviceslip.com/advice/${adviceId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayAdviceId(data.slip))
}

const displayAdviceId = idAdvice => {
    const inputIdField = document.getElementById('input-id');
    const adviceId = inputIdField.value;
    loadAdviceId(adviceId);
    const idAdviceContainer = document.getElementById('id-advice');
    idAdviceContainer.innerHTML= `
        <p class="fs-4">Advice: ${idAdvice.id}</p>
        <h3>${idAdvice.advice}</h3>
    `

}

loadAdviceId('1');