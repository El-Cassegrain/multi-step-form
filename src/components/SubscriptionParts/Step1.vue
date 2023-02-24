<template>

  <!-- First step -->
  <section id="first-step">
    <div class="row mt-4 px-2">
      <div class="col-12">
        <h1 class="h2 fw-bold">Personal info</h1>
        <p class="pt-1">
          Please provide your name, email address, and phone number.
        </p>

        <!-- Form 1 -->
        <form :id="`form${step}`" class="needs-validation" novalidate>

          <div class="mb-3 position-relative">
            <label for="nameInput" class="form-label  mb-1">Name</label>
            <input type="text" class="form-control" id="nameInput" aria-describedby="nameHelp" placeholder="e.g Stephen King" v-model="props.formValues.name">

            <div class="invalid-feedback">Please enter a name</div>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>

          <div class="mb-3 position-relative">
            <label for="inputEmail" class="form-label mb-1">Email Adress</label>
            <input type="email" pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+" class="form-control"
              id="inputEmail" aria-describedby="emailHelp" placeholder="e.g stephenking@lorem.com" v-model="props.formValues.email">
            <div class="invalid-feedback">Please enter a valid Email Adress</div>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>

          <div class="mb-3 position-relative">
            <label for="inputPhone" class="form-label mb-1">Phone Number</label>
            <input type="tel" pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
              class="form-control" id="inputPhone" placeholder="e.g +1 234 567 890" v-model="props.formValues.tel">
            <div class="invalid-feedback">Please enter a valid Phone Number</div>
            <div class="valid-feedback">Looks good!</div>
          </div>

        </form>
      </div>
    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  step: Number,
  formValues: Object,
  nextStep: Function,
  validateForm: Function
})
</script>