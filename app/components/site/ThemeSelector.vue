<template>
    <div>
        <div class="flex justify-center items-center rounded-full bg-gray-500 text-white">
            <button 
                v-for="theme of ['system', 'light', 'dark', 'sepia']"
                :key="theme"
                @click="$colorMode.preference = theme"
                class="flex cursor-pointer relative top-0 p-2 rounded-full border-2 border-gray-500"
                :class="{
                    'border-white!': !$colorMode.unknown && theme === $colorMode.preference
                }"
            >
                <Icon :name="iconName(theme)" class="size-[1rem]!" />
            </button>
        </div>
    </div>
</template>
<script setup>
function iconName(theme) {
    return {
        system: "i-ph-laptop",
        light: "i-ph-sun",
        dark: "i-ph-moon",
        sepia: "i-ph-coffee"
    }[theme]
}
</script>