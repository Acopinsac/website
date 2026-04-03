<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <div class="container mx-auto px-4 xl:max-w-5xl prose prose-slate lg:prose-xl mx-auto">
    <UPageHeader
        v-if="page"
        :title="page.title"
        :description="page.description"
      />
  
    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </div>
</template>
