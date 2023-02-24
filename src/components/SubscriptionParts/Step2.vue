<template>

  <!-- Second step -->
  <section id="second-step">

    <div class="row mt-4 px-2">
      <div class="col-12">
        <h1 class="h2 fw-bold">Select your plan</h1>
        <p class="pt-1">
          You have the option of monthly or yearly billing.
        </p>
      </div>
    </div>

    <!-- Form 2 -->
    <form class="row justify-content-xl-between px-3 pe-xl-0" :id="`form${step}`" for="plan"
      @change="updateSelectedPlan">

      <!-- Plans -->
      <div v-for="(plan, index) in plans" :key="index" class="col-12 col-xl plan mt-3 p-0">
        <label :for="plan.name" class="plan-label"></label>
        <input class="plan-input" type="radio" :id="plan.name" :value="plan.name"
          :checked="currentPlan === plan.name" />
        <div class="plan-content card ps-2">
          <div class="plan-icon mt-1">
            <img :src="plan.img" alt="">
          </div>
          <div class="plan-description">
            <span class="plan-title">{{ plan.name }}</span>
            <div class="amount fs-6 fw-medium text-cool-gray pt-1">
              {{ `\$${plan.billings.filter((billing) => billing.period === currentPeriod)[0].price}/${currentCurrency}`
              }}
            </div>
            <div class="text-primary" v-if="currentPeriod === 'Yearly'">
            2 months free</div>
          </div>
        </div>
      </div>
    </form>

    <!-- Switch billing -->
    <div class="col-12 py-3 rounded">
      <div class="row bg-alabaster justify-content-center mx-1">
        <div class="col-10 col-sm-8 py-2 d-flex justify-content-between align-items-center">
          <div class="d-inline-flex align-items-center" :class="{'text-cool-gray': currentPeriod === 'Yearly', 'text-secondary': currentPeriod === 'Monthly'}">Monthly</div>
            <input type="checkbox" role="switch" id="toggle-plan" name="billing" :value="currentPeriod" @change="togglePeriod">
            <label for="toggle-plan"></label>
          <div :class="{'text-secondary': currentPeriod === 'Yearly', 'text-cool-gray': currentPeriod === 'Monthly'}">Yearly</div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { computed, ref } from "vue"

const plans = props.formValues.plans
let selectedAddons = props.formValues.selectedAddons
const addons = props.formValues.addons

let currentPeriod = ref("Monthly")
let currentPlan = ref('Arcade')
let currentCurrency = ref("mo")
let updateBilling = props.formValues.updateBilling
let selectedPlan = props.formValues.selectedPlan
let billing = props.formValues.billing

selectedPlan = computed(() => ({
  name: currentPlan.value,
  billing: currentPeriod,
  price: plans
    .find((plan) => plan.name === currentPlan.value)
    .billings.find((billing) => billing.period === currentPeriod.value).price,
  currency: plans
    .find((plan) => plan.name === currentPlan.value)
    .billings.find((billing) => billing.period === currentPeriod.value).currency
}))

function togglePeriod(e) {
  currentPeriod.value = e.target.checked ? "Yearly" : "Monthly"
  currentCurrency.value = e.target.checked ? "yr" : "mo"
  props.formValues.selectedPlan.currency = currentCurrency.value
  props.formValues.selectedPlan.billing = currentPeriod.value
  updateBilling()
  selectedAddons.name = []
  selectedAddons.price = []
  for(const addon of addons){
    addon.checked = false
  }
}

function updateSelectedPlan(e) {
  props.formValues.selectedPlan.name = e.target.value
  currentPlan.value = props.formValues.selectedPlan.name
}

const props = defineProps({
  step: Number,
  formValues: Object,
})

</script>