import React from 'react';
import './globalStyle.scss';
import FormularioAdicao from './Components/Formulario/FormularioAdicao';
import UsuariosPainel from './Components/UsuariosPainel/UsuariosPainel';
import axios from 'axios';

function App() {
  const [listEmployee, setListEmployee] = React.useState<Usuario[]>([]);
  const [buttonStatus, setButtonStatus] = React.useState(false);
  const [employeeId, setEmployeeId] = React.useState('');

  async function getEmployee() {
    const res = await axios.get('https://backend-cadastroempregados.onrender.com/empregados');
    setListEmployee(res.data);
    console.log(res);
  }

  React.useEffect(() => {
    getEmployee();
  }, []);

  return (
    <>
      <main>
        <h1>Cadastro de empregados</h1>
        <p>Cadastro de empregados por nome, idade, data e cargo.</p>
        <section>
          <div className="forms">
            <FormularioAdicao
              getEmployee={getEmployee}
              buttonStatus={buttonStatus}
              setButtonStatus={setButtonStatus}
              employeeId={employeeId}
              listEmployee={listEmployee}
            />
          </div>
          <UsuariosPainel
            listEmployee={listEmployee}
            getEmployee={getEmployee}
            setButtonStatus={setButtonStatus}
            buttonStatus={buttonStatus}
            setEmployeeId={setEmployeeId}
          />
        </section>
      </main>
    </>
  );
}

export default App;
