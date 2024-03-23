<script lang="ts" setup>

const runtimeConfig = useRuntimeConfig();
const logoutUrl = `${runtimeConfig.public.apiUrl}/api/v1/auth/logout`;

fetch(logoutUrl, {
    method: "POST",
}).then(res => {
    navigateTo("/");
});

</script>

<template>
    <div />
</template>