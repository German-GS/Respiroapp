import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export const getGoogleAuthConfig = () => {
  const redirectUri = 'https://auth.expo.io/@germangs/app-terapia';

  console.log('🔁 Redirect URI for Google:', redirectUri);

  return Google.useAuthRequest({
    expoClientId: '886767861858-cdvb7apctlqg0fl1m1v9o3isektq0ii2.apps.googleusercontent.com',
    androidClientId: '886767861858-cdvb7apctlqg0fl1m1v9o3isektq0ii2.apps.googleusercontent.com',
    iosClientId: '886767861858-cdvb7apctlqg0fl1m1v9o3isektq0ii2.apps.googleusercontent.com',
    webClientId: '886767861858-cdvb7apctlqg0fl1m1v9o3isektq0ii2.apps.googleusercontent.com',
    redirectUri,
    useProxy: true, // fuerza el uso de auth.expo.io
  });
};
