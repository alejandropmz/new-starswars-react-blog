import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { People } from "./pages/People";
import { Films } from "./pages/Films";
import { Starships } from "./pages/Starships";
import { Vehicles } from "./pages/Vehicles";
import { Species } from "./pages/Species";
import { Planets } from "./pages/Planets";
import { EachPlanet } from "./pages/EachPlanet";
import { EachFilm } from "./pages/EachFilm";
import { NotFoundPage } from "./pages/NotFoundPage";
import { EachPeople } from "./pages/EachPeople";
import { EachSpecies } from "./pages/EachSpecies";
import { EachStarship } from "./pages/EachStarship";
import { EachVehicles } from "./pages/EachVehicles";
import injectContext from "./store/appContext";
import { Signin } from "./pages/Signin";
import { Navbar } from "./components/Navbar";
import { Interactive } from "./pages/Interactive";
import { Footer } from "./components/Footer";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<EachPeople />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<EachFilm />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/starships/:id" element={<EachStarship />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/:id" element={<EachVehicles />} />
        <Route path="/species" element={<Species />} />
        <Route path="/species/:id" element={<EachSpecies />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:id" element={<EachPlanet />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/interactive" element={<Interactive />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default injectContext(Layout);
