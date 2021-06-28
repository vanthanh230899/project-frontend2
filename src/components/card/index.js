import { useState, useContext,createContext } from "react";
import {Container, Group, Title, TitleSub, Text, Feature, FeatureText, FeatureTitle, FeatureClose, Entities, Meta, Image, Item, Content, Maturity} from "./styles/card"

export const FeatureContext = createContext();

export default function Card({children,...resProps}){
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({})

    return (
        <FeatureContext.Provider value={{ showFeature , itemFeature, setShowFeature, setItemFeature }}>
            <Container {...resProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({children,...resProps}){
    return <Group {...resProps}>{children}</Group>
}

Card.Title = function CardTitle({children,...resProps}){
    return <Title {...resProps}>{children}</Title>
}

Card.TitleSub = function CardTitleSub({children,...resProps}){
    return <TitleSub {...resProps}>{children}</TitleSub>
}

Card.Text = function CardText({children,...resProps}){
    return <Text {...resProps}>{children}</Text>
}

Card.Entities = function CardEntities({children,...resProps}){
    return <Entities {...resProps}>{children}</Entities>
}

Card.Meta = function CardMeta({children,...resProps}){
    return <Meta {...resProps}>{children}</Meta>
}

Card.Item = function CardItem({item,children,...resProps}){
    const {setShowFeature,setItemFeature} = useContext(FeatureContext);

    return <Item
    onClick={() => {
        setShowFeature(true);
        setItemFeature(item);
    }}
     {...resProps}>{children}</Item>
}

Card.Image = function CardImage({...resProps}){
    return <Image {...resProps}/>
}

Card.Feature = function CardFeature({children, category, ...resProps}){
    const { showFeature , itemFeature, setShowFeature } = useContext(FeatureContext);

    return showFeature ? (
        <Feature {...resProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}
                >
                    <img src="/images/icon/close.png" alt="Close" />
                </FeatureClose>
                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating = {itemFeature.maturity}>
                        {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
                    </Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0).toUpperCase() +
                        itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>
            {children} 
            </Content>
        </Feature>
    ) : null;
}
