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
    monthly: 900,
    yearly: 9000
  },
  advanced: {
    monthly: 1200,
    yearly: 12000
  },
  pro: {
    monthly: 1500,
    yearly: 15000
  },
}

const addOns = {
  onlineService: {
    monthly: 100,
    yearly: 1000
  },
  largerStorage: {
    monthly: 200,
    yearly: 2000
  },
  customizableProfile: {
    monthly: 200,
    yearly: 2000
  }
}
