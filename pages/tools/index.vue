<script lang="ts" setup>
import type { GetAllToolsForPreviewQuery } from "#gql";


definePageMeta({
    layout: "app",
});

const tools = await GqlGetAllToolsForPreview();
const filterText = ref("");

function getToolSlug(tool: GetAllToolsForPreviewQuery["tools"][number]): string {
    return `${tool.name.replace(" ", "-").toLowerCase()}--${tool.id}`;
}

</script>

<template>
    <div class="px-12">
        <SectionTitleBar 
            v-model:searchValue="filterText"
            icon="icon-park-outline:toolkit"
            icon-class="text-4xl" 
            title="Tools"
            class="sticky top-0 bg-background shadow-2xl"
            :is-searchable="true"
        />
        <div class="grid grid-cols-[1fr_1fr_1fr_1fr] gap-8 mt-8">
            <div
                v-for="tool of tools.tools"
                :key="tool.id"
            >
                <NuxtLink
                    :to="`/tools/${getToolSlug(tool)}`"
                >
                    <ToolListPreview :tool="tool" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>