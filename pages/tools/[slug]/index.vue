<script lang="ts" setup>
import { useRouteParams } from "@vueuse/router";

definePageMeta({
    layout: "app",
});

const toolSlug = useRouteParams("slug");
const toolId = computed(() => {
    return toolSlug.value!.toString().split("--")[1];
});

const tool = await GqlGetToolById({id: toolId.value});

</script>

<template>
    <div class="max-w-[100vw] p-4 overflow-hidden">
        <pre>{{ tool }}</pre>
    </div>
</template>