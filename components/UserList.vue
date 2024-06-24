<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { IUser } from "@/types/user.type";
// import type { IUser } from "@/types/user.type";
// const { $api, $toast } = useNuxtApp();

interface UserListProps {
  users: IUser[];
  isLoadMore: boolean;
  isLoading: boolean;
}
const props = defineProps<UserListProps>()

const emit = defineEmits(["update"]);
// const props = defineProps<UserListProps>({
//   users: {
//     type: Array,
//     required: true,
//   },
//   isLoadMore: {
//     type: Boolean,
//     required: true,
//   },
//   isLoading: {
//     type: Boolean,
//     required: true,
//   },
  // params: {
  //   required: true,
  //   page: {
  //     type: Number,
  //     required: true,
  //   },
  //   count: {
  //     type: Number,
  //     required: true,
  //   },
  //   isLoadMore: {
  //     type: Boolean,
  //     required: true,
  //   },
  //   isLoading: {
  //     type: Boolean,
  //     required: true,
  //   },
  // },
// })

// const users = ref<IUser[]>([]);
// let page = 1;
// let count = 6;
// let isLoadMore = ref(false)
// let isLoading = ref(true)



// const loadUsers = async () => {
//   try {
//     const { data } = await $api(`/users?page=${page}&count=${count}`)
//     if(data.success) {
//       isLoadMore.value = true
//       users.value.push(...data.users)
//       if (data.total_pages === page) {
//         isLoadMore.value = false
//       }
//       page++;
//       isLoading.value = false
//     } 
//   } catch (error) {
//     $toast(error.message, "error")
//   }  
// };

// const loadMore = () => loadUsers();
// onMounted(() => loadUsers());
</script>

<template>
  <div id="users">
    <div id="users" class="user-list">
      <h1 class="user-list--title">Working with GET request</h1>
      <div class="user-list--items">
        <div class="usr-card" v-for="user in users" :key="user.id">
          <UiUserCard class="usr-card" :user="user" />
        </div>
      </div>
      <UiLoader v-if="isLoading" />
      <UiButton v-if="isLoadMore"  @click="emit('update')"> Show more </UiButton>
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
    @media (max-width: 768px) {
      width: 320px;
    }
  }
  .user-list--items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 20px;
    padding: 50px 0;
    @media (min-width: 1170px) {
      justify-content: space-between;
    }
    .usr-card {
      margin: 0 auto;
    }
  }
  // width: 100%;
}
</style>
