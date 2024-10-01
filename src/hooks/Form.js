import React from 'react';
import useForm from './hooks/useForm';

const Form = () => {
    const [formValues, handleChange, resetForm] = useForm({ name: '', email: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted:', formValues);
        resetForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input type="text" name="name" value={formValues.name} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" value={formValues.email} onChange={handleChange} />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
