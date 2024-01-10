<script lang="ts" setup>

export type NavButton = {
    emoji?: string;
    label: string;
    href: string;
    badge?: number;
}

defineProps<NavButton>();

</script>

<template>
    <NuxtLink
        :to="href"
        class="flex items-center gap-2 px-6 py-1 rounded hover:bg-background"
    >
        <span>{{ label }}</span>
        <span
            v-if="emoji"
            class="text-2xl"
        >{{ emoji }}</span>
    </NuxtLink>
</template>