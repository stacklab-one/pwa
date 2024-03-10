<script lang="ts" setup>

export type SearchTool = {
    id: string;
    name: string;
    description: string;
    websiteUrl: string;
    repositoryUrl: string;
    tags: string[];
    categoryNames: string[];
    stars: number;
    forks: number;
    openIssues: number;
    score: number;
}

const props = defineProps<{
    tool: SearchTool;
}>();

const showStars = ref(true);

const starLabel = computed(() => {
    if (showStars.value) {
        const stars = props.tool.stars;
        if (stars > 1000) {
            return `${(stars / 1000).toFixed(1)}k`;
        }
        return stars;
    }
    return "";
});

const container = ref<HTMLDivElement>();
const { isOutside } = useMouseInElement(container);

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
                        name="iconamoon:box"
                        class="text-3xl"
                    />
                </div>
                <div>
                    <p class="text-lg font-medium">
                        {{ tool.name }}
                    </p>
                </div>
            </div>
            <div class="flex gap-4">
                <div
                    v-if="showStars"
                    class="flex items-center gap-1"
                >
                    <Icon
                        v-if="isOutside"
                        name="icon-park-outline:star"
                        class="group-hover:hidden text-xl -translate-y-0.5"
                    />
                    <Icon
                        v-else
                        name="icon-park-solid:star"
                        class="group-hover:block text-xl -translate-y-0.5"
                    />
                    <p class="text-xs font-light">
                        {{ starLabel }}
                    </p>
                </div>
            </div>
        </div>
        <div class="p-3 overflow-hidden">
            <p class="text-ellipsis text-mineshaft-100 font-light">
                {{ tool.description }}
            </p>
        </div>
        <div class="min-h-12 w-full p-3 flex flex-wrap gap-2 items-start justify-start bg-mineshaft-800 group-hover:bg-mineshaft-700 transition-colors duration-150 overflow-y-auto">
            <div
                v-for="tag of tool.tags"
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
                    <span class="">{{ (tool.score / 100).toFixed(0) }}</span>
                </div>
            </div>
        </ClientOnly>
    </div>
</template>