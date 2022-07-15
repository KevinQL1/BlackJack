function newGame() {
  swal
    .fire({
      title: "Ingrese su nombre por favor",
      input: "text",
      confirmButtonText: "OK",
    })
    .then(async (result) => {
      if (result.value != "") {
        await Swal.fire({
          title: `Hola ${result.value}`,
          timer: 5000,
          timerProgressBar: true,
        });
        window.location.href = "/html/gamePage.html";
      } else if (result.value == "") {
        Swal.fire({
          icon: "error",
          title: "Ingrese un nombre porfavor",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
      }
    });
}