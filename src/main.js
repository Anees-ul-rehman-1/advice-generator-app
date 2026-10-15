const adviceId = document.querySelector('#adviceId');
const advice = document.querySelector('#advice');
const adviceBtn = document.querySelector('#adviceBtn');

const generateAdvice = async () => {
    try {
        adviceBtn.disabled = true;
        adviceBtn.classList.add('animate-spin');
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) throw new Error();

        const res = await response.json()
        adviceId.textContent = `ADVICE #${res.slip.id}`;
        advice.textContent = `"${res.slip.advice}"`;
    } catch {
        adviceId.textContent = 'ADVICE #000';
        advice.textContent = 'Something went wrong please try again'
    } finally {
        adviceBtn.disabled = false;
        adviceBtn.classList.remove('animate-spin');
    }
}

adviceBtn.addEventListener('click', generateAdvice);
generateAdvice();