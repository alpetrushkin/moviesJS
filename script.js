//*
//**
//***
//****
//*****
//******
//*******
let result = '';
let lenght = 7;
for (let i = 1; i < lenght; i++) {
   for (let j = 0; j < i; j++) {
      result += '*';
   }
   result += '\n';
}
console.log(result);
////////////////////////////////////////////////////////////////

first: for (let i = 0; i < 3; i++) {
   console.log(`Первый уровень: ${i}`);
   for (let j = 0; j < 3; j++) {
      console.log(`Второй уровень: ${j}`)
      for (let k = 0; k < 3; k++) {
         if (k === 2) continue first;
         console.log(`Третий уровень: ${k}`);
      }
   }
}


