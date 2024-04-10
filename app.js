function hesablaEskinaslar(məbləğ) {
    const pullar = [
        { amount: 500, image: 'media/500.jpg' },
        { amount: 200, image: 'media/200.jpg' },
        { amount: 100, image: 'media/100.jpg' },
        { amount: 50, image: 'media/50.jpg' },
        { amount: 20, image: 'media/20.jpg' },
        { amount: 10, image: 'media/10.jpg' },
        { amount: 5, image: 'media/5.jpg' },
        { amount: 1, image: 'media/1.jpg' }
    ];
    let qalanMəbləğ = məbləğ;
    let netice = {};
  
    pullar.forEach((pul) => {
      if (qalanMəbləğ >= pul.amount) {
        let say = Math.floor(qalanMəbləğ / pul.amount);
        qalanMəbləğ -= say * pul.amount;
        netice[pul.amount] = { count: say, image: pul.image };
      }
    });
  
    return netice;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#money");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let manat = parseInt(form.querySelector('[name="manat"]').value);
      let netice = hesablaEskinaslar(manat);
      let resultDiv = document.getElementById("result");
      resultDiv.innerHTML = "";
  
      Object.entries(netice).forEach(([amount, info]) => {
        let paper = document.createElement("div");
        
        let img = document.createElement("img");
        img.src = info.image;
        img.alt = `${amount} AZN`;
        paper.appendChild(img);
        
        let text = document.createElement("p");
        text.textContent = `${amount} AZN: ${info.count} x`;
        paper.appendChild(text);
        
        resultDiv.appendChild(paper);
      });
    });
  });