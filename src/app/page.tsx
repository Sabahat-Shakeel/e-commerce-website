
import { BackgroundGradientDemo} from "@/app/card/page"
import { BackgroundGradientDemotwo } from "@/app/cardtwo/page"
import { BackgroundGradientDemothree } from "@/app/cardthree/page"
import { BackgroundGradientDemofour } from "@/app/cardfour/page"

import Para from "@/app/sidepara/page"
import Main from "@/app/hello/page"
import Offer from "@/app/offer/page"



const Home =()=>{
    return (
        <div>
     
            <Main/>
            <Offer/>
            <Para/>
            <BackgroundGradientDemo/>
            <BackgroundGradientDemotwo/>
            <BackgroundGradientDemothree/>
            <BackgroundGradientDemofour/>
          


         
        </div>
    )
}
export default Home;