import { collection, addDoc } from 'firebase/firestore';
import { db } from '../components/Firebase';

export default async function useAddDoc(collectionName, data) {
  await addDoc(collection(db, collectionName), data);
}
