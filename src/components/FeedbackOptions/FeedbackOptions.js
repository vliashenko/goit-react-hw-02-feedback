import React from 'react';
import { normalizeCase } from '../../utils/NormalizeCase';
import { Container, Button } from "./FeedbackOptions.styles";
import PropTypes from "prop-types";

const FeedbackOptions = ({ names, onClick }) => {
    return (
        <Container>
            {names.map(( option, i ) => {
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
    names: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired
}

export default FeedbackOptions;