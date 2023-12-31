import { useState, useEffect } from 'react';

function PacienteAdd({ id, onSearch }){

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [doenca, setDoenca] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        if(id !== ''){
            onSearch(updateValues);
            setShowTitle(false);
        } else {
            setShowTitle(true);
        }
    }, [])

    const updateValues = (data) => {
        console.log(data);

        let d = data;
        setNome(d.nome);
        setSobrenome(d.sobrenome);
        setCpf(d.cpf);
        setEndereco(d.endereco);
        setDoenca(d.doenca);
        setDataNascimento(d.dataNascimento)
    }

    const handleSubmit = async () => {

        let url = '';
        let method = '';

        console.log("vazio..." + id)

        if(id === ''){
            url = `http://localhost:3000/pacientes`;
            method = 'POST';
        } else {
            url = `http://localhost:3000/pacientes/${id}`;
            method = 'PUT';
        }

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "nome": nome,
                    "sobrenome": sobrenome,
                    "cpf": cpf,
                    "endereco": endereco,
                    "doenca": doenca,
                    "dataNascimento": dataNascimento
                })
            })

        } catch (err) {
            console.log(err);
        }
        
    }
      
    return (
        <div>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    {showTitle && (
                        <div className='my-8'>
                            <h1 className='text-sky-600 font-bold text-center text-2xl'>Adicionar Paciente</h1>
                        </div>   
                    )}
                    {!showTitle && (
                        <div className='my-8'>
                            <h1 className='text-sky-600 font-bold text-center text-2xl'>Editar Paciente</h1>
                        </div>   
                    )}
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
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="input-endereco" type="text" placeholder="" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    </div>
                    <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="input-doenca">
                        Doença
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="input-doenca" type="text" placeholder="" value={doenca} onChange={(e) => setDoenca(e.target.value)}/>
                    </div>
                    <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="input-data">
                        Data de nascimento
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="input-data" type="text" placeholder="" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)}/>
                    </div>
                </div>
                <div className="mx-auto">
                    <button onClick={handleSubmit} className="rounded-full border-2 border-sky-600 text-sky-600 p-1.5 px-4">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default PacienteAdd;