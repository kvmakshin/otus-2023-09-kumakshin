function kolobokAction(character) {
    switch (character) {
        case 'dedushka':
            console.log('Я от дедушки ушел!')
            break
        case 'zayats':
            console.log('Я от зайца ушел!')
            break
        case 'lisa':
            console.log('Меня съели :(')
            break
        default:
            console.log('Я от всех ушел!')   
    }
}

kolobokAction('dedushka')
kolobokAction('zayats')
kolobokAction('lisa')
kolobokAction()



function newYear(character) {
    if (character === 'Дед Мороз') {
        return `${character}! ${character}! ${character}!`;
    } else if (character === 'Снегурочка') {
        return `${character}! ${character}! ${character}!`;
    } else {
        return 'Неизвестный персонаж';
    }
}

const maleCharacter = newYear('Дед Мороз')
const femaleCharacter = newYear('Снегурочка')

console.log(maleCharacter)
console.log(femaleCharacter)


