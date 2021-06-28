import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { useContext, useState, useEffect } from "react";
import {Loading, Header, Card} from '../components';
import logo from '../logo.svg';
import * as ROUTES from '../constants/router'


export function BrowesContainer({slides}){
    const [category, setCategory] = useState('series');
    const [slideRows, setSlideRows] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },3000)
    }, [profile.displayName]);

    useEffect(() => {
        setSlideRows(slides[category]);
       
    }, [slides, category])

    const user = firebase.auth().currentUser || {};
    return profile.displayName ? (
        <>
            {loading ? <Loading src={user.photoURL}/> : (<Loading.ReleaseBody/>
        )}
        <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
            <Header.Group>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}></Header.Logo>
                <Header.TextLink active = {category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>Films</Header.TextLink>
                <Header.TextLink active = {category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>Series</Header.TextLink>
            </Header.Group>
            <Header.Group>
            <Header.SearchTerm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Header.Profile>
                    <Header.Picture src={user.photoURL} />
                    <Header.Dropdown>
                        <Header.Group>
                            <Header.Picture src={user.photoURL} />
                            <Header.TextLink>{user.displayName}</Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.TextLink onClick={() => firebase.auth().signOut()}>Đăng xuất</Header.TextLink>
                        </Header.Group>
                    </Header.Dropdown>
                </Header.Profile>
            </Header.Group>
        </Header.Frame>
            <Header.Feature>
            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                <Header.Text>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Header.Text>
                <Header.PlayButton>Play</Header.PlayButton>
            </Header.Feature>
        </Header>
        <Card.Group>
            {slideRows.map((slideItem) => (
                <Card key={`${category} - ${slideItem.title.toLowerCase()}`}>
                    <Card.Title>{slideItem.title}</Card.Title>
                    <Card.Entities>
                        {slideItem.data.map((item) => (
                            <Card.Item item={item} key={item.docId}>
                                <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                <Card.Meta>
                                    <Card.TitleSub>{item.title}</Card.TitleSub>
                                    <Card.Text>{item.description}</Card.Text>
                                </Card.Meta>
                            </Card.Item>
                        ))}
                    </Card.Entities>
                    <Card.Feature category={category}>
                        
                        <p>asdas</p>
                    </Card.Feature>
                </Card>
            ))}
        </Card.Group>
        </>
    ) : (<SelectProfileContainer user={user} setProfile={setProfile}/>);
}