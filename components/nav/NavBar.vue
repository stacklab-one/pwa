<script lang="ts" setup>
import { type NavButton } from "./NavBarButton.vue";

const navButtons = ref<NavButton[]>([
    {
        label: "Categories",
        href: "/categories",
    },
    {
        label: "Tools",
        href: "/tools",
    },
    {
        emoji: "🚀",
        label: "Trending",
        href: "/trending",
    },
]);

</script>

<template>
    <div class="w-full h-20 flex items-center justify-between px-12 bg-background">
        <NuxtLink to="/">
            <span>Stacklab logo</span>
        </NuxtLink>
        <div class="flex items-center justify-evenly gap-8">
            <div
                v-for="button in navButtons"
                :key="button.href"
            >
                <NavBarButton v-bind="button" />
            </div>
        </div>
        <div>
            <NuxtLink to="/account">
                <Icon
                    name="icon-park-outline:user"
                    class="text-xl"
                />
            </NuxtLink>
        </div>
    </div>
</template>