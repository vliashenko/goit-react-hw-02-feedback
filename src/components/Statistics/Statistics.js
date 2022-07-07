import React from 'react';
import { Container, List, ListItem, Total, Percentage } from "./Statistics.styled";
import { normalizeCase } from '../../services/NormalizeCase';
import shortid from "shortid";
import PropTypes from "prop-types";

const Statistics = ({ state, total, positivePercentage }) => {
    
    const optionKeys = Object.keys(state);
    const optionValues = Object.values(state);

    return (
        <Container>
            <List>
                {optionKeys.map(( option,i ) => {
                    let id = shortid.generate();
                    return (
                        <ListItem key={ id }> { normalizeCase(option) }: { optionValues[i] } </ListItem>
                    )
                })}
            </List>
                <Total> 
                    Total: { total() } 
                </Total>
                <Percentage>
                    Positive feedback: { positivePercentage() }%
                </Percentage>
        </Container>
    );
};

Statistics.propTypes = {
    state: PropTypes.objectOf(PropTypes.number).isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired
}

export default Statistics;