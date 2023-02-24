<template>
    

      <!-- Mobile Nav -->
      <nav class="col-7 col-sm-6 d-flex justify-content-around mt-4 pt-3 d-xl-none" id="mobile-nav">
        <span 
        class="step-number d-inline-flex"
        v-bind:class="[ step === 0 ? 'active' : '']"
        >1
        </span>

        <span 
        class="step-number d-inline-flex"
        v-bind:class="[step === 1 ? 'active' : '']"
        >2
        </span>

        <span 
        class="step-number d-inline-flex"
        v-bind:class="[step === 2 ? 'active' : '']"
        >3
        </span>

        <span 
        class="step-number d-inline-flex"
        v-bind:class="[step >= 3 ? 'active' : '']"
        >4
        </span>
      </nav>

      <!-- Aside desktop -->
      <div class="d-none d-xl-block col-xl-3 mt-3 px-5 pt-5 bg-desktop">
        <aside class="d-none d-xl-flex">
          <nav id="desktop-nav" class="flex-column">

            <!-- Nav 1 -->
            <div class="nav-item">
              <span 
              class="step-number"
              v-bind:class="[step === 0 ? 'active' : '']"
              >1</span>
              <div class="nav-infos">
                <p class="text-uppercase">Step 1 <br>
                  <span class="text-white fw-bold h6">Your Info</span>
                </p>
              </div>
            </div>

            <!-- Nav 2 -->
            <div class="nav-item mt-2">
              <span 
              class="step-number"
              v-bind:class="[step === 1 ? 'active' : '']"
              >2</span>
              <div class="nav-infos">
                <p class="text-uppercase">Step 2 <br>
                  <span class="text-white fw-bold h6">Select Plan</span>
                </p>
              </div>
            </div>

            <!-- Nav 3 -->
            <div class="nav-item mt-2">
              <span 
              class="step-number"
              v-bind:class="[step === 2 ? 'active' : '']"
              >3</span>
              <div class="nav-infos">
                <p class="text-uppercase">Step 3<br>
                  <span class="text-white fw-bold h6">Add-ons</span>
                </p>
              </div>
            </div>

            <!-- Nav 4 -->
            <div class="nav-item mt-2">
              <span 
              class="step-number"
              v-bind:class="[step >= 3 ? 'active' : '']"
              >4</span>
              <div class="nav-infos">
                <p class=" text-uppercase">Step 4 <br>
                  <span class="text-white fw-bold h6">Summary</span>
                </p>
              </div>
            </div>

          </nav>
        </aside>
      </div>

</template>

<script setup>

const stepNb = defineProps({
  step: Number
})

</script>

<style>

</style>