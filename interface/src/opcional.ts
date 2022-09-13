interface CadastroProps{
  nome?: string;
  email: string;
  status: boolean;
}

const novoUsuario: CadastroProps = {
  email: "ana@teste.com",
  status: true,
}

//console.log(novoUsuario);

function novoUser(usuario: CadastroProps){
  console.log(usuario.email)
}

novoUser({email: "ana@ana.com", status: false});