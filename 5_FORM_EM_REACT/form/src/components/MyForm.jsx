import { use, useState } from "react";
import "./MyForm.css";

const MyForm = ({user}) => {
    // 6 - Controlled inputs
  {
    /* 3- GERENCIAMENTO DE DADOS*/
  }

  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const [bio, setBio] = useState(user ? user.bio : '')
  const handleName = (e) => {
    setName(e.target.value);
  };

  const [role, setRole] = useState(user ? user.role : '')

  //console.log(name)
  //console.log(email)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando Form")
    console.log(name, email, bio, role)

    //7 - Limpar forms
    setName("");
    setEmail("");
    setBio("")
  }

  return (
    <div>
      {/* 5- Envio de Form */  }
      {/* 1 - Criação de Form*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome "
            onChange={handleName}
            value={name}
          />
        </div>

        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail: </span>
          {/* 4 - SIMPLIFICAÇÃO DE MANIPULAÇÃO DE STATE */}
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - TextArea */}
        <label>
            <span>Bio: </span>
            <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => {
                setBio(e.target.value)
            }} value={bio}></textarea>
        </label>
        {/*9 - Select*/}
        <label>
            <span>Função no sistema</span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
            </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
