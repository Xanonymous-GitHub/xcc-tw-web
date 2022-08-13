<template>
  <Home mb-6 mx-auto />
  <Suspense>
    <template #fallback>
      <div op50 italic>
        <span animate-pulse>Loading...</span>
      </div>
    </template>
  </Suspense>
</template>
