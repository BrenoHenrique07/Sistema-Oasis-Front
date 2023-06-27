import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FrequenciaAdd(){

    const [pacienteID, setPacienteID] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = async (pacienteID) => {
        let url = `http://localhost:3000/frequencias`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "pacienteId": pacienteID
                })
            })

            const newData = await response.json(); 
            setData([...datas, newData]);

            setShowToast(true);
            toast.success('Adicionado com sucesso');
        } catch (err) {
            setShowToast(true);
            toast.success('Erro ao adicionar');
        }
        
    }
      
    return (
        <div>
            {showToast && (
                <ToastContainer />
            )}

            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="input-pacienteID">
                        ID do paciente
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="input-pacienteID" type="text" placeholder="" value={pacienteID} onChange={(e) => setPacienteID(e.target.value)}/>
                    </div>
                </div>
                <div className="mx-auto">
                    <button onClick={() => handleSubmit(pacienteID)} className="rounded-full border-2 border-sky-600 text-sky-600 p-1.5 px-4">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default FrequenciaAdd;