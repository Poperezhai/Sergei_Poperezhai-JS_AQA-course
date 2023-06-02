// Виведіть в консоль числа від 1 до n використовуючи цикл for. (Дано: n = 10)

const n = 10;
for (let i = 1; i <= n; i++) { 
    console.log(i);
}

// Напишіть цикл, який обчислює суму чисел від 1 до n. (Дано: n = 100)

const n = 100;
let sum = 0; {
for (let i = 1; i <= n; i++) { 
        sum+=i
        }
    console.log(sum);
    }

// Використовуючи цикл while, виведіть в консоль числа від n до 1. (Дано: n = 10)

const n = 10;
let i = n;
while (i >= 1) {
  console.log(i)
  i--
}

// Напишіть цикл, який виводить всі парні числа від 1 до n. (Дано: n = 50)

const n = 50;
for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) {
    console.log( i );
    }
  }

// Виведіть в консоль таблицю множення від 1 до n використовуючи вкладені цикли. (Дано: n = 10)

const n = 10;
let output = '';
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    output += ' ' + i * j;
    if (i * j < 10) {
      output += ' ';
    }
  }
  console.log(output);
  output = '';
}

// Обчисліть факторіал числа n, використовуючи цикл. (Дано: n = 7)

const n = 7;
let factorial = 1; {
for (let i = 1; i <= n; i++) { 
        factorial*=i
        }
    console.log(factorial);
    }

// Виведіть перші n чисел послідовності Фібоначчі. (Дано: n = 10)

const n = 10;
let fibon = [0, 1]; 
for (i = 2; i <= n; i ++) {
  fibon[i] = fibon[i-1] + fibon[i-2];
}
console.log(fibon.slice(0,n))


// Виведіть всі прості числа від 1 до n. (Дано: n = 100)

const n = 100;
for (let i = 1; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j < i) {
      break;
    } else if (j === i) {
      console.log(i);
    }
  }
}

// Створіть масив чисел від 1 до n, а потім виведіть тільки ті числа, що діляться на 5 без остачі. (Дано: n = 100)

const n = 100;
let arr = [];
for(i = 1; i <= n; i++) {
  arr.push(i);
}
let arr_5 = 
console.log(arr_5);

const n = 100;
let arr_5 = [];
for (let i = 1; i <= n; i++) {
      if (i % 5 === 0) {
        arr_5.push(i);
      }
    }
    console.log(arr_5);

// Дано масив чисел. Обчисліть суму чисел в цьому масиві. (Дано: масив = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    }
console.log(sum);