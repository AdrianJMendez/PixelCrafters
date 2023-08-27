
//Abrir la landing page de Admins
function abrirLadmin(){
    //mostrar elementos
    document.getElementById('menu-admin').style.display='flex';
    document.getElementById('info-admin').style.display='grid';
    //ocultar elementos
    document.getElementById('Motoristas').style.display='none';
    document.getElementById('Empresas').style.display='none';
    document.getElementById('Ordenes').style.display='none';
    document.getElementById('tabla-productos').style.display='none';

    //modificar el boton del menu
    cambiarBtnActivo(0);
}
abrirLadmin();



function abrirInfoM(){
    //mostrar elementos
    document.getElementById('Motoristas').style.display='flex';
    
    //ocultar elementos
    // document.getElementById('menu-admin').style.display='none';
    document.getElementById('info-admin').style.display='none';
    document.getElementById('Empresas').style.display='none';
    document.getElementById('Ordenes').style.display='none';
    document.getElementById('tabla-productos').style.display='none';
    cambiarBtnActivo(2);
}


function abrirInfoE(){
    //mostrar elementos
    document.getElementById('Empresas').style.display='flex';
    
    //ocultar elementos
    // document.getElementById('menu-admin').style.display='none';
    document.getElementById('info-admin').style.display='none';
    document.getElementById('Motoristas').style.display='none';
    document.getElementById('Ordenes').style.display='none';
    document.getElementById('tabla-productos').style.display='none';
    cambiarBtnActivo(3);
}

function abrirInfoO(){
    //mostrar elementos
    document.getElementById('Ordenes').style.display='flex';
    
    //ocultar elementos
    // document.getElementById('menu-admin').style.display='none';
    document.getElementById('info-admin').style.display='none';
    document.getElementById('Motoristas').style.display='none';
    document.getElementById('Empresas').style.display='none';
    document.getElementById('tabla-productos').style.display='none';
    cambiarBtnActivo(1);
    obtenerOrdenes();
}

function abrirInfoOP(){
    //mostrar elementos
    document.getElementById('tabla-productos').style.display='flex';
    
    //ocultar elementos
    // document.getElementById('menu-admin').style.display='none';
    document.getElementById('info-admin').style.display='none';
    document.getElementById('Motoristas').style.display='none';
    document.getElementById('Empresas').style.display='none';
    document.getElementById('Ordenes').style.display='none';
    cambiarBtnActivo(4);

    //renderizar los producto



    // for (let i = 1; i <= 39; i++) {
    //     document.getElementById('tablas-infopro').innerHTML+=`
    //     <img class="img-pro" src="/public/assets/Imagenes/${i}.jpg" alt="">
    //     `;
    // }

}


function cambiarBtnActivo(index) {
    const buttons = document.querySelectorAll('.btn-admin');
    buttons.forEach((button, i) => {
      if (i === index) {
        button.classList.add('btnadmin-active');
      } else {
        button.classList.remove('btnadmin-active');
      }
    });
}

function cambiarNombre(){
    const usuarioJSON = localStorage.getItem("usuario");
    const usuarioObjeto = JSON.parse(usuarioJSON);

    document.getElementById('menu-admin').innerHTML=`
    <i class="fa-solid fa-circle-user fa-2xl" style="color: #ffffff;"></i>
            <h3>${usuarioObjeto.nombre}</h3>
            <div id="bton">
                <button class="btn-admin container-fluid btnadmin-active" onclick="abrirLadmin()">ESTADISTICAS</button>
                <button class="btn-admin container-fluid" onclick="abrirInfoO()">ORDENES</button>
                <button class="btn-admin container-fluid" onclick="abrirInfoM(); obtenerMotoristas()">MOTORISTAS</button>
                <button class="btn-admin container-fluid" onclick="abrirInfoE(); obtenerEmpresas();">EMPRESAS</button>
                <button class="btn-admin container-fluid" onclick="abrirInfoOP()">PRODUCTOS</button>
            </div>
    
    `;
}

cambiarNombre();


function obtenerEmpresas() {
    fetch('http://localhost:3000/empresas')
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          const empresas = data.empresas;  
          const opcionesHTML = empresas.map(empresa => {
            return `<div class="info-empresa" id="panelempresas">
            <div class="parent-infoe">
            <div class="div-e1"> 
                <img src="${empresa.imagen}" alt="" >
                <h7>${empresa.nombre}</h7>

            </div>
            <div class="div-e2"> 
                <h4>Productos</h4>
            </div>
            <div class="div-e3">
                <div class="pre-productos">
                    <div class="each-pro">
                        <img src="/public/assets/Imagenes/33.jpg" alt="">                                   
                    </div>
                </div>
            </div>
            <div class="div-e4"> 
                <div id="" class="pre-productos">
                    <div class="each-pro">
                        <img src="/public/assets/Imagenes/33.jpg" alt="">                               
                    </div>
                </div>
            </div>
        </div>
        </div>`;
          });
  
           document.getElementById('tablas-emp').innerHTML = opcionesHTML;
  
        } else {
          console.log('No se encontraron empresas:', data.message);
        }
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
  }
  
  function obtenerMotoristas() {
    document.getElementById('motoif').innerHTML="<tr><th>Foto</th><th>Nombre</th><th>ID</th><th>Email</th><th>Estado</th></tr>";
    fetch('http://localhost:3000/motoristas/')
      .then(response => response.json())
      .then(data => {
        if (data!=null) {
          const motoristas = data; // Asegúrate de usar la propiedad correcta
          motoristas.forEach(motorista => {
            if(motorista.estado){
              document.getElementById('motoif').innerHTML += `
              <tr>
                  <td><img src="/public/assets/UI/8.svg" alt="Foto 1"></td>
                  <td>${motorista.nombre}</td>
                  <td>${motorista._id}</td>
                  <td>${motorista.email}</td>
                  <td><i class="fa-regular fa-circle-check fa-lg" style="color: #05ff22;"></i></td>
                </tr>
              `;}else{
                document.getElementById('motoif').innerHTML += `
                <tr>
                    <td><img src="/public/assets/UI/8.svg" alt="Foto 1"></td>
                    <td>${motorista.nombre}</td>
                    <td>${motorista._id}</td>
                    <td>${motorista.email}</td>
                    <td><i class="fa-solid fa-circle-check fa-lg" style="color: #000000;"></i></td>
                  </tr>
                `;
                
              }


          });
        } else {
          console.log('No se encontraron motoristas:', data.message);
        }
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
  }



  
  function obtenerMotoristasActivos() {
    let motoristasActivos = [];
  
    return fetch('http://localhost:3000/motoristas/')
      .then(response => response.json())
      .then(data => {
        if (data != null) {
          const motoristas = data;
          motoristas.forEach(motorista => {
            if (motorista.estado) {
              motoristasActivos.push(`<li><a class="dropdown-item" href="#">${motorista.nombre}</a></li>`);
            }
          });
          return motoristasActivos.join(''); // Unir los elementos del arreglo en una cadena
        } else {
          console.log('No se encontraron motoristas:', data.message);
          return ''; // Devolver cadena vacía si no hay datos
        }
      });
  }
  

  async function obtenerOrdenes() {
    document.getElementById('Ordenes').innerHTML = '';
    try {
      const response = await fetch('http://localhost:3000/ordenes');
      const data = await response.json();
  
      if (data != null) {
        const ordenes = data;
        for (const orden of ordenes) {
          const productos = orden.Productos;
          const renderProductos = productos.map(producto => {
            return `
                <div class="nvoPedido">
                <div> <img src="${producto.imagen_producto}" alt=""></div>
                <div>
                    <h6>Usuario: ${orden.idRemitente}</h6><br>
                    
                </div>
                <div>
                    <h6>Nombre:${producto.nombre_producto}</h6><br>
                    <h6>Cantidad: 1</h6><br>
                    <h6>Metodo de pago: Visa</h6>
                </div>
            </div>   
                `;
          });
  
          const motoristaPromise = obtenerMotoristasActivos(); // Obtener la promesa de motoristas activos
          const motoristasActivos = await motoristaPromise; // Esperar la resolución de la promesa
  
          document.getElementById('Ordenes').innerHTML += `
          <div id="tablas-orden">
          <div class="info-orden" id="">
              ${renderProductos}
              <div>
                  <div class="dropdown-center">
                      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Motoristas
                      </button>
                      <ul class="dropdown-menu" id="mActivos">
                        ${motoristasActivos}
                      </ul>
                    </div>
              </div>
          </div>
      </div>
      
      
      
          `;
        }
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  
  function cambiarImagen(event) {
    const archivoSeleccionado = event.target.files[0];
    if (archivoSeleccionado) {
        const imagenDiv = document.getElementById("img-eadd");
        const imagen = imagenDiv.querySelector("img");
        const inputLabel = imagenDiv.querySelector("label");
        const reader = new FileReader();
        reader.onload = function(e) {
            imagen.src = e.target.result;
            imagen.style.display = "block"; // Muestra la imagen
            inputLabel.innerHTML = ''; // Elimina el contenido del label
            inputLabel.appendChild(imagen);
            inputLabel.appendChild(event.target); // Mueve el input debajo de la imagen
        };
        reader.readAsDataURL(archivoSeleccionado);
    }
}

const agregarEmpresa = async () => {
  const payload = {
    
      nombre: document.getElementById('nameInput').value,
      categoria: document.getElementById('catInput').value,
      imagen: document.getElementById('archivo').value,
      fecha_contrato: document.getElementById('contractDateInput').value,
      descripcion: document.getElementById('descriptionInput').value,
    
  }

  const result = await fetch('http://localhost:3000/empresas/agregar', {
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(payload),
    method: 'POST'
  });
  const response = await result.json();
  if (!response || !response.status) {
    alert("fallo al crear nueva empresa");
  } else {
    alert("nueva empresa creada");
  }
  console.log(response);
};


function ObtenerProducto(){
  document.getElementById('tablas-infopro').innerHTML='';

    fetch('http://localhost:3000/productos').then(response => response.json())
    .then(data => {
      if (data.status) {
        const productos = data.productos;  
        const opcionesHTML = productos.map(producto => {
          return `<img class="img-pro" src="${producto.imagen_producto}" alt="">`;
        }).join('');
  
        document.getElementById('tablas-infopro').innerHTML = opcionesHTML;

      } else {
        console.log('No se encontraron productos:', data.message);
      }
    });

}

ObtenerProducto();