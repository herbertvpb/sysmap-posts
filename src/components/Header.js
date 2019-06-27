import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import logo from '../assets/sysmap-logo.png';

const MainHeader = styled.header`
  background: #fff;
  height: 72px;
  border-bottom: 1px solid #ddd;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  height: 72px;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  return (
    <MainHeader>
      <HeaderContent>
        <Link to="/">
          <img src={logo} alt="Sysmap Posts" />
        </Link>
      </HeaderContent>
    </MainHeader>
  );
}
