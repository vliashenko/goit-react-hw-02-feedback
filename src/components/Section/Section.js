import React from 'react';
import { Container, Title } from "./Section.styled";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
    return (
        <Container>
            <Title> {title} </Title>
            { children }
        </Container>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Section;