let selectedCar = "";

function openForm(car){

    selectedCar = car;

    document.getElementById("carName").innerHTML = car;

    document.getElementById("popup").style.display = "flex";

}

function sendWhatsapp(){

    let nom = document.getElementById("nom").value;

    let prenom = document.getElementById("prenom").value;

    let wilaya = document.getElementById("wilaya").value;

    let phone = document.getElementById("phone").value;

    if(nom=="" || prenom=="" || wilaya=="" || phone==""){

        alert("يرجى ملء جميع الخانات");

        return;

    }

    let message =
`🚗 طلب سيارة جديد

السيارة : ${selectedCar}

👤 الاسم : ${nom}

👤 اللقب : ${prenom}

📍 الولاية : ${wilaya}

📞 رقم الهاتف : ${phone}`;

    let url =
"https://wa.me/213541707871?text="+encodeURIComponent(message);

    window.open(url,"_blank");

}
