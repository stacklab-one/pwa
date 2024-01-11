<script setup lang="ts">
import type { GetAllToolsForPreviewQuery } from "#gql";
import { useMouseInElement } from "@vueuse/core";


type Props = {
    tool: GetAllToolsForPreviewQuery["tools"][number];
}

const props = defineProps<Props>();

const showStars = computed(() => {
    return props.tool.toolData?.length > 0 && props.tool.toolData[0].stars !== null;
});

const starLabel = computed(() => {
    if (showStars.value) {
        const stars = props.tool.toolData[0].stars!;
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
        class="group flex flex-col items-start justify-start bg-mineshaft hover:bg-mineshaft-600 overflow-hidden rounded-lg shadow-xl transition-all duration-150"
    >
        <div class="h-16 flex justify-between border-b-[0.5px] border-b-mineshaft-200 w-full px-4">
            <div class="flex items-center gap-2">
                <div class="flex items-center justify-center">
                    <Icon
                        :name="tool.iconIdentifier ?? 'iconamoon:box'"
                        class="text-3xl"
                    />
                </div>
                <div>
                    <p class="text-lg font-medium">
                        {{ tool.name }}
                    </p>
                </div>
            </div>
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
        <div class="p-3 h-28 overflow-hidden">
            <p class="text-ellipsis h-20 text-mineshaft-100 font-light">
                {{ tool.description }}
            </p>
        </div>
        <div class="min-h-12 w-full p-3 flex flex-wrap gap-2 items-start justify-start bg-mineshaft-800 group-hover:bg-mineshaft-700 transition-colors duration-150">
            <div
                v-for="tag of tool.tags"
                :key="tag"
                @click.stop.prevent
            >
                <ToolTag :tag="tag" />
            </div>
        </div>
    </div>
</template>