import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Storage } from "./firebase";

const upload = async (file) => {
    const date = new Date()
    const storageRef = ref(Storage,`images/${date + file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`);
                
            }, 
            (error) => {
                reject(`Something went wrong! ${error.code}`);
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                }).catch((error) => {
                    reject(`Failed to get download URL! ${error.code}`);
                });
            }
        );
    });
};

export default upload;
