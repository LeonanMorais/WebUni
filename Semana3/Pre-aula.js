
//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Leonan Dias De Morais - 2110744
//DATA: 30/03/2023

//Bubble Sort:

function bubbleSort(array) {
const n = array.length;
for (let i = 0; i < n - 1; i++) {
for (let j = 0; j < n - i - 1; j++) {
if (array[j] > array[j + 1]) {
const temp = array[j];
array[j] = array[j + 1];
array[j + 1] = temp;
}
}
}
return array;
}

Fatorial:

function fatorial(num) {
if (num === 0 || num === 1) {
return 1;
} else {
return num * fatorial(num - 1);
}
}

Fibonacci:

function fibonacci(num) {
const result = [0, 1];
for (let i = 2; i <= num; i++) {
const prev1 = result[i - 1];
const prev2 = result[i - 2];
result.push(prev1 + prev2);
}
return result.slice(0, num + 1);
}

//Verificar se um número é primo:

function isPrime(num) {
if (num <= 1) {
return false;
}
for (let i = 2; i <= Math.sqrt(num); i++) {
if (num % i === 0) {
return false;
}
}
return true;
}

//Inverter uma string:

function reverseString(str) {
return str.split('').reverse().join('');
}

//Contar o número de palavras em uma string:

function countWords(str) {
return str.trim().split(/\s+/).length;
}

//Calcular média:

function average(numbers) {
const sum = numbers.reduce((total, num) => total + num, 0);
return sum / numbers.length;
}

//Encontrar a palavra mais longa:

function findLongestWord(str) {
const words = str.split(/\s+/);
let longest = '';
for (let i = 0; i < words.length; i++) {
if (words[i].length > longest.length) {
longest = words[i];
}
}
return longest;
}

//Somar todos os números em uma matriz:

function sumMatrix(matrix) {
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
for (let j = 0; j < matrix[i].length; j++) {
sum += matrix[i][j];
}
}
return sum;
}

//Calcular o fatorial de um número usando recursão:

function factorial(num) {
if (num === 0 || num === 1) {
return 1;
} else {
return num * factorial(num - 1);
}
}