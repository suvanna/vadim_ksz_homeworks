
//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10,
// начиная со степени 1
//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, 
//в которую будет возводиться число 2
//this is how we pow numbers in real life:
//console.log (Math.pow(2, 10));

//below is how we pow numbers to learn interations:
let numbertoPow = Number;
let toPow = Number;
function customPow (numbertoPow, toPow){
//let powResult= 1;
for (i=1; i<=toPow; i++)
{
    console.log ( numbertoPow ** i);
    
}
}
console.log('Task 1*');
customPow (2, 10);
console.log('========= \n');


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, 
// чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться 
// в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile (string_to_multiply, number_of_rows) {
let msg = '';    
for (i=1; i<=number_of_rows; i++)
{   
  msg +=  string_to_multiply.repeat(i) + '\n'
}
return msg;
}
console.log('Task 2*');
console.log(printSmile(';)', 5 ));
console.log('========= \n');

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

function getWordStructureRU(word)
{   if (typeof(word)==='string')
    {  
        let consonants = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];
        let vowels = ['а', 'я', 'у', 'ю', 'о', 'е', 'ё', 'э', 'и', 'ы'];
        let vowelsSum = 0, consonantsSum = 0;
        for (i=0; i<word.length; i++)
            {
                if (consonants.includes(word.toLocaleLowerCase().charAt(i)))
                {
                    consonantsSum += 1;
                }
                else if (vowels.includes(word.toLocaleLowerCase().charAt(i)))
                {
                    vowelsSum += 1;
                }
            }
        msg  = `Слово '${word}' состоит из ${vowelsSum} гласных и ${consonantsSum} согласных букв`;
    }
    else 
    {
        msg = "Введите строковое значение!"
    }
    return msg;
}

function getWordStructureEN(word)
{   if (typeof(word)==='string')
    {
        let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 't', 'v', 'w', 'x', 'z'];
        let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        let vowelsSum = 0, consonantsSum = 0;
        for (i=0; i<word.length; i++)
            {
                if (consonants.includes(word.toLocaleLowerCase().charAt(i)))
                {
                    consonantsSum += 1;
                }
                else if (vowels.includes(word.toLocaleLowerCase().charAt(i)))
                {
                    vowelsSum += 1;
                }
            }
        msg  = `The word '${word}' consists of ${vowelsSum} vowel and ${consonantsSum} consonant letters`;
        
    }
    else 
    {
        msg  = 'Please, enter a string.'
    }

    return msg;
}
console.log('Tasks 3*');
console.log(getWordStructureRU('Привет, друг'));
console.log(getWordStructureEN('Hello, my dear friend'));
console.log(getWordStructureEN('case'));
console.log(getWordStructureEN('Case'));
console.log(getWordStructureEN('Check-list'));
console.log('========= \n');

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

//console.log (7 % 2);
function isPalindrom(word)
{   if (typeof(word)==='string' && isNaN(Number(word)))
    {
        
        if (word.length % 2 === 0)
        {
            let wordPart1 = word.slice (0, word.length / 2 );
            let wordPart2 = word.slice (word.length / 2, word.length);
            let wordPart2Reverted = ''
            // this is to learn iterations:
            for (i = wordPart2.length - 1; i>=0; i--)
            {   
                wordPart2Reverted += wordPart2[i];
            }
            //this code I would use for a real product:
            //wordPart2Reverted = wordPart2.split("").reverse().join("");
            if (wordPart1.toLocaleLowerCase() === wordPart2Reverted.toLocaleLowerCase())
            {
                msg = `Word ${word} is obviously a Palindrom`;
            }            
         } 
        else 
        {
            msg = `The word '${word}' has not an even number of letters and can't be a Palidrom`;
        }   
    }
    else 
    {
        msg  = `'${word}' is not a string. Please, enter a string.`
    }

    return msg;
}
console.log('Tasks 4*');
console.log('Positive checks:');
console.log (isPalindrom('abba'));
console.log (isPalindrom('Abba'));
console.log (isPalindrom('Abbba'));
console.log('\n');
console.log('Negative checks:');
console.log (isPalindrom('1234'));
console.log (isPalindrom(55));
console.log (isPalindrom(null));
console.log (isPalindrom(true));

