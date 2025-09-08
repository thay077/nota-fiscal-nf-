import React, { useState } from 'react';

const CadastroCliente = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    cpf: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cliente cadastrado:', cliente);
    // Aqui você pode salvar os dados no banco ou na memória
  };

  return (
    <div>
      <h2>Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do Cliente"
          value={cliente.nome}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={cliente.cpf}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={cliente.email}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar Cliente</button>
      </form>
    </div>
  );
};

export default CadastroCliente;
