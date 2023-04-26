import { useState, useEffect } from 'react';
import { db } from '../components/Firebase';
import { collection, orderBy, query, onSnapshot } from 'firebase/firestore';

export default function useReadDoc(collectionName) {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, collectionName), orderBy('createdAt'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
      setLoading(false);
    });

    return () => unsub();
  }, [collectionName]);

  return { docs, loading };
}
