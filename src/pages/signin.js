import { useState, useContext } from "react";
import {useHistory} from 'react-router-dom'
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTER from '../constants/router'

export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    //validate ....

    const isInvalid = password === "" || email === "";
    const handleSignin = (event) => {
        event.preventDefault();
        
        //firebase work here

        firebase.auth()
        .signInWithEmailAndPassword(email,password)
        .then(() => {
            history.push(ROUTER.BROWSE);
        })
        .catch((error) => {
            setEmail('');
            setPassword('');
            setError(error.message)
        });
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Đăng Nhập</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input
                            type="password"
                            autocomplete="off"
                            placeholder="Passwor"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disable={isInvalid} type="submit">
                            Đăng nhập
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>Bạn mới tham gia Netflix?<Form.Link to="/signup">Đăng ký ngay</Form.Link></Form.Text>
                    <Form.TextSmall>Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot.</Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}
