
const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const getNum = function(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  randomNum = getNum();
  console.log(randomNum);


let num;
alert('Угадай число от 1 до 100');

const guess = function() {
   
    num = prompt('Введите число');
    console.log(num, typeof(num));
    if (num === null) {
        alert('Игра окончена');
        return ;
    }
    else if (!isNumber(num)) {
        return  guess();
    }
    else if (num > randomNum) {
        alert('Загаданное число меньше');
        return guess();
    }
    else if (num < randomNum) {
        alert('Загаданное число больше');
        return guess();
    }
    else if (num == randomNum) {
        alert('Поздравляю, Вы угадали!!!');
        return ;
    }
    
};

guess();
