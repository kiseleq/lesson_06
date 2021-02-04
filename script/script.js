
const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const getNum = function(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  randomNum = getNum();
  console.log(randomNum);


let num;
console.log('Угадай число от 1 до 100');

const guess = function() {
   
    num = +prompt('Введите число');
    if (num == 0) {
        console.log('Игра окончена');
        return ;
    }
    else if (!isNumber(num)) {
        return  guess();
    }
    else if (num > randomNum) {
        console.log('Загаданное число меньше');
        return guess();
    }
    else if (num < randomNum) {
        console.log('Загаданное число больше');
        return guess();
    }
    else if (num == randomNum) {
        console.log('Поздравляю, Вы угадали!!!');
        return ;
    }
    
};

guess();
