import styled from '@emotion/styled';

export const Button = styled.button`
    font-size: 24px;
    border: none; 
    padding: 15px;
    border-radius: 10px;
    background-color: #a07670;
    cursor: pointer;
    transition: color 250ms, background-color 250ms;
    
    :not(:last-child){
        margin-right: 10px
    }

    :hover{
        background-color: #864747;
        color: white;
    }
`