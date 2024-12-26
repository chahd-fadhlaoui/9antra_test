import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar/>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>

        <Route path="/admin" element={<AdminDashboard/>}/>

        <Route path="/create" element={<CreatePage/>}/>

      </Routes>
    
    
    </Box>
  )
}
