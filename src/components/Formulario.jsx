import { useState, useEffect } from "react";
import Error from "./Error";
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  //useEffect cuando pacientes tenga algo
  // Editar el formulario
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  // state error
  const [error, setError] = useState(false);

  //generar id unico
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    //objetoPacientes
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //editando regsitro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //nuevo registro

      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //reiniciando el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h1 className="font-black text-3xl text-center">
        Seguimientes Pacientes
      </h1>

      <p className="text-lg text-center mt-5 mb-10">
        Agrega Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 mb-2 font-bold uppercase"
          >
            Nombre Mascota: {""}
          </label>
          <input
            type="text"
            id="mascota"
            placeholder="Nombre de la Mascota"
            className="w-full border-2 p-2  placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 mb-2 font-bold uppercase"
          >
            Nombre Propietario: {""}
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre del Propietario"
            className="w-full border-2 p-2  placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 mb-2 font-bold uppercase"
          >
            Email: {""}
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Contacto Propietario"
            className="w-full border-2 p-2  placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 mb-2 font-bold uppercase"
          >
            Alta: {""}
          </label>
          <input
            type="date"
            id="alta"
            placeholder="Nombre de la Mascota"
            className="w-full border-2 p-2"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintoma"
            className="block text-gray-700 mb-2 font-bold uppercase"
          >
            Síntomas : {""}
          </label>
          <textarea
            placeholder="Describe los Síntomas"
            id="sintoma"
            className="w-full border-2 p-2  placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          className="bg-indigo-600 text-white uppercase font-bold w-full p-3 rounded-md hover:bg-indigo-700 transition-all cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Formulario;
