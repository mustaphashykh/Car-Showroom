import { Footer, Header } from "./component/commons"
import { ProductPage } from "./component/pages"

function App() {
  return (
    <div className="w-full md:max-w-sm min-h-screen mx-auto text-gray-900">
      <Header />
      <div className="py-8">
        <ProductPage />
      </div>
      <Footer />
    </div>
  )
}

export default App
