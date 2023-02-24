<template>
  <div class="container-fluid container-xl mb-xl-4 pb-xl-3" id="bg-top">
    <div class="row justify-content-center justify-content-xl-start">

      <Sidebar v-bind:step="step"></Sidebar>

      <!-- Main -->
      <div class="col-10 col-sm-8 col-lg-7 offset-xl-1 mt-5 mt-xl-3 pt-xl-4 px-xl-5 pb-4 position-relative"
        id="main-steps">
        <main>

            <Step1 v-bind:form-values="values" v-if="step === 0" v-bind:step="step" v-bind:next-step="nextStep"
              v-bind:validate-form="validateForm">
            </Step1>

            <keep-alive>
              <Step2 v-bind:form-values="values" v-if="step === 1" v-bind:step="step">
              </Step2>
            </keep-alive>
          
            <Step3 v-bind:form-values="values" v-if="step === 2" v-bind:step="step">
            </Step3>

            <Step4 v-bind:form-values="values" v-if="step === 3" v-bind:step="step" @back-to-plan="handleBackToPLan">
            </Step4>

            <Thanks v-if="step === 4" v-bind:step="step"></Thanks>
        </main>

        <!-- Footer desktop -->
        <footer id="main-desktop-footer" class="mt-5 pt-5 pt-xl-0 mt-xl-0 d-none d-xl-block">
          <div class="row bg-white justify-content-center">
            <div class="px-xl-5" id="footer-desktop">
              <div class="row align-items-center">

                <!-- Previous btn desktop-->
                <div class="col-6 py-3">
                  <button type="button" id="back-btn" v-bind:class="{ 'd-none': step === 0 }"
                    v-on:click="previousStep()">Go Back</button>
                </div>

                <!-- Next btn desktop -->
                <div class="col-6 text-end py-3">
                  <button class="btn btn-primary py-2 px-4" id="next-btn" type="submit" v-on:click.once="validateForm()"
                    v-if="step === 0" :form="`form${step}`">
                    Nextstep
                  </button>

                  <button class="btn btn-primary py-2 px-4" id="next-btn" v-on:click="nextStep()"
                    v-bind:class="[step > 2 ? 'd-none' : 'd-inline-flex']" v-else>
                    Nextstep
                  </button>

                  <!-- Confirm btn desktop -->
                  <button class="btn btn-secondary py-2 px-4" id="next-btn" type="submit"
                    v-bind:class="[!(step === 3) ? 'd-none' : 'd-inline-flex']" v-on:click="nextStep()">
                    Confirm</button>
                </div>

              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>

  <!-- Footer mobile -->
  <footer id="main-mobile-footer" class="bg-white d-xl-none">
    <div class="row bg-white justify-content-center">
      <div class="col-10 col-sm-8 col-lg-7 px-2">
        <div class="row align-items-center">

          <!-- Prev btn mobile -->
          <div class="col-6 py-3">
            <button type="button" class="btn btn-outline py-2" id="back-btn" tabindex="0"
              v-bind:class="{ 'd-none': step === 0 }" v-on:click="previousStep()">Go
              Back</button>
          </div>

          <!-- Next btn mobile -->
          <div class="col-6 text-end py-3">

            <!-- First step Once-->
            <button class="btn btn-primary py-2 px-4" v-if="step === 0" id="next-btn" :form="`form${step}`"
              v-on:click.once="validateForm()">Nextstep</button>

            <!-- Second and others steps-->
            <button class="btn btn-primary py-2 px-4" v-else id="next-btn"
              v-bind:class="{ 'd-none': step >= 3 }" v-on:click="nextStep()">Nextstep</button>

            <!-- Confirm btn mobile -->
            <button class="btn btn-secondary py-2 px-4" id="next-btn" type="submit"
              v-bind:class="[!(step === 3) ? 'd-none' : 'd-inline-flex']" v-on:click="nextStep()">
              Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <div class="attribution text-center py-2 d-none d-xl-flex justify-content-xl-center w-100">
    <small>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://etienneleriche.fr/">Etienne Leriche</a>.
    </small>
  </div>
</template>

<script setup>
import Sidebar from './SubscriptionParts/Sidebar.vue'
import Step1 from './SubscriptionParts/Step1.vue'
import Step2 from './SubscriptionParts/Step2.vue'
import Step3 from './SubscriptionParts/Step3.vue'
import Step4 from './SubscriptionParts/Step4.vue'
import Thanks from './SubscriptionParts/Thanks.vue'
import { useFormValuesStore }  from './../store/useFormValues'
import { ref } from 'vue'

const step = ref(0)

const values = useFormValuesStore()

const previousStep = () => {
  step.value--
}

const nextStep = () => {
  step.value++
}

const handleBackToPLan = () => {
  step.value = 1
}

const validateForm = () => {
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        nextStep()

      }
      form.classList.add('was-validated')
    }, false)
  })
}

</script>