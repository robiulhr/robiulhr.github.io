import React from 'react'
import Title from './title'
import Styled from 'styled-components'
import { InnerLayout } from '../styles/layouts'
import Reviewitem from './reviewitem'
function Reviewssection() {
    return (

        <ReviewssectionStyled>
            <Title title={'Reviews'} span={"Reviews"} />
            <InnerLayout>
                <div className="reviews">
                    <Reviewitem text={'A great experience working with this (Client from Fiverr)'} />
                    {/* <Reviewitem text={'flbhfug ifugdv dfhiugdfvn fdigh dgbfv irvhvcv fhkb mv uiwkfmuegh;fbmn fdghflb iughfbnjkghgbdfbn '} /> */}
                </div>
            </InnerLayout>
        </ReviewssectionStyled>

    )
}
const ReviewssectionStyled = Styled.section`
.reviews{
    display: flex;
    flex-direction:row;
}
@media screen and (max-width: 1000px){

.reviews{
    flex-direction:column;
   
}
}
`
export default Reviewssection
