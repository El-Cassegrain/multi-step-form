<template>
    <!-- Third step -->
    <section id="third-step">

        <div class="row mt-4 px-2">
            <div class="col-12">
                <h1 class="h2 fw-bold"> Pick add-ons</h1>
                <p class="pt-1">
                    Add-ons help enhance your gaming experience.
                </p>
            </div>
        </div>

        <!-- Form 3 -->
        <form class="row justify-content-xl-between px-3 pe-xl-0" :id="`form${step}`" for="addons" @change="updateSelectedAddons">

            <!-- Addons -->
            <div class="col-12 mt-2 addon rounded" v-for="(addon, index) in addons">
                <label :for="addon.name" class="addon-label"></label>
                <input v-model="addon.checked" :data-price="addon.billings.filter((billing) => billing.period ===
    currentPeriod)[0].price" :value="addon.name" type="checkbox"
                    class="form-check-input mt-0" :id="addon.name">
                <div class="form-check">
                    <div class="form-check-content">
                        <h2 class="my-1">{{ addon.name }}</h2>
                        <span class="text-cool-gray">{{ addon.subtitle }}</span>
                    </div>
                    <div class="price text-secondary d-inline-flex fs-6 fw-medium">
                        {{ `+\$${addon.billings.filter((billing) => billing.period ===
    currentPeriod)[0].price}/${currentCurrency}`
                        }}
                    </div>
                </div>
            </div>

        </form>
    </section>

</template>

<script setup>
let currentPeriod = props.formValues.selectedPlan.billing
let currentCurrency = props.formValues.selectedPlan.currency
let selectedAddons = props.formValues.selectedAddons
selectedAddons.billing = currentPeriod
selectedAddons.currency = currentCurrency
const addons = props.formValues.addons

function updateSelectedAddons(e) {
    if (e.target.checked) { //add
        selectedAddons.name.push(e.target.value)
        selectedAddons.price.push(e.target.getAttribute("data-price"))

    } else { //remove
        let indexPrice = selectedAddons.price.indexOf(e.target.getAttribute("data-price"))
        let indexName = selectedAddons.name.indexOf(e.target.value)
        if (indexName !== -1 && indexPrice !== -1) {
            selectedAddons.name.splice(indexName, 1)
            selectedAddons.price.splice(indexPrice, 1)
        }
    }
}

const props = defineProps({
    step: Number,
    formValues: Object,
})

</script>