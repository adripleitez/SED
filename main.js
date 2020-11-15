
window.onload = function () {
    function ocultarPyT() {
        document.getElementById('tarjetas').style.display = "none";
        document.getElementById('Principal').style.display = "none";
    }

    function ocultarPyC() {
        document.getElementById('cuentas').style.display = "none";
        document.getElementById('Principal').style.display = "none";
    }

    function ocultarCyT() {
        document.getElementById('cuentas').style.display = "none";
        document.getElementById('tarjetas').style.display = "none";
    }

    function mostrarCuentas() {
        ocultarPyT();
        document.getElementById('cuentas').style.display = "block";
    }
    function mostrarTarjetas() {
        ocultarPyC();
        document.getElementById('tarjetas').style.display = "block";
    }

    function mostrarP() {
        ocultarCyT();
        document.getElementById('Principal').style.display = "block";
    }

    const url = 'http://localhost:3000/'

    var register = document.getElementById('register')

    register.addEventListener('submit', (e) => {

        e.preventDefault();

        console.log("entro");

        var name = document.getElementById('name').value
        var email = document.getElementById('email').value
        var dui = document.getElementById('dui').value
        var phone = document.getElementById('tel').value
        var username = document.getElementById('user').value
        var password = document.getElementById('pass').value


        fetch(`${url}addClient`, {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                name: name,
                dui: dui,
                phone: phone,
                email: email,
                password: password
            }),
            headers: {
				'Content-type': 'text/plain',
				Accept: 'application/json'
			}
        })
            .then(response => response.json())
            .then(data => {

            })
            .catch(err => console.log(err))

    })

    /*
    var form = document.getElementById('form')
    
        form.addEventListener('btn accept',function(e){
    
        var name = document.getElementById('name').value
        var email = document.getElementById('email').value
    
    
        fetch($'{url}',{
            method: 'GET',
            body: JSON.stringify({
    
                username : username,
                name : name,
                dui :dui,
                phone : phone,
                email : email,
                password : password,
            }),
            headers:{
                'Content-Type' : 'aplication/json',
            }  
        })
        .then(response => response.json())
        .then(data => {
            
        })
        .catch(err=>console.log(err) )
    
    })*/


}