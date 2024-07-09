//Esta función se manda a llamar cuando se termina de cargar por completo la página
$(document).ready(function () {
  let arreglo = [
    {
      id: 1,
      first_name: "Jose",
      last_name: "Morales",
      email: "jose@gmail.com",
    },
    { id: 2, first_name: "Maria", last_name: "Soto", email: "maria@gmail.com" },
  ];
  // Función para cargar los usuarios desde la API.
  function loadUsers() {
    let users = arreglo; // data es una propiedad del json de la respuesta
    // Se selecciona el cuerpo de la tabla donde se mostrarán los usuarios.
    let userTableBody = $("#user-table-body");
    userTableBody.empty(); // Se vacía la tabla antes de llenarla.

    // Se recorre cada usuario y se añade una fila en la tabla para cada uno.
    users.forEach((user) => {
      userTableBody.append(`
                <tr>
                    <td>${user.id}</td>
                    <td>${user.first_name} ${user.last_name}</td>
                    <td>${user.email}</td>
                    <td>
                        <button class="btn btn-warning btn-sm edit-user-btn" data-id="${user.id}">Editar</button>
                        <button class="btn btn-danger btn-sm delete-user-btn" data-id="${user.id}">Eliminar</button>
                    </td>
                </tr>
            `);
    });
  }

  // Función para mostrar una alerta en la interfaz.
  function showAlert(message, type) {
    // alert container es una sección de html en la cual se pintará un mensaje
    $("#alert-container").html(`
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>(
        `);
    setTimeout(() => {
      $("#alert-container").html("");
    });
  }

  // Evento que se dispara al enviar el formulario para agregar o editar un usuario.
  $("#user-form").submit(function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional.

    let userId = $("#user-id").val(); // ID del usuario (si se está editando).
    let userName = $("#user-name").val().split(" "); // Nombre del usuario.
    let userEmail = $("#user-email").val(); // Email del usuario.

    // Se determina si se trata de agregar (POST) o editar (PUT) un usuario.
    let method = userId ? "PUT" : "POST";
    let url = userId ? `${apiUrl}/${userId}` : apiUrl;

    let last_name = "";
    if (userName.length > 1) {
        for (let i = 1; i < userName.length; i++) {
          last_name += userName[i] + " ";
        }
        last_name = last_name.trim();
    }

    if (method === "POST") {
      let newId = arreglo[arreglo.length - 1].id + 1;
      arreglo.push({
        id: newId,
        first_name: userName[0],
        last_name: last_name || "",
        email: userEmail,
      });
    }else {
        let objeto = {};
        for (let i = 0; i < arreglo.length; i++) {
          if (arreglo[i].id === userId) {
            objeto = arreglo[i];
            break;
          }
        }
        objeto.first_name = userName[0];
        objeto.last_name = last_name;
        objeto.email = userEmail;
    }
    loadUsers();
    showAlert("Usuario guardado exitosamente", "success");
    $("#userModal").modal("hide"); // Se cierra el modal.

  });

  // Evento que se dispara al hacer clic en el botón de editar un usuario.
  $(document).on("click", ".edit-user-btn", function () {
    let userId = $(this).data("id"); // Se obtiene el ID del usuario a editar.
    let objeto = {};
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i].id === userId) {
        objeto = arreglo[i];
        break;
      }
    }

    let user = objeto; // Datos del usuario.
    // Se rellenan los campos del formulario con los datos del usuario.
    $("#user-id").val(user.id);
    $("#user-name").val(`${user.first_name} ${user.last_name}`);
    $("#user-email").val(user.email);
    $("#userModalLabel").text("Editar Usuario"); // Se cambia el título del modal.
    $("#userModal").modal("show"); // Se muestra el modal.

  });

  // Evento que se dispara al hacer clic en el botón de eliminar un usuario.
  $(document).on("click", ".delete-user-btn", function () {
    let userId = $(this).data("id"); // Se obtiene el ID del usuario a eliminar.

    let indice = 0;
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i].id === userId) {
        indice = i;
        break;
      }
    }
    arreglo.splice(indice, 1);

        loadUsers();
        showAlert("Usuario eliminado exitosamente", "success");

  });

  // Evento que se dispara al cerrar el modal.
  $("#userModal").on("hidden.bs.modal", function () {
    $("#user-form")[0].reset(); // Se resetea el formulario.
    $("#user-id").val(""); // Se vacía el campo de ID.
    $("#userModalLabel").text("Agregar Usuario"); // Se cambia el título del modal.
  });

  // Se inicializan los usuarios al cargar la página.
  loadUsers();
});
