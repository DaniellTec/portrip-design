import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function EditarUsuario() {
    const params = useParams();

    const navegar = useNavigate()

    // Hooks
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    useEffect(() => {
        // Obtener datos del usuario al cargar el componente
        axios
            .post('/api/usuario/obtenerdatausuario', { idusuario: params.idusuario })
            .then((res) => {
                const datausuario = res.data[0];
                setNombre(datausuario.nombre);
                setEmail(datausuario.email);
                setTelefono(datausuario.telefono);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [params.idusuario]);

    // Función para editar el usuario
    function editarUsuario() {
        // Nuevo objeto para actualizar el usuario
        const actualizarUsuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: params.idusuario,
        };

        // Hacer la petición de actualización
        axios
            .post('/api/usuario/actualizausuario', actualizarUsuario)
            .then((res) => {
                console.log(res.data);
                alert(res.data);
                navegar('/')
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className="container">
            <div className="row">
                <h2 className="mt-4">Editar usuario</h2>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">
                            Nombre
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={nombre}
                            onChange={(e) => {
                                setNombre(e.target.value);
                            }}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">
                            Teléfono
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={telefono}
                            onChange={(e) => {
                                setTelefono(e.target.value);
                            }}
                        />
                    </div>

                    <button onClick={editarUsuario} className="btn btn-success">
                        Editar Usuario
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditarUsuario;
