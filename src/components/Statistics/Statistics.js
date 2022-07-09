import React from 'react';
import { Container, List, ListItem, Total, Percentage } from "./Statistics.styled";
import PropTypes from "prop-types";

const Statistics = ({ state, total, percentage }) => {

    const options = Object.entries(state)

    return (
        <Container>
            <List>
                {options.map( item => {
                    let key = item[0];
                    let value = item[1];
                    return (
                        <ListItem key={ key }> { key }: { value } </ListItem>
                    )
                })}
            </List>
                <Total> 
                    Total: { total } 
                </Total>
                <Percentage>
                    Positive feedback: { percentage }%
                </Percentage>
        </Container>
    );
};

Statistics.propTypes = {
    state: PropTypes.objectOf(PropTypes.number).isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired
}

export default Statistics;