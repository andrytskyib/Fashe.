import React from "react";
import {signInWithGoogle} from "../../firebase/firebase";
import classes from "./signInPage.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

class SignInPage extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSignInWithGoogle = () => {
        signInWithGoogle();
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log('Submit');
    }

    render() {
        return (
            <div className={classes.signIn}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <Input
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label="Email"
                    />
                    <Input
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label="Password"
                    />
                    <div className={classes.signIn__buttons}>
                        <Button
                            type="submit"
                        >
                            Sign In
                        </Button>
                        <Button
                            type="button"
                            onClick={this.handleSignInWithGoogle}
                        >
                            Sign in with Google
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInPage;