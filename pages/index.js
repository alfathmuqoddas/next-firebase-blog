import Head from 'next/head';
import Layout from '../components/Layout';
import useReadDoc from '../hooks/useReadDoc';
import CardView from '../components/CardView';

export default function Home() {
  const { docs, loading } = useReadDoc('list-of-things');

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4">
        {loading ? (
          <div className="text-center py-5">
            <h1>Loading...</h1>
          </div>
        ) : (
          docs.map((doc) => (
            <CardView
              key={doc.id}
              title={doc.name}
              desc={
                doc.shortdesc > 32
                  ? doc.shortdesc.substring(0, 100) + '...'
                  : doc.shortdesc
              }
              thumbnail={doc.thumbnail}
            />
          ))
        )}
      </div>
    </Layout>
  );
}
