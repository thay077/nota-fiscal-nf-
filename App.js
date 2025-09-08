import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CadastroProduto from './pages/CadastroProduto';
import CadastroCliente from './pages/CadastroCliente';
import Vendas from './pages/Vendas';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cadastro-produto">Cadastro de Produto</a></li>
            <li><a href="/cadastro-cliente">Cadastro de Cliente</a></li>
            <li><a href="/vendas">Vendas</a></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cadastro-produto" component={CadastroProduto} />
          <Route path="/cadastro-cliente" component={CadastroCliente} />
          <Route path="/vendas" component={Vendas} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
