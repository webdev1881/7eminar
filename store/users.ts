// import defineStore from 'pinia'
import { USERS } from '@/api/users'

interface UserInfo {
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  type: string;
}

interface User {
  id: number;
  name: string;
  surname: string;
  description: string;
  info: UserInfo[];
}

const defaultUser: { user: User } = {
	user: {
		id: 0,
        name: '',
        surname: '',
        description: '',
        info: [],
	},
}

export const useUsersStore = defineStore('users', {
	state: () => ({
		users: USERS,
	  }),
	getters: {
		getUserById: (state) => {
			return (userId: number) => USERS.find((user) => user.id === userId)
		},
		getUsers: (state) => state.users,
	},
	// actions: {
	// 	clear() {
	// 		this.$patch(defaultUser)
	// 	},
	// 	set(input: User) {
	// 		this.$patch({ user: input })
	// 	},
	// },
})
