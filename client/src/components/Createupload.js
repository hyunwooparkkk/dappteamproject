import React,{useRef} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {setflag,setmetaname,setmetadesc,setmetahash }from '../modules/upload';
import { IPFS_URL } from "../utils/constants";
import ipfs from "../utils/ipfs";
import createupload from "../css/Createupload.css";
import $ from 'jquery';


function Createupload({onChangeIpfsMetaHash,upload}) {
    const dispatch = useDispatch();


    const handleUploadJson = async () => {
        const name = upload.metaName;
        const desc = upload.metaDesc;
        const hash = upload.metaHash;
       
        if (name !== '' && desc !== '' && hash !== '') {
            dispatch(setflag(true));

            //////////////////////////////////////////
            let metaData = {};
            metaData["description"] = desc;
            metaData["image"] = `${IPFS_URL}${hash}`;
            const buffer = await Buffer.from(JSON.stringify(metaData));
            // IPFS에 업로드하고 ERC721Metadata.tokenURI 메소드를 통해 조회될 수 있도록 토큰을 mint 할 때 메타정보를 저장한다.
            const ipfsMetaHash = await ipfs.add(buffer);
            console.log(ipfsMetaHash,'메타해쉬');
            dispatch(setflag(false));  
            onChangeIpfsMetaHash(ipfsMetaHash[0].hash);
        }else{
            alert("모두 입력하세요")
        }
    }

    return (
        <div className="create-welcome-upload-wrapper">
            <div className="create-welcome-upload-inner">
                <div className="create-welcome-upload-inner-left">
                    <p>Item Name</p>
                    <p>Image hash</p>
                    <p>Description</p>
                </div>
                <div className="create-welcome-upload-inner-right">
                    <p><input type="text" id="metaName" value={upload.metaName} onChange={(e)=>{dispatch(setmetaname(e.target.value))}} placeholder={"이름을 입력하세요"}/></p>
                    <p><input type="text" id="metaHash" value={upload.metaHash} onChange={(e)=>{dispatch(setmetahash(e.target.value))}} placeholder={"위에서 나온 해쉬값을 입력하세요"}/></p>
                    <p><input type="text" id="metaDesc" value={upload.metaDesc} onChange={(e)=>{dispatch(setmetadesc(e.target.value))}} placeholder={"설명을 입력하세요"} /></p>

                </div>
            </div>    
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
