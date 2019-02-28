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
    })
}

function looping2() {
    $('h1').each(() => {
        let isi = $(this).text()
        console.log();
    })
}