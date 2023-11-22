import Table from '../models/dataTable.model.js';

export const tabla = async (req, res) => {

  const {
    tableExclusiveData,
    porcentajeBono,
    bonoAcreditado,
    aportacionesAcumuladasaEdad,
    saldoProyectadoaEdad,
    simulationData,
    title
  } = req.body;

  try {
    const newTable = new Table({
      tableExclusiveData,
      porcentajeBono,
      bonoAcreditado,
      aportacionesAcumuladasaEdad,
      saldoProyectadoaEdad,
      simulationData,
      title
    });

    await newTable.save();
    res.send("Registrando");

  } catch (error) {
    console.log("Error", error)
  }

};