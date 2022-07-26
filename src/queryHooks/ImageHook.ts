import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const getQueryService = () => {
    return {
        getImage: async () => {
            try {
                return await axios.get('https://picsum.photos/200/300')
            } catch (error) {
                console.log(error)
            }
        }
    }
}

const useImageService = () => {
    const service = getQueryService()
    
    const { data: image } = useQuery(["image"], service.getImage)

    return {
        image
    }
}

export default useImageService