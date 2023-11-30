import { Routes, Route } from "react-router-dom"
import { PageInicial, PageLayout, PageProduto, PageAdmin, PageCdastrar, PageLogin } from "../Pages"

export function RouteSoftware() {
    return (
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="" element={<PageInicial />} />
          <Route path="home" element={<PageInicial />} />
          <Route path="produto" element={<PageProduto />} />
          <Route path="cadastrar" element={<PageCdastrar />} />
          <Route path="login" element={<PageLogin />} />
          <Route path="adm" element={<PageAdmin />}></Route>
        </Route>
      </Routes>
    )
  }

  