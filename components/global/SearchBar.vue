<script lang="ts" setup>
import { onKeyDown } from "@vueuse/core";

type Props = {
    placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
    placeholder: "Search...",
});

const searchValue = defineModel<string>();
const { metaSymbol } = useShortcuts();
const input = ref<HTMLInputElement>();

onKeyDown("k", (event) => {
    event.stopPropagation();
    if (!event.metaKey) {
        return;
    }
    searchValue.value = "";
    input.value?.focus();
});

</script>

<template>
    <div class="flex items-center relative bg-mineshaft-700 py-1 px-2 rounded-xl gap-2">
        <Icon
            name="i-heroicons-magnifying-glass-20-solid"
            size="32"
        />
        <input
            ref="input"
            v-model="searchValue"
            class="bg-transparent w-full outline-none"
            :placeholder="props.placeholder"
        >

        <div class="scale-110 w-12 flex gap-1">
            <UKbd class="">
                {{ metaSymbol }}
            </UKbd>
            <UKbd>K</UKbd>
        </div>
    </div>
</template>