import React, {useState} from "react";
import styled, {css} from 'styled-components';

const RenderSidebarContainer = styled.div`
  width: 100%;
  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    ${({theme}) => css`
      background: ${theme.colors.borderShadow};
      border: 1px solid ${theme.colors.borderShadow};
`}
    fieldset{
       border: none;
       input, button{
        width: 100%;
       }
    }
  }
`;

const RenderSidebar = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
const handleSubmit = (e) => {
    e.preventDefault()

    window.alert (JSON.stringify ({
        name,
        surname,
        address,
        phone
    }));
}
    return (

        <RenderSidebarContainer>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <input
                        type={'text'}
                        placeholder={'NAME'}
                        onChange={e => setName(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <input
                        type={'text'}
                        placeholder={'SURNAME'}
                        onChange={e => setSurname(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <input
                        type={'text'}
                        placeholder={'ADDRESS'}
                        onChange={e => setAddress(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <input
                        type={'text'}
                        placeholder={'PHONE'}
                        onChange={e => setPhone(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <button type={"submit"}>ORDER</button>
                </fieldset>
            </form>

        </RenderSidebarContainer>
    )
}

export default RenderSidebar;