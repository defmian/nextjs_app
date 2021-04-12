import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
