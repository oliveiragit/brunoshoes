import React from 'react';

import { Container } from './styles';

function ThankYou() {
  return (
    <Container>
      <div>
        <h1>Obrigado!</h1>
        <p>
          Está página tem por objetivo fazer uso de ReactJS com Redux e
          Redux-SAGA, que controlarão o estado entre os componentes. Sendo
          assim, os dados são todos ficticíos, consumidos de uma API NodeJS.
        </p>
        <p>
          Hooks do React e Redux, foram empregados para criação de state e props
          nas páginas. Dispensando o uso de classes para tal.
        </p>
        <p>
          Ao adicionar um produto no carrinho, o estado original é atribuído ao
          redux, que através de seus hooks atualiza os 3 componentes (a main, o
          header e o cart). Garantindo assim consistência entre as páginas e
          menos requisições à API
        </p>
        <p>
          Configurou-se Reactotron, em ambiente de desenvolvimento, no intuito
          de debug, controlar o fluxo das action e fazer subscribe dos states.
        </p>
        <p>
          React Toastfy dá avisos ao usuário de problemas na conexão com a API e
          fim de estoque
        </p>
        <p>
          Codígo fonte em:
          <a href="https://github.com/oliveiragit/brunoshoes.git">
            https://github.com/oliveiragit/brunoshoes.git
          </a>
        </p>
      </div>
    </Container>
  );
}

export default ThankYou;
