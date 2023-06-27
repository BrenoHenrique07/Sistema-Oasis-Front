import CustomTable from './customTable';
import PacienteAdd from './FormAdd/PacienteAdd';
import ResponsavelAdd from './FormAdd/ResponsavelAdd';
import FrequenciaAdd from './FormAdd/FrequenciaAdd';
import DoencaAdd from './FormAdd/DoencaAdd';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Search({entity, columns}){

    const [searchValue, setSearchValue] = useState('');
    const [datas, setData] = useState([]);
    const [showTable, setShowTable] = useState(true); 
    const [showForm, setShowForm] = useState(false); 
    const [showToast, setShowToast] = useState(false);

    console.log(showToast);

    //formAdd
    const [formAddString, setformAddString] = useState(entity);

    let formAddRender = null;

    if(formAddString === 'pacientes') {
        formAddRender = <PacienteAdd/>
    } 

    if(formAddString === 'responsaveis') {
        formAddRender = <ResponsavelAdd/>
    } 

    if(formAddString === 'frequencias') {
        formAddRender = <FrequenciaAdd/>
    } 

    if(formAddString === 'doencas') {
        formAddRender = <DoencaAdd/>
    } 

    const handleSearch = async () => {

        let url = `http://localhost:3000/${entity}`;

        if(searchValue != '') {
            url = `http://localhost:3000/${entity}/${searchValue}`;
        }

        try {
            const response = await fetch(url);
            const data = await response.json(); 

            setData(data);

            if (searchValue !== '') {
                setShowToast(true); 
                toast.success('Pesquisa realizada com sucesso');
              }
        } catch (err) {
            setShowToast(true);
            toast.error('Erro ao buscar');
        }
    };

    const handleEdit = (itemid) => {
        
    }

    const handleDelete = async (itemId) => {
        let url = `http://localhost:3000/${entity}/${itemId}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            setShowToast(true);
            const responseJson = await response.json();
            toast.success(responseJson.mensagem);

            if(responseJson.ok) {
                const updatedData = datas.filter((item) => item.id !== itemId);
                setData(updatedData);
            }
        } catch (err) {
            setShowToast(true);
            toast.success('Erro ao tentar deletar');
        }
    };
    
    const handleAdd = () => {
        setShowTable(false); 
        setShowForm(true);
    };
    
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <div className="flex flex-col justify-around w-4/5">

            {showToast && (
                <ToastContainer />
            )}

            {showTable && (
                <div className="w-full">
                    <form className="flex justify-center gap-2">
                        <div className="flex-initial w-7/12">
                            <input type="text" id="searchPacients" value={searchValue} onChange={handleInputChange} className="bg-sky-600 border border-gray-300 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                        </div>
                        <div>
                            <button type="button" onClick={handleSearch} className="rounded-full border-2 border-sky-600 text-sky-600 p-1.5 px-4">Pesquisar</button>
                        </div>
                    </form>
                </div>
            )}

            {showTable && (
                <div className="flex justify-center">
                    <CustomTable columns={columns} data={datas} onDelete={handleDelete} onEdit={handleEdit} />
                </div>
            )}

            {showForm && (
                <div className="flex justify-center">
                   {formAddRender}
                </div>
            )}

            {showTable && (
                <div className="mx-auto">
                    <button onClick={handleAdd} className="rounded-full border-2 border-sky-600 text-sky-600 p-1.5 px-4">Adicionar</button>
                </div>
            )}

        </div>
    )
}


export default Search;
