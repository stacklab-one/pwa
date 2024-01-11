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
    console.log("meta k pressed");
    searchValue.value = "";
    input.value?.focus();
});

</script>

<template>
    <div class="flex items-center">
        <!-- <input
            ref="input"
            v-model="searchValue"
            type="text"
            class="bg-transparent font-light outline-none text-white w-full"
            :placeholder="props.placeholder"
        > -->
        <UInput
            icon="i-heroicons-magnifying-glass-20-solid"
            size="lg"
            color="white"
            class="w-full"
            :trailing="false"
            :placeholder="props.placeholder"
        />

        <div class="scale-110 w-12">
            <UKbd>{{ metaSymbol }}</UKbd>
            <UKbd>K</UKbd>
        </div>
    </div>
</template>