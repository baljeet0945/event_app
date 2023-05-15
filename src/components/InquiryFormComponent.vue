<script setup>
import {useForm, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

import FormStep  from './FormStep.vue';
import FormWizard  from './FormWizard.vue';

const { handleSubmit, setFieldError, setErrors } = useForm();
// break down the validation steps into multiple schemas
const validationSchema = [
  yup.object({
    event: yup
      .string()
      .required()
      .oneOf(['dj', 'party', 'beer'], 'Choose a event'),
    fullName: yup.string().required().label('Full Name'),
    email: yup.string().required().email().label('Email Address'),
    phone: yup.string().required().label('Phone')
  }),
  yup.object({
    dateevent: yup.string().required().label('Date of Event'),
    location: yup.string().required().label('Event Location'),
    venue: yup.string().required().label('Venue')    
  }),
  yup.object({
    guestCount: yup.string().required().label('Estimated Guest Count'),
    eBudget: yup.number().required().positive().integer().label('Estimated Budget'),
  }),
];


const onSubmit = handleSubmit(async (values, actions)=> {
  // Send data to the API 
  const response = await fetch(APISettings.baseURL + 'event-inquery', {
      method: 'POST',
      headers: APISettings.headers,
      body: JSON.stringify(values)
    });
  // set single field error
  if (response.errors.email) {
    actions.setFieldError('email', response.errors.email);
  }
  // set multiple errors, assuming the keys are the names of the fields
  // and the values is the error message
  actions.setErrors(response.errors);
});
</script>
<template>
    <div class="container" id="Inquiry">
        <div class="contactSec">
          <h2 v-motion-pop-bounce-visible-once>Let’s discuss about your next event</h2>
          <div class="contactSecForm" id="multistepsform"> 
              <!-- progressbar -->
              <ul id="progressbar" class="progressbar" v-motion-left-in-visible-once>
                <li class="active">Event and contact info
                <p>Let us know your event type and contact info</p></li>
                  <li>Event venue
                <p>Please tell about your preferred venue and managements</p></li>
                  <li>Estimated Budget
                <p>We are good with all budgets for awesome events</p></li>
              </ul> 
              <div class="formField" v-motion-right-in-visible-once>
                <FormWizard :validation-schema="validationSchema" @submit="onSubmit">
                  <FormStep>
                    <fieldset>
                      <Field name="event" as="select" >
                        <option>Select a Event</option>
                        <option value="DJNight">DJ Night</option>
                        <option value="dj">DJ</option>
                        <option value="party">Party</option>
                        <option value="beer">Beer</option>
                      </Field>
                      <ErrorMessage name="event" />

                      <Field name="fullName" type="text" placeholder="Full Name" />
                      <ErrorMessage name="fullName" />

                      <Field name="email" type="email" placeholder="Email" />
                      <ErrorMessage name="email" />
                      
                      <Field name="phone" type="text" placeholder="Phone" />
                      <ErrorMessage name="phone" />
                    </fieldset>
                  </FormStep>

                  <FormStep>
                    <fieldset> 
                      <Field name="company" type="text" placeholder="Company" />
                      <ErrorMessage name="company" />

                      <Field name="website" type="text" placeholder="Website" />
                      <ErrorMessage name="website" />
                      
                      <Field name="dateevent" type="text" placeholder="Date of Event" />
                      <ErrorMessage name="dateevent" />

                      <Field name="location" type="text" placeholder="Location (City, State)" />
                      <ErrorMessage name="location" />

                      <Field name="venue" type="text" placeholder="Venue" />
                      <ErrorMessage name="venue" />                      
                    </fieldset>
                  </FormStep>

                  <FormStep>
                    <fieldset> 
                      <Field name="guestCount" type="text" placeholder="Estimated Guest Count" />
                      <ErrorMessage name="guestCount" />

                      <Field name="eBudget" type="number" placeholder="Estimated Budget $" />
                      <ErrorMessage name="eBudget" />
                      
                      <Field name="knowAbout" as="select" >
                        <option>How did you hear about us?</option>                        
                        <option value="dj">DJ</option>
                        <option value="party">Party</option>
                        <option value="beer">Beer</option>
                      </Field>
                      <ErrorMessage name="knowAbout" />

                      <Field name="otherInfo" type="text" placeholder="Additional Information" />
                      <ErrorMessage name="otherInfo" />
                                           
                    </fieldset>
                  </FormStep>
                </FormWizard>          
              </div>         
          </div>
          <div class="contactSecFormMeta">
            <span><a href="mailto:info@moneytrainent.com"><i class="fa-regular fa-envelope"></i> &nbsp;info@moneytrainent.com</a></span>
            <span><a href="tel:(888) 457-1114"><i class="fa-regular fa-phone"></i>&nbsp;(888) 457-1114</a></span>
            <span><i class="fa-regular fa-location-dot"></i> &nbsp;P.O Box 9591 Elizabeth, New Jersey-07202</span>
          </div>
        </div>
    </div>
</template>
<style>
fieldset{position: absolute;}
</style>