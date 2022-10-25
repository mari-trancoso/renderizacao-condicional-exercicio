import { Form, FormContainer, Input, StyledLabel, SendButton } from "./styled";

function TelaCadastroEndereco (props) {
    return (
        <FormContainer>
        <h1>Cadastro Endereço </h1>
        <Form>
            <StyledLabel htmlFor="endereco">
            Endereço:
            <Input id="endereco" />
            </StyledLabel>
            <StyledLabel htmlFor="numero">
            Número da residência:
            <Input id="numero" />
            </StyledLabel>
            <StyledLabel htmlFor="telefone">
            Telefone:
            <Input id="telefone" />
            </StyledLabel>
            <StyledLabel htmlFor="complemento">
            complemento:
            <Input id="complemento" />
            </StyledLabel>
            <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
        </Form>
        </FormContainer>
    )
}

export default TelaCadastroEndereco;