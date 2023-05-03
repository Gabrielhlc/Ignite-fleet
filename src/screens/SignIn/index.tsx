import { useState, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import { Container, Title, Slogan } from './styles';

import backgroundImg from '../../assets/background.png';

import { Button } from '../../components/Button';

import { ANDROID_CLIENT_ID } from '@env';
import { Alert } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export function SignIn() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const [_, response, googleSignIn] = Google.useAuthRequest({
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ['profile', 'email'],
    });

    function handleGoogleSignIn() {
        setIsAuthenticating(true);

        googleSignIn().then((response) => {
            if (response.type !== 'success') {
                setIsAuthenticating(false);
            }
        })
    }

    useEffect(() => {
        if (response?.type === 'success') {
            if (response.authentication?.idToken) {
                console.log('TOKEN DE AUTENTICAÇÃO => ', response.authentication.idToken)

            } else {
                Alert.alert('Entrar', 'Não foi possível conectar-se à sua conta Google');
                setIsAuthenticating(false);
            }
        }
    }, [response])

    return (
        <Container source={backgroundImg}>
            <Title>
                Ignite Fleet
            </Title>

            <Slogan>
                Gestão e uso de veículos
            </Slogan>

            <Button
                title="Entrar com google"
                onPress={handleGoogleSignIn}
                isLoading={isAuthenticating}
            />
        </Container>
    );
}