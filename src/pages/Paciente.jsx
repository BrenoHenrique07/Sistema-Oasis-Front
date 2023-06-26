import SideBar from "../components/SideBar";
import Search from "../components/Search";
import FormAdd from "../components/FormAdd";

function Paciente(){

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'nome', label: 'Nome' },
        { key: 'sobrenome', label: 'Sobrenome' },
        { key: 'cpf', label: 'CPF' },
        { key: 'actions', label: ''},
        { key: 'editar', label: ''},
        { key: 'excluir', label: ''},
    ];

    return (
        <div>
            <div className="flex">
                <SideBar/>
                <Search entity="pacientes" columns={columns}/>
            </div>  
        </div>
    )
}

export default Paciente;