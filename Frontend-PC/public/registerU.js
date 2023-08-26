
const registro = async () => {
    const payload = {
      email: document.getElementById('email').value,
      contraseña: document.getElementById('constraseña').value,
      nombre: document.getElementById('nombre').value
    }
    console.log("Login", payload);
    const result = await fetch('http://localhost:3000/usuarios/register', {
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(payload),
      method: 'POST'
    });
    const response = await result.json();
    if (!response || !response.status) {
      alert("fallo al crear");
    } else {
      localStorage.setItem("usuario", JSON.stringify(response.usuario));
      //Redireccionanr
      window.location.href = 'http://localhost:8000/user/landing';
    }
    console.log(response);
  };

const login =()=>{
  window.location.href = 'http://localhost:8000/user/login';
}