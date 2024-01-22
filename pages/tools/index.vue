<script lang="ts" setup>
import type { SearchTool } from "~/components/tool/SearchListPreview.vue";

definePageMeta({
    layout: "app",
});

const filterText = ref("");
const index = await useMeiliSearch("tools");

function getToolSlug(tool: SearchTool): string {
    return `${tool.name.replace(" ", "-").toLowerCase()}--${tool.id}`;
}

const tools = ref<SearchTool[]>([]);

watchEffect(async () => {
    const response = await index.search(filterText.value, {
        limit: filterText.value ? 50 : 500,
        showRankingScore: true,
    });
    tools.value = (response.hits as SearchTool[]).sort((a, b) => {
        return b.score - a.score;
    });
});

</script>

<template>
    <div class="px-12">
        <div class="sticky top-0 bg-background shadow-2xl z-10">
            <SectionTitleBar 
                v-model:searchValue="filterText"
                icon="icon-park-outline:toolkit"
                icon-class="text-4xl" 
                :title="`Tools`"
                :is-searchable="true"
            />
        </div>
        <div class="grid lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1fr] 2xl:grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-16 mt-8 pb-8 bg-background relative">
            <div
                v-for="tool of tools"
                :key="tool.id"
            >
                <NuxtLink
                    :to="`/tools/${getToolSlug(tool)}`"
                    class="h-full flex w-full"
                >
                    <ToolSearchListPreview
                        :tool="tool"
                        class="w-full"
                    />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>