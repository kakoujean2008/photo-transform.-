document.addEventListener("DOMContentLoaded", function () {
  const inputFile = document.querySelector("input[type='file']");
  const previewZone = document.createElement("div");
  previewZone.id = "preview";
  document.body.appendChild(previewZone);

  // Bouton Transformer
  const transformBtn = document.createElement("button");
  transformBtn.textContent = "Transformer";
  transformBtn.style.marginTop = "20px";
  transformBtn.style.padding = "12px 24px";
  transformBtn.style.background = "#FFD700";
  transformBtn.style.color = "black";
  transformBtn.style.fontWeight = "bold";
  transformBtn.style.borderRadius = "8px";
  transformBtn.style.border = "none";
  transformBtn.style.cursor = "pointer";
  transformBtn.style.transition = "transform 0.2s";
  transformBtn.onmouseover = () => transformBtn.style.transform = "scale(1.1)";
  transformBtn.onmouseout = () => transformBtn.style.transform = "scale(1)";
  document.body.appendChild(transformBtn);

  let currentImg = null;

  // Afficher l'image uploadée
  inputFile.addEventListener("change", function () {
    const file = inputFile.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        currentImg = document.createElement("img");
        currentImg.src = e.target.result;
        currentImg.style.width = "250px";
        currentImg.style.borderRadius = "12px";
        currentImg.style.boxShadow = "0 0 15px rgba(255,215,0,0.7)";
        previewZone.innerHTML = "";
        previewZone.appendChild(currentImg);
      };
      reader.readAsDataURL(file);
    }
  });

  // Appliquer un style premium
  transformBtn.addEventListener("click", function () {
    if (currentImg) {
      currentImg.style.filter = "contrast(120%) saturate(120%) drop-shadow(0 0 20px gold)";
    } else {
      alert("Choisis d'abord une photo !");
    }
  });
});