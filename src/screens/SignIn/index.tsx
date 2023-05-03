import { Container, Title, Slogan } from './styles';

import backgroundImg from '../../assets/background.png';

import { Button } from '../../components/Button';

export function SignIn() {
    return (
        <Container source={backgroundImg}>
            <Title>
                Ignite Fleet
            </Title>

            <Slogan>
                Gestão e uso de veículos
            </Slogan>

            <Button title="Entrar com google" />
        </Container>
    );
}