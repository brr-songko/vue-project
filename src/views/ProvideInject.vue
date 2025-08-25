<template>
    <ProvideInjectChild />
</template>
<script>
import ProvideInjectChild from '@/components/ProvideInjectChild.vue';

export default {
    components: {
        ProvideInjectChild
    },
    data() {
        return {
            items: ['A', 'B']
        };
    },
    provide() {
        return {
            itemlength: this.items.length
        };
    }
}
</script>