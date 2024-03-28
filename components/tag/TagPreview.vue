<script lang="ts" setup>


type Props = {
    tag: string;
}

const props = defineProps<Props>();

</script>

<template>
    <UButton
        color="amber"
        variant="soft"
        class="transition-colors duration-200"
    >
        <Icon name="clarity:hashtag-solid" />
        <span class="text-xs">{{ props.tag }}</span>
    </UButton>
</template>