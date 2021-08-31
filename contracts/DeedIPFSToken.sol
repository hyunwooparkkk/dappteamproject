pragma solidity ^0.5.0;

import "./ERC721.sol";
import "./ERC165.sol";
import "./SafeMath.sol";
import "./Address.sol";
import "./Strings.sol";

contract DeedIPFSToken is ERC721, ERC165 {
    using SafeMath for uint256;
    using Address for address;

    address payable public owner;
    mapping(bytes4 => bool) supportedInterfaces;

    mapping(uint256 => address) tokenOwners;
    mapping(address => uint256) balances;
    mapping(uint256 => address) allowance;
    mapping(address => mapping(address => bool)) operators;
    mapping(uint256 => address) allbidcalls;

    //지금까지발행했던 NFT의 메타데이터가 다 들어가있다. 
    mapping(uint256 => string) tokenURIs;

    struct asset {
        string ipfsHash;
    }
     //struct 생성
    struct allNFT{
        uint256 tokenId; //토큰 아이디
        string ipfsHash; //사진 업로드할 때 필요한 해시값
        address tokenOwner; //토큰 아이디에 해당하는 토큰 소유자
    }

    //struct => 배열 선언
    allNFT[] allNFTs;
    asset[] public allTokens;// 자신이발행한 토큰갯수확인 


    //for enumeration
    uint256[] public allValidTokenIds; //same as allTokens but does't have invalid tokens
    mapping(uint256 => uint256) private allValidTokenIndex;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    constructor() public {
        owner = msg.sender;
        supportedInterfaces[0x01ffc9a7] = true; //ERC165
        supportedInterfaces[0x80ac58cd] = true; //ERC721
        supportedInterfaces[0x5b5e139f] = true; //ERC721Metadata
    }

    function supportsInterface(bytes4 interfaceID)
        external
        view
        returns (bool)
    {
        return supportedInterfaces[interfaceID];
    }

    function balanceOf(address _owner) external view returns (uint256) {
        require(_owner != address(0));
        return balances[_owner];
    }

    function ownerOf(uint256 _tokenId) public view returns (address) {
        address addr_owner = tokenOwners[_tokenId];
        require(addr_owner != address(0), "Token is invalid");
        return addr_owner;
    }

   
    //////////////////////////////////////////////////////////////////

    //호가가 들어가는 배열. 
    // function bidArray () {
        
    // }

    //옥션에서 호가입력하고 입찰하기  눌렀을때 .
    // function transferAuction (address _from, address _to, uint256 _tokenId) public payable {
    //     if(block.timestamp <= start + daysAfter * 1days){

    //     }
    // }
    /////////////////////////////////////////

   

    function approve(address _approved, uint256 _tokenId) external payable {
        address addr_owner = ownerOf(_tokenId);
        bool isOp = operators[addr_owner][msg.sender];
        require(addr_owner == msg.sender || isOp, "Not approved by owner");
        allowance[_tokenId] = _approved;
        emit Approval(addr_owner, _approved, _tokenId);
    }

    function setApprovalForAll(address _operator, bool _approved) external {
        operators[msg.sender][_operator] = _approved;
        emit ApprovalForAll(msg.sender, _operator, _approved);
    }

    function getApproved(uint256 _tokenId) external view returns (address) {
        return allowance[_tokenId];
    }

    function isApprovedForAll(address _owner, address _operator)
        external
        view
        returns (bool)
    {
        return operators[_owner][_operator];
    }

       

    //모든 NFT가 들어가는 배열을 찾는 함수 
    function getAllNFTs(uint _number) public view returns (uint256, string memory, address){
        return (allNFTs[_number].tokenId, allNFTs[_number].ipfsHash, allNFTs[_number].tokenOwner);
    }

    //NFT총 갯수
    function getLength() public view returns (uint256) {
        return allNFTs.length;
    }

    //실험용 민트
    function mint(string calldata ipfsHash) external {
        asset memory newAsset = asset(ipfsHash);
        uint256 tokenId = allTokens.push(newAsset) - 1;
        tokenOwners[tokenId] = msg.sender;
        balances[msg.sender] = balances[msg.sender].add(1);
        allNFTs.push(allNFT(tokenId, ipfsHash, msg.sender ));
        tokenURIs[tokenId] = Strings.strConcat(baseTokenURI(), ipfsHash);
        emit Transfer(address(0), msg.sender, tokenId);
    }

     /////////////////////////////보내기/////////////////////////////////////
    function transferFrom( address _from, address _to, uint256 _tokenId) public payable {
        tokenOwners[_tokenId] = _to;
        balances[_from] = balances[_from].sub(1);
        balances[_to] = balances[_to].add(1);
        emit Transfer(_from, _to, _tokenId);
    }
    

    ///올려놨던 NFT를 삭제하는 함수 --실험////////////////
    function burn(uint256 _tokenId) external {
        tokenOwners[_tokenId] = address(0);
        balances[msg.sender] = balances[msg.sender].sub(1);
        emit Transfer(msg.sender, address(0), _tokenId);
    }
    /////////////////////////////////////////////////////////////



    function baseTokenURI() public pure returns (string memory) {
        return "https://gateway.ipfs.io/ipfs/";
    }

    //ERC721Enumerable
    function totalSupply() public view returns (uint256) {
        return allValidTokenIds.length;
    }

    //ERC721Enumerable
    function tokenByIndex(uint256 index) public view returns (uint256) {
        require(index < totalSupply());
        return allValidTokenIds[index];
    }

    //ERC721Metadata
    function name() external pure returns (string memory) {
        return "U1L TOKEN";
    }

    //ERC721Metadata
    function symbol() external pure returns (string memory) {
        return "U1L";
    }

    //ERC721Metadata
    function tokenURI(uint256 _tokenId) external view returns (string memory) {
        require(
            tokenByIndex(allValidTokenIndex[_tokenId]) == _tokenId,
            "The token is invalid"
        );
        return tokenURIs[_tokenId];
    }

    function kill() external onlyOwner {
        selfdestruct(owner);
    }
}

contract ERC721TokenReceiver {
    function onERC721Received(
        address _operator,
        address _from,
        uint256 _tokenId,
        bytes memory _data
    ) public returns (bytes4);
}