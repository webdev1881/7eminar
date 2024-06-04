<script setup lang="ts">
import { useUsersStore } from '@/store/users'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

useSeoMeta({title: "Filter | 7eminar" })

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))
const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})
const showModal = ref(false)
const currentUser = ref({})
const rangePrice = ref([0, 3000]);
const { users }  = useUsersStore()
const currentPage = ref(1);
const itemsPerPage = 3;

const filteredUsers = computed(() => {
  return users.map((user: any) => {
    const filteredInfo = user.info.filter((item: any) => item.price >= rangePrice.value[0] && item.price <= rangePrice.value[1]);
    return { ...user, filteredInfo };
  })
  .filter((user: any) => user.filteredInfo.length > 0);
})
const onClickHandler = (page: any) => {
  currentPage.value = page;
  scrollToTop();
};

const totalUsers = computed(() => {
  if (Array.isArray(users)) {
    return users.length;
  } else {
    return 0;
  }
});

const displayedUsers = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredUsers.value.slice(startIndex, endIndex)
  return Array.isArray(users)
    ? users.slice(startIndex, endIndex)
    : [];
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  scrollToTop();
});

</script>



<template>
  <div class="container max-w-3xl mb-2">

    <MyModal :user="currentUser" :isOpen="showModal" @close-modal="showModal = false" />

    <div class="filter w-300 pb-10">
      <div class="title text-lg font-bold py-3">Фільтр</div>
      <div class="w range flex content-center items-center">
        <span class="span-title w-44">Фільтрувати за ціною</span>
        <div class="price mr-5 w-[130px]"> від: {{  rangePrice[0] }} до: {{  rangePrice[1] }}</div>
        <UiSlider v-model="rangePrice" :min="0" :max="3000" :step="10" class=" my-slider w-72 " />
      </div>
    </div>

    <div class="cardList">

        <div class="header flex justify-between mb-3">
            <div class="title text-xl font-bold pb-3 ">Список карток</div>
            <UiButton  @click="currentUser = {}; showModal = true " text-sm class="text-base px-8 hover:bg-neutral-900 text-sm" size="sm" >Додати картку</UiButton>
        </div>

        <Card v-for="user in displayedUsers" :key="user.id" class="mb-5" >

          <div class="card_header flex justify-between items-center">
            <div class="name text-lg font-medium">{{ user.name }} {{ user.surname }}</div>
            <UiButton  @click="currentUser = user; showModal = true " variant="link" size="icon">
              <img src="@/assets/icons/edit.svg" alt="" class="edit w-6">
            </UiButton>
          </div>
          <div class="description mb-2 ml-2">{{ user.description }}</div>

          <div class=" info text-lg font-medium flex justify-between items-center mb-2">
            <div class="description-title">Дати консультацій</div>
            <UiButton  variant="link" size="icon">
              <img src="@/assets/icons/sort.svg" alt="" class="edit w-7">
            </UiButton>
          </div>

          <div v-for="(date, index) in user.info" :key="index" class="dates flex justify-between w-full text-white text-xs bg-primary rounded p-3 mb-2">
            <div class="info">{{ date.date }}</div>
            <div class="info">{{ date.startTime }}</div>
            <div class="info">{{ date.endTime }}</div>
            <div class="info">{{ date.price }}</div>
            <div class="info justify-self-end">{{ date.type }}</div>
          </div>

        </Card> 

    </div>

    <div class="pagination flex justify-center mb-4">
      <vue-awesome-paginate
        :total-items="totalUsers"
        :items-per-page="itemsPerPage"
        v-model="currentPage"
        :max-pages-shown="3"
        :on-click="onClickHandler"
        paginate-buttons-class="btn"
        active-page-class="btn-active"
        back-button-class="back-btn"
        next-button-class="next-btn"
      />
    </div>
    <div ref="top" class="mb-5" ></div>

    
    
  </div>
</template>


<style>
.pagination-container {
  @apply flex gap-x-2.5;
}
.paginate-buttons {
  @apply h-10 w-10 cursor-pointer bg-[rgb(242,242,242)] border text-[black] rounded-[20px] border-solid border-[rgb(212,16,16)] hover:bg-[#d8d8d8];
}
.btn {
  @apply h-10 w-10 cursor-pointer border border-[none] border-solid border-[silver];
  margin-inline: 5px;
}
.back-btn {
  @apply bg-[black] text-[white] pb-1 rounded-[3px];
}
.next-btn {
  @apply bg-[black] text-[white] pb-1 rounded-[3px];
}
.btn-active {
  @apply bg-[#303030] text-[white] rounded-[3px] hover:bg-neutral-900;
}

</style>


<style scoped>

.pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }

.my-slider > span {
  background-color: red!important;
  color: red!important;
}
</style>
