const counters = document.querySelectorAll('.counter');


counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const currentNumber = parseInt(counter.innerText);
        const targetNumber = parseInt(counter.getAttribute('data-target'));

        const increment = targetNumber / 300;

        if (currentNumber < targetNumber) {
            counter.innerText = Math.ceil(currentNumber + increment);
            setTimeout(updateCounter, 1);
        }
    }

    updateCounter();
});