import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTER from "../constants/router";

export default function Signup() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid = firstName === "" && email === "" && password === "";
    const handleSignUp = (event) => {
        event.preventDefault();

        //firebase work

        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then((result) => result.user.updateProfile({
            displayName : firstName,
            photoURL : Math.floor(Math.random() * 5) + 1
        })
        .then(() =>
            history.push(ROUTER.BROWSE)
        ))
        .catch((error) => {
            setFirstName('');
            setEmail('');
            setPassword('');
            setError(error.message);
        })
    };

    return (
    <>
        <HeaderContainer>
            <Form>
                <Form.Title>Đăng Ký</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignUp} method="POST">
                    <Form.Input placeholder="Tên Hiển Thị" 
                        value = {firstName}
                        onChange = {({target}) => setFirstName(target.value)}
                    />
                    <Form.Input placeholder="Email"
                        value = {email}
                        onChange = {({target}) => setEmail(target.value)}

                        />
                    <Form.Input placeholder = "Mật Khẩu"
                        value={password}
                        type="password"
                        autoComplete="off"
                        onChange = {({target}) => setPassword(target.value)}
                    />
                    <Form.Submit disable = {isInvalid} type="submit">Đăng Ký</Form.Submit>
                </Form.Base>
                <Form.Text>Đã có tài khoản? <Form.Link to={ROUTER.SIGN_IN}>Đăng nhập ngay</Form.Link></Form.Text>
                <Form.TextSmall>Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot.</Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer />
      </>  
    );
}
