import { Link as ReactRouterLink } from "react-router-dom";
import { useState } from "react";
import {
    Background,
    Container,
    Logo,
    Group,
    ButtonLink,
    Feature,
    Text,
    Link,
    FeatureCallOut,
    Profile,
    Picture,
    Dropdown,
    Search,
    SearchIcon,
    SearchInput,
    PlayButton
} from "./styles/header";

export default function Header({ bg = true, children, ...resProps }) {
    return bg ? <Background {...resProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...resProps }) {
    return <Container {...resProps}>{children}</Container>;
};

Header.Text = function HeaderText({ children, ...resProps }) {
    return <Text {...resProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...resProps }) {
    return <Link {...resProps}>{children}</Link>;
};

Header.Group = function HeaderGroup({ children, ...resProps }) {
    return <Group {...resProps}>{children}</Group>;
};

Header.Feature = function HeaderFeature({ children, ...resProps }) {
    return <Feature {...resProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
    children,
    ...resProps
}) {
    return <FeatureCallOut {...resProps}>{children}</FeatureCallOut>;
};

Header.Profile = function HeaderProflie({ children, ...resProps }) {
    return <Profile {...resProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...resProps }) {
    return <Picture {...resProps} src={`/images/users/${src}.png`} />;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...resProps }) {
    return <ButtonLink {...resProps}>{children}</ButtonLink>;
};

Header.Dropdown = function HeaderDropdown({ children, ...resProps }) {
    return <Dropdown {...resProps}>{children}</Dropdown>;
};

Header.SearchTerm = function HeaderSearchTerm({
    searchTerm,
    setSearchTerm,
    ...resProps
}) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...resProps}>
            <SearchIcon
                onClick={() => setSearchActive((searchActive) => !searchActive)}
            >
                <img src="/images/icon/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput value={searchTerm} onChange={({target}) => setSearchActive(target.value)} placeholder="Tìm kiếm phim..." active={searchActive} />
        </Search>
    );
};

Header.PlayButton = function HeaderPlayButton({children,...resProps}){
    return <PlayButton {...resProps}>{children}</PlayButton>
}

Header.Logo = function HeaderLogo({ to, ...resProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...resProps} />
        </ReactRouterLink>
    );
};
