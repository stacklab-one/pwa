import useTokenCookie from "~/composables/useTokenCookie";

export default defineNuxtRouteMiddleware(() => {
    const cookie = useTokenCookie();
    if (!cookie.value) {
        if (process.client) {
            useToast().add({
                color: "red",
                title: "You are not logged in",
                description: "Please login to continue",
                icon: "i-icon-park-outline-user",
                timeout: 3000,
            });
        }
        return navigateTo("/login");
    }
});
