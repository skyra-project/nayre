<template>
	<section class="body-font">Hello There!</section>

	{{ players }}
</template>

<script setup lang="ts">
definePageMeta({ auth: false });

const headers = useRequestHeaders(['cookie']) as HeadersInit;
const players = await useFetch('/api/universes', { headers });
</script>
