//proses Agry : bisa dijalankan di terminal dengan perintah node app/index.js atau mengambil input dari terminal
//Command : show, add, update, delete
//Params : name, age, city
const command =  process.argv [2];
const params = process.argv.slice(3);


switch (command) {
    case 'show':
        console.log('Command Show');
        break;
    case 'add':
        console.log('Command Add');
        break;
    case 'delete':
        console.log('Command Delete');
        break;
    case 'update':
        console.log('Command update');
        break;
    case 'name':
        console.log('Command name');
        break;
    case 'Age':
        console.log('Command age');
        break;

        //membuat default agar mencegah inputan yang tidak sesuai
    default:
        console.log('Masukan Command Yang Benar');
        break;

}
// console.log('Hello World!');