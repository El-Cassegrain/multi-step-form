import { defineStore } from 'pinia'
import { ref } from 'vue'

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useFormValuesStore = defineStore('form-values', {
  state: () => ({
    name: '',
    email: '',
    tel: '',
    plans: [
      {
        name: "Arcade",
        img: "assets/images/icon-arcade.svg",
        billings: [
          {
            period: "Monthly",
            currency: 'mo',
            price: 9,
          },
          {
            period: "Yearly",
            currency: 'yr',
            price: 90,
          },
        ],
      },
      {
        name: "Advanced",
        img: "assets/images/icon-advanced.svg",
        billings: [
          {
            period: "Monthly",
            currency: 'mo',
            price: 12,
          },
          {
            period: "Yearly",
            currency: 'yr',
            price: 120,
          },
        ],
      },
      {
        name: "Pro",
        img: "assets/images/icon-pro.svg",
        billings: [
          {
            period: "Monthly",
            currency: 'mo',
            price: 15,
          },
          {
            period: "Yearly",
            currency: 'yr',
            price: 150,
          },
        ],
      },
    ],
    addons: [
      {
        name: 'Online service',
        subtitle: 'Access to multiplayer games',
        billings: [
          {
            period: "Monthly",
            currency: 'mo',
            price: 1,
          },
          {
            period: "Yearly",
            currency: 'yr',
            price: 10,
          },
        ],
      },
      {
        name: 'Larger Storage',
        subtitle: 'Extra 1TB of cloud save',
        billings: [
          {
            period: "Monthly",
            currency: 'mo',
            price: 2,
          },
          {
            period: "Yearly",
            currency: 'yr',
            price: 20,
          },
        ],
      },
      {
        name: 'Customizable profile',
        subtitle: 'Custom theme on your profile',
        billings: [
          {
            period: "Monthly",
            currency: 'mo',
            price: 2,
          },
          {
            period: "Yearly",
            currency: 'yr',
            price: 20,
          },
        ],
      }
    ],
    totalPrice: '',
    selectedPlan: {
      name: ref('Arcade'),
      price: ref(9),
      billing: ref('Monthly'),
      currency: ref('mo'),
    },
    billing: {
      monthly: true,
      yearly: false
    },
    selectedAddons: {
      name: [],
      price: [],
      billing: '',
      currency: ''
    },
    currentPeriod: ref('Monthly'),
    currentCurrency: ref('mo'),
    currentPlan: ref('Arcade')
  }),
  actions: {
    updateBilling () {
      this.billing.monthly = !this.billing.monthly
      this.billing.yearly = !this.billing.yearly
    }
  }
} 
)