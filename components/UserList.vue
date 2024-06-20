<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { IUser } from "@/types/user.type";
const { $api, $toast } = useNuxtApp();

const users = ref<IUser[]>([]);
let page = 1;
let count = 6;
let isLoadMore = ref(false)
let isLoading = ref(true)



const loadUsers = async () => {
  try {
    const { data } = await $api(`/users?page=${page}&count=${count}`)
    console.log(data)
    if(data.success) {
      isLoadMore.value = true
      users.value.push(...data.users)

      if (data.total_pages === page) {
        isLoadMore.value = false
      }
      page++;
      isLoading.value = false
    } 
  } catch (error) {
    $toast(error.message, "error")
  }  
};

const loadMore = () => loadUsers();
onMounted(() => loadUsers());
</script>

<template>
  <div id="users">
    <div id="users" class="user-list">
      <h1 class="user-list--title">Working with GET request</h1>
      <div class="user-list--items">
        <div v-for="user in users" :key="user.id">
          <UiUserCard :user="user" />
        </div>
      </div>
      <UiLoader v-if="isLoading" />
      <UiButton v-if="isLoadMore"  @click="loadMore"> Show more </UiButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 140px 0;
  .user-list--title {
    display: flex;
    justify-content: center;
    text-align: center;
    font-weight: 100;
  }
  .user-list--items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    padding: 50px 0;
  }
  // width: 100%;
}
</style>
