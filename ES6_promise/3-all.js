import{uploadPhoto, createUser} from './utils.js';
export default function handleProfileSignup() {
const allpromises = [uploadPhoto(), createUser()];
return Promise.all(allpromises)
.then((value) => {
    const photo = value[0];
    const user = value[1];
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
})
.catch((error) => {
    console.log('Signup system offline');
}
)}

