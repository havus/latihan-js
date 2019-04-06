// selector
function startUp() {
    // let wrapper = $('.wrapper');
    // let wrapper2 = $('.wrapper2');
    // wrapper2.append(wrapper.html());
    // let wrapper = $('.wrapper h1:nth-child(3)').html();
}

function looping() {
    let qodr = {
        farhan: 'sekretaris',
        hafidz: 'bendahara',
        khalid: 'santri'
    };

    $.each(qodr, (key, val) => {
        // console.log('key', key);
        // console.log('val', val);
        $('#' + key).text(key + ' adalah ' + val);
    });
}

function looping2() {
    $('h1').each(() => {
        let isi = $(this).text()
        console.log();
    })
}

// dulu sebelum ada let
// self invoking anonymous function
// immediately invoke function expression
// (function () {
//     console.log('test function');
// })();

// skrg di EcmaScript 6 cukup pakai let, jangan var biar sifat hoisting hilang dan sifat variable menjadi block scope
//  block scope di JavaScript tidak menciptakan local scope baru di dalam scope yang ditempati sekarang


// variable luar bisa diakses dari dalam, tapi luar tidak bisa mengakses dalam (blockscope)
// let i = 99;

// function coba() {
//     console.log(i);
// }
// coba();

// const tidak bisa diganti full, tapi tetap bisa dirubah, seperti object yg diganti salah satu, atau array yg di push 



// Statement for in
// var obj = [{
//         'name': 'aku'
//     },
//     {
//         'name': 'kamu'
//     },
//     {
//         'name': 'dia'
//     }
// ];

// var prop = [];
// for (prop in obj) {
//     console.log("obj." + prop + " = " + obj.name);
//     console.log(prop);
//     console.log(obj.name);
// }
// console.log('oke');

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"


let obj = [{
        "nama": "Andi",
        "kelas": "2",
        "jurusan": "Teknik Industri",
        "skill": "Mantap"
    },
    {
        "nama": "Xmod",
        "kelas": "10",
        "jurusan": "Teknik Perikanan",
        "skill": "Mantul"
    },
    {
        "nama": "Indro",
        "kelas": "5",
        "jurusan": "Teknik Kedokteran",
        "skill": "Tangguh"
    },
    {
        "nama": "Budi",
        "kelas": "7",
        "jurusan": "Teknik Perpustakaan",
        "skill": "Emezing"
    },
    {
        "nama": "John Doe",
        "kelas": "0",
        "jurusan": "Teknik Pasaran",
        "skill": "Newbie"
    }
];


let result = "";
obj.forEach(data =>
    result += `<tr>
        <td>${data.nama}</td>
        <td>${data.kelas}</td>
        <td>${data.jurusan}</td>
        <td>${data.skill}</td>
    </tr>`
)

$('tbody').html(result);


// let tabs = ['aku', 'kamu', 'dia', 'mereka', 'kelompok'];

// for (index in tabs) {
//     console.log(tabs[parseInt(index)]);
// }

var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    return a - b
});

// console.log(points);