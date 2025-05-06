import Banner from "./Banner"
import Contact from "./Contact"
import Faq from "./Faq"
// import FeatureSteps from "./FeatureSteps"
import Optimize from "./Optimize.JSX"
import Packages from "./Packages"
import Salesforce from "./Salesforce"

const Home = () => {
  return (
    <div>
     
         <Banner/>
         <Optimize/> 
         <Salesforce/>
         <Packages/>
         <Contact/>
         <Faq/>
         {/* <FeatureSteps/> */}

    </div>
  )
}

export default Home
