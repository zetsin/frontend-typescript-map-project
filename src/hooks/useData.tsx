import useSWR from "swr"

const useData = () => {
  return useSWR<google.maps.MarkerOptions[]>("/api/data")
}

export default useData