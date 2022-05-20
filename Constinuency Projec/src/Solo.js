import React, { useState } from 'react'
import Select from 'react-select'
import './App.css'


function Contiency() {
    var Info = [
        {
            label: <a  href='https://www.oneindia.com/kadapa-assembly-elections-ap-126/'>126-Kadapa</a>
        
        },
        {        
            label: <a href='https://www.oneindia.com/kodur-assembly-elections-ap-127/'>127-Kodur</a>
        },
        {
            label: <a href='https://www.oneindia.com/rayachoti-assembly-elections-ap-128/'>128-Rayachotti</a>  
        },
        {
            label: <a href='https://www.oneindia.com/pulivendla-assembly-elections-ap-129/'>129-Pulivendala</a>
        },
        {
            label: <a href='https://www.oneindia.com/kamalapuram-assembly-elections-ap-130/'>130-Kamalapuram</a>
        },
        {
            label: <a  href='https://www.oneindia.com/jammalamadugu-assembly-elections-ap-131/'>131-Jammalamadugu</a>
        },
        {
            label: <a href='https://www.oneindia.com/proddatur-assembly-elections-ap-132/'>132-Produtur</a>
        },
        {
            label: <a href='https://www.oneindia.com/mydukur-assembly-elections-ap-133/'>133-Mydukur</a>
        },
        {
            label: <a href='https://www.oneindia.com/allagadda-assembly-elections-ap-134/'>134-Allogadda</a>
        },
        {
            label: <a href='https://www.oneindia.com/srisailam-assembly-elections-ap-135/'>135-Srisailam</a>
        },
        {
            label: <a href='https://www.oneindia.com/nandikotkur-assembly-elections-ap-136/'>136-NasndhiKottur</a>
        },
        {
            label: <a href='https://www.oneindia.com/kurnool-assembly-elections-ap-137/'>137-Kurnool</a>
        },
        {
            label: <a href='https://www.oneindia.com/panyam-assembly-elections-ap-138/'>138-Ponayam</a>
        },
        {
            label: <a href='https://www.oneindia.com/nandyal-assembly-elections-ap-139/'>139-Nandhyala</a>
        },
        {
            label: <a href='https://www.oneindia.com/banaganapalle-assembly-elections-ap-140/'>140-Banaganpalle</a>
        },
        {
            label: <a href='https://www.oneindia.com/dhone-assembly-elections-ap-141/'>141-Dhone</a>
        },
        {
            label: <a href='https://www.oneindia.com/pattikonda-assembly-elections-ap-142/'>142-Pattikonda</a>
        },
        {
            label: <a href='https://www.oneindia.com/pattikonda-assembly-elections-ap-143/'>143-KOdum</a>
        },
        {
            label: <a href='https://www.oneindia.com/kodumur-assembly-elections-ap-144/'>144-Yemmigoner</a>
        },
        {
            label: <a href='https://www.oneindia.com/yemmiganur-assembly-elections-ap-145/'>145-Mamtralayam</a>
        },
        {
            label: <a href='https://www.oneindia.com/adoni-assembly-elections-ap-146/'>146-Adoni</a>
        },
        {
            label: <a href='https://www.oneindia.com/alur-assembly-elections-ap-147/'>147-Alur</a>
        },
        {
            label: <a href='https://www.oneindia.com/rayadurg-assembly-elections-ap-148/'>148-Rayadurg</a>
        },
        {
            label: <a href='https://www.oneindia.com/rayadurg-assembly-elections-ap-149/'>149-Uravakonda</a>
        },
        {
            label: <a href='https://www.oneindia.com/guntakal-assembly-elections-ap-150/'>150-Guntak</a>
        },
        {
            label: <a href='https://www.oneindia.com/tadipatri-assembly-elections-ap-151/'>151-Tadipatri</a>
        },
        {
            label: <a href='https://www.oneindia.com/singanamala-assembly-elections-ap-152/'>152-Siganamala</a>
        },
        {
            label: <a href='https://www.oneindia.com/anantapur-urban-assembly-elections-ap-153/'>153-Anatayar</a>
        },
        {
            label: <a href='https://www.oneindia.com/kalyandurg-assembly-elections-ap-154/'>154-Kailyanadurg</a>
        },
        {
            label: <a href='https://www.oneindia.com/raptadu-assembly-elections-ap-155/'>155-Raptadu</a>
        },
        {
            label: <a href='https://www.oneindia.com/madakasira-assembly-elections-ap-156/'>156-Madakasi</a>
        },
        {
            label: <a href='https://www.oneindia.com/hindupur-assembly-elections-ap-157/'>157-Hindupur</a>
        },
        {
            label: <a href='https://www.oneindia.com/penukonda-assembly-elections-ap-158/'>158-Penukonda</a>
        },
        {
            label: <a href='https://www.oneindia.com/puttaparthi-assembly-elections-ap-159/'>159-Puttapatri</a>
        },
        {
            label: <a href='https://www.oneindia.com/dharmavaram-assembly-elections-ap-160/'>160-Dharamavaram</a>
        },
        {
            label: <a href='https://www.oneindia.com/kadiri-assembly-elections-ap-161/'>161-Kadiri</a>
        },
        {
            label: <a href='https://www.oneindia.com/thamballapalle-assembly-elections-ap-162/'>162-Thamballam Palle</a>
        },
        {
            label: <a href='https://www.oneindia.com/pileru-assembly-elections-ap-163/'>163-Pileru</a>
        },
        {
            label: <a href='https://www.oneindia.com/madanapalle-assembly-elections-ap-164/'>164-Madanapalle</a>
        },
        {
            label: <a href='https://www.oneindia.com/punganur-assembly-elections-ap-165/'>165-Punganur</a>
        },
        {
            label: <a href='https://www.oneindia.com/chandragiri-assembly-elections-ap-166/'>166-Chandragiri</a>
        },
        {
            label:<a href=''></a>
        }
    ];

    const [handlevalue,sethandlevalue] = useState(Info.value);

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
export default Contiency;