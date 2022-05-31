import React, { useState } from 'react'
import Select from 'react-select'


function Red() {

    var Info = [
        {
            label: <a href="https://www.oneindia.com/pamarru-assembly-elections-ap-77/ " target="_blank">PAMARRU</a>,
        },
        {
            label: <a href="https://www.oneindia.com/pedana-assembly-elections-ap-74/" target="_blank">Pedana</a>,
        },
        {
            label: <a href="https://www.oneindia.com/machilipatnam-assembly-elections-ap-75/" target="_blank">Machilipatnam </a>,
        },
        {
            label: <a href="https://www.oneindia.com/avanigadda-assembly-elections-ap-76/" target="_blank">Avanigadda </a>,
        },
        {
            label: <a href="https://www.oneindia.com/pamarru-assembly-elections-ap-77/" target="_blank">Pamarru</a>,
        },
        {
            label: <a href="https://www.oneindia.com/penamaluru-assembly-elections-ap-78/" target="_blank">Penamaluru </a>,
        },
        {
            label: <a href="https://www.oneindia.com/vijaywada-west-assembly-elections-ap-79/" target="_blank">Vijaywada West</a>,
        },
        {            
            label: <a href="https://www.oneindia.com/vijayawada-central-assembly-elections-ap-80/" target="_blank">Vijayawada central </a>,
        },
        {            
            label: <a href="https://www.oneindia.com/vijayawada-east-assembly-elections-ap-81/" target="_blank">Vijayawada East </a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/mylavaram-assembly-elections-ap-82/" target="_blank">Mylavaram </a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/nandigama-assembly-elections-ap-83/" target="_blank">Nandigama </a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/jaggayyapeta-assembly-elections-ap-84/" target="_blank">Jaggayyapeta </a>,            
        },
        {            
            label: <a href="https://www.oneindia.com/pedakurapadu-assembly-elections-ap-85/" target="_blank">Pedakurapadu </a>,
            
        },
        {            
            label: <a href="https://www.oneindia.com/tadikonda-assembly-elections-ap-86/" target="_blank">Tadikonda </a>,
            
        },
        {            
            label: <a href="https://www.oneindia.com/mangalagiri-assembly-elections-ap-87/" target="_blank">Mangalagiri </a>,
            
        },
        {            
            label: <a href="https://www.oneindia.com/ponnur-assembly-elections-ap-88/" target="_blank">Ponnur </a>,
            
        },
        {            
            label: <a href="https://www.oneindia.com/vemuru-assembly-elections-ap-89/" target="_blank">Vemuru</a>,
            
        },
        {            
            label: <a href="https://www.oneindia.com/repalle-assembly-elections-ap-90/" target="_blank">Repalle </a>,
            
        },
        
        {            
            label: <a href="https://www.oneindia.com/tenali-assembly-elections-ap-91/" target="_blank">Tenali </a>,
            
        },
        {            
            label: <a href="https://www.oneindia.com/bapatla-assembly-elections-ap-92/" target="_blank">Bapatla </a>,
            
        },
        {            
            label: <a href="https://www.oneindia.com/prathipadu-assembly-elections-ap-93/" target="_blank">Prathipadu  </a>,
            
        },
        {            
            label: <a href="https://www.oneindia.com/guntur-west-assembly-elections-ap-94/" target="_blank">Guntur West </a>,
            
        },
        {            
            label: <a href="https://www.oneindia.com/guntur-east-assembly-elections-ap-95/" target="_blank"> Guntur East </a>,
            
        },
        {            
            label: <a href="https://www.oneindia.com/chilakaluripet-assembly-elections-ap-96/" target="_blank">Chilakaluripet  </a>,
            
        },
        {            
            label: <a href="https://www.oneindia.com/narasaraopet-assembly-elections-ap-97/" target="_blank">Narasaraopet </a>,
            
        },
        {            
            label: <a href="https://www.oneindia.com/sattenpalli-assembly-elections-ap-98/" target="_blank">Sattenpalli </a>,
            
        },
        {            
            label: <a href="https://www.oneindia.com/vinukonda-assembly-elections-ap-99/" target="_blank">Vinukonda </a>,
            
        },
        {            
            label: <a href="https://www.oneindia.com/gurazala-assembly-elections-ap-100/" target="_blank">Gurazala </a>,
            
        }

      
    ];

    const [handlevalue, sethandlevalue] = useState(Info.value);

    const handler = e => {
        sethandlevalue(e.value);
    }

    return (
        <div>
            <Select options={Info} onChange={handler} />
            <center>
                <h1>{handlevalue}</h1>
            </center>
        </div>
    )
}
export default Contiency