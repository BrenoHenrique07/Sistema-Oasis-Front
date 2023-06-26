import CustomTable from './customTable';
import FormAdd from './FormAdd';
import { useState, useEffect  } from 'react';

function Search({entity, columns}){

    const [searchValue, setSearchValue] = useState('');
    const [datas, setData] = useState([]);
    const [showTable, setShowTable] = useState(true); // Estado para controlar a exibição da tabela
    const [showForm, setShowForm] = useState(false); // Estado para controlar a exibição do formulário

    const handleSearch = async () => {

        let url = `http://localhost:3000/${entity}`;

        if(searchValue != '') {
            url = `http://localhost:3000/${entity}/${searchValue}`;
        }

        try {
            const response = await fetch(url);
            const data = await response.json(); 
            setData(data);
        } catch (err) {
            console.log("Erro ao buscar paciente: ", err);
        }
    };

    const handleDelete = async (itemId) => {
        let url = `http://localhost:3000/${entity}/${itemId}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const updatedData = datas.filter((item) => item.id !== itemId);
            setData(updatedData);
        } catch (err) {
            console.log("Erro ao deletar paciente: ", err);
        }
    };
    
    const handleAdd = () => {
        setShowTable(false); 
        setShowForm(true);
    };

    const handleSubmit = () => {
        setShowTable(true); 
        setShowForm(false);
    }
    
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <div className="flex flex-col justify-around w-4/5">
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

            {showTable && (
                <div className="flex justify-center">
                    <CustomTable columns={columns} data={datas} onDelete={handleDelete} />
                </div>
            )}

            {showForm && (
                <div className="flex justify-center">
                    <FormAdd />
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
