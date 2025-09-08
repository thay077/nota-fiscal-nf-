import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CadastroProduto from './pages/CadastroProduto';
import CadastroCliente from './pages/CadastroCliente';
import Vendas from './pages/Vendas';
import Login from './pages/Login';

function App() {
  const [autenticado, setAutenticado] = useState(false);

  return (
    <Router>
      <div>
        <header style={{ padding: '10px', backgroundColor: '#4E3629', color: '#fff' }}>
          <h1>Texas Farm Store</h1>
        </header>

        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            {autenticado && (
              <>
                <li><a href="/cadastro-produto">Cadastro de Produto</a></li>
                <li><a href="/cadastro-cliente">Cadastro de Cliente</a></li>
                <li><a href="/vendas">Vendas</a></li>
              </>
            )}
            {!autenticado && <li><a href="/login">Login</a></li>}
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            {autenticado ? <Home /> : <Login setAutenticado={setAutenticado} />}
          </Route>
          <Route path="/login" render={(props) => <Login {...props} setAutenticado={setAutenticado} />} />
          <Route path="/cadastro-produto" component={CadastroProduto} />
          <Route path="/cadastro-cliente" component={CadastroCliente} />
          <Route path="/vendas" component={Vendas} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
