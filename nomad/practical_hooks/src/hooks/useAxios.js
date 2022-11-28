import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [request, setRequest] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setRequest({
      ...request,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    if (!options.url) return;
    axiosInstance(options)
      .then((data) => {
        setRequest({
          ...request,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setRequest({ ...request, loading: false, error });
      });
  }, [trigger]);
  return { ...request, refetch };
};

export default useAxios;
