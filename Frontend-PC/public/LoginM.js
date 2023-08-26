const login = async () => {
    const payload = {
      motorista: document.getElementById('Usuario').value,
      contraseña: document.getElementById('Constraseña').value,

    }
    console.log("Login", payload);
    const result = await fetch('http://localhost:3000/motoristas/login', {
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(payload),
      method: 'POST'
    });
    const response = await result.json();
    if (!response || !response.status) {
      alert("fallo al autenticar");
    } else {
      localStorage.setItem("motorista", JSON.stringify(response.motorista));
      //Redireccionanr
      window.location.href = 'http://localhost:8000/driver';
    }
    console.log(response);
  };
