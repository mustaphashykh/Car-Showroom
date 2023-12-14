import { useSelector } from "react-redux"
import { Footer, Header, LoadingScreen } from "./component/commons"
import { CompletionPage, KeyInfoPage, Listing, LoginPage, PricePage, ProductPage, ServiceHistoryPage, SpecificationPage } from "./component/pages"
import { RootState } from "./features/store"
import { Route, Routes } from "react-router-dom"

function App() {
  const showLoader = useSelector((state: RootState) => state.showLoader)
  return (
    <div className="w-full relative shadow-xl md:max-w-sm min-h-screen mx-auto text-gray-900">
      <Header />
      {showLoader && <LoadingScreen />}
      <div className="pt-8">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/car-display/:id" element={<ProductPage />} />
          <Route path="/key-information" element={<KeyInfoPage />} />
          <Route path="/specifications" element={<SpecificationPage />} />
          <Route path="/service-history" element={<ServiceHistoryPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/completion" element={<CompletionPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
{/* <Listing/> */}
        {/* <ProductPage /> */}
        {/* <KeyInfoPage/> */}
        {/* <SpecificationPage/> */}
        {/* <ServiceHistoryPage/> */}
        {/* <PricePage/> */}
        {/* <CompletionPage/> */}
