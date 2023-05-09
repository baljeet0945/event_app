<script setup>
import { ref } from 'vue'
import 'animate.css';
import { Form, Field } from 'vee-validate';
const step = ref(1)
function nextStep() {
  step.value++
}

function prevStep() {
  step.value--
}
</script>

<template>
    <div class="container">
        <div class="contactSec">
          <h2 v-motion-pop-bounce-visible-once>Let’s discuss about your next event</h2>
          <div class="contactSecForm">
            <!-- multistep form -->
            <form id="multistepsform">
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
              <!-- fieldsets -->
              <Transition            
              mode="out-in"
              enter-active-class="animate__animated animate__bounceInRight"
              leave-active-class="animate__animated animate__bounceOutRight"
              >
                <fieldset v-if="step === 1">
                  <h2 class="fs-title">Select event type</h2>
                  <h3 class="fs-subtitle"></h3>
                  <select name="music" id="music">
                    <option value="DJNight">DJ Night</option>
                    <option value="dj">DJ</option>
                    <option value="party">Party</option>
                    <option value="beer">Beer</option>
                  </select>
                  <input type="text" name="fname" placeholder="Full Name" />
                  <input type="text" name="email" placeholder="Email" />
                  <input type="text" name="phone" placeholder="Phone" />
                  <input type="button" name="next" class="next action-button" value="Continue" @click="nextStep"/>
                </fieldset>
              </Transition>

              <Transition 
                mode="out-in" 
                enter-active-class="animate__animated animate__bounceInRight"
                leave-active-class="animate__animated animate__bounceOutRight"             
              >
                <fieldset v-if="step === 2" >              
                  <h2 class="fs-title">&nbsp;</h2>                
                  <input type="text" name="cmpny" placeholder="Company" />
                  <input type="text" name="wbsite" placeholder="Website" />
                  <input type="text" name="devent" placeholder="Date of Event" />
                  <input type="text" name="location" placeholder="Location (City, State)" />
                  <input type="text" name="vanue" placeholder="Vanue" />                
                  <input type="button" name="previous" class="previous action-button" value="Previous" @click="prevStep"/>
                  <input type="button" name="next" class="next action-button" value="Continue" @click="nextStep"/>
                </fieldset>
              </Transition>

              <Transition 
              mode="out-in" 
              enter-active-class="animate__animated animate__bounceInRight"
              leave-active-class="animate__animated animate__bounceOutRight"            
              >
                <fieldset v-if="step === 3" >             
                  <h2 class="fs-title">&nbsp;</h2>
                  <input type="text" name="gCount" placeholder="Estimated Guest Count" />
                  <input type="text" name="eBudget" placeholder="Estimated Budget $" />
                  <select name="music" id="music">
                    <option value="haboutus">How did you hear about us?</option>
                    <option value="dj">DJ</option>
                    <option value="party">Party</option>
                    <option value="beer">Beer</option>
                  </select>
                  <textarea name="aInformation" placeholder="Additional Information"></textarea>
                  <input type="button" name="previous" class="previous action-button" value="Previous" @click="prevStep"/>
                  <input type="submit" name="submit" class="submit action-button" value="Submit" />
                </fieldset>
              </Transition>
              </div>
            </form>
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


</style>