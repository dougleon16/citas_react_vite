import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-center font-black text-3xl">
            Listado de Pacientes
          </h2>
          <p className="text-lg text-center mt-5 mb-10">
            Administra tus {""}
            <span className="text-indigo-600 text-center font-bold">
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="text-center font-black text-3xl">No hay pacientes</h2>
          <p className="text-lg text-center mt-5 mb-10">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 text-center font-bold">
              y se colocarán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
