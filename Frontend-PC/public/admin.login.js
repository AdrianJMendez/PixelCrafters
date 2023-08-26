

const login = async () => {
    const payload = {
      email: document.getElementById('usuario').value,
      contraseña: document.getElementById('contrasenia').value
    }
    console.log("Login", payload);
    const result = await fetch('http://localhost:3000/administrador/login', {
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(payload),
      method: 'POST'
    });
    const response = await result.json();
    if (!response || !response.status) {
      alert("Usuario/Contraseña incorrecta");
    } else {
      localStorage.setItem("usuario", JSON.stringify(response.usuario));
      //Redireccionanr
      window.location.href = 'http://localhost:8000/admin/landing';
    }
    console.log(response);
  };

