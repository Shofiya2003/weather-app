import React from 'react'
import axios from 'axios';
import SideMain from './SideMain';
export default class Main extends React.Component{
    constructor(){
        super();
        this.state={
            dataArr:[],
        };

        
        
   
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        await axios.get("http://www.metaweather.com/api/location/search/?query=helsinki").then( async data=>{
            
             await axios.get("https://www.metaweather.com/api/location/"+data.data[0].woeid+"/").then(async data=>{
               
                this.setState({
                    dataArr:data.data.consolidated_weather,
                });
                return data.data
            }).catch(err=>{
                console.log(err);
            });
        }).catch(err=>{
            console.log(err);
        });
        
}
    

    render(){
        return(
        <>
            <SideMain weatherArr={this.state.dataArr}></SideMain>
        </>)
    }
}
