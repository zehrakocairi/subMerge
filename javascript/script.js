const merceBtn = document.querySelector(".merge-btn");

function myClickFunction(e) {
  const fileInput = e.target.parentNode.querySelector(".file");
  fileInput.click();
}

function myChangeFunction(e) {
  const fileInput = e.target.parentNode.querySelector(".file");
  const span = e.target.parentNode.querySelector(".custom-text");

  if (fileInput.value) {
    span.innerHTML = fileInput.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  } else {
    span.innerHTML = "No file chosen, yet.";
  }
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fileInputs = document.querySelectorAll(".file");
  const formData = new FormData();

  formData.append("file1", fileInputs[0].files[0]);
  formData.append("file2", fileInputs[1].files[0]);

  fetch(
    "https://genericfuntionapp.azurewebsites.net/api/Process?code=8pteE4lUKE5prHG1B4Js-iykiqrrmUIGK24i9G8C0WpdAzFubCmiTg==&reverse=true",
    {
      method: "POST",
      body: formData,
    }
  )
    .then(function (resp) {
      return resp.blob();
    })
    .then(function (blob) {
      download(blob);
    });
});
