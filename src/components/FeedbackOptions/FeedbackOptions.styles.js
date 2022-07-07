import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;
    width: 400px;
    margin: 0 auto;
    text-align: center;
`;


export const Button = styled.button`
    margin: 0 10px;
    padding: 10px 18px;
    background-color: #b72fdd;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    font-weight: 400;
    text-shadow: 0px 2px 5px black;
    transition: all 400ms ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`;