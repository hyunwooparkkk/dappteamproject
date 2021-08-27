import React,{useRef,useState} from 'react'
import { useDispatch, } from "react-redux";
import {setflag,setmetaname,setmetadesc,setmetahash,setmetaprice,setmetatypeprice}from '../modules/upload';
import { IPFS_URL } from "../utils/constants";
import ipfs from "../utils/ipfs";
import moment from 'moment';
import 'moment/locale/ko';


function Createupload({onChangeIpfsMetaHash,upload,conn}) {
    const dispatch = useDispatch();
    

    const handleUploadJson = async () => {
        const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
        
        const name = upload.metaName;
        const desc = upload.metaDesc;
        const hash = upload.metaHash;
        const time = nowTime;
        const user = conn.myAccount;
        const price= upload.metaprice;
        const typeprice= upload.metatypeprice;

        if (name !== '' && desc !== '' && hash !== '') {
            dispatch(setflag(true));

            //////////////////////////////////////////
            let metaData = {};
            metaData["name"] = name;
            metaData["description"] = desc;
            metaData["image"] = `${IPFS_URL}${hash}`;
            metaData["time"] = time;
            metaData["user"] = user;
            metaData["price"]=price;
            metaData["typeprice"]=typeprice;

            const buffer = await Buffer.from(JSON.stringify(metaData));
            // IPFS에 업로드하고 ERC721Metadata.tokenURI 메소드를 통해 조회될 수 있도록 토큰을 mint 할 때 메타정보를 저장한다.
            const ipfsMetaHash = await ipfs.add(buffer);
            console.log(ipfsMetaHash,'메타해쉬');
            console.log(user,'창작자')
            console.log(time,'올리는시간');

            dispatch(setflag(false));  
            onChangeIpfsMetaHash(ipfsMetaHash[0].hash);
        }else{
            alert("모두 입력하세요")
        }
    }

    return (
        <div style={{marginTop: '10px'}}>
                <div>
                    <div >
                        Name
                    </div>
                    <div >
                        <input type="text" id="metaName" value={upload.metaName} onChange={(e)=>{dispatch(setmetaname(e.target.value))}} placeholder={"이름을 입력하세요"}/>
                    </div>
                </div>
                <div>
                    <div>
                        Description
                    </div>
                    <div >
                        <input type="text" id="metaDesc" value={upload.metaDesc} onChange={(e)=>{dispatch(setmetadesc(e.target.value))}} placeholder={"설명을 입력하세요"} />
                    </div>
                </div>
                <div>
                    <div>
                        Image hash
                    </div>
                    <div >
                        <input type="text" id="metaHash" value={upload.metaHash} onChange={(e)=>{dispatch(setmetahash(e.target.value))}} placeholder={"위에서 나온 해쉬값을 입력하세요"}/>
                    </div>
                </div>
                <button onClick={()=>{dispatch(setmetatypeprice(!upload.metatypeprice))}}>{upload.metatypeprice==false?"지정가":"경매시작가"}</button>
                {upload.metatypeprice==false?<div>
                    <div>
                        unChangePrice
                    </div>
                    <div >
                        <input type="text" id="unchangeprice" value={upload.metaprice} onChange={(e)=>{dispatch(setmetaprice(e.target.value))}} placeholder={"지정가"}/>
                    </div>
                </div>:     <div>
                    <div>
                        auctionPrice
                    </div>
                    <div >
                        <input type="text" id="auctionprice" value={upload.metaprice} onChange={(e)=>{dispatch(setmetaprice(e.target.value))}} placeholder={"경매시작가"}/>
                    </div>
                </div>}
                
           
        

            <div>
                <div>
                    <button  onClick={handleUploadJson}>
                        JSON형식으로 데이터를 업로드 
                    </button>
                </div>
            </div>


            <div style={{marginTop: '10px', marginBottom: '10px'}}>
                {(upload.flag)
                    ?<div>-로딩중-</div>
                    :upload.ipfsMetaHash
                }
            </div>
        </div>
    )
}


export default Createupload
