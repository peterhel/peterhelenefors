import React from 'react';
import AlternateEmail from '@material-ui/icons/AlternateEmail';

class Email extends React.Component {
    render = () => {
        return (
            <span style={{ display: 'inline-flex', justifyItems: 'center' }}>
                <span>peter</span>
                <AlternateEmail style={{ height: 20 }} />
                <span>helenefors.se</span>
            </span>
        );
    };
}

export default Email;
