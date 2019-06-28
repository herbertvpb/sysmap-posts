import React from 'react';

import styled from 'styled-components';

const MainFooter = styled.header`
  background: #323232;
  height: 64px;
  border-bottom: 1px solid #ddd;
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  height: 64px;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  .dev {
    font-size: 18px;
    color: #ddd;
  }

  a:link {
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <MainFooter>
      <FooterContent>
        <a href="https://github.com/herbertvpb/sysmap-posts" target="_blank">
          <strong className="dev">Desenvolvido por Herbert Vieira</strong>
        </a>
      </FooterContent>
    </MainFooter>
  );
}
