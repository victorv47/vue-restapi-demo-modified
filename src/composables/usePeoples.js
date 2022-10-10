import { ref } from 'vue'
import useApi from '@/composables/useApi'

const peoples = ref([])
const currentPeople = ref(null)
const firstLoad = ref(true)

const api = useApi()
const page = ref(1)

const usePeoples = () => {
  const fetchPeoples = async () => {
    const { data } = await api.instance.get('/peoples', {
      params: {
        page: page.value,
      },
    })
    peoples.value.push(...data.data)
    page.value++
  }

  const fetchPeople = async (id) => {
    const { data } = await api.instance.get(`/peoples/${id}`)
    currentPeople.value = data
  }

  return {
    peoples,
    fetchPeoples,
    fetchPeople,
    currentPeople,
    firstLoad,
  }
}

export default usePeoples
