const registro =()=>{
    window.location.href = 'http://localhost:8000/user/registro';
  }

  const login = async () => {
    const payload = {
      email: document.getElementById('email').value,
      contraseña: document.getElementById('constraseña').value,

    }
    console.log("Login", payload);
    const result = await fetch('http://localhost:3000/usuarios/login', {
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(payload),
      method: 'POST'
    });
    const response = await result.json();
    if (!response || !response.status) {
      alert("fallo al autenticar");
    } else {
      localStorage.setItem("usuario", JSON.stringify(response.usuario));
      //Redireccionanr
      window.location.href = 'http://localhost:8000/user/landing';
    }
    console.log(response);
  };

