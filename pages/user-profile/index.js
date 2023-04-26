import Layout from '../../components/Layout';
import BlogTable from '../../components/BlogTable';
import { db, auth } from '../../components/Firebase';
import { useState } from 'react';
import {
  collection,
  orderBy,
  query,
  onSnapshot,
  doc,
  deleteDoc,
  where,
} from 'firebase/firestore';
//import useReadDocByUid from '../../hooks/useReadDocByUid';

export default function UserProfile() {
  const handleDelete = async (id) => {
    if (confirm('Are you sure want to delete this post?')) {
      await deleteDoc(doc(db, 'list-of-things', id));
    } else {
    }
  };

  const [user, setUser] = useState([]);
  const [docs, setDocs] = useState([]);

  auth.onAuthStateChanged((user) => {
    if (user) {
      // below is for diplaying task / data from db
      const q = query(
        collection(db, 'list-of-things'),
        orderBy('createdAt'),
        where('uid', '==', user.uid)
      );
      const unsub = onSnapshot(q, (querySnapshot) => {
        let documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
        setUser(user);
      });
      return () => unsub();
    }
  });

  return (
    <Layout>
      Profile
      {user ? (
        <BlogTable
          body={docs.map((doc) => (
            <tr key={doc.id}>
              <th scope="row">{doc.id}</th>
              <td>{doc.name}</td>
              <td>
                {doc.shortdesc > 50
                  ? doc.shortdesc.substring(0, 50) + '...'
                  : doc.shortdesc}
              </td>
              <td>
                <a href={doc.thumbnail}>thumbnail link</a>
              </td>
              <td>{doc.category}</td>
              <td>{doc.type}</td>
              <td>
                <button
                  onClick={() => handleDelete(doc.id)}
                  className="btn btn-sm btn-danger"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        />
      ) : (
        <>Please Login</>
      )}
    </Layout>
  );
}
