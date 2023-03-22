import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const useUserStore = createPinia()
useUserStore.use(piniaPluginPersist)

export default useUserStore