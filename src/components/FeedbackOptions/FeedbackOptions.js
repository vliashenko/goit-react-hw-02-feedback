import React from 'react';
import { Container, Button } from "./FeedbackOptions.styles";
import { normalizeCase } from '../../services/NormalizeCase';
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onClick }) => {
    const optionKeys = Object.keys(options);
    return (
        <Container>
            {optionKeys.map(( option, i ) => {
                return (
                    <Button 
                        key={ i } 
                        name={ option }
                        onClick={ onClick }
                    > 
                        { normalizeCase(option) } 
                    </Button>
                )
            })}
        </Container>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number).isRequired,
    onClick: PropTypes.func.isRequired
}

export default FeedbackOptions;