import React from 'react';
import {Field,reduxForm} from 'redux-form';

const simpleForm =props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                   <h1>Please enter the following details</h1>
                   <label>FirstName:</label> <input type="text" id="Fname" />
                   <label>LastName:</label> <input type="text" id="Lname" /> 
        
                   <label>City:</label> <input type="text" id="city" />
                   <label>PhoneNumber:</label><input type="tel" id="pno" />
                   <br />
                   <input type="submit" id="submit" value="SUBMIT" disabled={pristine || submitting} />
                   <button type="button" disabled={pristine || submitting} onClick={reset} />
                </form>
            </div>
        );

};

export default reduxForm(
    {
        form:'details',
    }
)(simpleForm);