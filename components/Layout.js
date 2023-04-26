import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">{children}</div>
    </>
  );
}
