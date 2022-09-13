//BOTON VER AMIGOS
$("#boton").click(() => {
  $.get("http://localhost:5000/amigos/", (response) => {
    $("#lista").html("");
    for (const amigo of response) {
      $("#lista").append(`<li>
      ${amigo.name}      
      </li>`);
    }
    $("#spinner").css("display", "none");
  });
});
//BOTON BUSCAR AMIGO
$("#search").click(() => {
  let id = $("#input")[0].value;

  $.get(`http://localhost:5000/amigos/${id}`, (response) => {
    $("#amigo").html(response.name);
  });
});
//BOTON ELIMINAR AMIGO
$("#delete").click(() => {
  let id = $("#inputDelete")[0].value;
  let amigoEliminado;
  $.get(`http://localhost:5000/amigos/${id}`, (response) => {
    $("#success").html(
      `Tu amigo ${response.name} fue eliminado de tu lista de amigos`
    );
  });

  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: "DELETE",
    success: function (result) {
      console.log(result);
    },
  });
});
