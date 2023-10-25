import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
function UsuarioIndividual({usuario}){

    const navegar = useNavigate() 
    //funcion para borrar ususario
    function borrarusuario(idusuario) {
        axios
            .delete(`/api/usuario/borrarusuario/${idusuario}`)
            .then((res) => {
                console.log(res.data);
                alert(res.data);
                navegar(0)
            })
            .catch((err) => {
                console.error(err);
            });
    }
    
    return(
        <div className="container">
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                  <ul className='list-group'>
                      <li className='list-group-item'>{usuario.idusuario}</li>
                      <li className='list-group-item'>{usuario.nombre}</li>
                      <li className='list-group-item'>{usuario.email}</li>
                      <li className='list-group-item'>{usuario.telefono}</li>
                  </ul>

                  <Link to={`/editarusuario/${usuario.idusuario}`}><li className='btn btn-success'>Editar</li></Link>
                  &nbsp;
                  <button className='btn btn-danger' onClick={()=>{borrarusuario(usuario.idusuario)}}>borrar</button>
                  <hr className='mt-4'></hr>
                </div>
            </div>
            
        </div>
    )
}

export default UsuarioIndividual