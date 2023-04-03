console.clear();
//Namu darbas
// Kintamieji
//1.1
console.log('\r\nDarbas su kitamaisiais, uzduotis 1\r\n')

const skaicius1 = 9;
console.log('Skaicius pirmas:' + skaicius1);

const skaicius2 = 7;
console.log('Skaicius antras:' + skaicius2);

const skaicius3 = 956;
console.log('Skaicius trecias:' + skaicius3);

//1.2
console.log('\r\nDarbas su kitamaisiais, uzduotis 2\r\n')

const tekstas1 = 'Lektuvas';
console.log(tekstas1);

const tekstas2 = 'Malunsparnis';
console.log(tekstas2);

const tekstas3 = 'Raketa';
console.log(tekstas3);

//1.3
console.log('\r\n\r\nDarbas su kitamaisiais, uzduotis 3\r\n')
const list1 = [23, 45, 67, 12, 89];
console.log('SARASAS 1: \n\rPirmas narys: ' + list1[0] + ', Antras narys: ' + list1[1] + ', Trecias narys: ' + list1[2] + ', Ketvirtas narys: ' + list1[3] + ', Penktas narys: ' + list1[4]);

const list2 = [-23, 34, -233, 13.45, -1];
console.log('SARASAS 2: \n\rPirmas narys: ' + list2[0] + ', Antras narys: ' + list2[1] + ', Trecias narys: ' + list2[2] + ', Ketvirtas narys: ' + list2[3] + ', Penktas narys: ' + list2[4]);

const list3 = [0.23, -0.004, 1230002, -3.14, 4];
console.log('SARASAS 3: \n\rPirmas narys: ' + list3[0] + ', Antras narys: ' + list3[1] + ', Trecias narys: ' + list3[2] + ', Ketvirtas narys: ' + list3[3] + ', Penktas narys: ' + list3[4]);


//1.4

console.log('\r\n\r\nDarbas su kitamaisiais, uzduotis 4\r\n')
const tList1 = ["Tomas", 'Petras',`Jonas`, 'Aldona', "Jolita"];
console.log('Tekstinis SARASAS 1: \n\rPirmas narys: ' + tList1[0] + ', Antras narys: ' + tList1[1] + ', Trecias narys: ' + tList1[2] + ', Ketvirtas narys: ' + tList1[3] + ', Penktas narys: ' + tList1[4]);

const tList2 = ["Vilnius", 'Kaunas',`Klaipeda`, 'Siauliai', "Panevezys"];
console.log('Tekstinis SARASAS 2: \n\rPirmas narys: ' + tList2[0] + ', Antras narys: ' + tList2[1] + ', Trecias narys: ' + tList2[2] + ', Ketvirtas narys: ' + tList2[3] + ', Penktas narys: ' + tList2[4]);

const tList3 = ["Sausis", 'Vasaris',`Kovas`, 'Balandis', "Geguze"];
console.log('Tekstinis SARASAS 2: \n\rPirmas narys: ' + tList3[0] + ', Antras narys: ' + tList3[1] + ', Trecias narys: ' + tList3[2] + ', Ketvirtas narys: ' + tList3[3] + ', Penktas narys: ' + tList3[4]);


//2.1

console.log('\r\n\r\nVeiksmai su kitamaisiais, uzduotis 1\r\n');
const sum = skaicius1 + skaicius2 + skaicius3;
console.log('Kintamuju suma:' + sum);

console.log('\r\n\r\nVeiksmai su kitamaisiais, uzduotis 2\r\n');
const sakinys = (tekstas1 + ' ' + tekstas2 + ' ' + tekstas3);
console.log(sakinys);

//2.3
console.log('\r\n\r\nVeiksmai su kitamaisiais, uzduotis 3\r\n');
//alternuojanti eilute
const alt1 = list1[0] - list1[1] + list1[2] - list1[3] + list1[4];
console.log(alt1);

const alt2 = list2[0] - list2[1] + list2[2] - list2[3] + list2[4];
console.log(alt2);

const alt3 = list3[0] - list3[1] + list3[2] - list3[3] + list3[4];
console.log(alt3);

//2.4
console.log('\r\n\r\nVeiksmai su kitamaisiais, uzduotis 4\r\n');

const sakinys1 = tList1[0] + ', ' + tList1[1] + ', ' + tList1[2] + ', ' + tList1[3] + ', ' + tList1[4];
console.log(sakinys1);

const sakinys2 = tList2[0] + ', ' + tList2[1] + ', ' + tList2[2] + ', ' + tList2[3] + ', ' + tList2[4];
console.log(sakinys2);

const sakinys3 = tList3[0] + ', ' + tList3[1] + ', ' + tList3[2] + ', ' + tList3[3] + ', ' + tList3[4];
console.log(sakinys3);

