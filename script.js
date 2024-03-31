const inputNumber = prompt("Введіть ціле число:");

if (inputNumber === null || inputNumber === "") {
    console.log("Ви скасували дію або ввели порожній рядок.");
} else {

    const parsedInput = parseInt(inputNumber);    // Перевіряємо, чи введено число

    if (isNaN(parsedInput)) {
        console.log("Це не є цілим числом.");
    } else {

        for (let i = 1; i <= 100; i++) {
            if (i * i <= parsedInput) {
                console.log(i);
            }
        }
    }
}




