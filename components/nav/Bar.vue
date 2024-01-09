<script lang="ts" setup>
import { type NavButton } from "./Button.vue";

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
    <div class="w-full h-20 flex items-center justify-between px-8 bg-background">
        <div>
            <span>Stacklab logo</span>
        </div>
        <div class="flex items-center justify-evenly gap-8">
            <div
                v-for="button in navButtons"
                :key="button.href"
            >
                <NavButton v-bind="button" />
            </div>
        </div>
        <div>
            <Icon
                name="icon-park-outline:user"
                class="text-xl"
            />
        </div>
    </div>
</template>