import React, { useState } from 'react';

const Vendas = () => {
  const [venda, setVenda] = useState({
    cliente: '',
    produto: '',
    quantidade: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVenda({ ...venda, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Venda realizada:', venda);
    // Atualizar o estoque e registrar a venda
  };

  return (
    <div>
      <h2>Realizar Venda</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cliente"
          placeholder="Nome do Cliente"
          value={venda.cliente}
          onChange={handleChange}
        />
        <input
          type="text"
          name="produto"
          placeholder="Produto"
          value={venda.produto}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantidade"
          placeholder="Quantidade"
          value={venda.quantidade}
          onChange={handleChange}
        />
        <button type="submit">Finalizar Venda</button>
      </form>
    </div>
  );
};

export default Vendas;
