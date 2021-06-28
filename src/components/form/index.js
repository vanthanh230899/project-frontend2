
import {Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit} from './styles/form'

export default function Form({children, ...resProps}){
    return <Container {...resProps}>{children}</Container>
}

Form.Base = function FormBase({ children, ...resProps }){
    return <Base {...resProps}>{children}</Base>
}

Form.Error = function FormError({ children, ...resProps }){
    return <Error {...resProps}>{children}</Error>
}

Form.Title = function FormTitle({ children, ...resProps }){
    return <Title {...resProps}>{children}</Title>
}

Form.Text = function FormText({ children, ...resProps }){
    return <Text {...resProps}>{children}</Text>
}

Form.TextSmall = function FormTextSmall({ children, ...resProps }){
    return <TextSmall {...resProps}>{children}</TextSmall>
}

Form.Link = function FormLink({ children, ...resProps }){
    return <Link {...resProps}>{children}</Link>
}

Form.Input = function FormInput({ children, ...resProps }){
    return <Input {...resProps}>{children}</Input>
}

Form.Submit = function FormSubmit({ children, ...resProps }){
    return <Submit {...resProps}>{children}</Submit>
}