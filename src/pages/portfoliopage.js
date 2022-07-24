import React,{useState} from 'react'
import Title from '../components/title'
import {MainLayout,InnerLayout} from "../styles/layouts"
import portfolios from "../data/portfolios"
import Menu from '../components/menu'
import Button from '../components/button'

const allButton = ["All",...new Set(portfolios.map(item=>item.catagory))]

function Portfoliopage() {
const [menuItem,setMenuItems] = useState(portfolios)
const [button,setButton] = useState(allButton)
const filter = (button)=>{
    if(button==="All"){
        setMenuItems(portfolios);
        return
    }
    const filteredData = portfolios.filter((item)=>item.catagory === button)
    setMenuItems(filteredData);
}

    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'Portfolios'}></Title>
            <InnerLayout>
                <Button  filter = {filter} button ={button} />
                <Menu menuItem ={menuItem}/>
            </InnerLayout>
        </MainLayout>

        
    )
}

export default Portfoliopage
