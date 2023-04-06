import { saveMedico, getAllMedicos, getMedico, deleteMedico, updateMedico } from '../services/medicos.services'


export const saveController = async (req, res) => {
    try {
        const { body } = req;
        const medico = await saveMedico(body);
        res.send("MEDICO AGREGADO: " + medico);
    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getAllController = async (req, res) => {
    try {
        const medicos = await getAllMedicos();
        res.json(medicos);
    } catch (err) {
        res.status(501).send(err.message)
    }
}

export const getByIdController = async (req, res) => {
    try {
        const {id} = req.params
        const medico = await getMedico(id);

        if (!medico)
        return res.status(404).json({
          msgs: 'Medico not found!',
        });

        res.json(medico)
    } catch (err) {
       res.status(501).send(err.message)
    }
}

export const deleteController = async (req, res) => {
    try {
        const {id} = req.params
        const medicoDeleted = await deleteMedico(id)
        res.send("MEDICO ELIMINADO: " + medicoDeleted )
    } catch(err) {
        res.status(501).send(err.message)
    }
}

export const updateController = async (req, res) => {
    try {
        const {id} = req.params 
        const {body} = req
        const medicoToUpdate = await getMedico(id);

        if(!medicoToUpdate){
            res.status(404).json({ message: 'Invalid id' })
          } else {
            const medicoUpdated = await updateMedico(
                        id, 
                        body
                    )
                    res.status(200).send("MEDICO EDITADO: " + medicoUpdated);
          }

    } catch (err) {
        res.status(501).send(err.message)
    }
}
