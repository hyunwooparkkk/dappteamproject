import React,{useState,useEffect, useRef} from 'react'
import {FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import 'filepond/dist/filepond.min.css';
import logo from '../images/ipfs-logo.png';
import { useDispatch,useSelector } from "react-redux";
import '../css/filepond-custom.css';
// import '../App.css';
import ipfs from '../utils/ipfs';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import create from '../css/Create.css';
import { BiUserCircle , BiWallet } from "react-icons/bi";
import {FaShopify} from "react-icons/fa";
import {GoDiffAdded} from "react-icons/go";
import TypeIt from "typeit-react";

// import '../css/bootstrap/css/bootstrap.min.css';
import Createupload from '../components/Createupload';
import {setpond,setfiles,setbuffer,setipfsMetaHash,setipfsHash,uploadreset} from '../modules/upload'


registerPlugin(FilePondPluginImagePreview);
function Create() {
    const dispatch = useDispatch();
    const upload = useSelector(state => state.upload);
    const conn = useSelector(state => state.conn);
    const test = useRef();
    const [sta,setsta]=useState({
        ipfsHash: null,
        ipfsMetaHash: null,
        buffer: '',
        imageUrl: null,
        flag: false,
    });

    useEffect(() => {
       
        document.addEventListener("FilePond:addfile", readFile);
        console.log("adwd")
        
    }, [])


    const readFile = () => {
       console.log(test.current.props)
      
        if (test.current != null) {
            console.log("여기여기")
            const file = test.current.props.children[0].props.src; // single file

            let reader = new window.FileReader();
            console.log("ddd",reader);
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
                // gas: 90000


            });

            //여기해야함
            // sta.deedIpfsToken.methods.mint.cacheSend(sta.ipfsMetaHash);
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
    
    const gogo=async()=>{
        const dodo=await ipfs.get('QmYqKKobNRC2gzqnkJAp11s18jdMuiboZ9U4ZbH9bmX7aE')
        console.log(dodo,"adw");
    }

    // $(window).scroll(function(){
    //     if($(window).scrollTop() > 50){
    //       $('header , .btn-top').addClass('active')
    //     }
    //     else{
    //       $('header , .btn-top').removeClass('active')
    //     }
    //   })
    //   // Header Trigger
    //   $('.trigger').click(function(){
    //     $(this).toggleClass('active');
    //     $('.gnb').togleClass('active');
    //   });
    
    //   $('.gnb a, section').click(function(){
    //     $('.gnb , .trigger').removeClass('active');
    //   });

    return (
        <div className="create-container">
            {/*header start */}
          <header>
            <div className="create-header-inner">
              <div className="create-logo">
                <Link to="/"><img src="/images/logo-white.png"></img></Link>
              </div>
              <div className='create-gnb'>
                <Link to="/Create" ><GoDiffAdded className="gnb-1"/></Link>
                <Link to="/Market" ><FaShopify className="gnb-2"/></Link>
                <Link to="/Mypage" ><BiUserCircle className="gnb-3"/></Link>
                <Link to="/Signin" ><BiWallet className="gnb-4"/></Link>
              </div>
            </div>
          </header>
          {/*welcome start */}

        <section className="create-welcome">
          <div className="create-slideshow">
            
              {/* <img src="/images/create-welcome1.jpg"/> */}
             
          </div>
          <div className="create-welcome-heading">
              
            <h1>
              Make Your Own NFT On U1L.
            </h1>
            <div className="create-welcome-upload">
            <FilePond ref={test}
                              onupdatefiles={(fileItems) => {
                                  // Set current file objects to sta
                                  dispatch(setfiles(
                                    fileItems.map(fileItem => fileItem.file)
                              ));
                              }}>
                            
                        {upload.files.map(file => (
                            <input type="file" key={file} src={file} />
                        ))}
                  
            </FilePond>
            </div>
            <div>
              {upload.imageUrl && <img src={upload.imageUrl} className="img-view" alt="ipfs-image" />} {upload.ipfsHash}
            </div>
            <div className="create-welcome-btns">
                  {/* ERC721 토큰의 메타 정보에 해당하는 JSON 파일을 IPFS에 업로드 */}
            <Createupload onChangeIpfsMetaHash={handleIpfsMetaHash} upload={upload}/>
                <div >
                  <button  onClick={handleUpload}>Upload</button>
                    <button onClick={handleMint}>Mint</button>
                    <button href="#" onClick={handleReset}>Reset</button>
                    <button onClick={gogo}>gogo</button>
                </div>
            </div>
          </div>
        </section>
                    
                    
            
          
            {/* <div className="guide-inner" style={{}}>
            <img src={logo} alt="ipfs-logo" width={70} height={70}/>
                    <h1>NFT 로 만들 아이템을 업로드 해주세요!</h1>
                    <br/><br/>
            </div> */}
            
          
            {/* <div>
                    {upload.imageUrl && <img src={upload.imageUrl} className="img-view" alt="ipfs-image" />} {upload.ipfsHash}
                </div> */}
                {/* <div className="create-welcome-btns">
                  <button onClick={handleUpload}>
                    Upload
                  </button>
                </div> */}
                 
                {/* ERC721 토큰의 메타 정보에 해당하는 JSON 파일을 IPFS에 업로드 */}
                {/* <Createupload onChangeIpfsMetaHash={handleIpfsMetaHash} upload={upload}/>
                <div>
                    <button onClick={handleMint}>
                        Mint
                    </button>{' '}
                    <button href="#" onClick={handleReset}>
                        Reset
                    </button>
                    <button onClick={gogo}>gogo</button>
                </div> */}
        </div>
    )
}

export default Create
