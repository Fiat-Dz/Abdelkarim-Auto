let selectedCar = "";

function openForm(car){

    selectedCar = car;

    document.getElementById("carTitle").innerHTML = car;

    document.getElementById("popup").style.display = "flex";

}

function closeForm(){

    document.getElementById("popup").style.display = "none";

}

function sendWhatsapp(){

    let firstname = document.getElementById("firstname").value.trim();

    let lastname = document.getElementById("lastname").value.trim();

    let wilaya = document.getElementById("wilaya").value;

    let phone = document.getElementById("phone").value.trim();

    if(firstname=="" || lastname=="" || wilaya=="" || phone==""){

        alert("يرجى ملء جميع الخانات");

        return;

    }

    let message =
`🚗 طلب شراء سيارة

السيارة : ${selectedCar}

👤 الاسم : ${firstname}

👤 اللقب : ${lastname}

📍 الولاية : ${wilaya}

📞 رقم الهاتف : ${phone}`;

    let whatsapp =
"https://wa.me/213541707871?text=" + encodeURIComponent(message);

    window.open(whatsapp,"_blank");

}
