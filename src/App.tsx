import { Footer, Header } from "./component/commons"
import { CompletionPage, KeyInfoPage, PricePage, ProductPage, ServiceHistoryPage, SpecificationPage } from "./component/pages"

function App() {
  return (
    <div className="w-full md:max-w-sm min-h-screen mx-auto text-gray-900">
      <Header />
      <div className="pt-8">
        <ProductPage />
        {/* <KeyInfoPage/> */}
        {/* <SpecificationPage/> */}
        {/* <ServiceHistoryPage/> */}
        {/* <PricePage/> */}
        {/* <CompletionPage/> */}
      </div>
    </div>
  )
}

export default App
