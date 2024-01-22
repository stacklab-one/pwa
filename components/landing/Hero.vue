<script lang="ts" setup>
</script>

<template>
    <div class="h-appHeight pt-40">
        <div class="flex items-start justify-between">
            <div class="w-1/3 flex flex-col gap-10">
                <h1 class="text-6xl font-bold text-center">
                    Welcome to Stacklab
                </h1>
                <div>
                    <h2 class="font-light text-center text-xl text-wrap">
                        your 
                        <span class="text-bermuda-400 font-medium">collection</span> 
                        of web tool 
                        <span class="text-bermuda-400 font-medium">to save time</span>
                        and be informed
                    </h2>
                </div>
                <div class="flex flex-col gap-8">
                    <UButton
                        class="w-full flex justify-center font-normal py-2 text-lg rounded-xl"
                        variant="solid"
                    >
                        Share a stack
                    </UButton>
                    <UButton
                        class="w-full flex justify-center font-normal py-2 text-lg rounded-xl"
                        variant="outline"
                    >
                        Explore trending stacks
                    </UButton>
                </div>
            </div>
            <div class="w-3/5 bg-gray-600 h-[60vh]" />
        </div>
    </div>
</template>