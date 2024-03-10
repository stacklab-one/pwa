<script lang="ts" setup>
import type { SearchCategory } from "~/components/category/SearchListPreview.vue";

definePageMeta({
    layout: "app",
});

const filterText = ref("");
const index = await useMeiliSearch("categories");

function getCategorySlug(category: SearchCategory): string {
    return `${category.name.replace(" ", "-").toLowerCase()}--${category.id}`;
}

const categories = ref<SearchCategory[]>([]);

watchEffect(async () => {
    const response = await index.search(filterText.value, {
        limit: filterText.value ? 50 : 500,
        showRankingScore: true,
    });
    categories.value = (response.hits as SearchCategory[]).sort((a, b) => {
        return b.score - a.score;
    });
});

</script>

<template>
    <div class="px-12">
        <div class="sticky top-0 bg-background shadow-2xl z-10">
            <SectionTitleBar 
                v-model:searchValue="filterText"
                icon="icon-park-outline:folder-open"
                icon-class="text-4xl" 
                :title="`Categories`"
                :is-searchable="true"
            />
        </div>
        <div class="grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr] gap-16 mt-8 pb-8 bg-background relative">
            <div
                v-for="category of categories"
                :key="category.id"
            >
                <NuxtLink
                    :to="`/tools/${getCategorySlug(category)}`"
                    class="h-full flex w-full"
                >
                    <CategorySearchListPreview
                        :category="category"
                        class="w-full"
                    />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>