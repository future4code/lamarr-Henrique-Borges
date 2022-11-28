import axios from "axios"

export const infoEndereco = async (cep: string) => {
    try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        return data
    } catch (error: any) {
        throw new Error(error.message)
    }
}