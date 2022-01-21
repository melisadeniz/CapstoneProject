import styled from 'styled-components'

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: white;
  padding: 10px 0 10px;
  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 5px;
    font-family: sans-serif;
    font-size: small;
  }
  p {
    font-family: SFProDisplay,arial,sans-serif;
    font-size: x-small;
  }
  .btn {
    font-size: small;
  }
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      font-family: cursive;
      text-align: center;
      
    }
  }
`
