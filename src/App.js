import React,{useState} from "react";

// import log from './'
import Icon from "./components/icons";

// toastify and it's CSS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// reactstrap and it's CSS
import {Card,CardBody,Container,Button,Col,Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './css/style.css';

const itemArry = new Array(9).fill('empty');

const App = ()=>{

    const [isCross,setIsCross] = useState(false);
    const [winMsg,setWinMsg] = useState("");

    const reloadGame =()=>{
        setIsCross(false);
        setWinMsg("");
        itemArry.fill("empty",0,9);
    }
    const checkIsWinner = ()=>{

        //horizontal check
        if (itemArry[0]===itemArry[1] && itemArry[0]===itemArry[2] && itemArry[0]!=="empty") {
            setWinMsg(`${itemArry[0]} is winner`);
        } else if(itemArry[3]===itemArry[4] && itemArry[4]===itemArry[5] && itemArry[3]!=="empty"){
            setWinMsg(`${itemArry[3]} is winner`);
        } else if(itemArry[6]===itemArry[7] && itemArry[6]===itemArry[8] && itemArry[6]!=="empty"){
            setWinMsg(`${itemArry[6]} is winner`);
        }
        //vertically check
        else if(itemArry[0]===itemArry[3] && itemArry[0]===itemArry[6] && itemArry[0]!=="empty"){
            setWinMsg(`${itemArry[0]} is winner`);
        }else if(itemArry[1]===itemArry[4] && itemArry[1]===itemArry[7] && itemArry[1]!=="empty"){
            setWinMsg(`${itemArry[1]} is winner`);
        }else if(itemArry[2]===itemArry[5] && itemArry[2]===itemArry[8] && itemArry[2]!=="empty"){
            setWinMsg(`${itemArry[2]} is winner`);
        }
        //diagonally check
        else if(itemArry[0]===itemArry[4] && itemArry[0]===itemArry[8] && itemArry[0]!=="empty"){
            setWinMsg(`${itemArry[4]} is winner`);
        }else if(itemArry[2]===itemArry[4] && itemArry[2]===itemArry[6] && itemArry[2]!=="empty"){
            setWinMsg(`${itemArry[2]} is winner`);
        }
    }
    const changeItem = itemNumber =>{
        if (winMsg){
            return toast(winMsg,{type:"success"});
        }
        if(itemArry[itemNumber]==="empty"){
            itemArry[itemNumber] = isCross?"cross":"circle"
            setIsCross(!isCross)
        } else{
            return toast("already filled",{type:"error"})
        }
        checkIsWinner();
    }
    return(
        <Container className="p-5">
            <ToastContainer position="bototm-center"/>
            <Row>
                <Col md={5} className="offset-md-3">
                    {winMsg?(
                        <div className="mb-2 mt-2">
                            <h1 className="text-success text-uppercase text-center">
                                {winMsg}
                            </h1>
                            <Button color="success" block onClick={reloadGame}>reload the game</Button>
                        </div>
                    ):(
                        <h1 className="text-center text-warning">
                            {isCross?"cross":"circle"} turns
                        </h1>
                    )}
                    <div className="grid">
                        {itemArry.map((item,index)=>{
                            return(
                                <Card onClick={()=>changeItem(index)} color="warning">
                                    <CardBody className="box">
                                        <Icon thename={item}/>
                                    </CardBody>
                                </Card>
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default App;