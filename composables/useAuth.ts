import { useJwt } from "@vueuse/integrations/useJwt";

export default function useAuth() {
    const tokenCookie = useTokenCookie();
    const isLoggedIn = tokenCookie.value !== undefined && tokenCookie.value !== null; 
    let jwt = null; 
    if (tokenCookie.value) {
        jwt = useJwt(tokenCookie.value);
    }
    return {
        isLoggedIn,
        jwtHeader: jwt?.header,
        jwtPayload: jwt?.payload,
    };
}
