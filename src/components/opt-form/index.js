import { Container, Input, Button, Text, Break } from "../opt-form/styles/opt-form";

export default function OptForm({children}, ...resProps){
    return(
        <Container {...resProps}>
            {children}
        </Container>
    )
}

OptForm.Input = function OptFormInput({...resProps}){
    return <Input {...resProps} />
}

OptForm.Button = function OptFormButton({children, ...resProps}){
    return <Button {...resProps}>{children} <img src="/images/icon/chevron-right.png" alt="try now" /> </Button>
}

OptForm.Text = function OptFormText({children, ...resProps}){
    return <Text {...resProps}>{children}</Text>
}

OptForm.Break = function OptFormBreak({children, ...resProps}){
    return <Break {...resProps}>{children}</Break>
}