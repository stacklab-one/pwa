<script lang="ts" setup>
type Props = {
    title?: string;
    icon?: string;
    iconClass?: string;
    isSearchable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    isSearchable: false,
    title: "",
    icon: undefined,
    iconClass: "",
});

const searchValue = defineModel<string>("searchValue");

</script>

<template>
    <div class="py-6 flex items-center justify-between border-b-[1px] border-b-gray-500 z-10">
        <div class="flex items-center gap-6">
            <slot name="icon">
                <Icon
                    v-if="icon"
                    :name="icon"
                    :class="iconClass ?? 'text-2xl'"
                />
            </slot>
            <slot name="title">
                <h2 class="text-4xl font-semibold">
                    {{ title }}
                </h2>
            </slot>
        </div>
        <div>
            <slot name="searchLeft" />
            <slot name="search">
                <SearchBar
                    v-if="props.isSearchable"
                    v-model="searchValue"
                    placeholder="Search..."
                    class="w-80"
                />
            </slot>
            <slot name="searchRight" />
        </div>
    </div>
</template>