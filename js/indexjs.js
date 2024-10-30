function openPopup() {
    document.getElementById('popup').style.display = 'flex';
    document.body.classList.add("overflow-hidden");
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.body.classList.remove("overflow-hidden");
}
function chooseOption(option) {
    document.querySelector('.choose-btn').textContent = option;
    document.getElementById('popup').style.display = 'none';
    document.body.classList.remove("overflow-hidden");
}
function closePopupOnOutsideClick(event) {
    if (event.target.id === "popup") {
        closePopup();
    }
}

function showFind(){
    document.getElementById('popup-find-all').style.display='flex';
    document.body.classList.add("overflow-hidden");
}
function hideFind(){
    document.getElementById('popup-find-all').style.display='none';
    document.body.classList.remove("overflow-hidden");
}
function closePopupOnOutsideClickFind(event) {
    if (event.target.id === "popup-find-all") {
        document.getElementById('popup-find-all').style.display='none';
        document.body.classList.remove("overflow-hidden");
    }
}

var testEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var email = document.getElementById("Email").value;
function checkEmail(){
    var email = document.getElementById("Email").value;
    if (email == "" || testEmail.test(email) == false){
        document.getElementById('khonghople').style.display='flex';
        document.getElementById('Email').style.border='1px red solid';
    }
    else {
        document.getElementById('khonghople').style.display = 'none';
        document.getElementById('Email').style.border = 'none';
        
        document.getElementById("Email").value = "";
    }
}
function hideAlert(){
    document.getElementById('Email').style.border='0';
    document.getElementById('khongdungdinhdang').style.display='none';
    document.getElementById('khonghople').style.display='none';
}
$(document).ready(function(){
    $('.slide5').owlCarousel({
        loop: true,
        autoplay:true,
        margin: 5,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 5
            },
            600: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    });
    $('.slide3').owlCarousel({
        loop: true,
        autoplay:true,
        margin: 5,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
});