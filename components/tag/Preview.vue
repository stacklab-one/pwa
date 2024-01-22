<script lang="ts" setup>


type Props = {
    tag: string;
}

const props = defineProps<Props>();

</script>

<template>
    <UButton
        class="bg-gray-200 text-gray-800"
        variant="soft"
    >
        <Icon name="clarity:hashtag-solid" />
        <span class="text-xs">{{ props.tag }}</span>
    </UButton>
</template>