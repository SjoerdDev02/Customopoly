import axios from "axios";
import { useState } from "react";

const useStoreImage = () => {
    const [uploadedImage, setUploadedImage] = useState(null);

    const storeImage = async (image) => {
        const url = '/api/storeImage';
        const imageData = new FormData();
        imageData.append('image', image);

        try {
            const response = await axios.post(url, imageData);
            const data = response.data;
            setUploadedImage(data.filename);
            return data;
        } catch (error) {
            console.error('Error storing image:', error);
            return { error: 'Error storing image' };
        }
    };

    return storeImage;
};

export default useStoreImage;