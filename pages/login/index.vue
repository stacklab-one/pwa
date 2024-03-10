<script lang="ts" setup>

definePageMeta({
    layout: "app",
});

const runtimeConfig = useRuntimeConfig();

</script>

<template>
    <div class="flex justify-center h-full w-full pt-[30vh]">
        <div class="bg-mineshaft-900 p-4 rounded border-2 border-mineshaft-800 h-min px-12">
            <NuxtLink 
                class="h-min bg-[#03060A] px-8 py-2 flex items-center gap-x-4 rounded border-2 border-[#30363D]"
                :to="`${runtimeConfig.public.apiUrl}/api/v1/github/redirect`"
            >
                <Icon
                    name="mdi:github"
                    class="text-3xl"
                />
                <span>Sign in with GitHub</span>
            </NuxtLink>
        </div>
    </div>
</template>