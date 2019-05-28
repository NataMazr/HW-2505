let kachok = {
    name: 'Серега',
    weight: '103 kg',
    ant: {
        biceps: 46,
        chest: 130,
    },
    last_year: {
        biceps: 42,
        chest: 124,
        legs: 40,
    },
}

for (let i in kachok) {
    if (typeof kachok[i] === "object") {
        for (let k in kachok.ant) {
            console.log(`ant:это ключ: ${[k]}, значение: ${kachok[i][k]}`);
        }
        for (let j in kachok.last_year) {
            console.log(`last_year: это ключ: ${[j]}, значение: ${kachok[i][j]}`);
        }

    } else {
        console.log(`это ключ: ${[i] }, значение: ${ kachok[i]}`);
    }


}