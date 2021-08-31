import React,{useState,useEffect, useRef} from 'react'
import {FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond/dist/filepond.min.css';
import logo from '../images/ipfs-logo.png';
import { useDispatch,useSelector } from "react-redux";
import '../css/filepond-custom.css';
import '../App.css';
import ipfs from '../utils/ipfs';
import axios from 'axios';

import moment from 'moment';
import 'moment/locale/ko';


// import '../css/bootstrap/css/bootstrap.min.css';
import Createupload from './Createupload';
import {setpond,setfiles,setbuffer,setipfsMetaHash,setipfsHash,uploadreset} from '../modules/upload'

registerPlugin(FilePondPluginImagePreview);

function Create() {
    const dispatch = useDispatch();
    const upload = useSelector(state => state.upload);
    const conn = useSelector(state => state.conn);
    const test = useRef();

    // const [sta,setsta]=useState({
    //     ipfsHash: null,
    //     ipfsMetaHash: null,
    //     buffer: '',
    //     imageUrl: null,
    //     flag: false,
    // });

    useEffect(() => {
        document.addEventListener("FilePond:addfile", readFile);
        console.log("파일읽기",readFile);
    }, [])


    const readFile = () => {
       console.log(test.current.props)
        if (test.current != null) {
            console.log("여기여기")
            const file = test.current.props.children[0].props.src; // single file
            let reader = new window.FileReader();
            console.log("파일읽기2",reader);
            reader.readAsArrayBuffer(file);
            reader.onloadend = () => fileToBuffer(reader);
        }
        else{
            console.log("역시")
        }
    };

    
    const fileToBuffer = async (reader) => {
        //buffering ready to upload to IPFS
        const buffer = await Buffer.from(reader.result);
        dispatch(setbuffer(buffer));

    }

    const handleUpload = async () => {
        if (upload.files.length > 0) {
            dispatch(setipfsHash('Uploading...'));
            console.log("할거지",upload.buffer);
            await ipfs.add(upload.buffer, (err, ipfsHash) => {
                console.log("안오지");
                console.log(err, ipfsHash);
                //setState by setting ipfsHash to ipfsHash[0].hash
                dispatch(setipfsHash(ipfsHash[0].hash));
            });
        }
        else{
            console.log("역시")
        }
    }

    const handleMint = async () => {
        if (upload.ipfsMetaHash !== null) {
            await conn.shopInstance.mint(upload.ipfsMetaHash,{
                from: conn.myAccount,
            });
            console.log('민트할때나오는거',conn.shopInstance.mint)

            // const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
            // console.log(nowTime);
            //NftCount ++
        }
    }

    const handleGet = async() => {
        /*
         * 배열 가져오기 
         * getAllNFTs
         */
        const length = await conn.shopInstance.getLength();
        console.log(length);
        for(let i = 0; i < length; i++){
            const test = await conn.shopInstance.getAllNFTs(i);
            console.log(test, i, '`i`번nft해쉬가져오기');
        }
    }

    const handleReset = () => {
        dispatch(uploadreset({
            ipfsMetaHash: null,
            imageUrl: null,
            flag: false
        }));
        test.current.removeFile();
    }

    const handleIpfsMetaHash = (ipfsMetaHash) => {
        dispatch(setipfsMetaHash(ipfsMetaHash));
    }
    
//     const handleRead = async()=>{
//         const handleRead = await conn.shopInstance.readAllAddresses();
//         console.log(handleRead, '주소나왕!!!');
//     }
//     const dd="QmehFe5ghQnsdoFepxpzG5sAFLtneGYrjmM3mNyLygnr9B";
//    const handlemetahash=async()=>{
//     const dododo=  await axios.get( "https://gateway.ipfs.io/ipfs/QmehFe5ghQnsdoFepxpzG5sAFLtneGYrjmM3mNyLygnr9B");
//     console.log("sibal",dododo);    
//     }

    return (
        <div className="container">
            <div style={{textAlign: 'center'}}>
            <img src={logo} alt="ipfs-logo" width={70} height={70}/>
                    <h1>IPFS Image Upload</h1>
                    <br/><br/>
            </div>
            <div>
            <FilePond ref={test}
                              onupdatefiles={(fileItems) => {
                                  // Set current file objects to sta
                                  dispatch(setfiles(
                                    fileItems.map(fileItem => fileItem.file)
                              ));
                              }}>
                            {/* > */}
                        {upload.files.map(file => (
                            <input type="file" key={file} src={file} />
                        ))}
                  
            </FilePond>
            </div>
            <div>
                    {upload.imageUrl && <img src={upload.imageUrl} className="img-view" alt="ipfs-image" />} {upload.ipfsHash}
                </div>
                <div style={{marginTop:"10px"}}>
                    <div>
                      
                            <button onClick={handleUpload}>
                                Upload
                            </button>
                       
                    </div>
                </div>
                {/* ERC721 토큰의 메타 정보에 해당하는 JSON 파일을 IPFS에 업로드 */}
                <Createupload onChangeIpfsMetaHash={handleIpfsMetaHash} upload={upload} conn={conn}/>
                <div>
                    <button onClick={handleMint}>
                        Mint
                    </button> 
                    <button href="#" onClick={handleReset}>
                        Reset
                    </button>
                
                    <button onClick={handleGet}>콘솔에 발행한 NFT목록</button>
                    {/* <button onClick={handleRead}> 주소나왕!!</button>
                    <button onClick={handlemetahash}>메타나와! </button> */}


                </div>
        </div>
    )
}

export default Create
