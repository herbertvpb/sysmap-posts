import React from 'react';

import styled from 'styled-components';

import comments from '../assets/comments.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Article = styled.article`
  background: #fff;
  margin: 12px;
  padding: 12px;
  border-radius: 5px;
`;

const Main = () => (
  <Container>
    <section>
      <Article>
        <div>
          <h1>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h1>
        </div>
        <footer>
          <div>
            <h3>26/06/2019</h3>
            <h3>Leanne Graham</h3>
          </div>
          <div>
            <img src={comments} alt="Ver comentários" />
            <h3>Visualizar comentários</h3>
          </div>
        </footer>
      </Article>
      <Article>
        <div>
          <h1>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h1>
        </div>
        <footer>
          <div>
            <h3>26/06/2019</h3>
            <h3>Leanne Graham</h3>
          </div>
          <div>
            <img src={comments} alt="Ver comentários" />
            <h3>Visualizar comentários</h3>
          </div>
        </footer>
      </Article>
      <Article>
        <div>
          <h1>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h1>
        </div>
        <footer>
          <div>
            <h3>26/06/2019</h3>
            <h3>Leanne Graham</h3>
          </div>
          <div>
            <img src={comments} alt="Ver comentários" />
            <h3>Visualizar comentários</h3>
          </div>
        </footer>
      </Article>
    </section>
  </Container>
);

export default Main;
