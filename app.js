// Importamos la BD de GunDB
const Gun = require('gun');

// Creamos una instancia de la GUN
const gun = Gun();

// Creamos un nodo para almacenar los datos de los médicos
const medicos = gun.get('medicos');

// Creamos un nodo para almacenar los datos de los pacientes
const pacientes = gun.get('pacientes');

// Creamos dos médicos y dos pacientes
const medico1 = {nombre: 'Dr. Juan Pérez', especialidad: 'Cardiología' };
const medico2 = {nombre: 'Dra. Ana Gómez', especialidad: 'Pediatría' };

const paciente1 = {nombre: 'Carlos López', edad: 30 };
const paciente2 = {nombre: 'María Rodríguez', edad: 25 };

// Guardamos los médicos en la lista de médicos
medicos.set(medico1);
medicos.set(medico2);

// Guardamos los pacientes en la lista de pacientes
pacientes.set(paciente1);
pacientes.set(paciente2);

// Consultamos los médicos y pacientes almacenados en la BD y los mostramos por consola
medicos.map().on((medico) => {
    console.log('Médico:', medico);
});

pacientes.map().once((paciente) => {
    console.log('Paciente:', paciente);
});

setTimeout(() => {
    // Añadimos otro paciente después de un tiempo para demostrar la actualización en tiempo real
    const paciente3 = {nombre: 'Luis Martínez', edad: 40 };
    pacientes.set(paciente3);
}, 3000);

setTimeout(() => {
    // Añadimos otro médico después de un tiempo para demostrar la diferencia entre on() y once()
    const medico3 = {nombre: 'Dr. Carlos Sánchez', especialidad: 'Dermatología' };
    medicos.set(medico3);
}, 4000);


