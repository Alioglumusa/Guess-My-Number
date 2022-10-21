'use strict';

// console.log(document.querySelector(".message").textContent)

// document.querySelector(".message").
//     textContent = "Doğru Sayı"

// console.log(document.querySelector(".message").textContent)

// document.querySelector(".number").textContent = "👁"
// document.querySelector(".label-score").textContent = "💯 Sayı: "

// console.log(document.querySelector(".guess").value) // input değerini getiririz

// document.querySelector(".guess").value = 0 // input değerine atarız


let gizliNumara = Math.trunc(Math.random() * 20) + 1
let puan = 20
let yüksekPuan = 0
const ekranMesajı = function (mesaj) {
    document.querySelector(".message").textContent = mesaj
}

document.querySelector(".check").addEventListener("click",
function () {
    const tahmin = Number(document.querySelector(".guess").value)
    console.log(tahmin, typeof tahmin)
    // Tahmin Yok
    if (!tahmin) {
        // document.querySelector(".message").textContent = "Sayı Yok"
        ekranMesajı("Sayı Yok")
        // Oyuncu Kazananır
    } else if (tahmin === gizliNumara) {
        // document.querySelector(".message").
        //     textContent = "Doğru Sayı"
        ekranMesajı("Doğru Sayı")
        document.querySelector(".number").textContent = gizliNumara //random aldıgımız sayıyı ! olarna yere eşitledik
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".first-header").textContent = "Tebrikler Doğru Sayı"
        document.querySelector(".number").style.width = "30rem"
        if (puan > yüksekPuan) {
            yüksekPuan = puan
            document.querySelector(".highscore").textContent = yüksekPuan
        }
        // Tahmin Yanlış Olduğunda
        
    } else if (tahmin !== gizliNumara) {
        if (puan > 1) {
            // document.querySelector(".message").
            //     textContent = tahmin > gizliNumara ? "Çok Yüksek" : "Çok Düşük "
            ekranMesajı(tahmin > gizliNumara ? "Çok Yüksek" : "Çok Düşük ")
            puan--
            document.querySelector(".score").textContent = puan
        } else {
            // document.querySelector(".message").textContent = 
            ekranMesajı("Oyunu kaybettin")
            document.querySelector(".score").textContent = 0
            document.querySelector("body").style.backgroundColor = "#ff0000"
            document.querySelector(".first-header").textContent = "Yeniden Dene"
            document.querySelector(".score").textContent = 0
        }

    }
    // Yüksek Tahmin
    
    // else if (tahmin > gizliNumara) {
    //     if (puan > 0) {
    //         document.querySelector(".message").
    //             textContent = "Çok Yüksek"
    //         puan--
    //         document.querySelector(".score").textContent = puan
    //     } else {
    //         document.querySelector(".message").textContent = "Oyunu kaybettin"
    //         document.querySelector(".score").textContent = 0
    //     }

    // } else if (tahmin < gizliNumara) {
    //     // Düşük Tahmin
    //     if (puan > 0) {
    //         document.querySelector(".message").
    //             textContent = "Çok Küçük"
    //         puan--
    //         document.querySelector(".score").textContent = puan
    //     } else {
    //         document.querySelector(".message").textContent = "Oyunu kaybettin"
    //         document.querySelector("body").style.backgroundColor = "#ff0000"
    //         document.querySelector(".first-header").textContent = "Yeniden Dene"
    //         document.querySelector(".score").textContent = 0
    //     }
    //  }   
})

    document.querySelector(".again").addEventListener("click",
    function () {
        puan = 20
        document.querySelector(".score").textContent = puan
        gizliNumara = Math.trunc(Math.random() * 20) + 1
        document.querySelector(".number").textContent = "?"
        document.querySelector(".guess").value = ""
        // document.querySelector(".message").textContent = "Start guessing..."
        ekranMesajı("Tahmin etmeye başla...")
        document.querySelector(".first-header").textContent = "Gizli Numarayı Tahmin Et"
        document.querySelector("body").style.backgroundColor = "#222" 
      

        
}
)










