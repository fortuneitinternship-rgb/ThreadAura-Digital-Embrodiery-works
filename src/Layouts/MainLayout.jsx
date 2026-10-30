import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AppRoutes from "../Routes/AppRoutes";


function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <AppRoutes />
      </main>

      <Footer />
      
    </>
  );
}

export default MainLayout;