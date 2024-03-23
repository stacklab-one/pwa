<script lang="ts" setup>

export type SearchCategory = {
    id: string;
    name: string;
    description: string;
    tags: string[];
    tools: string[];
    score: number;
}

type Props = {
    category: SearchCategory;
}

defineProps<Props>();

</script>

<template>
    <div 
        ref="container"
        class="group grid grid-rows-[min-content_1fr_5rem] bg-mineshaft hover:bg-mineshaft-600 overflow-hidden rounded-lg shadow-xl transition-all duration-150"
    >
        <div class="h-16 flex justify-between border-b-[0.5px] border-b-mineshaft-200 w-full px-4">
            <div class="flex items-center gap-2">
                <div class="flex items-center justify-center">
                    <Icon
                        name="icon-park-outline:folder-code"
                        class="text-3xl"
                    />
                </div>
                <div>
                    <p class="text-lg font-medium">
                        {{ category.name }}
                    </p>
                </div>
            </div>
        </div>
        <div class="p-3 overflow-hidden">
            <p class="text-ellipsis text-mineshaft-100 font-light">
                {{ category.description }}
            </p>
        </div>
        <div class="min-h-12 w-full p-3 flex flex-wrap gap-2 items-start justify-start bg-mineshaft-800 group-hover:bg-mineshaft-700 transition-colors duration-150 overflow-y-auto">
            <div
                v-for="tag of category.tags"
                :key="tag"
                @click.stop.prevent
            >
                <TagPreview
                    :tag="tag"
                />
            </div>
        </div>
        <ClientOnly>
            <div 
                v-if="isInExpertView().value"
                class="bg-mineshaft-900 p-2 flex justify-end"
            >
                <div class="flex items-center text-xs font-medium">
                    <span class="">{{ (category.score / 100).toFixed(0) }}</span>
                </div>
            </div>
        </ClientOnly>
    </div>
</template>