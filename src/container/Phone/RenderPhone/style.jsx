import styled, {css} from 'styled-components';

const RenderPhoneBanner = styled.li`
  list-style: none;
  width: 100%;
  border: none;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  ${({theme}) => css`
    box-shadow: 0 0 5px ${theme.colors.silverLight};
  `}
  img{
    width: 100%;
    border-radius: 10px;
    padding: 0 5px 5px 5px;
    ${({theme}) => css`
      box-shadow: 0 1px 2px ${theme.colors.borderShadow};
    `}
  }
`;

const RenderPhoneContainer = styled.div`
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
`;

const RenderPhoneTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 15px;
  h1{
    font-size: 1.25em;
    ${({theme}) => css`
      color: ${theme.colors.colorTitle}
    `}
  }
  strong{
    font-size: 1.25em;
    ${({theme}) => css`
      color: ${theme.colors.blackLight}
    `}
  }
`;

const RenderPhoneButton = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  *{
    padding: 5px 12px;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    outline: none;
    ${({theme}) => css`
      border: 1px solid ${theme.colors.silverLight};
    `}
  }
  .buy_now{
    ${({theme}) => css`
      color: ${theme.colors.colorWhite};
      background: ${theme.colors.dodgerBlue};
    `}
  }
`;

export {
    RenderPhoneBanner,
    RenderPhoneContainer,
    RenderPhoneTitle,
    RenderPhoneButton

}