
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

    for (let i = 1; i <= 39; i++) {
        document.getElementById('tablas-infopro').innerHTML+=`
        <img class="img-pro" src="/public/assets/Imagenes/${i}.jpg" alt="">
        `;
    }

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