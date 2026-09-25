//steps
const PERSONAL_INFO = 'personalInfo';
const PLAN = 'plan';
const ADD_ONS = 'addOns';
const SUMMARY = 'summary';
const THANK_YOU = 'thankYou';

//events
const NEXT_STEP = 'nextStep';
const PREVIOUS_STEP = 'previousStep';
const SUBMIT_FORM = 'submitForm';

const transitions = {
  [PERSONAL_INFO]: {
    [NEXT_STEP]: PLAN
  },
  [PLAN]: {
    [PREVIOUS_STEP]: PERSONAL_INFO,
    [NEXT_STEP]: ADD_ONS
  },
  [ADD_ONS]: {
    [PREVIOUS_STEP]: PLAN,
    [NEXT_STEP]: SUMMARY
  },
  [SUMMARY]: {
    [PREVIOUS_STEP]: ADD_ONS,
    [SUBMIT_FORM]: THANK_YOU,
  },
}

const planPrices = {
  arcade: {
    monthly: {amount: 900},
    yearly: {amount: 9000}
  },
  advanced: {
    monthly: {amount: 1200},
    yearly: {amount: 12000}
  },
  pro: {
    monthly: {amount: 1500},
    yearly: {amount: 15000}
  },
}

const addOns = {
  onlineService: {
    monthly: {amount: 100},
    yearly: {amount: 1000}
  },
  largerStorage: {
    monthly: {amount: 200},
    yearly: {amount: 2000}
  },
  customizableProfile: {
    monthly: {amount: 200},
    yearly: {amount: 2000}
  }
}
