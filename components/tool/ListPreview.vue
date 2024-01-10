<script setup lang="ts">
import type { GetAllToolsForPreviewQuery } from "#gql";


type Props = {
    tool: GetAllToolsForPreviewQuery["tools"][number];
}

defineProps<Props>();

</script>

<template>
    <div class="flex flex-col items-start justify-start bg-mineshaft hover:bg-mineshaft-600 max-w-60 overflow-hidden rounded-lg shadow-xl">
        <div class="h-16 flex items-center border-b-[0.5px] border-b-mineshaft-200 gap-2 w-full">
            <div class="w-10 flex items-center justify-center">
                <Icon
                    :name="tool.iconIdentifier ?? 'iconamoon:box'"
                    class="text-2xl"
                />
            </div>
            <div>
                <p>{{ tool.name }}</p>
            </div>
        </div>
        <div class="p-3">
            <p class="text-ellipsis h-10">
                {{ tool.description }}
            </p>
        </div>
    </div>
</template>