<template>
    <div>
    <!-- Thanks section -->
    <section id="thanks-section">
        <div class="row">
            <div class="col-12 text-center pt-5 pb-4">
                <img :src="`${baseUrl}assets/images/icon-thank-you.svg`" alt="">
            </div>
            <div class="col-12 text-center">
                <h2 class="fw-bold">Thank you!</h2>
                <p class="text-cool-gray px-2 pt-1">
                    Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free
                    to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    </section>
    </div>
</template>

<script setup>

defineProps({
  step: Number
})

const baseUrl = import.meta.env.BASE_URL

</script>