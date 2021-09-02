import React,{useRef,useState} from 'react'
import { useDispatch, } from "react-redux";
import {setflag,setmetaname,setmetadesc,setmetahash,setmetaprice,setmetatypeprice,setmetatenddate}from '../modules/upload';
import { IPFS_URL } from "../utils/constants";
import ipfs from "../utils/ipfs";
import moment from 'moment';
import 'moment/locale/ko';
import DatePicker,{registerLocale} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { addDays } from 'date-fns';
import ko from 'date-fns/locale/ko';
import create from "../css/Create.css";

registerLocale("ko",ko);

function Createupload({onChangeIpfsMetaHash,upload,conn}) {
    const dispatch = useDispatch();
    const [endDate, setEndDate] = useState(new Date());
 

    const handleUploadJson = async () => {
        // const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
        const nowTime = moment().format('YYYY. MM. DD.');
        const name = upload.metaName;
        const desc = upload.metaDesc;
        const hash = upload.metaHash;
        const time = nowTime;
        const user = conn.myAccount;
        const price= upload.metaprice;
        const typeprice= upload.metatypeprice;
    //    const endate=endDate.setHours(endDate.getHours()+9);
    //    const enddate = new Date(endate);
        const enddate=endDate;
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
            metaData["endDate"] = new Date(enddate.setHours(enddate.getHours())).toLocaleString();

            const buffer = await Buffer.from(JSON.stringify(metaData));
            // IPFS에 업로드하고 ERC721Metadata.tokenURI 메소드를 통해 조회될 수 있도록 토큰을 mint 할 때 메타정보를 저장한다.
            const ipfsMetaHash = await ipfs.add(buffer);
            console.log(ipfsMetaHash,'메타해쉬');
            console.log(user,'창작자')
            console.log(time,'올리는시간');
            console.log(enddate, '입찰종료일')
            dispatch(setflag(false));  
            onChangeIpfsMetaHash(ipfsMetaHash[0].hash);
        }else{
            alert("모두 입력하세요")
        }
    }

    const test=(e)=>{
        console.log(e)
        setEndDate(e);
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
                    <p><input type="text" id="metaHash" value={upload.metaHash} onChange={(e)=>{dispatch(setmetahash(e.target.value))}} placeholder={"해쉬값을 입력하세요"}/></p>
                    <p><input type="text" id="metaDesc" value={upload.metaDesc} onChange={(e)=>{dispatch(setmetadesc(e.target.value))}} placeholder={"설명을 입력하세요"} /></p>

                </div>
          </div>    
          <div className="oction-inner">

              {/* 지정가 경매가 변환 */}
                <button onClick={()=>{dispatch(setmetatypeprice(!upload.metatypeprice))}}>{upload.metatypeprice==false?"지정가":"경매시작가"}</button>
                {upload.metatypeprice==false?
                <div>
                    <div>
                        unChangePrice
                    </div>
                    <div >
                        <input type="text" id="unchangeprice" value={upload.metaprice} onChange={(e)=>{dispatch(setmetaprice(e.target.value))}} placeholder={"지정가"}/>
                    </div>
                </div>: 
                <div>
                    <div>
                        auctionPrice
                    </div>

                    <div >
                        <input type="text" id="auctionprice" value={upload.metaprice} onChange={(e)=>{dispatch(setmetaprice(e.target.value))}} placeholder={"경매시작가"}/>
                    </div>
                   
                    <div>종료날짜
                        <DatePicker
                        id="datePicker"
                        name="day1"
                        locale="ko"
                        selected={endDate}
                        closeOnScroll={true}
                        minDate={new Date()}
                        maxDate={addDays(new Date(),7)}
                        dateFormat = "yyyy-MM-dd"
                        // popperModifiers={{preventOverflow:{enabled:true}}}
                        // onChange={(date)=> setEndDate(date)}
                        placeholderText="종료일을 선택하세요"
                        // value={endDate}
                        // value={ upload.metatenddate}
                        // onChange={(e)=>{dispatch(setmetaprice(e))}}
                        onChange={(e)=>{test(e)}}
                        />
                    </div>
                </div>}
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