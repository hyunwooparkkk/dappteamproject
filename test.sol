 //원본민트
    // function mint(string calldata ipfsHash) external {
    //     asset memory newAsset = asset(ipfsHash);
    //     uint256 tokenId = allTokens.push(newAsset) - 1;
    //     //tokenid starts from 0, index of assets array
    //     tokenOwners[tokenId] = msg.sender;
    //     balances[msg.sender] = balances[msg.sender].add(1);
    //     //for enumeration
    //     allValidTokenIndex[tokenId] = allValidTokenIds.length;
    //     //index starts from 0
    //     allValidTokenIds.push(tokenId);
    //     // MyNFT[tokenURIs[tokenId]] = msg.sender;
    //     //mapping(uint256 => mapping(string => address)) MyNFT;
    //     //   //배열에 값 저장
    //     allNFTs.push(allNFT(tokenId, ipfsHash, msg.sender ));
    //     //Token Metadata
    //     //tokenURIs[tokenId] = Strings.strConcat(baseTokenURI(), "QmdDW36bvr2W6ua4FxnT8bKysXhYEUo7QbLTbkGW4Foxr8");
    //     tokenURIs[tokenId] = Strings.strConcat(baseTokenURI(), ipfsHash);
    //     // allAddresses.push(tokenURIs[0]);
    //     // allAddresses.push(msg.sender); // allAddresses에 nft발행한 애 넣기 
    //     // emit Transfer(address(0), msg.sender, tokenId);
    //     emit Transfer(address(0), msg.sender, tokenId);
    // }


     /////////올려놨던 NFT를 삭제하는 함수 --원본////////////////
    // function burn(uint256 _tokenId) external {
    //     address addr_owner = ownerOf(_tokenId);
    //     require(
    //         addr_owner == msg.sender,
    //         "msg.sender is NOT the owner of the token"
    //     );
    //     //reset approved address
    //     if (allowance[_tokenId] != address(0)) {
    //         delete allowance[_tokenId];
    //         // tokenId => 0
    //     }
    //     //transfer : change the owner of the token, but address(0)
    //     tokenOwners[_tokenId] = address(0);
    //     balances[msg.sender] = balances[msg.sender].sub(1);
    //     //for enumeration
    //     removeInvalidToken(_tokenId);
    //     //clear metadata if exists
    //     if (bytes(tokenURIs[_tokenId]).length != 0) {
    //         delete tokenURIs[_tokenId];
    //     }
    //     emit Transfer(addr_owner, address(0), _tokenId);
    // }
    /////////////////////////////////////////////////////////////
     function removeInvalidToken(uint256 tokenIdToRemove) private {
        uint256 lastIndex = allValidTokenIds.length.sub(1);
        uint256 removeIndex = allValidTokenIndex[tokenIdToRemove];

        uint256 lastTokenId = allValidTokenIds[lastIndex];
        //swap
        allValidTokenIds[removeIndex] = lastTokenId;
        allValidTokenIndex[lastTokenId] = removeIndex;
        //delete
        //Arrays have a length member to hold their number of elements.
        //Dynamic arrays can be resized in storage (not in memory) by changing the .length member.
        allValidTokenIds.length = allValidTokenIds.length.sub(1);
        //allValidTokenIndex is private so can't access invalid token by index programmatically
        allValidTokenIndex[tokenIdToRemove] = 0;
    }


     function safeTransferFrom(
        address _from,
        address _to,
        uint256 _tokenId,
        bytes memory data
    ) public payable {
        transferFrom(_from, _to, _tokenId);

        //check if _to is CA
        if (_to.isContract()) {
            bytes4 result = ERC721TokenReceiver(_to).onERC721Received(
                msg.sender,
                _from,
                _tokenId,
                data
            );

            require(
                result ==
                    bytes4(
                        keccak256(
                            "onERC721Received(address,address,uint256,bytes)"
                        )
                    ),
                "receipt of token is NOT completed"
            );
        }
    }

    function safeTransferFrom(
        address _from,
        address _to,
        uint256 _tokenId
    ) public payable {
        safeTransferFrom(_from, _to, _tokenId, "");
    }



        /////////////////////////////보내기/////////////////////////////////////
    function transferFrom( address _from, address _to, uint256 _tokenId) public payable {
        //토큰의 소유계정
        //*address addr_owner = ownerOf(_tokenId);
        //인자로 받는 _from이 토큰의 소유 계정과 일치하지 않으면 예외 발생.
        //*require(addr_owner == _from, "_from is NOT the owner of the token");
        //인자로 받는 _to가 0(null)이라면 예외 발생.
        //*require(_to != address(0), "Transfer _to address 0x0");
        //해당 토큰의 allowance address 여부 저장
        //*address addr_allowed = allowance[_tokenId];
        //토큰의 본 소유계정이 메소드를 호출한 사람에게 소유권을 이전할 수 있도록 승인을 했는지 여부 저장
        //*bool isOp = operators[addr_owner][msg.sender];
        //msg.sender가 토큰의 소유계정이거나, 토큰의 allowance에 있는 계정이거나, 중개인 계정 true인 경우가 아니라면 예외 발생.
        //* require(
        //     addr_owner == msg.sender || addr_allowed == msg.sender || isOp,
        //     "msg.sender does not have transferable token"
        // );
        //* require(
        //      addr_allowed == msg.sender ,
        //     "msg.sender does not have transferable token"
        // );
        //transfer : change the owner of the token
          //토큰의 주인을 _to 계정으로 변경
        tokenOwners[_tokenId] = _to;
        //safemath 사용해서 balance 감소
        balances[_from] = balances[_from].sub(1);
        //safemath 사용해서 balance 증가
        balances[_to] = balances[_to].add(1);
        //reset approved address
        //erc721표준에 의하면, 이전의 allowance 를 갖고있던 계정을 리셋해줘야한다.
        //* if (allowance[_tokenId] != address(0)) {
        //     delete allowance[_tokenId];
        // }
        emit Transfer(_from, _to, _tokenId);
    }
    //////////////////////////////////////////////////////////////////