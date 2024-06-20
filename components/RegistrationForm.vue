<template>
  <div class="post-user">
    <h1 class="post-user--title" >Working with POST request</h1>
    <form class="post-user--form" @submit.prevent="handleSubmit">
          <!-- :label="name" -->
        <UiInput
          class="post-user_input"
          v-model="name"
          placeholder="Your name"
          :error="!isValidName"
          :errorText="nameError"
        />
        {{ sName }}
        <UiInput
          class="post-user_input"
          v-model="email"
          placeholder="Email"
          :error="!isValidEmail"
          :errorText="emailError"
        />
        <UiInput
          class="post-user_input"
          v-model="phone"
          placeholder="Phone"
          :error="!isValidPhone"
          :errorText="phoneError"
          helperText="+38 (XXX) XXX - XX - XX"
        />

        <div class="position-group">
          <p>Select your position</p>
          <UiLoader v-if="isLoading" />
          {{ selectedPosition }}
          <div v-for="position in positions" :key="position.id" class="radios">
            <UiRadioButton
              v-model="selectedPosition"
              :value="position.name"
              :label="position.name"
            />
          </div>
        </div>



      <!-- <label class="file-upload">
        <span>Upload</span>
        <input type="file" @change="handleFileUpload" />
        <span>{{ fileName }}</span>
      </label>
      <button :disabled="!isFormValid" type="submit">Sign up</button> -->
      {{ isValidName }}
      {{ isValidEmail }}
      {{ isValidPhone }}
      {{ isFormValid }}
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
const { $api, $toast } = useNuxtApp()
import {
  validateName,
  validateEmail,
  validatePhone,
  validateFile,
} from "@/utils/validation";

let name = ref("");
const email = ref("");
const phone = ref("");
const selectedPosition = ref("")
const sel = ref("")
const file = ref(null);
const positions = ref([]);
let isLoading = ref(true)

const isValidName = computed(() => validateName(name.value).rules)
const nameError = computed(() => validateName(name.value).error())

const isValidEmail = computed(() => validateEmail(email.value).rules)
const emailError = computed(() => validateEmail(email.value).error())

const isValidPhone = computed(() => validatePhone(phone.value).rules)
const phoneError = computed(() => validatePhone(phone.value).error())



watch(name, (newName) => {
  if (newName) { name.value = newName.charAt(0).toUpperCase() + newName.slice(1) }
})

// const isValidFile = computed(() => validateFile(file.value));
// const isFormValid = computed(
//   () =>
//     isValidName.value &&
//     isValidEmail.value &&
//     isValidPhone.value &&
//     selectedPosition.value &&
//     isValidFile.value
// );

const handleFileUpload = (event) => {
  file.value = event.target.files[0];
};

const fileName = computed(() => {
  return file.value ? file.value.name : "Upload your photo";
});

const handleSubmit = () => {
  if (isFormValid.value) {
    // Perform the POST request
    const formData = new FormData();
    formData.append("name", name.value);
    formData.append("email", email.value);
    formData.append("phone", phone.value);
    formData.append("position", selectedPosition.value);
    formData.append("photo", file.value);

    // Example POST request using fetch
    fetch("https://example.com/api/users", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle success
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  }
};

const loadPositions = async () => {
  try {
    const { data } = await $api(`/positions`)
    if(data.success) {
      positions.value.push(...data.positions)

      isLoading.value = false
      if (positions.value.length > 0) {
        selectedPosition.value = positions.value[0].name;
      }


    } 
  } catch (error) {
    // $toast(error.message, "error")
  }  
};

onMounted(() => loadPositions())
</script>

<style scoped>
.post-user {
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.post-user--title {
  text-align: center;
  font-weight: 100;
  margin-bottom: 50px;
}

.post-user_input {
  margin-bottom: 50px;
}


form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.position-group {
  width: 100%;
  margin-bottom: 50px;
}
</style>
