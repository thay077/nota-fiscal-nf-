import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Usuário e senha fixos para exemplo (pode ser substituído por uma autenticação real)
    const usuarioValido = 'admin';
    const senhaValida = '12345';

    if (usuario === usuarioValido && senha === senhaValida) {
      // Se as credenciais forem válidas, redireciona para a página principal
      history.push('/');
    } else {
      setErro('Usuário ou senha inválidos');
    }
  };

  return (
    <div>
      <h2>Login - Texas Farm Store</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </div>
  );
};

export default Login;
