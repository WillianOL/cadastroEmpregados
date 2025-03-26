import React from 'react';
import gerarDataAtual from './gerarDataAtual';
import Input from './Input/Input';
import Select from './Select/Select';
import style from './style.module.scss';
import axios from 'axios';

type FormAdd = {
  setButtonStatus: React.Dispatch<React.SetStateAction<boolean>>;
  buttonStatus: boolean;
  getEmployee: () => void;
  employeeId: string;
  listEmployee: Usuario[];
};

const FormularioAdicao = ({
  getEmployee,
  buttonStatus,
  setButtonStatus,
  employeeId,
  listEmployee,
}: FormAdd) => {
  const [userName, setUserName] = React.useState<string>('');
  const [userAge, setUserAge] = React.useState<string>('');
  const [userPosition, setUserPosition] = React.useState<string>('');
  const options = [
    'FrontEnd',
    'BackEnd',
    'Analista',
    'Designer',
    'Gerente de projetos',
  ];

  async function createEmployee() {
    const res = await axios.post('https://backend-cadastroempregados.onrender.com/empregados', {
      nome: userName,
      idade: userAge,
      cargo: userPosition,
      dataAdicao: gerarDataAtual(),
    });
    getEmployee();
    setButtonStatus(false);
    return res;
  }

  const validarDados: React.FormEventHandler = (event) => {
    event.preventDefault();
    if (userName && userAge && userPosition) {
      createEmployee();
      getEmployee();
    }
  };

  async function updateEmployee() {
    const employeeSelected = listEmployee.find(({ id }) => id === employeeId);
    if (employeeSelected) {
      const res = await axios.put('https://backend-cadastroempregados.onrender.com/empregados', {
        id: employeeSelected.id,
        nome: userName ? userName : employeeSelected.nome,
        idade: userAge ? userAge : employeeSelected.idade,
        cargo: userPosition ? userPosition : employeeSelected.cargo,
      });
      getEmployee();
      return res;
    }
  }

  const atualizarDados: React.FormEventHandler = (event) => {
    event.preventDefault();
    updateEmployee();
  };

  return (
    <div className={style.formAddConteiner}>
      <h2>Adicionar</h2>
      <form onSubmit={validarDados}>
        <Input value={userName} setValue={setUserName}>
          Nome:
        </Input>
        <Input
          step={1}
          aria-controls=""
          value={userAge}
          setValue={setUserAge}
          type="number"
        >
          Idade:
        </Input>
        <Select
          options={options}
          value={userPosition}
          setValue={setUserPosition}
        >
          Cargo:
        </Select>
        {buttonStatus ? (
          <button onClick={atualizarDados}>Atualizar</button>
        ) : (
          <button type="submit">Adicionar</button>
        )}
      </form>
    </div>
  );
};

export default FormularioAdicao;
