<template>
  <!-- Final step -->
  <section id="final-step">

    <div class="row mt-4 px-2" id="final-step">
      <div class="col-12">
        <h1 class="h2 fw-bold">Finishing up</h1>
        <p class="pt-1">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <!-- Plan -->
      <div class="col-12 mt-3 px-2">
        <div class="row justify-content-center bg-alabaster mx-2 rounded">

          <!-- Final plan type -->
          <div class="col-11 px-1 py-3 final-plan-card border-bottom">
            <div class="plan-type">
              <p class="text-primary mb-0 fs-6 fw-semibold">{{ `${props.formValues.selectedPlan.name}
              (${props.formValues.selectedPlan.billing})` }}</p>
              <a href="#!" class="text-cool-gray"  @click.prevent="$emit('back-to-plan')">Change</a>
            </div>
            <div class="final-price d-inline-flex justify-content-end fw-semibold">
              {{ `\$${props.formValues.selectedPlan.price}/${props.formValues.selectedPlan.currency}` }}
            </div>
          </div>

          <!-- Final options -->
          <div class="col-11 px-1 py-3 final-addons">
            <div class="row">
              <div class="col-6 plan-options">
                <p v-for="(addonName, index) in selectedAddons.name" :key="index" class="pb-2 text-cool-gray mb-0 fs-6"
                  v-text="addonName"></p>
              </div>
              <div class="col-6 final-price d-inline-flex flex-column align-items-end">
                <span class="pb-2" v-for="(addonPrice, index) in selectedAddons.price" :key="index">{{
                `+\$${addonPrice}/${props.formValues.selectedPlan.currency}` }}</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Total price -->
        <div class="row justify-content-center">
          <div class="col-11 px-4 py-4 final-plan-card">
            <span class="text-cool-gray">Total (per month)</span>
            <span class="total-price d-inline-flex justify-content-end fw-bold fs-5 text-secondary">{{ sum() }}</span>
          </div>
        </div>

      </div>
    </div>
  </section>

</template>

<script setup>

const selectedAddons = props.formValues.selectedAddons
const selectedPlan = props.formValues.selectedPlan

const sum = () => {
  const initialValue = 0
  const addonsPriceSum = (selectedAddons.price.reduce((a, b) => a * 1 + b * 1, initialValue))
  const total = "\$" + (((selectedPlan.price) * 1) + (addonsPriceSum * 1)) + '/' + props.formValues.selectedPlan.currency
  props.formValues.totalPrice = total
  return total
}

const emit = defineEmits([
  "back-to-plan"
])

const props = defineProps({
  step: Number,
  formValues: Object,
})

</script>