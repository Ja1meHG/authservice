import type IUser from '@/Interface/IUser' //Interfaz
import { ref } from 'vue' // función de reactividad
import type { Ref } from 'vue' // La interfaz de reactividad (ref)

//AQUI ES PARA OBTENER LA INFORMACIÓN DEL ENV
const url = import.meta.env.VITE_API_URL ||  "http://172.16.107.120:3000"

//Declarando y exportando la clase
export default class UserService {
  //Datos reactivos
  private Users: Ref<IUser[]>
  private User: Ref<IUser>

  //AQUI SE INICIALIZAN LOS DATOS
  constructor() {
    this.Users = ref([])
    this.User = ref({}) as Ref<IUser>
  }
  //Son Los getters
  getUsers(): Ref<IUser[]> {
    return this.Users
  }
  getUser(): Ref<IUser> {
    return this.User
  }

  async fetchAll(): Promise<void> {
    try {
      const json = await fetch(url + '/Users')
      const response = await json.json()
      this.User.value = await response
    } catch (error) {
      console.log(error)
    }
  }

  async fetchUser(Gmail: string): Promise<void> {
    try {
      const json = await fetch(url + '/User/' + Gmail)
      const response = await json.json()
      this.User.value = await response
    } catch (error) {
      console.log(error)
    }
  }

  async fetcCreate(Gmail: string, Name: string, password: string): Promise<void>{
  try{
  const create = await fetch(url + '/register'+'&nombre'+ Name +'&correo'+Gmail+'&contra='+password, {
    method : 'POST',
    headers : {
    'Content-Type': 'application/json'
    }
  })
  }catch(error){
  console.log(error)
  }
}

}
