import { useState, useContext, createContext } from "react";
import { Container, Inner, Item, Title, Header, Body } from "../accordion/styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...resProps }) {
  return (
    <Container {...resProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...resProps }) {
  return <Title {...resProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...resProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{toggleShow,setToggleShow}}>
      <Item {...resProps}>
        {children}
      </Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...resProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return (
        <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...resProps}>
            {children}
            {toggleShow ? (<img src="/images/icon/close-slim.png" alt="close"/>) : (<img src="/images/icon/add.png" alt="add"/>)}
        </Header>
    );
};

Accordion.Body = function AccordionBody({ children, ...resProps }){
    const { toggleShow } = useContext(ToggleContext);
    
    return toggleShow ? <Body {...resProps}>
      {children}
    </Body> : null;
}

