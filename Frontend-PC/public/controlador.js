const UsuarioAlmacenado = JSON.parse(localStorage.getItem("motorista"));
const nombreM = UsuarioAlmacenado.nombre;
var ordenes=[];
function generarcontenido(){
document.getElementById('cuerpo').innerHTML+=`


<div class="fondoR">
<div class="contenido_pag1 "onclick=""  id="contendor_1"> 
<h3>Hola</h3>
<h3>${nombreM}</h3>
</div>
<div class="contenido_pag1" onclick="generarordenes()"id="contendor_2">
<h5>Pedidos Disponibles</h5>
</div>
<div class="contenido_pag1" onclick="generarpagFinanzas()"id="contendor_3">
<h5>Finanzas</h5>
</div>
<div class="contenido_pag1" onclick="generarpag_factura()"id="contendor_4">
<h5>Facturacion</h5>
</div>

         
    </div> 
`;




}
function generarPD(){
document.getElementById('imgfondo').style.backgroundImage= "url(/public/assets/UI/fondo_2.jpg)";
document.getElementById('cuerpo').innerHTML='';
document.getElementById('cuerpo').innerHTML=`


<div class="fondoR_2">
<div class="contenido_pag2">
    <img src="/public/assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
    <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
    <div class="Contenedor_button">
        <button class="button_pag2" style="background-color:rgba(133, 68, 143, 1) ;">Tomar Pedido</button>
        <button class="button_pag2" style="background-color: rgba(14, 41, 137, 0.6);" onclick="generarpag_PDmap()">Ver Ubicacion</button> 
    </div>
</div>
<div class="contenido_pag2">
    <img src="/public/assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
    <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
    <div class="Contenedor_button">
        <button class="button_pag2" style="background-color:rgba(133, 68, 143, 1) ;">Tomar Pedido</button>
        <button class="button_pag2" style="background-color: rgba(14, 41, 137, 0.6);" onclick="generarpag_PDmap()">Ver Ubicacion</button> 
    </div>
</div>
<div class="contenido_pag2">
    <img src="/public/assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
    <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
    <div class="Contenedor_button" >
        <button class="button_pag2" style="background-color:rgba(133, 68, 143, 1) ;">Tomar Pedido</button>
        <button class="button_pag2" style="background-color: rgba(14, 41, 137, 0.6);" onclick="generarpag_PDmap()">Ver Ubicacion</button> 
    </div>
</div>
<div class="contenido_pag2">
    <img src="/public/assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
    <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
    <div class="Contenedor_button">
        <button class="button_pag2" style="background-color:rgba(133, 68, 143, 1) ;">Tomar Pedido</button>
        <button class="button_pag2" style="background-color: rgba(14, 41, 137, 0.6);" onclick="generarpag_PDmap()">Ver Ubicacion</button> 
    </div>
</div>
</div>



`;


}
function generarpagFinanzas(orden){
   
    document.getElementById('imgfondo').style.backgroundImage= "url(assets/UI/fondo_3.jpg)";
    document.getElementById('cuerpo').innerHTML='';
    document.getElementById('cuerpo').innerHTML=`
    <div style="background-color:rgba(203, 108, 230, 0.57); border-radius: 25px; width: 200px; color: white; " ><h3 style="margin-left: 60px;">Finanzas</h3></div>
    <div class="fondoR_2">
        <div class="contenido_pag2">
            <img src="/public/assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
            <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
            <div class="Contenedor_button">
                <button class="button_pag2" style="background-color:rgba(19, 239, 0, 1) ;">+(total*25%)</button>
                 
            </div>
        </div>
        <div class="contenido_pag2">
            <img src="/public/assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
            <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
            <div class="Contenedor_button">
                <button class="button_pag2" style="background-color:rgba(19, 239, 0, 1);"> +(total*25%)</button>
                 
            </div>
        </div>
        <div class="contenido_pag2">
            <img src="/public/assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
            <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
            <div class="Contenedor_button" >
                <button class="button_pag2" style="background-color:rgba(19, 239, 0, 1) ;">+(total*25%)</button>
                 
            </div>
        </div>
        <div class="contenido_pag2">
            <img src="/public/assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
            <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
            <div class="Contenedor_button">
                <button class="button_pag2" style="background-color:rgba(19, 239, 0, 1) ;">+(total*25%)</button>
                 
            </div>
        </div>
    </div>
    
    
    `;

}
function generarpag_factura(){
    document.getElementById('imgfondo').style.backgroundImage= "url(/public/assets/UI/fondo_3.jpg)";
    document.getElementById('cuerpo').innerHTML='';
    document.getElementById('cuerpo').innerHTML=`
    <div style="background-color: rgba(203, 108, 230, 0.57); border-radius: 30px; width: 150px;"><h3 style="margin-left: 30px; color: white;">Facturacion</h3></div>
    <div class="fondoR_3">
            
        <div id="Contenido_fac">
    
         
            <div class="logotipo">
                <img src="/public/assets/Imagenes/Logo (3).png" style="width: 60px;height: 60px;" alt="">
                <h3>PixelCrafters</h3>
                <h5>xx/xx/xxx</h5>
            </div>
            <div id="info_Fac">
    
                <input type="text"  placeholder="Nombre">
                <input type="text"  placeholder="Direccion">
                <input type="text"  placeholder="telefono">
                <input type="text"  placeholder="Email">
                <input type="text"  placeholder="Numero de orden">
            </div>
            <div id="tabla">
                <table>
                    <!-- Primera fila -->
                    <tr>
                        <td>Producto</td>
                        <td>Cantidad</td>
                        <td>Precio</td>
                        <td>Importe</td>
                    </tr>
                    <!-- Segunda fila -->
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <!-- Tercera fila -->
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <!-- Cuarta fila -->
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <!-- Quinta fila -->
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>   
                    <!-- Secta fila -->
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>             
                </table>
            </div>
            
        
            <div id="total">
                <input type="password"  placeholder="Subtotal">
                <input type="password"  placeholder="ISV">
                <input type="password"  placeholder="Total">
            </div>
            
            
      </div>              
            
    </div>  
            
    
        </div>
        
    
    `;

}
function generarpag_Listado(indice){
    var orden=ordenes[indice];
    console.log(orden);
    console.log(UsuarioAlmacenado);
    fetch('http://localhost:3000/motoristas/',{
        method:'GET',
        headers:{
            'Content-type':'application/json'
        }
    }).then(respuesta=>{
        return respuesta.json();
    })
    //el segundo then es lo que devuelve postman osea la informacion en json para manipularla
    .then(respuesta=>{});
    

}
function generarpag_PDmap(){

document.getElementById('cuerpo').innerHTML+=`
<div class="fixed-div">
        <h4>Mapa</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.9029073682427!2d-87.16558362561544!3d14.082908489542948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fbccab0600cbd%3A0xdf0463f5f53668f!2sUniversidad%20Nacional%20Autonoma%20de%20Honduras%20(UNAH)!5e0!3m2!1ses-419!2shn!4v1691550993033!5m2!1ses-419!2shn" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
`;

}
function menu(){

    document.getElementById('desplejar').innerHTML=`
    <div class="container mt-3">
    <button class="btn btn-primary" data-toggle="collapse" data-target="#miCollapse" id="boton_menu">Mostrar/Ocultar Contenido</button>
    <div id="miCollapse" class="collapse mt-3">
    <div class="fixed-div2">
    <img src="/public/assets/Imagenes/iconos/flecha.png" alt="" style="width: 50px; margin-left: 90%;" onclick="ocultarmenu()">
    <img src="/public/assets/Imagenes/Logo (3).png" style="width: 100px; height: 100px;" alt="">
    <h4 style="font-size: 30px;">PixelCrafters</h4>
    <div id="menu">
        <div  class="opciones_menu"><img src="/public/assets/Imagenes/iconos/casa.png" alt="" style="width: 50px; margin-right: 10px;margin-left: 10px;"> <h3>Inicio</h3> </div>
        <div  class="opciones_menu"><img src="/public/assets/Imagenes/iconos/perfil motorista negro.png" alt="" style="width: 50px; margin-right: 10px;margin-left: 10px;"> <h3>Perfil</h3> </div>
        <div  class="opciones_menu"><img src="/public/assets/Imagenes/iconos/pngwing.com (5).png" alt="" style="width: 50px; margin-right: 10px;margin-left: 10px;"> <h3>Pedidos</h3> </div>
        <div  class="opciones_menu"><img src="/public/assets/Imagenes/iconos/finanzas.png" alt="" style="width: 50px; margin-right: 10px;margin-left: 10px;"> <h3>Finanzas</h3> </div>
        <div  class="opciones_menu"><img src="/public/assets/Imagenes/iconos/historial.png" alt="" style="width: 50px; margin-right: 10px;margin-left: 10px;"> <h3>Historial</h3> </div>
        <div  class="opciones_menu"><img src="/public/assets/Imagenes/iconos/llamada.png" alt="" style="width: 50px; margin-right: 10px;margin-left: 10px;"> <h3>Contacto Admin</h3> </div>
    
    </div>

</div>
    </div>
</div>

    
    `;
    document.getElementById('miCollapse').style.display='fixed';
}
function ocultarmenu(){

    document.getElementById('miCollapse').style.display='none';
    document.getElementById('boton_menu').style.display='none';

}
function generarordenes(){
    
    fetch('http://localhost:3000/ordenes/',{
        method:'GET',
        headers:{
            'Content-type':'application/json'
        }
    }).then(respuesta=>{
        return respuesta.json();
    })
    //el segundo then es lo que devuelve postman osea la informacion en json para manipularla
    .then(respuesta=>{
        //aqui es donde va toda la logica no en otra parte 
        ordenes=respuesta;
        console.log('esta funcionando el bakend');
        //renderizar aqui si va tener la info
        renderizarordenes();

    }).catch(error=>{
        console.log(error);
    })
    const renderizarordenes= ()=>{
        //usar el arreglo aqui, siempre y cuando se llame en el segundo then:
        document.getElementById('imgfondo').style.backgroundImage= "url(/public/assets/UI/fondo_2.jpg)";
        document.getElementById('cuerpo').innerHTML='';
        document.getElementById('cuerpo').innerHTML='';
       
        
        
        
        ordenes.forEach((app, i) => {
            
           
            document.getElementById('cuerpo').innerHTML+=`
                <h5 style="color:White">Orden ${i+1}</h5>
            <div class="fondoR_2"  >
                   <div id="fondo${i}"></div>
            
                    </div>
                    <div class="Contenedor_button">
                    <button class="button_pag2" style="background-color:rgba(133, 68, 143, 1) ;"onclick="generarpag_Listado(${i})">Tomar Pedido</button>
                    <button class="button_pag2" style="background-color: rgba(14, 41, 137, 0.6);" onclick="generarpag_PDmap()">Ver Ubicacion</button> 
                </div>
            `;
            
            generarproductos(app.Productos,i);
          
        



        });
    }
 function generarproductos(Productos,i){
        Productos.forEach((app,j)=>{
            document.getElementById(`fondo${i}`).innerHTML+=`
            

            
        
            <div class="contenido_pag2">
                <img src="${app.imagen_producto}"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
                <p style="color: black;">${app.nombre_producto}<br> ${app.descripcion}</p>
                
            </div>
            
            
            `
        })

    }
    
}
generarcontenido();
