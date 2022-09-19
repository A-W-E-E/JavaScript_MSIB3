function tombol(button){
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 + a2; //rumus

    switch(button){
        case 'tambah':
        if (isNaN(a1) || isNaN(a2)) {
            alert("Format Salah, Harap masukkan angka!!");
        }  
        else{

                var total = a1 + a2; //rumus
                frm.hasil.value =`${a1} + ${a1} = ${total}` ; //penempatan hasil 
            } 
            break;
           

        case 'kurang':
        if (isNaN(a1) || isNaN(a2)) {
            alert("Format Salah, Harap masukkan angka!!");
        }  
        else{

                var total = a1 - a2; //rumus
                frm.hasil.value = `${a1} - ${a1} = ${total}`; //penempatan hasil 
            } 
            break;

        case 'bagi':
        if (isNaN(a1) || isNaN(a2)) {
            alert("Format Salah, Harap masukkan angka!!");
        }  
        else{

                var total = a1 / a2; //rumus
                frm.hasil.value = `${a1} : ${a1} = ${total}`; //penempatan hasil 
            } 
            break;

        case 'kali':
        if (isNaN(a1) || isNaN(a2)) {
            alert("Format Salah, Harap masukkan angka!!");
        }  
        else{

                var total = a1 * a2; //rumus
                frm.hasil.value = `${a1} X ${a1} = ${total}`; //penempatan hasil 
            } 
            break;
        case 'pangkat':
        if (isNaN(a1) || isNaN(a2)) {
            alert("Format Salah, Harap masukkan angka!!");
        }  
        else{

                var total = a1 ** a2; //rumus
                frm.hasil.value = `${a1} pangkat ${a1} = ${total}`; //penempatan hasil 
            } 
            break;
    
}
}
// function kurang(){
//     //tangkap id form
//     var frm = document.getElementById('calcForm');
//     var a1 = parseFloat(frm.angka1.value);
//     var a2 = parseFloat(frm.angka2.value);
    /*
    var tombol = frm.tombol.value;
    switch (tombol) {
        case 'btn_tambah':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            }    
            else {
                var total = a1 + a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;
        case 'btn_kurang':
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            }    
            else {
                var total = a1 - a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } 
            break;
    
        default:
            break;
    }
//     */
//     if (isNaN(a1) || isNaN(a2)) {
//         alert("Harap masukkan angka!!");
//     }    
//     else {
//        var total = a1 - a2; //rumus
//        frm.hasil.value = total; //penempatan hasil 
//     } 
    
// }

// function pangkat(){
//     //tangkap id form
//     var frm = document.getElementById('calcForm');
//     var a1 = parseFloat(frm.angka1.value);
//     var a2 = parseFloat(frm.angka2.value);
//     var total = Math.pow(a1,a2); //rumus
//     frm.hasil.value = total; //penempatan hasil
