import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResponsavelAdd(){

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [rg, setRG] = useState('');
    const [pacienteID, setPacienteID] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = async (nome, sobrenome, cpf, endereco, rg, pacienteID) => {
        let url = `http://localhost:3000/responsaveis`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "nome": nome,
                    "sobrenome": sobrenome,
                    "cpf": cpf,
                    "endereco": endereco,
                    "rg": rg,
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
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="input-nome">
                        Nome
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="input-nome" type="text" placeholder="" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="input-sobrenome">
                        Sobrenome
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="input-sobrenome" type="text" placeholder="" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}/>
                    </div>
                    <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="input-cpf">
                        CPF
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="input-cpf" type="text" placeholder="" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    </div>
                    <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="input-endereco">
                        Endereço
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="input-endereco" type="text" placeholder=""   value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    </div>
                    <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="input-rg">
                        RG
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="input-rg" type="text" placeholder="" value={rg} onChange={(e) => setRG(e.target.value)}/>
                    </div>
                    <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="input-pacienteID">
                        ID do paciente
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="input-pacienteID" type="text" placeholder="" value={pacienteID} onChange={(e) => setPacienteID(e.target.value)}/>
                    </div>
                </div>
                <div className="mx-auto">
                    <button onClick={() => handleSubmit(nome, sobrenome, cpf, endereco, rg, pacienteID)} className="rounded-full border-2 border-sky-600 text-sky-600 p-1.5 px-4">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default ResponsavelAdd;