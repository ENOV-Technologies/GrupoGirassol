import { Suspense, useState, useEffect } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Loading from "./components/ui/loading";
import { Toaster } from "./components/ui/toaster";
import GoldenRose from "@/pages/Goldenrose.tsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [routes, setRoutes] = useState([]);
  
  useEffect(() => {
    // Load tempo routes if in Tempo environment
    const loadTempoRoutes = async () => {
      if (import.meta.env.VITE_TEMPO === "true") {
        try {
          const tempoRoutes = await import("tempo-routes");
          setRoutes(tempoRoutes.default || []);
        } catch (error) {
          console.log("Tempo routes not available");
          setRoutes([]);
        }
      }
      setIsLoading(false);
    };

    loadTempoRoutes();
  }, []);

  // Always call useRoutes at the top level
  const tempoRoutes = useRoutes(routes);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loading />}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/goldenrose" element={<GoldenRose />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && tempoRoutes}
          <Toaster />
        </>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;