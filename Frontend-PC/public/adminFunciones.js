
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

    //renderizar los productos
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
                <button class="btn-admin container-fluid" onclick="abrirInfoM()">MOTORISTAS</button>
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
  
