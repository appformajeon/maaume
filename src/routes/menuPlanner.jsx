
// import request from 'request';
// function getAPI() {

import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";
import axios from 'axios'

//     const key = 'a0936c9a416d4518871b9c12273ae914'

//     request('https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=' + key + '&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=E10&SD_SCHUL_CODE=7310452', {json: true}, (err, res, body) => {
//         if (err) {return console.log(err);}
//         console.log(body.url);
//   console.log(body.explanation);
//     })
// }

function foodToHTML(food) {
    return (
        <>
            {food.map(f => (<>
                {f} <br />
            </>
            ))}
        </>
    )
}

export default function MenuPlanner() {
    const [json, setJson] = useState([]);
    const fetchPost = async() => {
        try {
            
            const key = 'a0936c9a416d4518871b9c12273ae914';
            const result = await axios('https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=' + key + '&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=E10&SD_SCHUL_CODE=7310452&MLSV_FROM_YMD=20221201&MLSV_TO_YMD=20221230')
            console.log(result.data)
            setJson(result.data);
        } catch (error) {
            console.log(error)
        } 
    }
    useEffect(() => {
fetchPost();
    }, [])
    // const dataFetch = async () => {
    //     const json = await (
    //         await fetch(

    //         )
    //     ).json();
    //     var meal; // 급식 이름
    //     var mealDayFrom; // 급식 시작일
    //     var mealDayTo; // 급식 종료일
    //     var mealDay; // 급식 당일
    //     var calInfo; // 칼로리
    //     return await menus.slice(0, 5)
    // }

    const getMenu = (result) => {
        var temp_menus = []
        result.mealServiceDietInfo[1].row.forEach((value) => {
            const DDISH_NM = value.DDISH_NM;
            const MLSV_YMD = value.MLSV_YMD;
            const CAL_INFO = value.CAL_INFO;

            var menu = {
                "food": DDISH_NM.split('<br/>'),
                "time": new Date(MLSV_YMD.slice(0, 4) + '-' + MLSV_YMD.slice(4, 6) + '-' + MLSV_YMD.slice(6, 8)),
                "kcal": CAL_INFO
            }

            temp_menus.push(menu);
        });
       return temp_menus
    }
    const loadMenu = (result) => {
        if (result != {}) {
            const menus =   getMenu(result)
            return (
                <>
                    <Container fluid>
                        <Row >
                            {menus.map(d => (<Col>
                                {d.time.getMonth()}월 {d.time.getDate()}일
                            </Col>))}
                        </Row>
                        <Row>
                            {menus.map(d => (
                                <Col>
                                    {foodToHTML(d.food)}
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            {menus.map(d => (<Col>
                                {d.kcal}</Col>))}
                        </Row>
                    </Container>
                </>
            )

        }
        else {
            return null
        }
    }
    return (
        <>
            <input type="week"></input>
            <Container>
                {loadMenu(json)}
            </Container>
        </>

    )
}


