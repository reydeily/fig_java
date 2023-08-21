import { Routes, Route } from "react-router-dom"
import { PageInicial, PageLayout, PageProduto } from "../Pages"

export function RouteSoftware() {
    return (
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="" element={<PageInicial />} />
          <Route path="home" element={<PageInicial />} />
          <Route path="produto" element={<PageProduto />} />
        </Route>
      </Routes>
    )
  }