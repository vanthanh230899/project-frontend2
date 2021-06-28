import { Header } from '../components'
import * as ROUTES from '../constants/router'
import logo from '../logo.svg'

export function HeaderContainer({children}){
    return(
        <Header>
             <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}></Header.Logo>
                <Header.ButtonLink to={ROUTES.SIGN_IN} alt="Signin">Đăng Nhập</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}