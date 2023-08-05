function generarcontenido(){
document.getElementById('cuerpo').innerHTML+=`


<div class="fondoR">
<div class="contenido_pag1 "onclick=""  id="contendor_1"> 
<h3>Bienvenido</h3>
<h3>Nombre del motorista</h3>
</div>
<div class="contenido_pag1" onclick="generarPD()"id="contendor_2">
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
document.getElementById('imgfondo').style.backgroundImage= "url(assets/UI/fondo_2.jpg)";
document.getElementById('cuerpo').innerHTML='';
document.getElementById('cuerpo').innerHTML=`


<div class="fondoR_2">
<div class="contenido_pag2">
    <img src="assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
    <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
    <div class="Contenedor_button">
        <button class="button_pag2" style="background-color:rgba(133, 68, 143, 1) ;">Tomar Pedido</button>
        <button class="button_pag2" style="background-color: rgba(14, 41, 137, 0.6);">Ver Ubicacion</button> 
    </div>
</div>
<div class="contenido_pag2">
    <img src="assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
    <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
    <div class="Contenedor_button">
        <button class="button_pag2" style="background-color:rgba(133, 68, 143, 1) ;">Tomar Pedido</button>
        <button class="button_pag2" style="background-color: rgba(14, 41, 137, 0.6);">Ver Ubicacion</button> 
    </div>
</div>
<div class="contenido_pag2">
    <img src="assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
    <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
    <div class="Contenedor_button" >
        <button class="button_pag2" style="background-color:rgba(133, 68, 143, 1) ;">Tomar Pedido</button>
        <button class="button_pag2" style="background-color: rgba(14, 41, 137, 0.6);">Ver Ubicacion</button> 
    </div>
</div>
<div class="contenido_pag2">
    <img src="assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
    <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
    <div class="Contenedor_button">
        <button class="button_pag2" style="background-color:rgba(133, 68, 143, 1) ;">Tomar Pedido</button>
        <button class="button_pag2" style="background-color: rgba(14, 41, 137, 0.6);">Ver Ubicacion</button> 
    </div>
</div>
</div>



`;


}
function generarpagFinanzas(){

    document.getElementById('imgfondo').style.backgroundImage= "url(assets/UI/fondo_3.jpg)";
    document.getElementById('cuerpo').innerHTML='';
    document.getElementById('cuerpo').innerHTML=`
    <div style="background-color:rgba(203, 108, 230, 0.57); border-radius: 25px; width: 200px; color: white; " ><h3 style="margin-left: 60px;">Finanzas</h3></div>
    <div class="fondoR_2">
        <div class="contenido_pag2">
            <img src="assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
            <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
            <div class="Contenedor_button">
                <button class="button_pag2" style="background-color:rgba(19, 239, 0, 1) ;">+(total*25%)</button>
                 
            </div>
        </div>
        <div class="contenido_pag2">
            <img src="assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
            <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
            <div class="Contenedor_button">
                <button class="button_pag2" style="background-color:rgba(19, 239, 0, 1);"> +(total*25%)</button>
                 
            </div>
        </div>
        <div class="contenido_pag2">
            <img src="assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
            <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
            <div class="Contenedor_button" >
                <button class="button_pag2" style="background-color:rgba(19, 239, 0, 1) ;">+(total*25%)</button>
                 
            </div>
        </div>
        <div class="contenido_pag2">
            <img src="assets/Imagenes/11.jpg"  alt="" style="margin-right: 10px;margin-left: 10px; border-radius: 30px;width: 60px; height: 70px;  ">
            <p style="color: black;">Orden #12990 <br>Usuario:Oscar_Estrada<br>Nombre:Taza_Ikea<br>Cantidad:(2)</p>
            <div class="Contenedor_button">
                <button class="button_pag2" style="background-color:rgba(19, 239, 0, 1) ;">+(total*25%)</button>
                 
            </div>
        </div>
    </div>
    
    
    `;

}
function generarpag_factura(){
    document.getElementById('imgfondo').style.backgroundImage= "url(assets/UI/fondo_3.jpg)";
    document.getElementById('cuerpo').innerHTML='';
    document.getElementById('cuerpo').innerHTML=`
    <div style="background-color: rgba(203, 108, 230, 0.57); border-radius: 30px; width: 150px;"><h3 style="margin-left: 30px; color: white;">Facturacion</h3></div>
    <div class="fondoR_3">
            
        <div id="Contenido_fac">
    
         
            <div class="logotipo">
                <img src="assets/Imagenes/Logo (3).png" style="width: 60px;height: 60px;" alt="">
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

generarcontenido();