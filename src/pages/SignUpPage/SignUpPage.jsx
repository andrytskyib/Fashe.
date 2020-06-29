import React, { Component } from 'react';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import classes from './signUp.module.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase';

class SignUpPage extends Component {
    state = {
        email: '',
        password: '',
        displayName: '',
        confirmPassword: ''
    };

    clearForm = () => {
        this.setState({
            email: '',
            password: '',
            displayName: '',
            confirmPassword: ''
        });
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            return alert('Passwords do not match!');
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.clearForm();
        } catch (error) {
            console.log(error);
        }
    }

    render () {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className={classes.signUp}>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="displayName"
                        type="text"
                        value={displayName}
                        required
                        handleChange={this.handleChange}
                        label="Display name"
                    />
                    <Input
                        name="email"
                        type="email"
                        value={email}
                        required
                        handleChange={this.handleChange}
                        label="Email"
                    />
                    <Input
                        name="password"
                        type="password"
                        value={password}
                        required
                        handleChange={this.handleChange}
                        label="Password"
                    />
                    <Input
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        required
                        handleChange={this.handleChange}
                        label="Confirm password"
                    />
                    <Button type="submit">
                        Sign up
                    </Button>
                </form>
            </div>
        );
    }
}

export default SignUpPage;