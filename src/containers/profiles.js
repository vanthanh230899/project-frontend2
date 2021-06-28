import * as ROUTE from "../constants/router";
import { Header } from "../components";
import logo from "../logo.svg";
import { Profiles } from "../components";
export function SelectProfileContainer({ user, setProfile }) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTE.HOME} src={logo} alt="Netflix" />
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>Ai là người đang xem</Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        onClick={() =>
                            setProfile({
                                displayName: user.displayName,
                                photoURL: user.photoURL,
                            })
                        }
                    >
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    );
}
