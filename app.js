/* Importamos la BD de GunDB */
const Gun = require('gun');

/* Creamos una instancia de la GUN */
const gun = Gun();

/* Creamos un nodo para almacenar los datos de los médicos */
const medicos = gun.get('medicos');

/* Creamos un nodo para almacenar los datos de los pacientes */
const pacientes = gun.get('pacientes');

/* Creamos dos médicos y dos pacientes */
const medico1 = {nombre: 'Dr. Juan Pérez', especialidad: 'Cardiología' };
const medico2 = {nombre: 'Dra. Ana Gómez', especialidad: 'Pediatría' };

const paciente1 = {nombre: 'Carlos López', edad: 30 };
const paciente2 = {nombre: 'María Rodríguez', edad: 25 };

/* Guardamos los médicos y guardamos la referencia del primero para modificarlo luego */
const refMedico1 = medicos.set(medico1);
medicos.set(medico2);

/* Guardamos los pacientes y guardamos la referencia del primero para modificarlo luego */
const refPaciente1 = pacientes.set(paciente1);
pacientes.set(paciente2);

/* Consultamos los médicos con on() (Suscripción continua) */
medicos.map().on((medico) => {
    console.log('Médico:', medico);
});

/* Consultamos los pacientes con once() (Lectura única) */
pacientes.map().once((paciente) => {
    console.log('Paciente:', paciente);
});

setTimeout(() => {
    /* Modificamos la edad del paciente. 
       Al tener once(), la consola NO reaccionará a este cambio. */
    refPaciente1.put({ edad: 40 });
}, 3000);

setTimeout(() => {
    /* Modificamos la especialidad del médico. 
       Al tener on(), la consola SÍ imprimirá los datos actualizados automáticamente. */
    refMedico1.put({ especialidad: 'Cirugía Cardiovascular' });
}, 4000);