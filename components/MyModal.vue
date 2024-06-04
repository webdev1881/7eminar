<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { defineProps } from 'vue'
import * as Yup from 'yup';

// const form = useForm({
//   validationSchema: formSchema,
// })

interface loginForm {
    name: string;
    surname: string;
    description?: string;
    info: {};
}

const props = defineProps({
	user: {
		type: Object,
		default: '',
	},
  isOpen: {
		type: Boolean,
		default: false,
	},
})
let loginForm = props.user

const clearForm  = ()=> {
    loginForm = {
    name: '',
    surname: '',
    description: '',
    info: {}
  }
}

watch(props, () => {
  console.log(props);
  loginForm = props.user
})
const isOpenForm = ref(true)
const { handleSubmit, defineField, handleReset } = useForm({
	initialValues: {
		user: props.user,
	},
})
const { errors, setErrors, setFieldValue } = useForm<LoginForm>();
const { errorMessage, meta, value } = useField('fieldName');
const [name, nameAttrs] = defineField('name')
const schema = Yup.object().shape({
  name: Yup.string().required(),
});

</script>


<template>

  <div  v-if="isOpen" class="modal-overlay "  >
    <div class="modal container  max-w-2xl">
      <img @click="$emit('close-modal'); clearForm() " src="@/assets/icons/close.svg" alt="" class="close w-6">

      <form class="w-full" @submit="onSubmit">

        <div class="grid w-full items-center gap-1.5 mb-5">
          <UiLabel for="email">Ім'я працівника</UiLabel>
          <UiInput v-model="loginForm.name" id="email" type="email" placeholder="" class="h-7" />
        </div>

        <div class="grid w-full items-center gap-1.5 mb-5">
          <UiLabel for="email">Прізвище працівника</UiLabel>
          <UiInput v-model="loginForm.surname" id="email" type="email" placeholder="" class="h-7" />
        </div>

        <div class="grid w-full items-center gap-1.5 mb-5">
          <UiLabel for="email">Про працівника</UiLabel>
          <UiTextarea v-model="loginForm.description" />
        </div>

        <div  v-for="(info, index) in loginForm.info" :key="index"  class="info mb-7">
          <div class="date"> {{ info.date }} </div>
          <div class="info-wrapper">

            <div class="time-price flex justify-between gap-2 bg-primary text-white text-xs p-2">

              <div class="start w-1/3 relative">
                <div class="title mb-1">Початок</div>
                <UiInput v-model="info.startTime" id="email" type="email" placeholder="" class=" inpt h-7 bg-white text-primary" >
                  <img src="@/assets/icons/clock.svg" alt="" class="info-icon w-6">
                </UiInput>
              </div>
              <div class="end w-1/3 relative">
                <div class="title mb-1">Кінець</div>
                <UiInput v-model="info.endTime" id="email" type="email" placeholder="" class=" inpt h-7 bg-white text-primary" >
                  <img src="@/assets/icons/clock.svg" alt="" class="info-icon w-6">
                </UiInput>
              </div>
              <div class="price w-1/3 relative">
                <div class="title mb-1">Ціна</div>
                <UiInput v-model="info.price" id="email" type="email" placeholder="" class=" inpt h-7 bg-white text-primary" >

                </UiInput>
              </div>

            </div>
          </div>
        </div>

        <div class="control w-fill flex justify-between">
          <UiButton class="  bg-white bor text-primary px-8 hover:bg-neutral-200 text-sm" size="sm" >Видалити</UiButton>
          <UiButton class="  px-8 hover:bg-neutral-900 text-sm" size="sm" >Зберегти</UiButton>
        </div>

      </form>

      <slot />

    </div>
    <div class="close" @click="$emit('close-modal')"></div>
  </div>
</template>



<style scoped>

.modal-overlay {
  @apply fixed flex justify-center bg-[#000000da] z-[2] inset-0;
}
.modal {
  @apply flex flex-col items-center relative bg-[white] h-fit w-[380px] mt-[1%] p-[23px] rounded-[20px];
}
.close {
  @apply absolute top-[-27px] cursor-pointer ml-4 mr-0 mt-[10%] mb-0 right-5;
}
.close-img {
  @apply w-[25px];
}
.check {
  @apply w-[150px];
}
h6 {
  @apply font-medium text-[28px] mx-0 my-5;
}
p {
  @apply text-base mx-0 my-5;
}
.inpt {
  @apply relative;
}
.info-icon {
  @apply absolute right-0 top-[22px];
}
.bor {
  @apply border border-solid border-[#303030];
}

</style>
