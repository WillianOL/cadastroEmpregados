import React from 'react';
import style from './style.module.scss';
import { MdDelete, MdModeEditOutline, MdCancel } from 'react-icons/md';
import axios from 'axios';

type UserPainel = {
  listEmployee: Usuario[];
  getEmployee: () => void;
  setButtonStatus: React.Dispatch<React.SetStateAction<boolean>>;
  buttonStatus: boolean;
  setEmployeeId: React.Dispatch<React.SetStateAction<string>>;
};

const UsuariosPainel = ({
  listEmployee,
  getEmployee,
  buttonStatus,
  setButtonStatus,
  setEmployeeId
}: UserPainel) => {
  async function deleteEmployee(id: string) {
    await axios.delete(`http://localhost:3333/empregados/${id}`);
    getEmployee();
  }

  function employeeIdSet(id: string) {
    setButtonStatus(!buttonStatus)
    setEmployeeId(id)
  }

  return (
    <section className={style.conteinerTable}>
      <h2>Tabela de empregados</h2>
      <table className={style.table}>
        <thead className={style.tableHead}>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cargo</th>
            <th>Data de adição</th>
          </tr>
        </thead>
        <tbody className={style.tableBody}>
          {listEmployee &&
            listEmployee.map(({ nome, idade, cargo, dataAdicao, id }) => {
              return (
                <tr key={id} id={id}>
                  <th>{nome}</th>
                  <th>{idade}</th>
                  <th>{cargo}</th>
                  <th>{dataAdicao}</th>
                  <div className={style.buttonConteiner}>
                    <button
                      className={style.buttonDelete}
                      onClick={() => deleteEmployee(id)}
                    >
                      <MdDelete />
                    </button>
                    <button
                      className={style.buttonEdit}
                      onClick={() => employeeIdSet(id)}
                    >
                      {buttonStatus ? <MdCancel /> : <MdModeEditOutline />}
                    </button>
                  </div>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default UsuariosPainel;
