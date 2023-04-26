import Layout from '../../components/Layout';
import NewBlogForm from '../../components/NewBlogForm';
import useAddDoc from '../../hooks/useAddDoc';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../components/Firebase';
import { serverTimestamp } from 'firebase/firestore';

export default function AddBlog() {
  const router = useRouter();

  const [formdata, setFormdata] = useState({});

  const handleInput = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

  const randomize = () => Math.floor(Math.random() * 999999);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const { uid } = auth.currentUser;
      //const arr = imgArray.replace(/\s/g, '').match(/.{1,22}/g);
      await useAddDoc('list-of-things', {
        ...formdata,
        uid,
        category: Number(formdata.category),
        type: Number(formdata.type),
        slug: slugify(formdata.name),
        inStock: true,
        productId: serverTimestamp().valueOf(),
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.log(error.message);
      alert(`Error message: ${error.message}`);
    } finally {
      router.push('/');
      alert('data succesfully added');
    }
  }

  return (
    <Layout>
      {auth.currentUser ? (
        <NewBlogForm onSubmit={handleSubmit} onChange={handleInput} />
      ) : (
        <>Please Login</>
      )}
    </Layout>
  );
}
