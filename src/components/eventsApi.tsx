import axios from "axios";

export const getEvents = async () => {
  const response = await axios.get("/api/events/now");
  return response.data;
};

export const addEvent = async (event: any) => {
  const response = await axios.post("/api/events/now", event);
  return response.data;
};

export const updateEvent = async (id: any, event: any) => {
  const response = await axios.put(`/api/events/${id}`, event);
  return response.data;
};

export const deleteEvent = async (id: number) => {
  await axios.delete(`/api/events/${id}`);
};

export const getImages = async () => {
  const response = await axios.get('/api/images/image');
  return response.data;
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post('/api/images/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const deleteImage = async (filename: string) => {
  await axios.delete(`/api/images/${filename}`);
};