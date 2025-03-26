interface Usuario {
  id: string;
  nome: string;
  idade: string;
  dataAdicao: string;
  cargo: string;
}

type ContextProps = {
  listUser: Usuario[],
  setListUser: React.Dispatch<React.SetStateAction<Usuario[]>>
}

type ButtonStatus = {
  buttonStatus: boolean,
  setButtonStatus: React.Dispatch<React.SetStateAction<boolean>>
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}