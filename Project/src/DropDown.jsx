import React, { useState } from 'react'
import Select from 'react-select'


function Constituency() {

    var Info = [
        {
            label: <a href="https://www.oneindia.com/rajamundry-rural-assembly-elections-ap-51/" target="_blank">51 - RAJAMUNDRY RURAL</a>,
        },
        {
            label: <a href="https://www.oneindia.com/jaggampeta-assembly-elections-ap-52/" target="_blank">52 - JAGGAMPETA</a>,
        },
        {
            label: <a href="https://www.oneindia.com/rampachodavaram-assembly-elections-ap-53/" target="_blank">53 - RAMPACHODAVARAM</a>,
        },
        {
            label: <a href="https://www.oneindia.com/kovvur-assembly-elections-ap-54/" target="_blank">54 - KOVVUR</a>,
        },
        {
            label: <a href="https://www.oneindia.com/nidadavole-assembly-elections-ap-55/" target="_blank">55 - NIDADAVOLE</a>,
        },
        {
            label: <a href="https://www.oneindia.com/achanta-assembly-elections-ap-56/" target="_blank">56 - ACHANTA</a>,
        },
        {
            label: <a href="https://www.oneindia.com/palacole-assembly-elections-ap-57/" target="_blank">57 - PALACOLE</a>,
        },
        {            
            label: <a href="https://www.oneindia.com/narasapuram-assembly-elections-ap-58/" target="_blank">58 - NARASAPURAM</a>,
        },
        {            
            label: <a href="https://www.oneindia.com/bhimavaram-assembly-elections-ap-59/" target="_blank">59 - BHIMAVARAM</a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/undi-assembly-elections-ap-60/" target="_blank">60 - UNDI</a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/tanuku-assembly-elections-ap-61/" target="_blank">61 - TANUKU</a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/tadepalligudem-assembly-elections-ap-62/" target="_blank">62 - TADEPALLIGUDEM</a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/unguturu-assembly-elections-ap-63/" target="_blank">63 - UNGUTURU</a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/denduluru-assembly-elections-ap-64/" target="_blank">64 - DENDULURU</a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/eluru-assembly-elections-ap-65/" target="_blank">65 - ELURU</a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/gopalapuram-assembly-elections-ap-66/" target="_blank">66 - GOPALAPURAM </a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/polavaram-assembly-elections-ap-67/" target="_blank">67 - POLAVARAM</a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/chintalapudi-assembly-elections-ap-68/" target="_blank">68 - CHINTALAPUDI</a>,          
        },        
        {            
            label: <a href="https://www.oneindia.com/tiruvuru-assembly-elections-ap-69/" target="_blank">69 - TIRUVURU</a>,         
        },
        {            
            label: <a href="https://www.oneindia.com/nuzvid-assembly-elections-ap-70/" target="_blank">70 - NUZVID</a>,           
        },
        {            
            label: <a href="https://www.oneindia.com/gannavaram-assembly-elections-ap-71/" target="_blank">71 - GANNAVARAM</a>,           
        },
        {            
            label: <a href="https://www.oneindia.com/gudivada-assembly-elections-ap-72/" target="_blank">72 - GUDIVADA</a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/kaikalur-assembly-elections-ap-73/" target="_blank">73 - KAIKALUR</a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/pedana-assembly-elections-ap-74/" target="_blank">74 - PEDANA</a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/machilipatnam-assembly-elections-ap-75/" target="_blank">75 - MACHILIPATNAM</a>, 
        }
      
    ];

    const [dataValue, setdataValue] = useState(Info.value);

    const data = e => {
        setdataValue(e.value);
    }

    return (
        <div>
            <Select options={Info} onChange={data} />
            <center>
                <h1>{dataValue}</h1>
            </center>
        </div>
    )
}
export default Constituency